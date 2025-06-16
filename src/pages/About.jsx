import { motion } from "motion/react"; 

function About() {
    return (
        <div className="p-10 flex h-screen gap-20">
            <div className="text-white font-kanit">
                <h1 className="text-3xl pb-10">Sobre mim</h1>
                <p className="text-justify">
                    Sou estudante de Ciência da Computação na Univasf, campus Salgueiro, atualmente no 7º período. 
                    Atuo como programador Back-end, aprimorando minhas habilidades com Java, Spring Boot e Maven. 
                    Além disso, tenho conhecimento em HTML e CSS, e estou expandindo minhas competências para o Front-end, aprendendo React e Tailwind CSS. 
                    Busco um estágio ou trabalho com horário flexível que permita agregar conhecimentos à minha formação acadêmica e trajetória profissional. 
                    Sou dedicado, atento aos detalhes e sempre empenhado em evoluir como estudante e desenvolvedor
                </p>
            </div>
            <motion.div whileInView= {{x:[300,0]}} transition={{duration:0.5}}>
                <img src="\aths-portfolio-black.jpg" alt="" className="w-1080 rounded-2xl" />
            </motion.div>
        </div>
    )
}
export default About;