const Reasons = () => {
  return (
    <section id="reasons" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col 1xl:flex-row-reverse gap-[108px] 1xl:gap-4 3xl:gap-[122px] 4xl:gap-[108px] 4xl:justify-end">
        <div className="w-full shrink-1 4xl:pt-13 4xl:max-w-[1370px]">
          <h2 className="mb-14.5 1xl:mb-20 3xl:mb-17 4xl:mb-15 font-second font-medium text-center leading-[110%]">
            Заголовок
          </h2>
          <ul className="grid grid-cols-1 lg:flex flex-wrap 1xl:grid-cols-2 gap-21.5 1xl:gap-x-6.5 4xl:gap-x-32.5 1xl:gap-y-23.5 3xl:gap-y-21.5">
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10 lg:max-w-[420px] 3xl:max-w-[558px] 4xl:max-w-[620px]">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(01)</p>
              </div>
              <p className="text-[22px]/[114%] xs:text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                <span className="text-tangerine capitalize">ПІДЗАГОЛОВОК </span>
                ВАЖЛИВЕ ПОМАРАНЧЕВИМ
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
              </p>
            </li>
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10 lg:max-w-[420px] 3xl:max-w-[558px] 4xl:max-w-[620px]">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(02)</p>
              </div>
              <p className="text-[22px]/[114%] xs:text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                <span className="text-tangerine capitalize">ПІДЗАГОЛОВОК </span>
                ВАЖЛИВЕ ПОМАРАНЧЕВИМ
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
              </p>
            </li>
            <li className="border-t border-t-tuatara/75 pt-4.5 1xl:pt-10 lg:max-w-[420px] 3xl:max-w-[558px] 4xl:max-w-[620px]">
              <div className="text-white/40 text-sm/2.5 flex gap-1 mb-4.5 1xl:mb-8.5">
                <p>Причина </p>
                <p>(03)</p>
              </div>
              <p className="text-[22px]/[114%] xs:text-[28px]/[114%] font-bold text-mercury-white mb-6.5">
                <span className="text-tangerine capitalize">ПІДЗАГОЛОВОК </span>
                ВАЖЛИВЕ ПОМАРАНЧЕВИМ
              </p>
              <p className="text-xl/[110%] text-boulder-dust 3xl:max-w-[520px]">
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
                текст текст текст текст текст текст текст текст текст текст
              </p>
            </li>
          </ul>
        </div>

        <div className="1xl:flex 1xl:items-center lg:ml-auto 4xl:ml-0 lg:-mt-100 1xl:mt-0 lg:w-[430px] 3xl:w-[460px] 4xl:pl-[94px] 4xl:w-[648px] shrink-0">
          <img
            alt="Smart Locker HUB"
            src="/images/smart-locker.webp"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
