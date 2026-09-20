"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          05 · Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Have a project in mind? Let&apos;s build something stable.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-[#08090a] transition-transform hover:scale-105"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <div className="flex gap-6 text-muted">
            <a
              href={profile.social.github}
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.social.twitter}
              aria-label="Twitter"
              className="transition-colors hover:text-foreground"
            >
              <TwitterIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
