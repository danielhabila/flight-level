export default function ErrorPage() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <img
          src="https://images.unsplash.com/photo-1638555063519-d009e6f3b28b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-screen w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl md:px-6 py-32 text-center sm:py-40 lg:px-8 ">
          <div className="bg-black/50 py-8 shadow-xl md:rounded-xl">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/"
              className="text-sm mt-16 uppercase font-semibold leading-7 text-white ring-1 rounded-lg px-2 py-1 ring-slate-500"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
