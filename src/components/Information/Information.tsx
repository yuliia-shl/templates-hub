import { information } from '../../data/information';

const Information = () => {
  return (
    <section id="information" className="pb-40 1xl:pb-55 3xl:pb-60 4xl:pb-70">
      <div className="section flex flex-col">
        <div className="mb-9 1xl:mb-20 3xl:mb-17 4xl:mb-15 flex items-center justify-between">
          <h2 className="leading-[110%] font-second font-medium">
            Інформація для клієнта
          </h2>
          <img
            src="/images/info.png"
            alt="Стрілка"
            className="hidden xs:block w-5 h-5 1xl:w-10 1xl:h-10"
          />
        </div>

        <ul className="flex flex-col gap-20 lg:gap-18">
          {information.map((info, index) => {
            return (
              <li
                key={index}
                className="border-t border-tuatara/75 pt-8 flex flex-col gap-10 lg:flex-row 3xl:gap-63 4xl:gap-90"
              >
                <p className="text-3xl/[87%] xs:text-4xl/[87%] text-boulder-dust font-medium">
                  {info.number}
                </p>
                <div className="flex flex-col gap-4 1xl:max-w-[730px] 4xl:max-w-[770px]">
                  <h3 className="text-2xl/[100%] xs:text-[32px]/[87%] text-mercury-white font-semibold">
                    {info.title}
                  </h3>
                  <p className="text-lg/[122%] text-boulder-dust">
                    {info.description}
                  </p>
                </div>
                <div className="flex justify-between text-2xl/[87%] 1xl:text-[32px]/[87%] text-boulder-dust font-medium lg:min-w-60 1xl:min-w-100 3xl:min-w-126 4xl:min-w-183 shrink-0">
                  <p>{info.price}</p>
                  <p>{info.duration}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Information;
