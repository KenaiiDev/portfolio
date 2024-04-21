"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import PurpleBlob from "@/assets/purple-blob.svg";
import BlueBlob from "@/assets/blue-blob.svg";
import RoseBlob from "@/assets/rose-blob.svg";

import type { BlobProps } from "@/types/BlobTypes";

type props = {
  minSize?: number;
  maxSize?: number;
};

const Background = React.memo(function Background({ minSize = 500, maxSize = 800 }: props) {
  const [blobProps, setBlobProps] = useState<BlobProps[]>([]);
  const [isReady, setIsReady] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const randomSizes: number[] = new Array(3).fill(0).map(() => {
        return Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
      });

      setBlobProps([
        {
          src: PurpleBlob.src,
          width: randomSizes[0],
          height: randomSizes[0],
          x: Math.floor(Math.random() * window.innerWidth - randomSizes[0] / 2),
          y: Math.floor(
            Math.random() * document.body.scrollHeight - randomSizes[0] / 2,
          ),
          transitionDuration: Math.floor(Math.random() * 15 + 25),
        },
        {
          src: BlueBlob.src,
          width: randomSizes[1],
          height: randomSizes[1],
          x: Math.floor(Math.random() * window.innerWidth - randomSizes[1] / 2),
          y: Math.random() * document.body.scrollHeight - randomSizes[0] / 2,
          transitionDuration: Math.floor(Math.random() * 15 + 25),
        },
        {
          src: RoseBlob.src,
          width: randomSizes[2],
          height: randomSizes[2],
          x: Math.floor(Math.random() * window.innerWidth - randomSizes[2] / 2),
          y: Math.random() * document.body.scrollHeight - randomSizes[0] / 2,
          transitionDuration: Math.floor(Math.random() * 15 + 25),
        },
      ]);

      setIsReady(true);
    }
  }, [maxSize, minSize]);

  if (typeof window === "undefined") return null;

  if (!isReady) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden blur-3xl">
      {blobProps.map((blob, index) => {
        return (
          <motion.img
            key={index}
            className="absolute mix-blend-multiply"
            src={blob.src}
            initial={{ x: blob.x, y: blob.y, opacity: 0 }}
            animate={{ x: blob.x, y: blob.y, opacity: 1 }}
            transition={{
              duration: blob.transitionDuration,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            width={blob.width}
            height={blob.height}
            onAnimationComplete={() => {
              setBlobProps((prev) => {
                const newBlobProps = [...prev];
                newBlobProps[index].x = Math.floor(
                  Math.random() * window.innerWidth - blob.width / 2,
                );
                newBlobProps[index].y = Math.floor(
                  Math.random() * document.body.scrollHeight - blob.height / 2,
                );
                newBlobProps[index].transitionDuration = Math.floor(
                  Math.random() * 15 + 25,
                );
                return newBlobProps;
              });
            }}
          />
        );
      })}
    </div>
  );
});

export default Background