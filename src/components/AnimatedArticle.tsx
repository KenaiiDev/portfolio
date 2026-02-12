"use client";
import React, { useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";
import { useAnimation } from "@/contexts/AnimationContext";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { shouldAnimate } = useAnimation();

  const hoverEffect = hoverScale
    ? { scale: 1.02, transition: { duration: 0.15 } }
    : {};

  return (
    <motion.article
      ref={ref}
      className={className}
      initial={shouldAnimate ? "hidden" : "visible"}
      animate={shouldAnimate && isInView ? "visible" : "visible"}
      variants={direction === "left" ? leftVariants : rightVariants}
      transition={{ ease: "easeOut", duration: 0.3 }}
      whileHover={hoverEffect}
      {...props}
    >
      {children}
    </motion.article>
  );
};

export default AnimatedArticle;
