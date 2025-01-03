"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { useRef } from "react";
import { RiPoliceBadgeLine } from "react-icons/ri";

export const ParallexText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(1);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 100], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -75, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="overflow-hidden flex tracking-tight whitespace-nowrap flex-nowrap leading-3 bg-stone-900 text-slate-50  dark:bg-slate-50 dark:text-stone-900">
      <motion.div
        className="flex items-center uppercase text-center whitespace-nowrap flex-nowrap md:text-3xl p-3"
        style={{ x }}
      >
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
      </motion.div>
      <motion.div
        className="flex items-center uppercase text-center whitespace-nowrap flex-nowrap md:text-3xl p-3"
        style={{ x }}
      >
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
      </motion.div>
      <motion.div
        className="flex items-center uppercase text-center whitespace-nowrap flex-nowrap md:text-3xl p-3"
        style={{ x }}
      >
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
        <span className="block mr-2 md:mr-6">
          <RiPoliceBadgeLine className="text-white dark:text-stone-900" />
        </span>
        <span className="block mr-2 md:mr-6">{children}</span>
      </motion.div>
    </div>
  );
};
