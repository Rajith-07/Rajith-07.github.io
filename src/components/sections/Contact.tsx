"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export type ContactSocial = {
  label: string;
  href: string;
  icon: "phone" | "email" | "linkedin" | "github";
};

type ContactProps = {
  email: string;
  socials: ContactSocial[];
};

export function Contact({ email, socials }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send message");
      }

      event.currentTarget.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message"
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <div className="space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Let&apos;s build something
        </h2>
        <a
          href={`mailto:${email}`}
          className="text-xl font-semibold text-slate-900 transition hover:text-slate-500"
        >
          {email}
        </a>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        {socials.map((social) => {
          const Icon = social.icon === "linkedin" ? FaLinkedin : (social.icon === "github" ? FaGithub : (social.icon === "phone" ? FaPhone : MdAlternateEmail));
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl text-slate-700 transition hover:border-slate-400 hover:bg-white"
              aria-label={social.label}
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-slate-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-slate-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm text-slate-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>
        {errorMessage && (
          <div className="md:col-span-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={status !== "sending" ? { scale: 1.01 } : {}}
          whileTap={status !== "sending" ? { scale: 0.99 } : {}}
          className="md:col-span-2 rounded-2xl border border-slate-900 bg-slate-900 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending"
            ? "Sending..."
            : status === "sent"
              ? "Message sent ✓"
              : "Send message"}
        </motion.button>
      </form>
    </motion.section>
  );
}

