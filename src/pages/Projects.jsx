import { BiLogoJava, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoPostgresql, BiSolidData, BiLogoDocker, BiCodeAlt } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


const projects = [
    {
        id: 1,
        name: "Isa",
        description: "Um sistema que identifica possíveis vulnerabilidades e oferece suporte durante a sua jornada acadêmica como professor ou aluno.",
        technologies: ["React", "Vite", "Node.js", "MySQL", "Python"],
        github: "https://github.com/SamCatarina/isa",
        photo: "/isa.png"
    },
    {
        id: 2,
        name: "Tornearia Central",
        description: "Site de uma oficina mecânica",
        technologies: ["HTML", "CSS",],
        github: "https://github.com/AthamsM/Tornearia-Central",
        photo: "/TorneariaCentral.png"
    },
    {
        id: 3,
        name: "Tornearia Central Shop",
        description: "E-commerce de uma tornearia",
        technologies: ["Java", "Spring-Boot", "Maven", "React", "Tailwind"],
        github: "https://github.com/AthamsM/Tornearia_Central_Shop",
        photo: "TorneariaCentralShop.png"
    },
    {
        id: 4,
        name: "Wumpus",
        description: "Jogo de aventura desenvolvido na disciplina de IA.",
        technologies: ["Python", "Pygame", "Piskel"],
        github: "https://github.com/AthamsM/Wumpus",
        photo: "wumpus.png"
    }
];

const tools = [
    {
        id: 1,
        name: BiLogoJavascript,
        color: "#FFD43B",
        title: "JavaScript"
    },
    {
        id: 2,
        name: BiLogoPython,
        color: "#005cfa",
        title: "Python"
    },
    {
        id: 3,
        name: BiLogoJava,
        color: "#f07400",
        title: "Java"
    },
    {
        id: 4,
        name: BiLogoSpringBoot,
        color: "#95ea96",
        title: "Spring-Boot"
    },
    {
        id: 6,
        name: BiLogoHtml5,
        color: "#f07400",
        title: "HTML"
    },
    {
        id: 7,
        name: BiLogoCss3,
        color: "#348fd5",
        title: "CSS"
    },
    {
        id: 5,
        name: BiLogoReact,
        color: "#74C0FC",
        title: "React"
    },
    {
        id: 8,
        name: BiLogoTailwindCss,
        color: "#3681ba",
        title: "Tailwindcss"
    },
    {
        id: 9,
        name: DiMysql,
        color: "#3681ba",
        title: "MySQL"
    },
    {
        id: 10,
        name: BiLogoPostgresql,
        color: "#3681ba",
        title: "Postgresql"
    },
    {
        id: 11,
        name: BiLogoDocker,
        color: "#3681ba",
        title: "Docker"
    }
]

function Projects() {
    return (
        <div className="p-10 flex h-screen gap-30">
            <div className="flex flex-col gap-10">
                <div className="font-kanit">
                    <h1 className="text-white text-3xl pb-10">Ferramentas</h1>
                    <div className="grid grid-cols-4">
                        {tools.map((tool) => (
                            <div key={tool.id} className="hover:scale-[1.05]">
                                <tool.name size={70} color={tool.color} title={tool.title} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="font-kanit">
                    <h1 className="text-white text-3xl pb-3">Meus Interesses</h1>
                    <div className="p-2">
                        <div className="text-white text-xl flex items-center gap-2">
                            <p className="text-xl">Full Stack</p>
                            <BiCodeAlt />
                        </div>
                        <div className="text-white text-xl flex items-center gap-2">
                            <p className="">Banco de dados</p>
                            <BiSolidData />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-white text-3xl font-kanit pb-5 pl-2">Projetos</h1>
                <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 7000, disableOnInteraction: false }} loop={true} centeredSlides={true} spaceBetween={20} slidesPerView={1} className="pl-10 pr-10 w-200 h-105 bg-radial from-[#1B2735] to-[#090A0F]" >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="w-full h-sceen grid place-items-center justify-center items-center rounded-xl p-4">
                            <img src={project.photo} alt={project.name} className="w-120 h-65 object-cover rounded-lg" />
                            <div className="w-full grid place-items-start px-37">
                                <h2 className="text-white text-lg font-semibold mt-2">{project.name}</h2>
                                <p className="text-gray-300 text-sm">{project.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="bg-blue-600 text-white text-xs px-2 py-1 rounded"> {tech} </span>
                                    ))}
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-400 text-sm hover:underline"> Ver no GitHub </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default Projects;