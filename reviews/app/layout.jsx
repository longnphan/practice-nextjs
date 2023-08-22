import Link from "next/link";
import NavBar from "@/component/NavBar";
import "./globals.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            className="text-orange-800 hover:underline"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
