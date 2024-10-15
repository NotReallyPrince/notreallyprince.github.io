"use client";

import Image from "next/image";
import { Eye, Quote } from "lucide-react";

import { projects, tools } from "@/config/constants";
import { siteConfig } from "@/config/site";
import AboutSidebar from "@/components/sidebar";

export default function About() {
  return (
    <main className="relative mx-auto max-w-3xl select-none px-6 md:px-16 lg:mt-28 lg:max-w-7xl">
      <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
        <div className="order-2 duration-700 animate-in slide-in-from-top-full lg:order-none">
          <h1 className="mb-8 basis-1/2 text-3xl font-black tracking-tight sm:text-5xl lg:leading-tight">
            I&apos;m {siteConfig.author.name}. I live in Gujarat, India where I
            build the future.
          </h1>

          <div className="font-sans leading-relaxed text-foreground/60">
            I am Automobile Engineer with a passion for coding and a strong
            foundation in web and mobile app development. Seeking a challenging
            role where I can leverage my technical expertise and creativity to
            drive innovation.
            <blockquote className="relative my-8 overflow-hidden rounded-md border bg-secondary/50 p-4 pr-12 tracking-tight lg:py-6 lg:pl-6">
              <Quote
                className="absolute -right-4 -top-6 -z-10 size-24 -rotate-12 text-secondary duration-1000 animate-in slide-in-from-left-full"
                aria-hidden="true"
              />
              If you ever spot me in the wild, don&apos;t hesitate to say hello!
              Let&apos;s grab a drink and geek-out over the latest advancements
              in front-end development or discuss our favorite programming
              language.
            </blockquote>
          </div>
        </div>

        <AboutSidebar />
      </section>

      {/* Usage  */}
      <section className="mt-10 max-w-2xl" id="skills">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Skills</h1>

          <p className="max-w-xl text-foreground/60">
            Tools, technologies and gadgets I use on a daily basis but not
            limited to.
          </p>
        </div>

        {tools.map(({ heading, items }, i) => (
          <div key={i} className="my-4">
            <h3 className="text-2xl font-semibold">{heading}</h3>

            {items.map(({ name, url, description, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-x-2 p-2">
                <Icon className="size-5 min-h-fit min-w-fit" />
                <a
                  href={url}
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={name}
                  className="my-auto min-w-fit leading-3 text-blue-500 underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline dark:text-blue-400"
                >
                  {name}
                </a>
                -
                <span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">
                  {description}
                </span>
              </li>
            ))}
          </div>
        ))}
      </section>
      <header
        className="mb-16 max-w-2xl duration-700 animate-in slide-in-from-top-full"
        id="projects"
      >
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          Projects
        </h1>

        <p className="font-sans text-base leading-relaxed text-foreground/60">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas on how it can be
          improved.
        </p>
      </header>

      <section className="mb-12 grid grid-cols-1 gap-5 duration-700 animate-in slide-in-from-top-full md:grid-cols-2 xl:grid-cols-3">
        {projects?.map(
          ({ projectUrl: { github, live }, logo, name, tagline }, i) => (
            <div
              key={i}
              onClick={() => window.open(github, "_blank")}
              className="group flex cursor-pointer items-center gap-x-4 rounded-lg border bg-secondary/50 p-4 duration-300 hover:bg-secondary/90 hover:shadow-md"
            >
              <Image
                src={logo}
                width={60}
                height={60}
                alt={name}
                draggable="false"
                className="size-16 rounded-md bg-foreground/5 object-contain p-2 duration-300 group-hover:bg-foreground/10"
              />

              <div className="duration-1000 animate-in slide-in-from-bottom-full">
                <div className="flex justify-between">
                  <h2 className="mb-1 text-lg tracking-wide">{name}</h2>

                  {live && (
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent GitHub link from opening
                        window.open(live, "_blank");
                      }}
                      className="z-10 my-auto -mt-1 cursor-pointer rounded-md border border-transparent p-1 text-foreground/50 duration-300 hover:border-border hover:text-foreground"
                    >
                      <Eye className="size-5" />
                    </div>
                  )}
                </div>

                <div className="line-clamp-2 text-sm text-foreground/60">
                  {tagline}
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
