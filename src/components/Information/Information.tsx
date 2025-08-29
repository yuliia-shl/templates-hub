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

        <ul className="flex flex-col gap-20">
          {information.map((info, index) => {
            return (
              <li
                key={index}
                className="border-t border-tuatara/75 pt-8 flex flex-col gap-10 1xl:flex-row 1xl:justify-between"
              >
                <p className="text-3xl/[87%] xs:text-4xl/[87%] text-boulder-dust font-medium">
                  {info.number}
                </p>
                <div className="flex flex-col gap-4 1xl:max-w-[730px]">
                  <h3 className="text-2xl/[100%] xs:text-3xl/[87%] text-mercury-white font-semibold">
                    {info.title}
                  </h3>
                  <p className="text-lg/[122%] text-boulder-dust">
                    {info.description}
                  </p>
                </div>
                <div className="flex justify-between text-2xl/[87%] text-boulder-dust font-medium 1xl:w-105">
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
