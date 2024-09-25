// import { useMemo, useState } from "react";


import { data } from "./data/data";

const App = () => {
  const titles = data.map(({ title }) => title);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [current, setCurrent] = useState("");
  // const activeProject = useMemo(() => data[activeIndex], [activeIndex]);
  // const onClick = (index: number) => setActiveIndex(index);
  // console.log(activeProject);
  return (
    <>
      {/* <Background /> */}
      <main className="work-sans-400">
        <section className="col-start-1 col-span-4 row-start-1 row-span-6 text-4xl w-full leading-relaxed">
          <div className="w-4/5 leading-relaxed">
            <h1>
              Hi, <br />
              this page regroup my solution to frontend mentor challenges :
            </h1>
          </div>
          <ul className="pt-10 ">
            {titles.map((title, i) => (
              <li
                key={`${title}---${i}---`}
                className="flex gap-5 items-center 	"
              >
                <div className="w-5 h-5 rounded-full bg-neutral-200"></div>
                <p className="underline underline-offset-6">{title}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="col-start-5 col-span-1 row-start-1 self-end row-span-1">
          <div>Country API</div>
        </section>
        <section className="col-start-7 col-span-2 row-start-1 self-end row-span-1">
          <div>Landing page</div>
        </section>

        <section className="col-start-5 col-span-7 row-start-2 row-span-3 w-full h-full overflow-hidden	">
          <div className="w-full  aspect-video  flex justify-end">
            <img src="/countryAPP/image.png" className="w-full " />
          </div>
        </section>
        <div className=" col-start-5 col-span-1 row-start-5  row-span-1 ">
          <div>Demo</div>
        </div>
        <div className=" col-start-7 col-span-3 row-start-5  row-span-1 flex justify-center gap-5 ">
          <div className="w-5 h-5 rounded-full bg-neutral-200"></div>
          <div className="w-5 h-5 rounded-full bg-neutral-200"></div>{" "}
          <div className="w-5 h-5 rounded-full bg-neutral-200"></div>{" "}
          <div className="w-5 h-5 rounded-full bg-neutral-200"></div>
        </div>
        <div className=" col-start-11 col-span-2 row-start-5  row-span-1 ">
          <div>Made with next 14</div>
        </div>
        {/* <Details /> */}
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
