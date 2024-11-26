import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";
import "./globals.css";
import Navbar from "@/components/custom-ui/navbar/navbar";
import Footer from "@/components/custom-ui/footer";
import { leagueSpartan, openSans } from "@/styles/fonts";

const NotFound = () => {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${openSans.variable} bg-neutrals-50 font-league-spartan antialiased`}
      >
        <Navbar />
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-neutrals-50">
          <div className="mb-4 text-red-500">
            <AlertCircle size={48} />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Not Found</h2>
          <p className="mb-4 text-gray-600">
            Could not find the requested resource
          </p>
          <Link
            href="/"
            className="flex items-center text-blue-500 hover:underline"
          >
            <Home className="mr-2" size={20} />
            Return Home
          </Link>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default NotFound;
