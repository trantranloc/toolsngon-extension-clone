import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
