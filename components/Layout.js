import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="container py-4">{children}</div>
  </>
);

export default Layout;
