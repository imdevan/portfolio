"use client"

import CoverImage from "./cover-image";
import { ProjectTitle } from "_c/project-title";
import { type Author } from "@/interfaces/author";
import { defaultTransition } from "@/lib/motion-transitions";
import * as motion from "motion/react-client"

type Props = {
  children: React.ReactNode;  // To support any valid React content inside the header
};

function AnimateIn ({ children }: Props) {
  return (
    <motion.div 
      data-testid="AnimateIn" 
      className="opacity-0" 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={defaultTransition}
      animate={{
        y: [45, 0],
        transition: { ease: ["easeIn", "easeOut"] }
      }}
      >
      {children}
    </motion.div>
  );
}

export default AnimateIn