import Footer from "@/Components/Footer/Index";
import Header from "@/Components/Header/Index";
import NextTopLoader from "nextjs-toploader";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <NextTopLoader />
      {children}
      <Footer />
    </>
  );
}
