import Footer from "@/component/Footer";
import "./globals.css";
import Navbar from "@/component/Navbar";

export const metadata = {
  title: "CareerPath",
  description: "Find your career direction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
        <Navbar />  
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
