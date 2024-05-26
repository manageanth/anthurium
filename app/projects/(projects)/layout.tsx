import ViewProjects from "@/components/viewProjects/ViewProjects";
import { Julius_Sans_One, Josefin_Sans, Lato } from "next/font/google";
import localFont from 'next/font/local'

import "./layoutGlobalStyle.css"

const JuliusSansOne = Julius_Sans_One({ subsets: ["latin"], weight: "400", variable: "--JuliusSansOne" });
const JosefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400"], variable: "--JosefinSans" });
const lato = Lato({ subsets: ["latin"], weight: ["400"], variable: "--lato" });
const albertExtraBold = localFont({ src: "../fonts/Albert Extrabold.otf", variable: "--albertExtraBold" })

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ViewProjects className={`${JuliusSansOne.variable} ${JosefinSans.variable} ${lato.variable} ${albertExtraBold.variable} reset`}>
            {children}
        </ViewProjects>
    );
}
