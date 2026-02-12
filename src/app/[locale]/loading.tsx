export default function Loading() {
  return (
    <section className="w-full min-h-screen px-4 py-6 mx-auto max-w-screen-lg flex flex-col items-center justify-center">
      <div className="backdrop-blur-3xl rounded-xl bg-black/[.1] p-12 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-haze-500 mx-auto mb-4"></div>
        <p className="text-lg font-mono text-purple-haze-200">Loading...</p>
      </div>
    </section>
  );
}
