import React, { useRef } from "react";
import Header from "./header";
import Hero from "./hero-section";
import PortfolioSection from "./portfolio-section";
import Contact from "./contact";
import { AnimatePresence, motion } from "framer-motion";

// document.addEventListener('mousemove', (e) => {
//     const cursor = document.querySelector('.custom-cursor');
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
//   });

function Main() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const traillerRef = useRef<any>(null);
  const [isInPortfolio, setIsInPortfolio] = React.useState(false); // State to track if cursor is in portfolio section

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Move the custom cursor to follow the mouse position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      setTimeout(() => {
        traillerRef.current.style.left = e.clientX - 10 + "px";
        traillerRef.current.style.top = e.clientY - 10 + "px";
      }, 120);

      // Check if the mouse is within the portfolio section's boundaries
      if (portfolioRef.current) {
        const rect = portfolioRef.current.getBoundingClientRect();
        const isInBounds =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        // Update the state only if it has changed
        if (isInBounds !== isInPortfolio) {
          setIsInPortfolio(isInBounds);
        }
      }
    };

    // Add the event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInPortfolio]);
  // Depend on `isInPortfolio` to avoid unnecessary re-renders

  //   React.useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       cursorRef.current.style.left = e.clientX + "px";
  //       cursorRef.current.style.top = e.clientY + "px";
  //     };

  //     document.addEventListener("mousemove", handleMouseMove);

  //     // Cleanup event listener on component unmount
  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };

  return (
    <AnimatePresence>
      <motion.div
        initial="initalState"
        animate="animateState"
        exit="exitState"
       
      >
        <Header />
        <Hero />

        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <Contact />
        {/* <div
        ref={cursorRef}
        className={clsx(
          "custom-cursor shadow-md",
          isInPortfolio && "!bg-white "
        )}
      ></div>
      <div ref={traillerRef} className="cursor-trailer"></div> */}
      </motion.div>
    </AnimatePresence>
  );
}

export default Main;
