import Button from "../componentes/Button";
import { motion } from "motion/react"

function Home() {
    return (
        <div className="flex items-center justify-center sm:justify-start p-5 sm:p-40 h-screen w-full sm:bg-[url(/capaFundo2.jpg)] z-0 bg-cover">
            <motion.div initial={{scale:0.5}} whileInView={{scale:1}} transition={{duration:0.5}} className="flex flex-col items-center sm:items-start gap-3">
                <h1 className="text-white text-2xl sm:text-5xl font-kanit">Olá<span className="text-blue-500">,</span> me chamo Athams</h1>
                <p className="text-white text-base sm:text-xl font-kanit">Desenvolvedor FullStack</p>
                <div className="flex flex-col gap-2 sm:gap-4 flex-wrap">
                    <Button nome="Visite meu GitHub" href="https://github.com/AthamsM/" />
                    <Button nome="Baixar Currículo" href="Curriculo_.pdf" download="Curriculo-Athams.pdf" />
                </div>
            </motion.div>
        </div>
    )
}
export default Home;