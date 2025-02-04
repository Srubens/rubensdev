import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets:["latin"],
  weight:["400","500","600","700"],
  display:"swap",
  variable:"--font-inter"
})

export const poppins = Poppins({
  subsets:["latin"],
  weight:["600"],
  display:"swap",
  variable:"--font-poppins"
})
export const metadata = {
  title: "Rubens Dev",
  description: "Portfólio para minha apresentação e dos os projetos feitos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
