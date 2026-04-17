/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Industries } from "@/components/Industries";
import { TechEcosystem } from "@/components/TechEcosystem";
import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

export default function App() {
  return (
    <div id="main-scroll-container" className="h-screen overflow-y-auto snap-y snap-mandatory bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <main className="w-full">
        <section className="snap-start w-full min-h-screen overflow-visible">
          <Hero />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <Services />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <WhyChooseUs />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <Industries />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <TechEcosystem />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <About />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <Careers />
        </section>
        <section className="snap-start w-full min-h-screen overflow-visible">
          <Contact />
        </section>
        <section className="snap-start w-full">
          <Footer />
        </section>
      </main>
      <ChatBot />
    </div>
  );
}

