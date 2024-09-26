import { useMemo, useState } from "react";

import { data } from "./data/data";

const App = () => {
  const titles = data.map(({ title }) => title);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = useMemo(() => data[activeIndex], [activeIndex]);
  const onClick = (index: number) => setActiveIndex(index);
  // console.log(activeProject);
  return (
    <>
      {/* <Background /> */}
      <main className="work-sans-400">
        <section className="col-start-1 col-span-4 row-start-2 row-span-5 text-4xl w-full leading-relaxed">
          <div className="w-4/5 leading-relaxed">
            <h1 className="text-neutral-500">
              Hi, <br />
              this page regroup my solution to frontend mentor challenges :
            </h1>
          </div>
          <ul className="pt-10 ">
            {titles.map((title, i) => (
              <li
                key={`${title}---${i}---`}
                className="flex gap-5 items-center border-b border-neutral-800 py-2 w-1/2 cursor-pointer"
                onClick={() => onClick(i)}
              >
                <div
                  className={`${
                    activeIndex === i
                      ? "w-5 h-5 rounded-full bg-amber-500"
                      : "w-5 h-5 rounded-full bg-neutral-800"
                  }`}
                ></div>
                <p
                  className={`${
                    activeIndex === i ? "text-amber-500" : "text-neutral-500"
                  }`}
                >
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <div className="col-start-5 col-span-4 row-start-1 row-span-1 flex items-end">
          <h3 className="text-xl text-neutral-500 work-sans-600">
            REST Countries API with color theme switcher
          </h3>
        </div>
        <div className="w-full h-full col-start-8 col-span-2 row-start-5 row-span-1 self-end">
          <h3 className="self-end">#Next #Shadcn #Tailwind</h3>
        </div>
        <div className="w-full h-full col-start-5 col-span-7 row-start-2 row-span-4 border border-neutral-800 rounded-lg flex items-center justify-center px-5">
          <img
            src="/countryAPP/landing.png"
            className="w-full max-h-full  rounded-lg"
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="col-start-5 row-start-6 text-xl work-sans-600 flex gap-4">
          {" "}
          <a href="" className="external-link">
            Demo
          </a>
          <a href="" className="external-link ">
            Code
          </a>
        </div>
        <div className=" col-start-10 col-span-2 row-start-6 row-span-1 text-lg flex  justify-end text-neutral-500">
          <div>#Next #Tailwind #Shadcn</div>
        </div>
      </main>
    </>
  );
};

export default App;
// <div className="flex gap-5"> absolute top-20 right-5 w-4/5
//   <button className="border p-2 h-20 w-20">Demo</button>
//   <button className="border p-2 h-20 w-20">Source</button>
// </div>;
//  <li className="flex gap-2 items-center 	">
//     <div className="w-8 h-8 rounded-full bg-neutral-200"></div>
//     <p className="underline underline-offset-8">Country App</p>
//   </li>
//   <li className="flex gap-5 items-center">
//     {" "}
//     <div className="w-5 h-5 rounded-full border border-neutral-200"></div>
//     Shortly{" "}
//   </li>
