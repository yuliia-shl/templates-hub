import { lockers } from '../../data/lockers';

const LockerType = () => {
  return (
    <section id="locker" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row 1xl:flex-wrap gap-18 1xl:gap-35">
        <div className="3xl:pl-69 4xl:pl-94 flex flex-col gap-18 3xl:gap-25">
          <div className="lg:grid lg:grid-cols-[1fr_460px] 1xl:grid-cols-[1fr_676px] 3xl:grid-cols-[1fr_760px] 4xl:grid-cols-[864px_844px] lg:gap-x-5 1xl:gap-x-10 lg:items-start 3xl:gap-x-25 4xl:justify-between">
            <div className="mb-18 1xl:mb-35 1xl:col-start-1 1xl:row-start-1">
              <h2 className="mb-6 3xl:mb-17 4xl:mb-15 font-second font-medium leading-[110%]">
                Заголовок блоку
              </h2>
              <p className="text-[20px]/[110%] text-boulder-dust 4xl:max-w-110">
                ХАБ — це багатофункціональна платформа, яка охоплює щоденні
                потреби клієнтів в одному місці
              </p>
            </div>

            <div className="xs:max-w-[520px] xs:aspect-[520/352] mb-18 lg:max-w-[460px] lg:col-start-2 lg:row-span-2 1xl:mb-0 1xl:max-w-[674px] 3xl:max-w-[760px] 3xl:aspect-[760/552] 4xl:max-w-[844px]">
              <img
                alt="picture"
                src="/images/modules-desktop/teplo-1x.webp"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <ul className="flex flex-col gap-18 lg:gap-10 1xl:gap-15 lg:col-start-1 lg:row-start-2">
              {lockers.map((locker, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="p-4 bg-woodsmoke-dark rounded-full flex items-center justify-center max-w-16 max-h-16">
                      <img
                        src={locker.imgPath}
                        alt={`Фото ${locker.title}`}
                        className="max-w-8.5"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl/[117%] text-mercury-white font-bold mb-4">
                        {locker.title}
                      </h3>
                      <p className="text-lg/[122%] text-mountain-mist">
                        {locker.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="xs:max-w-[520px] xs:aspect-[520/352] lg:max-w-[860px] 3xl:max-w-[1160px] 4xl:max-w-[1488px] ">
            <img
              alt="picture"
              src="/images/modules-mobile/avtomat-1x.webp"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LockerType;
