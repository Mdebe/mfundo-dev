"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Project3DCard from "../../components/ProjectCard";

export default function ResumePage() {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-neutral-800">
      <div className="max-w-4xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-xl">
              <Image
                src="/profile/mfundo.jpg"
                alt="Mfundo Sithole"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Mfundo Sithole
          </h1>

          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Computer Science Graduate • Mobile & Web Developer
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span>📍 KwaZulu-Natal</span>
            <span>📞 062 710 2645</span>
            <span>✉️ mfundosithole@outlook.com</span>
          </div>

          <div className="mt-4">
            <Link
              href="https://github.com/Mdebe?tab=repositories"
              target="_blank"
              className="text-cyan-500 hover:underline"
            >
              github.com/Mdebe
            </Link>
          </div>
          
        </motion.div>

        {/* ================= SUMMARY ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Motivated Computer Science graduate with experience building
            unbreakable and elegant websites using JavaScript, PHP, HTML, and CSS,
            as well as Flutter and React applications. Skilled in automating workflows
            using n8n and implementing CI/CD pipelines with GitHub Actions. Passionate
            about growing front-end and back-end development skills in an innovative
            environment.
          </p>
        </motion.div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-semibold mb-6">Education</h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-neutral-900 shadow-md">
              <h3 className="font-semibold text-lg">
                Bachelor of Computer Science & Information Technology
              </h3>
              <p className="text-sm text-gray-500">
                University of KwaZulu-Natal • 2020
              </p>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Data Science, Databases, Machine Learning, Neural Networks,
                Artificial Intelligence, Game Development, Advanced Web
                Development, IoT, 3D Graphics & Animation, Mobile Development,
                NLP, Algorithms & Data Structures.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-neutral-900 shadow-md">
              <h3 className="font-semibold text-lg">
                Certificate: Mobile Apps Development with React Native (NQF 5)
              </h3>
              <p className="text-sm text-gray-500">
                IT Varsity • MTN Business App Academy • 2022
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= EXPERIENCE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-neutral-900 shadow-md">
            <h3 className="font-semibold text-lg">
              Web Developer @{" "}
              <Link
                href="https://www.ttech.co.za/"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                TTECH
              </Link>
            </h3>
            <p className="text-sm text-gray-500">
              Richards Bay, KZN • 2021 – 2023
            </p>

            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Created pixel-perfect layouts using HTML, CSS, and JavaScript.</li>
              <li>Implemented cross-browser compatibility.</li>
              <li>Optimized performance through asset compression.</li>
              <li>Built Joomla & WordPress templates and plugins.</li>
              <li>Developed scalable React applications.</li>
              <li>Implemented CI/CD pipelines using GitHub Actions.</li>
              <li>Automated workflows with n8n.</li>
            </ul>
          </div>
        </motion.div>
<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14"
        >
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-neutral-900 shadow-md">
            <h3 className="font-semibold text-lg">
              IT Support Technician @{" "}
              <Link
                href="https://www.ttech.co.za/"
                target="_blank"
                className="text-cyan-500 hover:underline"
              >
                Glonic Trading
              </Link>
            </h3>
            <p className="text-sm text-gray-500">
              Richards Bay, KZN • 2024 – June 2024
            </p>

            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Provided first-line support for Microsoft 365, Entra ID, PowerShell, and Intune environments.</li>
              <li>Managed user onboarding and offboarding, including account setup, asset allocation, and IT documentation.</li>
              <li>Delivered desktop, printer, and mobile device support across Windows, macOS, Android, and Linux platforms.</li>
              <li>Maintained accurate IT asset registers and ensured compliance with ticketing SLA standards.</li>
              <li>Supported dialer systems and other operational business tools.</li>
              <li>Performed general IT assistance, including Ethernet cabling, password resets, and minor hardware/software troubleshooting.</li>
           
            </ul>
          </div>
        </motion.div>
        {/* ================= PROJECTS ================= */}
         

        {/* ================= DOWNLOAD ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Link
            href="/Mfundo-Sithole-CV.pdf"
            target="_blank"
            className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Download PDF Resume
          </Link>
        </motion.div>

      </div>
    </section>
  );
}