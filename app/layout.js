import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/recipeapp.png";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recipe App",
  description: "Created by Mominul Haque",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <header className="bg-yellow-300 mb-5 sticky top-0">
          <div className="pl-[200px] pr-[200px] flex justify-between pt-2 pb-2">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Recipe Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "60px" }}
                className="hover:brightness-125 hover:drop-shadow-lg active:brightness-200 active:drop-shadow-lg"
                priority
              />
            </Link>
            <nav>
              <ul className="flex gap-9 pt-5 pb-5 font-medium">
                <li>
                  <Link
                    className="pt-2 pb-2 pl-3 pr-3 rounded-3xl hover:bg-yellow-400 active:bg-yellow-200"
                    href={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="pt-2 pb-2 pl-3 pr-3 rounded-3xl hover:bg-yellow-400 active:bg-yellow-200"
                    href={"/about"}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <span>{children}</span>
        <footer className="text-center mt-5">
          <div className="text-sm">
            &copy; Mominul Haque 2025 - {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  );
}
