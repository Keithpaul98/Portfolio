# Security Audit Report

**Application:** Keith Paul Nkwanda - Portfolio Website  
**Auditor Role:** Senior Security Analyst  
**Date:** March 5, 2026  
**Severity Scale:** CRITICAL | HIGH | MEDIUM | LOW | INFO  
**Overall Security Rating: 4/10 — Significant issues requiring immediate attention**

---

## Executive Summary

This portfolio is a client-side SPA with a contact form powered by EmailJS. While the attack surface is relatively small for a static portfolio, there are several serious security lapses that would be unacceptable in any production environment and reflect poorly on the developer's security awareness — especially for someone claiming full-stack expertise.

---

## CRITICAL Findings

### 1. Hardcoded API Credentials in Source Code (CRITICAL)

**File:** `app/routes/contact.tsx` — Lines 39-44  
**File:** `.env.example` — Lines 5-11

```typescript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xzRTkUBEGo3die3NY");
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "kpnportfolio98";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_78h4yu7";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xzRTkUBEGo3die3NY";
```

**Issue:** All three EmailJS credentials are hardcoded as fallback values directly in the source code. Even if environment variables are set, these credentials are committed to the Git repository in plain text. Anyone with access to the repo (which is public on GitHub) can:
- Send emails impersonating the portfolio owner
- Exhaust the EmailJS free-tier quota (denial of service)
- Use the service for spam or phishing

**Additionally:** The `.env.example` file contains the **actual production credentials**, not placeholder values. An `.env.example` should contain dummy values like `your_service_id_here`.

**Remediation:**
1. Remove all hardcoded credential fallbacks from `contact.tsx`
2. Replace `.env.example` values with placeholders
3. Rotate all EmailJS credentials immediately (they are already compromised in Git history)
4. Fail gracefully when env vars are missing instead of falling back to hardcoded values

---

### 2. Personal Phone Number Exposed in Public Source Code (CRITICAL — Privacy)

**File:** `app/routes/contact.tsx` — Line 341  
**File:** `app/data/projects.ts` — Line 29

```typescript
<p className="text-gray-400 text-sm">+265 99 333 1804</p>
```
```typescript
"WhatsApp integration for international clients (+265 99 333 1804)",
```

**Issue:** A personal phone number is hardcoded in the source code committed to a public GitHub repository. This is a severe privacy risk:
- Exposed to web scrapers and bots
- Can be harvested for spam, social engineering, or SIM-swapping attacks
- Cannot be "unring" once in Git history

**Remediation:** If you want a WhatsApp link, keep the number only in the rendered HTML (which is less scrapable than source code), or better, use a business WhatsApp number with proper spam protections.

---

## HIGH Findings

### 3. No Input Sanitization on Contact Form (HIGH)

**File:** `app/routes/contact.tsx` — Lines 24-30, 46-51

```typescript
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};
```

**Issue:** User input is passed directly to EmailJS without any sanitization, validation beyond HTML `required`, or length limits:
- **No maximum length** on any field — an attacker can submit megabytes of data
- **No email format validation** beyond the browser's basic `type="email"` check
- **No XSS sanitization** — while React escapes JSX output by default, the data is sent to an email template where it may be rendered as HTML
- **No profanity/spam filtering**

**Remediation:**
1. Add `maxLength` attributes to all inputs (e.g., 100 for name, 200 for subject, 5000 for message)
2. Implement proper email regex validation in JavaScript
3. Add client-side input sanitization (strip HTML tags at minimum)
4. Add honeypot field for basic bot protection

---

### 4. No Rate Limiting on Contact Form (HIGH)

**File:** `app/routes/contact.tsx`

**Issue:** There is zero rate limiting. A malicious actor can:
- Script hundreds of form submissions per second
- Exhaust your EmailJS monthly quota within minutes
- Spam your inbox with garbage
- The `isSubmitting` flag only prevents double-clicks, not automated attacks

