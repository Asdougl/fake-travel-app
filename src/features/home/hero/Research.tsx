import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/sharp-regular-svg-icons";
import { Variants, motion } from "framer-motion";

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: { display: "none" },
  visible: {
    display: "inline",
  },
};

const searchResult: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const SENTENCE = "Where to visit in Spain?";

export default function Research() {
  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08 * SENTENCE.length + 0.1,
          },
        },
      }}
      className="px-4 py-6"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <div className="border border-gray-300 rounded-lg py-2 px-4 text-2xl text-gray-900 flex items-center gap-4">
        <FontAwesomeIcon icon={faSearch} />
        <motion.h3 variants={sentence}>
          {SENTENCE.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
          &nbsp;
        </motion.h3>
      </div>
      <motion.div
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
        className="py-4 flex flex-col gap-4"
      >
        <motion.div
          variants={searchResult}
          className="rounded-lg border border-gray-300 p-4 flex gap-4"
        >
          <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">Barcelona</div>
            <div className="text-gray-500">783 travellers love Barcelona</div>
          </div>
        </motion.div>
        <motion.div
          variants={searchResult}
          className="rounded-lg border border-gray-300 p-4 flex gap-4"
        >
          <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">Granada</div>
            <div className="text-gray-500">465 travellers love Granada</div>
          </div>
        </motion.div>
        <motion.div
          variants={searchResult}
          className="rounded-lg border border-gray-300 p-4 flex gap-4"
        >
          <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">Madrid</div>
            <div className="text-gray-500">338 travellers love Madrid</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
