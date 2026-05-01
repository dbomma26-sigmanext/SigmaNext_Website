/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoBanner } from "@/components/LogoBanner";
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
    <div className="min-h-screen bg-background text-foreground selection:bg-sigma-blue/30 relative overflow-x-hidden">
      {/* Happy background blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="bg-happy-blob w-[500px] h-[500px] bg-sigma-blue/5 top-[-10%] -left-64" />
        <div className="bg-happy-blob w-[400px] h-[400px] bg-sigma-yellow/5 bottom-[-10%] -right-32 delay-1000" />
        <div className="bg-happy-blob w-[300px] h-[300px] bg-sigma-blue/5 top-[40%] right-[-100px]" />
      </div>
      
      <Navbar />
      <main className="w-full">
        <section className="w-full min-h-screen overflow-visible">
          <Hero />
        </section>
        <section className="w-full overflow-visible h-auto border-b border-slate-50">
          <LogoBanner />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <Services />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <WhyChooseUs />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <Industries />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <TechEcosystem />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <About />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <Careers />
        </section>
        <section className="w-full min-h-screen overflow-visible">
          <Contact />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </main>
      <ChatBot />
    </div>
  );
}

