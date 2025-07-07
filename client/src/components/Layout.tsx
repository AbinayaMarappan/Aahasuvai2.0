import AboveNav from "./AboveNav";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <AboveNav />
        <Navigation />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
