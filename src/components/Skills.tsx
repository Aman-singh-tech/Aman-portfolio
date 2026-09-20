"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const track = [...skills, ...skills];

  return (
    <section id="skills" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          02 · Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Tools & tech I work with
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="skills-marquee relative mx-auto mt-12 h-[420px] max-w-md overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-surface to-transparent" />

          <div className="skills-track flex flex-col gap-3 p-4">
            {track.map((skill, i) => (
              <div
                key={`${skill.slug}-${i}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${skill.slug}`}
                    alt={skill.name}
                    width={22}
                    height={22}
                    loading="lazy"
                  />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
