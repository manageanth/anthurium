import ViewProjects from "@/components/viewProjects/ViewProjects";
import { Julius_Sans_One, Josefin_Sans } from "next/font/google";

const JuliusSansOne = Julius_Sans_One({ subsets: ["latin"], weight: "400", variable: "--JuliusSansOne" });
const JosefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["300", "400"], variable: "--JosefinSans" });

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ViewProjects className={`${JuliusSansOne.variable} ${JosefinSans.variable}`}>
            {children}
        </ViewProjects>
    );
}
