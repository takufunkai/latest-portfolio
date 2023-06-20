import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ezekiel Toh | Portfolio",
  description:
    "Ezekiel Toh is a final year Computer Science student at National University of Singapore. He has waorked at multiple companies such as ByteDance and WorkClass.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