**Remediation:**
1. Implement client-side rate limiting (e.g., max 3 submissions per 5 minutes)
2. Add CAPTCHA (reCAPTCHA or hCaptcha) — this is the industry standard
3. Add a honeypot field (hidden input that bots fill but humans don't)

---

### 5. No Content Security Policy (CSP) Headers (HIGH)

**Issue:** No CSP headers are configured in `vercel.json` or anywhere else. This leaves the site vulnerable to:
- Cross-site scripting (XSS) injection if any dynamic content is introduced
- Clickjacking attacks (no `X-Frame-Options` either)
- MIME-type sniffing attacks

**Remediation:** Add security headers to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://api.emailjs.com" }
      ]
    }
  ]
}
```

---

## MEDIUM Findings

### 6. Debug Logging Left in Production Code (MEDIUM)

**File:** `app/routes/contact.tsx` — Lines 53-83

```typescript
console.log("📧 Sending email with params:", templateParams);
console.log("🔧 Using service:", serviceId, "template:", templateId);
console.log("✅ EmailJS Response:", response);
console.error("💥 Email sending failed:", error);
```

**Issue:** Extensive debug logging is left in production code. This:
- Leaks service IDs, template IDs, and email parameters to anyone opening DevTools
- Exposes error details that could help attackers
- Looks unprofessional

**Remediation:** Remove all `console.log`/`console.error` statements or wrap them behind a `NODE_ENV === 'development'` check.

---

### 7. No Subresource Integrity (SRI) for External Resources (MEDIUM)

**File:** `app/root.tsx` — Lines 276-284

```typescript
{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:..." }
```

**Issue:** External stylesheets from Google Fonts are loaded without SRI hashes. If Google's CDN is compromised, malicious CSS could be injected.

**Remediation:** Use `integrity` and `crossorigin` attributes, or self-host the Inter font.

---

### 8. Favicon Cache-Busting Leaks Build Time (LOW)

**File:** `app/root.tsx` — Lines 287-292

```typescript
{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg?t=" + new Date().getTime() },
```

**Issue:** Using `new Date().getTime()` for cache-busting means:
- A new unique URL is generated on every page load, defeating browser caching entirely
- The timestamp leaks the exact time the page was rendered (information disclosure)
- This is an anti-pattern — use content hashing via build tools instead

---

### 9. Dockerfile Copies `.env` into Docker Image (MEDIUM)

**File:** `Dockerfile` — Line 2

```dockerfile
COPY . /app
```

**Issue:** `COPY . /app` copies everything including `.env` into the Docker image. While `.dockerignore` exists, it should be verified that `.env` is explicitly excluded.

---

## LOW / INFO Findings

### 10. Missing `rel="noopener"` is Properly Handled (INFO — Positive)

All external links correctly use `rel="noopener noreferrer"`. Good.

### 11. No HTTPS Enforcement Configuration (LOW)

No explicit HTTPS redirect configuration. Vercel handles this by default, but it should be documented.

### 12. `error: any` Type Assertion (LOW)

**File:** `app/routes/contact.tsx` — Line 76

```typescript
} catch (error: any) {
```

Using `any` bypasses TypeScript's safety. Use `unknown` and narrow the type properly.

---

## Summary of Required Actions (Priority Order)

| # | Severity | Issue | Effort |
|---|----------|-------|--------|
| 1 | CRITICAL | Remove hardcoded API credentials | 30 min |
| 2 | CRITICAL | Rotate compromised EmailJS credentials | 15 min |
| 3 | CRITICAL | Fix `.env.example` to use placeholders | 5 min |
| 4 | HIGH | Add input validation and length limits | 1 hr |
| 5 | HIGH | Add CAPTCHA or rate limiting | 2 hrs |
| 6 | HIGH | Add security headers (CSP, X-Frame, etc.) | 30 min |
| 7 | MEDIUM | Remove production debug logging | 15 min |
| 8 | MEDIUM | Verify `.dockerignore` excludes `.env` | 5 min |
| 9 | LOW | Fix cache-busting approach for favicons | 15 min |

---

*This report was generated as an honest assessment. The critical credential exposure alone would be a disqualifying concern in a professional context.*
