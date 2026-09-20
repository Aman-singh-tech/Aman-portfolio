"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cookie,
  KeyRound,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Brain,
  Webhook,
  LayoutGrid,
  Cookie,
  KeyRound,
  ShieldCheck,
};

export default function Skills() {
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
          Skills & tools I work with
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mt-12 rounded-2xl border border-border bg-surface p-4"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 rounded-t-2xl bg-gradient-to-b from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 rounded-b-2xl bg-gradient-to-t from-surface to-transparent" />

          <div className="skills-grid grid max-h-[520px] grid-cols-3 gap-3 overflow-y-auto pr-1 sm:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon ? iconMap[skill.icon] : undefined;

              return (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background px-3 py-5 text-center transition-colors hover:border-accent/50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                    {skill.slug ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://cdn.simpleicons.org/${skill.slug}`}
                        alt={skill.name}
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    ) : skill.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={skill.logoUrl}
                        alt={skill.name}
                        width={24}
                        height={24}
                        loading="lazy"
                        className="rounded-md"
                      />
                    ) : Icon ? (
                      <Icon size={22} className="text-[#08090a]" />
                    ) : null}
                  </span>
                  <span className="text-xs font-medium leading-tight text-foreground">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
