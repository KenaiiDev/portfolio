"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, MotionProps, useAnimation } from "framer-motion";

interface AnimatedArticleProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
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
  ...props
}: AnimatedArticleProps) => {
  //TODO: Make the article animate from the direction to the wanted pos. Items outside the screen should be hidden until they are in the screen.
  //TODO: Animate the articles when user click a TransitionLink component. Items should animate reverse as the entrance animation

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  const randomDelay = Math.random() * 0.25;

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
      transition={{ ease: "easeOut", duration: 0.25, delay: randomDelay }}
      {...props}
    >
      {children}
    </motion.article>
  );
};

export default AnimatedArticle;
