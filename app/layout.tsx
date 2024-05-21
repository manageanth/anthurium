import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { servicesData } from "@/lib/servicesData";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://anthsolutions.com'),
  title: "Anth-Solutions - Expert Web Development & Mobile App Solutions | Next.js & React Native Specialists",
  description: "Anth-Solutions is a leading web development agency specializing in high-performance Next.js websites and seamless React Native mobile app solutions. Our expert team delivers tailored digital experiences, from custom e-commerce platforms to robust software solutions. Contact us to elevate your online presence",
  openGraph: {
    title: "Anth-Solutions - Expert Web Development & Mobile App Solutions",
    description: "Anth-Solutions is a leading web development agency specializing in high-performance Next.js websites and seamless React Native mobile app solutions."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

        <Nav menuInfoArr={[
          {
            title: "Services",
            link: "/services",
            subMenu: servicesData.map(eachService => {
              return { link: eachService.link, title: eachService.name }
            })
          }, {
            title: "Testimonials",
            link: "/testimonials",
          },
          {
            title: "Blog",
            link: "/blog",
          },
          {
            title: "Projects",
            link: "/projects",
          },
          {
            title: "FAQ",
            link: "/FAQ",
          }
        ]}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
