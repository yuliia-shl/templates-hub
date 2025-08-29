export default function HeaderNav() {
  return (
    <>
      <nav className="hidden lg:block lg:border-1 4xl:border-1.29 border-masala-light rounded-full bg-woodsmoke-black/50 backdrop-blur-[5px] max-h-full h-full items-stretch lg:px-15 4xl:px-19">
        <ul className="flex lg:gap-16 1xl:gap-x-31 1xl:text-xl/5 3xl:gap-38 4xl:gap-52 4xl:text-2xl/6 text-boulder-dust/77 font-bold items-center h-full tracking-[-0.02em]">
          <li className="hover:text-gallery-white transition-colors">
            <a
              href="#reasons"
              className="inline-block py-3 1xl:py-3.5 4xl:py-4.5"
            >
              Причини
            </a>
          </li>
          <li className="inline-block hover:text-gallery-white transition-colors">
            <a href="#information" className="py-3 1xl:py-3.5 4xl:py-4.5">
              Інформація
            </a>
          </li>
          <li className="inline-block hover:text-gallery-white transition-colors">
            <a href="#questions" className="py-3 1xl:py-3.5 4xl:py-4.5">
              Питання
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
