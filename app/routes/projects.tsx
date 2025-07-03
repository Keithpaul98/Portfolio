export function meta() {
    return [
        { title: "Projects - Keith Paul Nkwanda" },
        { name: "description", content: "A showcase of projects by Keith Paul Nkwanda." },
    ];
}

export default function Projects() {
    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">Projects</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {/* Project cards will go here */}
                <div className="bg-gray-800 rounded-lg p-6 w-80 text-white text-center opacity-70">
                    <p>Project cards coming soon!</p>
                </div>
            </div>
        </main>
    );
} 