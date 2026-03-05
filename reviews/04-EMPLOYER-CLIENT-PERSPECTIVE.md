# Employer & Client Perspective Review

**Application:** Keith Paul Nkwanda - Portfolio Website  
**Reviewer Roles:** Hiring Manager (Tech Company) & Prospective Client (Business Owner)  
**Date:** March 5, 2026  
**Overall Impression Rating: 5/10 — Shows potential but doesn't close the deal**

---

# PART A: Hiring Manager Perspective

## The 30-Second Test

When I review a developer's portfolio, I spend 30 seconds on the first page before deciding whether to dig deeper. Here's what those 30 seconds tell me:

**Positives (First Impressions):**
- Professional headshot — immediately more trustworthy than 90% of developer portfolios
- Clean, modern dark theme — shows awareness of current design trends
- Clear name, title, and CTA buttons — I know who this is and what they do
- The gradient aesthetic, while overused, looks polished at first glance

**Red Flags (First Impressions):**
- "3+ Major Projects" — the "+" on exactly 3 projects is transparent padding. Just say "3 Projects" or better yet, don't draw attention to a small number
- "6+ Technologies" — again, inflated language for a modest count
- "AI Integration" as a headline stat — this oversells what appears to be one university project with PyTorch
- Age mention ("I'm a 27-year-old") — unnecessary and unprofessional in a portfolio. Let the work speak for itself. In some jurisdictions, this could actually create hiring bias concerns
- "Honours graduate from Greenwich University" — this is the only credential mentioned, and it's buried in paragraph text. If your degree is your strongest credential, it should be more prominent. If you have work experience, lead with that instead

---

## Deep Dive Assessment

### Projects Analysis

#### Project 1: Personal Portfolio Website
**My reaction:** You listed the website I'm currently looking at as your #1 project. This is circular and suggests a lack of other work to show. Every developer has a portfolio — it's the baseline, not a showcase piece. Listing it as "Featured" with a star badge makes this worse.

The features list includes items like "Environment variable security configuration" and "Comprehensive documentation and deployment guide" — these are basic development practices, not features. It reads like padding a resume with obvious responsibilities.

#### Project 2: Habit Tracker (Flutter)
**My reaction:** A habit tracker is a common tutorial project. The description contradicts itself — the `longDescription` says "Built with React" while the tech stack says "Flutter/Dart." This copy-paste error is a serious red flag for attention to detail.

Status: "June 2025 - Present" — it's been 9 months. For what appears to be a basic CRUD app, "Present" implies either ongoing complexity (unlikely) or abandonment rebranded as "in progress."

No live demo, no screenshots beyond one image. I can't assess the quality without cloning and building.

#### Project 3: Personalized Hairstyling System (Django)
**My reaction:** This is actually the most impressive project — a full business management platform with AI integration, Stripe payments, role-based auth, and reporting. **This should be project #1, not #3.** But I have no way to verify its quality:
- No live demo
- No video walkthrough
- The gallery images are low-resolution screenshots
- I'd have to clone, install PostgreSQL, set up PyTorch, and configure Stripe to see it work

### The Fundamental Problem: Zero Live Demos

The stats section proudly displays "0 Live Projects." This is devastating. In 2026, deploying a simple web app takes 5 minutes on Vercel, Netlify, or Railway. Having zero live projects tells me:
1. You either can't deploy, or
2. You don't think it's important enough to bother

Neither interpretation is good. The Habit Tracker is a Flutter app (understandably not web-deployed), but the Hairstyling System should at minimum have a demo environment, even with dummy data.

### Missing Portfolio Elements

| Expected Element | Present? | Notes |
|-----------------|----------|-------|
| Professional headshot | Yes | Well done |
| Clear role/title | Yes | "Full-Stack Developer & Software Engineer" |
| About/Bio section | Partial | One paragraph on home page, no dedicated page |
| Work experience | No | Zero mention of any professional experience |
| Education details | Minimal | One-liner about Greenwich University |
| Downloadable resume/CV | No | Critical omission — I need a PDF to forward to my team |
| Skills with proficiency | No | Just badges listing technology names |
| Testimonials/References | No | Expected at mid-level, nice-to-have at junior |
| Blog/Writing | No | Would demonstrate communication skills |
| Open source contributions | No | Would demonstrate collaboration ability |
| Live project demos | No | The single most important missing element |
| Contact form that works | Yes | Good — tested and functional |
| Social links | Yes | GitHub, LinkedIn, X, WhatsApp |
| Response time commitment | Yes | "Usually within 24 hours" — professional touch |

### GitHub Profile Assessment

The GitHub link goes to `github.com/keithpaul98` (note: lowercase) while the actual repos are under `Keithpaul98` (mixed case). I'd want to check:
- Contribution graph activity
- README quality on repos
- Commit message quality
- Whether repos have issues/PRs showing collaboration
- Code review participation

### What Would Make Me Interview This Candidate

