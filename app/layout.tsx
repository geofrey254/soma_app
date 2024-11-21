import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Soma - Unlock Learning, One Day at a Time",
  description:
    "Soma is an innovative learning platform for high school students in Kenya, providing easy access to quality educational materials at an affordable daily cost. Discover video lessons, notes, and quizzes tailored to your curriculum. Pay only for the days you use and enhance your learning experience with Magneto today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-Poppins font-medium"
        data-new-gr-c-s-check-loaded="14.1207.0"
        data-gr-ext-installed=""
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
