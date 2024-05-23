import { check } from "../assets"
import { digitalSkill, collabApps, } from "../constants"

const Skill = () => {
  return (
    <section className=" container mr-auto p-5 flex flex-col md:flex-row gap-1" id="skills">
        <div className=" md:w-1/2  p-10">

        <div className=" flex items-center justify-center flex-col md:block">
          <h2 className="h1 mb-4 md:mb-8 text-black text-center">
            Digital Skills
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {digitalSkill.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center flex-col md:flex-row">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 md:ml-5  text-center">{item.title}</h6>
                </div>
                <h6 className=" md:text-left text-center tex md:mt-1">{item.skills}</h6>
              </li>
            ))}
          </ul>

        </div>
        </div>




        <div className=" md:w-1/2  p-10 flex justify-center items-center">
        

        <div className=" -mt-15 md:mt-0">

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-green-300 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-green-300 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] border-2 border-green-300  rounded-full">
                <div className=" h5 flex items-center justify-center w-full h-full rounded-full uppercase">
                    skills 
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={` shadow-lg shadow-black relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem]  bg-slate-600 border-2 border-green-300 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>


        </div>
        </div>
        </div>

    </section>
  )
}

export default Skill