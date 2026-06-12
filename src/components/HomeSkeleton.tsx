"use client";

export default function HomeSkeleton() {
  return (
    <div className="min-h-screen text-white animate-pulse">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="flex items-center justify-end mb-6">
            <div className="h-10 w-24 bg-periwinkle-gray-800 rounded-lg" />
          </div>

          <div className="text-center mb-10 space-y-4">
            <div className="h-6 w-24 mx-auto bg-periwinkle-gray-800 rounded" />
            <div className="h-20 w-96 mx-auto bg-periwinkle-gray-800 rounded-xl" />
            <div className="h-20 w-96 mx-auto bg-periwinkle-gray-800 rounded-xl" />
            <div className="h-8 w-64 mx-auto bg-periwinkle-gray-800 rounded" />
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-10 w-36 bg-periwinkle-gray-800 rounded-xl" />
            <div className="h-10 w-28 bg-periwinkle-gray-800 rounded-xl" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6 space-y-3">
              <div className="h-3 w-20 bg-periwinkle-gray-800 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-periwinkle-gray-800 rounded" />
                <div className="h-3 w-full bg-periwinkle-gray-800 rounded" />
                <div className="h-3 w-3/4 bg-periwinkle-gray-800 rounded" />
              </div>
            </div>
            <div className="bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6 space-y-3">
              <div className="h-3 w-16 bg-periwinkle-gray-800 rounded" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-6 w-16 bg-periwinkle-gray-800 rounded" />
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-16 space-y-4">
          <div className="h-3 w-32 bg-periwinkle-gray-800 rounded" />
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-xl" />
            ))}
          </div>
        </section>

        <section className="mb-16 space-y-4">
          <div className="h-3 w-24 bg-periwinkle-gray-800 rounded" />
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6 space-y-4">
                <div className="h-40 w-full bg-periwinkle-gray-800 rounded-xl" />
                <div className="h-4 w-3/4 bg-periwinkle-gray-800 rounded" />
                <div className="h-3 w-full bg-periwinkle-gray-800 rounded" />
                <div className="h-3 w-2/3 bg-periwinkle-gray-800 rounded" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-periwinkle-gray-800 pt-12">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-3 w-16 bg-periwinkle-gray-800 rounded" />
              <div className="h-4 w-48 bg-periwinkle-gray-800 rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-4 w-16 bg-periwinkle-gray-800 rounded" />
              <div className="h-4 w-20 bg-periwinkle-gray-800 rounded" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
