export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-6xl px-6 py-8  border-t border-white/10">
          <p className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            © {year} Flight Level. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
