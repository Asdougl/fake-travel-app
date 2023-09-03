"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faSearch,
  faShare,
} from "@fortawesome/sharp-regular-svg-icons";
import { useEffect, useState } from "react";
import { randomIntFromInterval } from "~/util/utils";
import Research from "./Research";
import Plan from "./Plan";
import { AnimatePresence } from "framer-motion";
import Explore from "./Explore";

type HeroFocus = "research" | "plan" | "explore";

export default function Hero() {
  const [currFocus, setCurrFocus] = useState<HeroFocus>("explore");

  // useEffect(() => {
  //   const intervalTime = currFocus === "plan" ? 6000 : 4000;

  //   const interval = setInterval(() => {
  //     setCurrFocus((curr) => {
  //       if (curr === "research") return "plan";
  //       if (curr === "plan") return "explore";
  //       return "research";
  //     });
  //   }, intervalTime);

  //   return () => clearInterval(interval);
  // }, [currFocus]);

  return (
    <section className="w-full pt-10">
      <div className="container mx-auto flex flex-col justify-center">
        <div className="flex gap-4 text-6xl font-bold justify-center items-center">
          <button
            className={
              currFocus === "research" ? "text-emerald-400" : "text-gray-400"
            }
            onMouseEnter={() => setCurrFocus("research")}
          >
            RESEARCH
          </button>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          <button
            className={
              currFocus === "plan" ? "text-emerald-600" : "text-gray-400"
            }
            onMouseEnter={() => setCurrFocus("plan")}
          >
            PLAN
          </button>
          <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          <button
            className={
              currFocus === "explore" ? "text-emerald-800" : "text-gray-400"
            }
            onMouseEnter={() => setCurrFocus("explore")}
          >
            EXPLORE
          </button>
        </div>
      </div>
      <div className="max-w-2xl h-[800px] max-h-[70vh] bg-gray-200 rounded-lg flex flex-col p-1 w-full mx-auto mt-10">
        <div className="grid grid-cols-4 p-2 justify-between items-center group">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-lg bg-gray-500 group-hover:bg-red-500"></div>
            <div className="h-2 w-2 rounded-lg bg-gray-500 group-hover:bg-yellow-400"></div>
            <div className="h-2 w-2 rounded-lg bg-gray-500 group-hover:bg-green-500"></div>
          </div>
          <div className="bg-gray-100 rounded-lg px-6 col-span-2 text-center">
            <span className="opacity-50">http://</span>
            <span>fta.app</span>
            <span className="opacity-50">/</span>
          </div>
          <div className="flex gap-3 justify-end text-gray-500">
            <FontAwesomeIcon icon={faLink} />
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden h-full">
          <AnimatePresence>
            {currFocus === "research" && <Research />}
            {currFocus === "plan" && <Plan />}
            {currFocus === "explore" && <Explore />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
