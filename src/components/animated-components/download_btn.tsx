
import type { Variants } from 'motion/react';
import { motion } from 'motion/react';

const arrowVariants: Variants = {
  normal: { y: 0 },
  animate: {
    y: 2,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      mass: 1,
      
    },
  },
};

interface DownloadIconProps {
  onControlAnimate:() => void
  onControlNormal:() => void
  controls: any
}
const DownloadIcon = ({  onControlAnimate, onControlNormal, controls}:DownloadIconProps) => {
  // const controls = useAnimation();

  return (
    <div
    className="cursor-pointer select-none  p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
    onMouseEnter={onControlAnimate}
    onMouseLeave={onControlNormal}


    //     onMouseEnter={() => controls.start('animate')}
    // onMouseLeave={() => controls.start('normal')}
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <motion.g variants={arrowVariants} animate={controls}>
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
    </motion.g>
    </svg>
    </div>
    );
};

export { DownloadIcon };