
import Topbar from "@/app/components/Topbar"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Topbar/>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
