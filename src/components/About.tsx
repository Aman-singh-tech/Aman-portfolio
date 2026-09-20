"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          01 · About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          I&apos;m an <span className="neon-text">AI-driven full-stack developer</span> who
          combines modern engineering practices with AI-assisted workflows to ship{" "}
          <span className="neon-text">production-grade web applications</span> faster —
          without compromising on code quality or stability. From real-time dashboards to
          payroll and attendance systems, I focus on building solutions that{" "}
          <span className="neon-text">stay reliable long after launch</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
