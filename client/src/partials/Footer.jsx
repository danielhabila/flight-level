export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex justify-between mx-auto max-w-6xl px-6 py-8  border-t border-white/10">
          <p className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            © {year} Flight Level. All rights reserved
          </p>
          {/* <a
            href="/about"
            className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0 flex hover:text-white"
          >
            About{" "}
            <span className="mt-[0.1rem] ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </span>
          </a> */}
        </div>
      </footer>
    </>
  );
}
