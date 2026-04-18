import React, { useState } from "react";
import { generateResumePDF } from "../utils/generateResumePDF";

const Hero: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadResume = async () => {
    try {
      setIsGenerating(true);
      await generateResumePDF();
    } catch (error) {
      console.error("Failed to generate resume:", error);
      alert("Failed to generate resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="hero" className="py-12 md:py-20 scroll-mt-28">
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
        Arash Sarikhani
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Senior Frontend Engineer | Team Lead
      </h2>

      <div className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10 space-y-4">
        <p>
          Senior Frontend Engineer and Tech Lead with 5+ years shipping
          enterprise SaaS. Architects scalable frontend systems, leads
          cross-functional engineering teams, and contributes full-stack,
          writing NestJS services and Go handlers in the same production
          codebase daily. A background in senior visual design sharpens every
          layer of the work from component API decisions to pixel-precise Figma
          handoffs. Integrating OpenAI and Claude APIs into live product
          interfaces. High-ownership, end-to-end: from API contract to deployed
          UI.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownloadResume}
          disabled={isGenerating}
          className="bg-black text-white px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? "Generating..." : "Download Resume"}
        </button>
        <a
          href="#contact"
          className="border-2 border-black text-black px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all text-center"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
