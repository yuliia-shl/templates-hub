import SmartButton from '../ui/Button/SmartButton';

const Hero = () => {
  return (
    <section className="w-full relative lg:-mt-23 pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="flex justify-between gap-5.5 flex-col items-start 1xl:items-center 1xl:justify-center-safe max-h-full h-full">
        <div className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-[linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]">
          <video
            className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ pointerEvents: 'none' }}
            poster="/images/poster.webp"
          >
            <source src="/video/video.webm" type="video/webm" />
            <source src="/video/video.mp4" type="video/mp4" />
            Ваш браузер не підтримує тег video.
          </video>

          {/* Контент поверх відео */}

          <div className="section flex flex-col justify-around lg:justify-center lg:items-center h-full">
            <div className="lg:flex flex-col items-center lg:mb-12 4xl:mb-8.5">
              <h1 className="mt-25 1xl:mt-0 font-second text-[34px]/[1] mb-5.5 1xl:mb-3.5  1xl:text-[64px]/[1] 3xl:text-[82px]/[1] 4xl:text-[94px]/[1] font-medium text-gallery-white">
                <span className="text-tangerine">Smart</span> Locker HUB
              </h1>
              <p className="text-base/[137%] xs:text-[18px]/[122%] 4xl:text-[22px] font-normal text-alto-white max-w-69 lg:max-w-125 text-left lg:text-center">
                Реалізація комплекса послуг та задоволення потреб населення в
                одному рішенні
              </p>
            </div>

            <SmartButton
              label="Рішення для бізнесу"
              icon="/images/svg/icons.svg#icon-arrow-up-right"
              iconClassName="w-4.5 h-4.5 ml-16"
              iconStroke="currentColor"
              iconPosition="right"
              href="#provides"
              className="lg:inline-flex ml-auto lg:ml-0 4xl:text-[20px]/[1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
