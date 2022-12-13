import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  Variants,
} from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../components/dashboard/NavBar";
import { NavTemplate } from "./NavTemplates";

interface DashLayoutProps {
  children: React.ReactNode;
}

function DashLayout(props: DashLayoutProps) {
  // get the current route for animation purposes
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Dashboard - InvestBot</title>
        <meta name="description" content="Dashboard statistics for InvestBot" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c084fc" />
        <meta property="og:title" content="InvestBot" />
        <meta
          property="og:description"
          content="Serving anny's community est. 2022"
        />
        <meta property="og:image" content="/img/logo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="InvestBot" />
      </Head>

      <div className="flex h-screen w-screen flex-row overflow-hidden">
        {/* dashboard nav bar */}
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <NavBar />
          </AnimatePresence>
        </LazyMotion>
        {/* dashboard content */}
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.div
              key={router.route.concat("layout-fade")}
              className="h-screen w-screen"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {props.children}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </>
  );
}

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default DashLayout;