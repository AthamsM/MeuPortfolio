import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Header() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="p-10 h-[80px] flex items-center justify-between bg-radial from-[#1B2735] to-[#090A0F]">
            <div className="flex gap-4 font-kanit">
                <button onClick={() => scrollToSection("home")} className="text-xl text-white hover:scale-[1.05]">Início</button>
                <button onClick={() => scrollToSection("projects")} className="text-xl text-white hover:scale-[1.05]">Projetos</button>
                <button onClick={() => scrollToSection("about")} className="text-xl text-white hover:scale-[1.05]">Sobre-mim</button>
            </div>
            <div className="flex gap-4">
                <a href="" className="text-4xl"><BiLogoGithub className="text-white hover:scale-[1.05]"/></a>
                <a href="" className="text-4xl"><BiLogoLinkedinSquare className="text-white hover:scale-[1.05]"/></a>
                <a href="" className="text-4xl"><BiLogoGmail className="text-white hover:scale-[1.05]"/></a>
            </div>
        </div>
    )
}
export default Header;