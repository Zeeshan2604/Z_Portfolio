import Approach from "@/components/Approach";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <Hero />

        {/* Grid Section */}
        <Grid />

        {/* Experience Section */}
        <Experience />

        {/* Recent Projects Section */}
        <RecentProjects />

        {/* Skills Section */}
        <Skills />

        {/* Approach Section */}
        <Approach />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
