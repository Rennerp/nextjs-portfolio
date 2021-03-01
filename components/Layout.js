import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
