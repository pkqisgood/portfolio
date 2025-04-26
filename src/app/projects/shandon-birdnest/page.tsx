import Image from "next/image";
import Link from "next/link";

export default function ShandonBirdnestPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4">
            <Link href="/projects" className="text-blue-500 hover:underline mb-8 inline-block">
                ← Back to Projects
            </Link>

            <h1 className="text-5xl font-bold mb-6 start-nav">Shandon Birdnest</h1>

            <Image
                src="/images/projects/shandon/summary.png"
                alt="Shandon Birdnest"
                width={1000}
                height={600}
                className="rounded-xl mb-8"
            />

            <p className="text-lg text-gray-600 mb-8">
                Shandon Birdnest is a fully customized ecommerce platform designed to streamline birdnest trading.
                Features include real-time inventory, custom order processing, and multi-currency payment gateways.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Laravel (Backend Framework)</li>
                    <li>Vue.js (Frontend Framework)</li>
                    <li>TailwindCSS (Styling)</li>
                    <li>MySQL (Database)</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <Image
                        src="/images/projects/shandon/page1.png"
                        alt="Page 1"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                    <Image
                        src="/images/projects/shandon/page2.png"
                        alt="Page 2"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}