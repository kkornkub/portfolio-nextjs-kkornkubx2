import About from "@/components/About"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import FitnessSchedule from "@/components/FitnessSchedule"
import DietPlan from "@/components/DietPlan"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <FitnessSchedule />
      <DietPlan />
    </>
  )
}

