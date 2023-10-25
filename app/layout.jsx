import clsx from "clsx";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Grid Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav
            className={clsx(
              "flex h-12 items-center justify-center",
              " bg-[rgb(var(--primary-rgb))] text-[rgb(var(--secondary-rgb))]",
            )}
          >
            <a href="/" className="block">
              Home
            </a>
          </nav>
        </header>
        {children}
        <footer
          className={clsx(
            "flex h-12 w-full items-center justify-center",
            "bg-[rgb(var(--primary-rgb))] text-[rgb(var(--secondary-rgb))]",
          )}
        >
          <span className="block">Footer</span>
        </footer>
      </body>
    </html>
  );
}
