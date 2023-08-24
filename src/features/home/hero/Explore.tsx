"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faChevronsLeft,
  faChevronsRight,
  faCircle,
  faFerrisWheel,
  faForkKnife,
  faHouse,
  faInfo,
  faInfoCircle,
  faMoon,
} from "@fortawesome/sharp-regular-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { wait } from "~/util/utils";

const SIGHTS = [
  {
    name: "Alhambra",
    description:
      "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain.",
    done: true,
  },
  {
    name: "Albaicin",
    description:
      "The Albaicín or Albayzín as it was known under Muslim rule, is a district of Granada, in the autonomous community of Andalusia, Spain.",
    done: false,
  },
  {
    name: "Sacromonte",
    description:
      "Sacromonte, sometimes also called Sacramonte is a traditional neighbourhood of the eastern area of the city of Granada in Andalusia, Spain.",
    done: false,
  },
  {
    name: "Cathedral",
    description:
      "Granada Cathedral, or the Cathedral of the Incarnation is a Roman Catholic church in the city of Granada, capital of the province of the same name in the Autonomous Region of Andalusia, Spain.",
    done: false,
  },
  {
    name: "Plaza Nueva",
    description:
      "Plaza Nueva is a plaza in the city of Granada, in the autonomous community of Andalusia, Spain.",
    done: false,
  },
  {
    name: "Plaza Bib-Rambla",
    description:
      "Plaza Bib-Rambla is a plaza in the centre of the Spanish city of Granada. It is located east of Gran Vía de Colón and southwest of the Cathedral.",
    done: false,
  },
  {
    name: "Plaza de Toros",
    description:
      "The Plaza de Toros de Granada is a bullring in the city of Granada, Spain. It is currently used for bull fighting. The stadium holds 14,500 people.",
    done: false,
  },
];

export default function Explore() {
  const [showSights, setShowSights] = useState(false);

  const buttonAnimation = useAnimation();

  useEffect(() => {
    const doAnimation = async () => {
      await wait(1000);
      await buttonAnimation.start({
        scale: 0.9,
      });
      await buttonAnimation.start({
        scale: 1.2,
      });
      await buttonAnimation.start({
        scale: 1,
      });
      setShowSights(true);
    };

    doAnimation();
  }, [buttonAnimation]);

  return (
    <section className="container mx-auto px-4 py-6 flex flex-col">
      <div className="leading-3 pb-4">
        <div>Currently in</div>
        <h4 className="text-4xl font-bold">Granada</h4>
      </div>
      <div>
        <FontAwesomeIcon icon={faHouse} fixedWidth /> Mariot Hotel
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendar} fixedWidth /> 9th - 12th June
      </div>
      <div>
        <FontAwesomeIcon icon={faMoon} fixedWidth /> 3 nights
      </div>
      <div className="flex gap-2 flex-wrap pt-4">
        <motion.button
          animate={buttonAnimation}
          className="px-4 py-1 rounded-full border border-emerald-400 bg-emerald-50"
        >
          <FontAwesomeIcon icon={faFerrisWheel} /> Sights
        </motion.button>
        <button className="px-4 py-1 rounded-full border border-emerald-400 bg-emerald-50">
          <FontAwesomeIcon icon={faForkKnife} /> Eats
        </button>
        <button className="px-4 py-1 rounded-full border border-emerald-400 bg-emerald-50">
          <FontAwesomeIcon icon={faInfoCircle} /> Tips
        </button>
      </div>
      {showSights && (
        <motion.ul
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              staggerChildren: 0.5,
            },
          }}
          className="flex flex-col gap-1 py-6"
        >
          {SIGHTS.map((sight) => (
            <motion.li
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              key={sight.name}
              className="flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={sight.done ? faCheckCircle : faCircle} />
              <h4 className={sight.done ? "line-through" : ""}>{sight.name}</h4>
            </motion.li>
          ))}
        </motion.ul>
      )}
      <div className="grid grid-cols-2 pt-10">
        <button>
          <FontAwesomeIcon icon={faChevronsLeft} /> Malaga
        </button>
        <button>
          Valencia <FontAwesomeIcon icon={faChevronsRight} />
        </button>
      </div>
    </section>
  );
}