1. **At least one live, deployed project** I can click and use
2. **A downloadable resume** with education, experience, and skills
3. **Remove the portfolio as a "Featured Project"** — it's meta and self-referential
4. **Fix the Habit Tracker contradiction** — attention to detail matters enormously
5. **Add a video walkthrough** of the Hairstyling System since it can't be easily deployed
6. **Remove age from the bio** — unprofessional
7. **Add at least 3-4 more projects** — even smaller ones like a REST API, a CLI tool, or an open-source contribution

### Hire/No-Hire Decision

**Current state: No hire for mid-level. Possible junior hire with reservations.**

The portfolio shows someone who can learn tools and make things work, but doesn't demonstrate:
- Professional experience or internships
- Ability to work in a team (no PRs, code reviews, or collaboration evidence)
- Depth of understanding (over-engineered search for 3 projects, artificial loading states)
- Attention to detail (copy-paste errors, dead code committed)
- Security awareness (hardcoded credentials in a public repo)

---

# PART B: Prospective Client Perspective

## Scenario: I'm a Small Business Owner Looking for a Developer

I found this portfolio through a referral or LinkedIn search. I need someone to build a web application for my business.

### First Visit Experience

**Trust signals I'm looking for:**
- Professional appearance: **Yes** — the site looks modern and polished
- Real person with real photo: **Yes** — the headshot helps
- Portfolio of relevant work: **Partially** — I can see project descriptions but can't try anything
- Contact information: **Yes** — email, WhatsApp, and a contact form
- Location and availability: **Yes** — Blantyre, Malawi, remote worldwide
- Pricing/rates: **No** — I have no idea what this will cost me
- Process/methodology: **No** — I don't know how this person works
- Timeline expectations: **No** — I can't gauge how fast they deliver
- Client testimonials: **No** — no one vouches for this person's work

### Project Assessment from a Client's Eyes

**The Hairstyling System** is the most relevant to me as a business client — it shows business logic, payment processing, user management, and reporting. But:
- I can't see it running
- I can't assess the UI quality from tiny screenshots
- The description mentions AI features that sound impressive but I can't verify
- "2024 - Present" with no live demo makes me wonder if it's actually finished

**The Habit Tracker** tells me the developer knows mobile (Flutter), but it's a personal project, not a client deliverable.

**The Portfolio itself** being listed as a project makes me slightly uncomfortable — it's like a painter listing "made my business card" as a commissioned work.

### What Would Make Me Reach Out

1. **A case study format** — not just "here's what I built" but "here's the problem, my approach, the outcome, and what the client thought"
2. **Pricing transparency** — even a range like "Projects typically start at $X" or "Hourly rate: $X-Y"
3. **A clear process page** — "Here's how I work: Discovery → Design → Development → Testing → Launch"
4. **At least one testimonial** — even from a university professor or a friend whose project you helped with
5. **A live demo of the Hairstyling System** — this is the portfolio piece that could actually win business clients

### Client Decision

**Current state: I would probably not reach out.** The portfolio looks like a student's showcase, not a professional freelancer's business site. I'd need more evidence of delivered, working software before committing budget.

If I did reach out, my first question would be: "Can you show me something that's actually live and working?" If the answer is no, the conversation would likely end there.

---

# PART C: Combined Recommendations

## Quick Wins (This Week)

1. **Remove your age from the bio** — it adds nothing and can create bias
2. **Fix the Habit Tracker description contradiction** — immediate credibility damage
3. **Remove the portfolio as a "Featured" project** — move it to last or remove it entirely
4. **Add a "Download Resume" button** — PDF, linked prominently on the home page
5. **Remove "0 Live Projects" stat** — it's actively harmful to display this
6. **Deploy the Hairstyling System** somewhere (Railway with free tier, or a demo video)

## Medium-Term (This Month)

7. **Create an About page** with education, experience timeline, skills breakdown
8. **Add 3-5 more projects** — they don't all need to be massive. A REST API, a CLI tool, a Chrome extension, a contribution to an open-source project
9. **Write case studies** for the Hairstyling System — problem/approach/outcome format
10. **Add a process/methodology section** for client visitors
11. **Record a 2-minute video walkthrough** of the Hairstyling System
12. **Get 2-3 testimonials** — professors, classmates, anyone you've helped

## Long-Term (This Quarter)

13. **Start a technical blog** — even 1 post/month shows communication skills and thought leadership
14. **Contribute to open source** and link the contributions
15. **Build and deploy a live SaaS or tool** — something visitors can actually use
16. **Gather real client testimonials** from freelance or volunteer work
17. **Add analytics** (Plausible or similar privacy-respecting tool) to understand visitor behavior

---

## The Bottom Line

This portfolio communicates: *"I am a recent graduate who has learned some tools and built some projects."*

What it should communicate: *"I am a capable developer who solves real problems, delivers working software, and can be trusted with your project."*

The gap between these two messages is not primarily technical — it's about **content, credibility, and proof of delivery**. The code can be polished, the design can be refined, but the portfolio fundamentally needs more substance: more projects, live demos, client work, and evidence of professional capability.

The good news: the foundation is here. The developer clearly has the technical ability. What's needed is a shift from "look what I can build" to "look what I've delivered."

---

*This review is written as constructive criticism from professionals who evaluate developers and development services regularly. The intent is to help bridge the gap between current state and professional readiness.*
