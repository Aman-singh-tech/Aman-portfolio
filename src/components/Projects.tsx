"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          04 · Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Things I&apos;ve built
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex gap-3 text-muted">
                  <a
                    href={project.github}
                    aria-label={`${project.title} GitHub repository`}
                    className="transition-colors hover:text-foreground"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={project.link}
                    aria-label={`${project.title} live link`}
                    className="transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
