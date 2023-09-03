"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
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
import { deepCopy, wait } from "~/util/utils";

const INITIAL_SIGHTS = [
  {
    name: "Alhambra",
    description:
      "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain.",
    bookmarked: true,
  },
  {
    name: "Albaicin",
    description:
      "The Albaicín or Albayzín as it was known under Muslim rule, is a district of Granada, in the autonomous community of Andalusia, Spain.",
    bookmarked: true,
  },
  {
    name: "Sacromonte",
    description:
      "Sacromonte, sometimes also called Sacramonte is a traditional neighbourhood of the eastern area of the city of Granada in Andalusia, Spain.",
    bookmarked: true,
  },
  {
    name: "Cathedral",
    description:
      "Granada Cathedral, or the Cathedral of the Incarnation is a Roman Catholic church in the city of Granada, capital of the province of the same name in the Autonomous Region of Andalusia, Spain.",
    bookmarked: false,
  },
  {
    name: "Plaza Nueva",
    description:
      "Plaza Nueva is a plaza in the city of Granada, in the autonomous community of Andalusia, Spain.",
    bookmarked: false,
  },
  {
    name: "Plaza Bib-Rambla",
    description:
      "Plaza Bib-Rambla is a plaza in the centre of the Spanish city of Granada. It is located east of Gran Vía de Colón and southwest of the Cathedral.",
    bookmarked: false,
  },
  {
    name: "Plaza de Toros",
    description:
      "The Plaza de Toros de Granada is a bullring in the city of Granada, Spain. It is currently used for bull fighting. The stadium holds 14,500 people.",
    bookmarked: false,
  },
];

export default function Explore() {
  const [showSights, setShowSights] = useState(false);
  const [sights, setSights] = useState(INITIAL_SIGHTS)

  const sightsButtonAnimation = useAnimation();
  const eatsButtonAnimation = useAnimation();

  useEffect(() => {
    setSights(deepCopy(INITIAL_SIGHTS));
    const doAnimation = async () => {

      await wait(1000);
      await sightsButtonAnimation.start({
        scale: 0.9,
      });
      await sightsButtonAnimation.start({
        scale: 1.2,
      });
      await sightsButtonAnimation.start({
        scale: 1,
      });
      setShowSights(true);
      await wait(1000)

      setSights(curr => {
        const newSights = [...curr];
        newSights[4].bookmarked = true;
        return newSights;
      })
      await wait(1000)
    };

    doAnimation();
  }, [sightsButtonAnimation]);

  return (
    <section className="container mx-auto px-4 py-6 flex flex-col">
      <div className="leading-3 pb-4">
        <h4 className="text-6xl font-bold pb-2">Granada</h4>
        <div className="w-full px-2">
          <span>9-12 June</span>
        </div>
      </div>
      {/* <div>
        <FontAwesomeIcon icon={faHouse} fixedWidth /> Mariot Hotel
      </div>
      <div>
        <FontAwesomeIcon icon={faCalendar} fixedWidth /> 9th - 12th June
      </div>
      <div>
        <FontAwesomeIcon icon={faMoon} fixedWidth /> 3 nights
      </div> */}
      <div className="flex gap-2 flex-wrap pt-4">
        <motion.button
          animate={sightsButtonAnimation}
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
          initial="hidden"
          animate={['visible', 'bookmarked', 'unbookmarked']}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="flex flex-col gap-1 py-6"
        >
          {sights.map((sight) => (
            <motion.li
              variants={{
                hidden: {
                  opacity: 0,
                  x: -10,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              key={sight.name}
              className="flex gap-2 items-center overflow-hidden w-full"
            >
              <div className="bg-gray-200 rounded-lg w-12 h-12 flex-shrink-0 flex items-center justify-center">
                <motion.div initial={sight.bookmarked ? 'bookmarked' : 'unbookmarked'} animate={sight.bookmarked ? 'bookmarked' : 'unbookmarked'} variants={{
                  bookmarked: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.4,
                      type: 'spring',
                    },
                  },
                  unbookmarked: {
                    opacity: 0,
                    scale: 0,
                    rotate: 45,
                    transition: {
                      duration: 0.4,
                      type: 'spring',
                    },
                  },
                }}>
                  <FontAwesomeIcon icon={faBookmark} size="lg" />
                </motion.div>
              </div>
              <div className="flex flex-col flex-shrink overflow-hidden">
                <div className="text-xl font-bold">{sight.name}</div>
                <div className="text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden">{sight.description}</div>
              </div>
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
