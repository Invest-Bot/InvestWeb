import Link from "next/link";
import { useState, Fragment } from "react";
import { NavTemplate } from "../../layouts/NavTemplates";
import Image from "next/image";
import { m, Variants } from "framer-motion";

interface NavProps {
  options: NavTemplate[];
}

// nav bar animation, fades in and then animates the children
const containerAnimation: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
};

// default animation for nav bar items
const itemAnimation: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

function NavBar({ options }: NavProps) {
  const [navList, setNavList] = useState(options);
  return (
    <m.div
      className="pointer-events-none fixed inline-grid w-screen grid-cols-2 p-2 pt-7 font-plusJakarta text-2xl sm:p-7 lg:grid-cols-3"
      initial="initial"
      animate="animate"
      variants={containerAnimation}
    >
      <m.div className="mr-auto" variants={itemAnimation}>
        <Link
          key="InvestBot"
          href="/"
          className="flex flex-row items-center justify-center"
        >
          <m.div
            initial={{
              scale: 1,
              rotate: 0,
            }}
            animate={{
              scale: 1,
              rotate: 360,
              transition: {
                duration: 4,
                type: "spring",
                stiffness: 20,
              },
            }}
          >
            <Image
              src="/img/logo.webp"
              alt="InvestBot Logo"
              width={64}
              height={64}
              className="mr-8 rounded-b-full"
            />
          </m.div>
          <div className="pointer-events-auto flex select-none flex-col items-start justify-center pr-5 font-plusJakarta text-white">
            <p>InvestBot</p>
            <p className="text-xs text-gray-400">
              Serving anny&apos;s community est. 2022
            </p>
          </div>
        </Link>
      </m.div>
      <m.div
        className="mr-auto ml-auto hidden flex-row items-center justify-center lg:flex"
        variants={itemAnimation}
      >
        {navList.map((nav, index) => (
          <Fragment key={index}>{nav.content}</Fragment>
        ))}
      </m.div>
      <m.div
        className="ml-auto flex flex-row items-center justify-center"
        variants={itemAnimation}
      >
        <p className="pointer-events-auto select-none pr-5 text-white">
          Login blah
        </p>
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </m.div>
    </m.div>
  );
}

export default NavBar;