import Navigation from "@/components/NavigationBar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import { WhileInView } from "@/components/lib/WhileInView"

export default function Home() {
  return (
    <>
      <Navigation />
      <WhileInView>
        <section id='hero'>
          <Hero />
        </section>
      </WhileInView>
      <WhileInView>
        <section id="about">
          <About />
        </section>
      </WhileInView>
    </>
  )
}
