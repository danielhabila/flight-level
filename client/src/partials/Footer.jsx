export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <>
      <footer className="relative border-t border-white/10">
        <div className="flex justify-between mx-auto max-w-6xl px-4 sm:px-6 py-8  ">
          <p className="text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            © {year} Flight Level. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
