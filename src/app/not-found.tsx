export default function NotFound() {
  return (
    <section className="w-full min-h-screen px-4 py-6 mx-auto max-w-screen-lg flex flex-col items-center justify-center">
      <div className="backdrop-blur-3xl rounded-xl bg-black/[.1] p-12 text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-purple-haze-300 mb-4">404</h1>
        <h2 className="text-3xl text-purple-haze-100 mb-4">Page Not Found</h2>
        <p className="text-lg text-purple-haze-200 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-purple-haze-600 hover:bg-purple-haze-700 text-white rounded-lg transition-colors duration-200"
        >
          Go back home
        </a>
      </div>
    </section>
  );
}
