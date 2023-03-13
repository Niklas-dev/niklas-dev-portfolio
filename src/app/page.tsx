import AboutSection from "./(sections)/about/AboutSection";
import HomeSection from "./(sections)/home/HomeSection";
import SkillsSection from "./(sections)/skills/SkillsSection";

export default async function Home() {
  return (
    <main className="h-screen w-screen flex flex-col ">
      <HomeSection />

      <AboutSection />

      <SkillsSection />
    </main>
  );
}
/* h-screen w-screen flex flex-col overflow-y-scroll overflow-x-hidden */
