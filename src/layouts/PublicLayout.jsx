import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ScrollToTop from "../utils/ScrollToTop";

export default function PublicLayout() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}