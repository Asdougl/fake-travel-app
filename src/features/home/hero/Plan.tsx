"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faMoon,
  faPlane,
  faPlus,
  faShip,
  faTrain,
} from "@fortawesome/sharp-regular-svg-icons";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { wait } from "~/util/utils";

export default function Plan() {
  const buttonAnimation = useAnimation();
  const iconAnimation = useAnimation();
  const textAnimation = useAnimation();
  const travelTimeIcon = useAnimation();
  const travelTimeOtherIcons = useAnimation();
  const travelTimeText = useAnimation();

  const [showText, setShowText] = useState(false);
  const [showNewEntry, setShowNewEntry] = useState(false);

  useEffect(() => {
    const doAnimate = async () => {
      await wait(800);
      await buttonAnimation.start({ scale: 1 });
      await buttonAnimation.start({ scale: 0.9 });
      await wait(100);

      await Promise.all([
        iconAnimation
          .start({
            opacity: 0,
          })
          .then(() => {
            return iconAnimation.start({
              display: "none",
            });
          }),
        buttonAnimation.start({
          width: "100%",
          borderRadius: "8px",
        }),
      ]);

      await textAnimation.start(
        {
          display: "block",
          opacity: 1,
        },
        { duration: 0.001 }
      );

      await wait(400);

      setShowText(true);

      await wait(1000);

      await textAnimation.start({
        opacity: 0,
        width: "0px",
      });

      textAnimation.set({
        display: "none",
      });

      iconAnimation.set({
        display: "block",
      });

      setShowNewEntry(true);

      await wait(1000);

      await travelTimeIcon.start({
        backgroundColor: "rgb(52 211 153)",
      });

      await wait(100);

      await Promise.all([
        travelTimeOtherIcons.start({
          width: "0px",
          opacity: 0,
        }),
        travelTimeIcon.start({
          backgroundColor: "transparent",
        }),
      ]);

      travelTimeOtherIcons.set({
        display: "none",
      });

      travelTimeText.set({
        display: "inline",
      });

      await travelTimeText.start({
        width: "auto",
        opacity: 1,
        paddingRight: "12px",
      });
    };

    doAnimate();
  }, [
    buttonAnimation,
    iconAnimation,
    textAnimation,
    travelTimeIcon,
    travelTimeOtherIcons,
    travelTimeText,
  ]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-6"
    >
      <div className="flex flex-col max-w-sm items-center mx-auto">
        <h4 className="w-full font-2xl font-bold pb-4">
          Europe {new Date().getFullYear() + 1}
        </h4>
        <div className="bg-emerald-400 rounded-lg px-4 py-1 w-full flex items-center justify-between">
          <span className="text-2xl font-bold">Madrid</span>
          <span className="text-lg">
            <FontAwesomeIcon icon={faMoon} /> 3
          </span>
        </div>
        <div className="h-4 w-1 bg-emerald-600"></div>
        <div className="bg-emerald-200 rounded-full px-3 py-1">
          <FontAwesomeIcon icon={faCar} /> 4 hr 50
        </div>
        <div className="h-4 w-1 bg-emerald-600"></div>
        <div className="bg-emerald-400 rounded-lg px-4 py-1 w-full flex items-center justify-between">
          <span className="text-2xl font-bold">Sevilla</span>
          <span className="text-lg">
            <FontAwesomeIcon icon={faMoon} /> 4
          </span>
        </div>
        <div className="h-4 w-1 bg-emerald-600"></div>
        {showNewEntry && (
          <motion.div className="flex flex-col max-w-sm items-center mx-auto w-full">
            <motion.div className="bg-emerald-200 rounded-full flex overflow-hidden items-center">
              <motion.span
                animate={travelTimeIcon}
                className="px-2 py-1 rounded-full"
              >
                <FontAwesomeIcon icon={faCar} />
              </motion.span>
              <motion.div animate={travelTimeOtherIcons} className="flex">
                <span className="px-2 py-1 rounded-full">
                  <FontAwesomeIcon icon={faTrain} />
                </span>
                <span className="px-2 py-1 rounded-full">
                  <FontAwesomeIcon icon={faPlane} />
                </span>
                <span className="px-2 py-1 rounded-full">
                  <FontAwesomeIcon icon={faShip} />
                </span>
              </motion.div>
              <motion.span
                initial={{ display: "none", width: "0" }}
                animate={travelTimeText}
                className="whitespace-nowrap"
              >
                2 hr 21
              </motion.span>
            </motion.div>
            <div className="h-4 w-1 bg-emerald-600"></div>
            <motion.div
              layoutId="new-entry-button"
              style={{ borderRadius: "8px" }}
              className="bg-emerald-400 px-4 py-1 w-full flex items-center justify-between"
            >
              <span className="text-2xl font-bold">Malaga</span>
              <span className="text-lg">
                <FontAwesomeIcon icon={faMoon} /> 1
              </span>
            </motion.div>
            <div className="h-4 w-1 bg-emerald-600"></div>
            <div className="bg-emerald-200 py-1 px-4 rounded-full">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </motion.div>
        )}
        <motion.div
          animate={buttonAnimation}
          style={{ borderRadius: "9999px" }}
          className="bg-emerald-200 py-1 h-8"
          layoutId="new-entry-button"
        >
          <motion.span animate={iconAnimation} className="px-4">
            <FontAwesomeIcon icon={faPlus} />
          </motion.span>
          <motion.div
            animate={textAnimation}
            initial={{ display: "none", opacity: 0 }}
            className="ml-2 w-full"
          >
            &nbsp;
            {showText &&
              "Malaga".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
