"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, MotionProps, useAnimation } from "framer-motion";

interface AnimatedArticleProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  hoverScale?: boolean;
}

const leftVariants = {
  hidden: { x: "-20vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const rightVariants = {
  hidden: { x: "20vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const AnimatedArticle = ({
  children,
  className = "",
  direction = "left",
  hoverScale = true,
  ...props
}: AnimatedArticleProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  const randomDelay = Math.random() * 0.25;

  const hoverEffect = hoverScale
    ? { scale: 1.02, transition: { duration: 0.15 } }
    : {};

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, isInView, hasAnimated]);

  const handleReverseAnimation = () => {
    return new Promise<void>((resolve) => {
      controls.start("hidden").then(() => {
        resolve();
      });
    });
  };

  useEffect(() => {
    const handleRevereEvent = () => {
      handleReverseAnimation();
    };

    window.addEventListener("reverseAnimation", handleRevereEvent);

    return () => {
      window.removeEventListener("reverseAnimation", handleRevereEvent);
    };
  });

  return (
    <motion.article
      ref={ref}
      className={className}
      animate={controls}
      variants={direction === "left" ? leftVariants : rightVariants}
      initial="hidden"
      transition={{ ease: "easeOut", duration: 0.3, delay: randomDelay }}
      whileHover={hoverEffect}
      {...props}
    >
      {children}
    </motion.article>
  );
};

export default AnimatedArticle;
