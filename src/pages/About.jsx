import { motion } from "motion/react";
import { useEffect, useState } from "react";

function About() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="p-10 flex flex-col-reverse sm:flex-row sm:h-screen gap-5 sm:gap-20">
      <div className="text-white font-kanit">
        <h1 className="text-lg sm:text-3xl pb-3 sm:pb-10">Sobre mim</h1>
        <p className="text-justify text-xs sm:text-base">
          Sou estudante de Ciência da Computação na Univasf, campus Salgueiro, atualmente no 7º período.
          Atuo como programador Back-end, aprimorando minhas habilidades com Java, Spring Boot e Maven.
          Além disso, tenho conhecimento em HTML e CSS, e estou expandindo minhas competências para o Front-end, aprendendo React e Tailwind CSS.
          Busco um estágio ou trabalho com horário flexível que permita agregar conhecimentos à minha formação acadêmica e trajetória profissional.
          Sou dedicado, atento aos detalhes e sempre empenhado em evoluir como estudante e desenvolvedor
        </p>
      </div>

      {isDesktop ? (
        <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.5 }}>
          <img src="/MeuPortfolio/aths-portfolio-black.jpg" alt="" className="w-1080 rounded-2xl" />
        </motion.div>
      ) : (
        <div>
          <img src="/MeuPortfolio/aths-portfolio-black.jpg" alt="" className="w-1080 rounded-2xl" />
        </div>
      )}
    </div>
  );
}
export default About;
