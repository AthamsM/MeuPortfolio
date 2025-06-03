import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faJava
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import TorneariaCentral from "../assets/fotos/TorneariaCentral.png";
import Isa from "../assets/fotos/Isa.png";
import Wumpus from "../assets/fotos/wumpus.png";
import TorneariaCentralShop from "../assets/fotos/TorneariaCentralShop.png"


const projetos = [
  {
    id: 1,
    nome: "Isa",
    descricao: "Um sistema que identifica possíveis vulnerabilidades e oferece suporte durante a sua jornada acadêmica como professor ou aluno.",
    tecnologias: ["React", "Vite", "Node.js", "MySQL", "Python"],
    github: "https://github.com/SamCatarina/isa",
    foto: Isa
  },
  {
    id: 2,
    nome: "Tornearia Central",
    descricao: "Site de uma oficina mecânica",
    tecnologias: ["HTML", "CSS",],
    github: "https://github.com/AthamsM/Tornearia-Central",
    foto: TorneariaCentral
  },
  {
    id: 3,
    nome: "Tornearia Central Shop",
    descricao: "E-commerce de uma tornearia",
    tecnologias : ["Java", "Spring-Boot", "Maven", "React", "Tailwind"],
    github: "https://github.com/AthamsM/Tornearia_Central_Shop",
    foto: TorneariaCentralShop
  },
  {
    id: 4,
    nome: "Wumpus",
    descricao: "Jogo de aventura desenvolvido na disciplina de IA.",
    tecnologias: ["Python", "Pygame", "Piskel"],
    github: "https://github.com/AthamsM/Wumpus",
    foto: Wumpus
  }
];
const ferramentas = [
  {
    id: 1,
    nome: faJs,
    color: "#FFD43B",
    title: "JavaScript"
  },
  {
    id: 2,
    nome: faPython,
    color: "#005cfa",
    title: "Python"
  },
  {
    id: 3,
    nome: faJava,
    color: "#f07400",
    title: "Java"
  },
  {
    id: 4,
    nome: faLeaf,
    color: "#95ea96",
    title: "Spring-Boot"
  },
  {
    id: 5,
    nome: faReact,
    color: "#74C0FC",
    title: "React"
  },
  {
    id: 6,
    nome: faHtml5,
    color: "#f07400",
    title: "HTML"
  },
  {
    id: 7,
    nome: faCss3,
    color: "#348fd5",
    title: "CSS"
  },
  {
    id: 8,
    nome: faNodeJs,
    color: "#27e70d",
    title: "Node JavaScript"
  },
  {
    id: 9,
    nome: faDatabase,
    color: "#3681ba",
    title: "Database"
  }
]

const Projects = () => {
  return (
    <div className="projetos">
      <div className="flex">
        <div className="projetos__skills">
          <div className="projetos__ferramentas">
            <h2>Ferramentas</h2>
            {ferramentas.map((ferramenta) =>(
               <div key={ferramenta.id} className="ferramenta-container">
               <FontAwesomeIcon className="projetos__icon" icon={ferramenta.nome} style={{ color: ferramenta.color, }} title={ferramenta.title} />
             </div> 
            ))}
          </div>
          <div className="projetos__interesses">
            <h2>Meus Interesses</h2>
            <ul>
              <li>Full Stack</li>
              <li>Banco de dados</li>
            </ul>
          </div>
        </div>
        <div className="projetos__projeto">
          <h2>Projetos</h2>
          <div className="projetos-container">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="projetos-card">
                <img src={projeto.foto} alt="Isa" />
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}</p>
                <a href={projeto.github} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
export default Projects