import SmartButton from '../ui/Button/SmartButton';
import HeaderNav from '../HeaderNav/HeaderNav';

type HeaderProps = {
  onShowHome: () => void;
  isPrivacy?: boolean;
};

const Header = ({ isPrivacy = false, onShowHome }: HeaderProps) => {
  return (
    <>
      <header className="bg-cod-gray/60 lg:bg-transparent relative z-100 w-full  lg:mt-10 3xl:mt-18 4xl:mt-17">
        <div className="section flex gap-4 py-3.5 1xl:py-0 max-h-17 1xl:h-14 4xl:h-16 h-full items-center justify-between">
          <a href="/" className="w-1/4">
            <span className="sr-only">На головну</span>
            <img
              src="/images/icons-png/logo.png"
              alt="Лого"
              className="w-9.5 h-12.5 1xl:h-13 4xl:w-12 4xl:h-16.5"
            />
          </a>

          {isPrivacy ? (
            // Якщо сторінка політики — лише кнопка "На головну"
            <SmartButton
              onClick={() => onShowHome?.()}
              className="flex"
              variant="primary"
              label="На головну"
              href="/"
            />
          ) : (
            <>
              <HeaderNav />
              <div className="flex items-center gap-5.5 lg:w-1/3 justify-between lg:justify-end-safe">
                <SmartButton
                  href="#more-info"
                  label="Отримати консультацію"
                  variant="primary"
                  className="flex text-star-dust border-star-dust text-base/[100%] 1xl:text-[18px]/[1] font-semibold px-3 py-[15px] 1xl:py-4.5 1xl:px-5 bg-woodsmoke-black/50 backdrop-blur-[5px]"
                />
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
