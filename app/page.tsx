// page.tsx

"use client";

import React, { useState } from "react";
import { Code } from "@nextui-org/react";
import Image from "next/image";

const AccordionItem: React.FC<{
  title: string;
  subtitle?: React.ReactNode; // Optional subtitle prop
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}> = ({ title, subtitle, isOpen, onToggle, children }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      onToggle();
    }
  };

  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center p-4 rounded-lg bg-black cursor-pointer"
        role="button"                   // Add role for accessibility
        tabIndex={0}                     // Make focusable with keyboard
        onClick={onToggle}
        onKeyDown={handleKeyDown}        // Handle keyboard toggle
      >
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
        <span className="text-white">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="p-4 bg-black text-white">{children}</div>}
    </div>
  );
};

const HomePage: React.FC = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-wrap flex-col w-full items-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          Fabio Tavernini
        </h1>

        <div className="w-full max-w-md">
          <Code color="danger">npm install @webdev/FabioTavernini</Code>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src="/images/BW.jpg" alt="test" className="w-2/4" />

        <div className="w-full">
          <div className="w-3/4 max-h-full border rounded-lg">
            <AccordionItem
              title="Why this page"
              subtitle="about this page"
              isOpen={openIndex === 0}
              onToggle={() => toggleAccordion(0)}
            >
              I wanted to try out some new web technologies, thats part of why this site was created.<br></br>
              Normally dabble in Powershell scripting, Legacy PHP Web-Apps and old VB Code.
              So for a change i wanted to test myself with some of the new stuff :)

            </AccordionItem>
            <AccordionItem
              title="What i do"
              isOpen={openIndex === 1}
              subtitle={<span>Read about me</span>}
              onToggle={() => toggleAccordion(1)}
            >
              Im an Application Manager at <a target="_blank" className="text-blue-600" href="https://itsh.ch">itsh.ch</a> and am responsible for a number of legacy PHP apps, aswell as many diffrent Powershell automation Jobs.
              if you'd like to see my CV, you can do so here: <a target="_blank" className="text-blue-600" href="https://cv.tavernini.online">CV</a>.
            </AccordionItem>
            <AccordionItem
              title="Some more Stuff"
              isOpen={openIndex === 2}
              subtitle={<span>extras</span>}
              onToggle={() => toggleAccordion(2)}
            >
              Lately i tried out diffrent JS Frameworks, im trying to get a better skillset in modern web-stacks.<br></br>
              Angular and NextJS seem pretty nice to get my feet wet. This site is built with NextJS and TailwindCSS. <br></br>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
