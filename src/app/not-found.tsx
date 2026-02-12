import Link from "next/link";
import "../app/[locale]/globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-periwinkle-gray-950">
        <main className="w-full min-h-screen overflow-x-hidden relative">
          <section className="w-full min-h-screen px-4 py-6 mx-auto max-w-screen-lg flex flex-col items-center justify-center">
            <div className="backdrop-blur-3xl rounded-xl bg-black/[.1] p-12 text-center max-w-2xl">
              <h1 className="text-9xl font-bold text-purple-haze-300 mb-4">
                404
              </h1>
              <h2 className="text-3xl text-purple-haze-100 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-purple-haze-200 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-purple-haze-600 hover:bg-purple-haze-700 text-white rounded-lg transition-colors duration-200"
              >
                Go back home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
