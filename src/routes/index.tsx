import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/hero";
import { Works } from "@/components/portfolio/works";
import { Experience } from "@/components/portfolio/experience";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Footer } from "@/components/portfolio/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Danial Talat — Full-Stack Developer & AI Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Danial Talat (FA23-BCS-014) — Full-Stack Software Developer, AI/Automation Engineer, and Founder of WebSync. Custom web applications, autonomous AI agents, and e-commerce architecture.",
      },
      {
        property: "og:title",
        content: "Danial Talat — Full-Stack Developer & AI Engineer",
      },
      {
        property: "og:description",
        content:
          "Full-Stack Software Developer, AI/Automation Engineer, and Founder of WebSync. Building high-performance web applications, autonomous AI agents, and enterprise e-commerce architectures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content: "Danial Talat — Full-Stack Developer & AI Engineer",
      },
      {
        name: "twitter:description",
        content:
          "Full-Stack Software Developer, AI/Automation Engineer, and Founder of WebSync.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
      <Hero />
      <main>
        <Works />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
