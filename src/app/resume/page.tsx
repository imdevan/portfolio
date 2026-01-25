'use client'

import Header from '_c/header'
import Container from '_c/container'
import H from '_c/h'
import AnimateIn from '_c/animate-in'
import { Fira_Code } from 'next/font/google'
import classNames from 'classnames'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Resume() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-200">
        <Container className="max-w-4xl">
          <div className="pt-32 pb-16">
            <AnimateIn>
              {/* Header Section */}
              <div className="text-center mb-12 print:mb-8">
                <H s={1} className="mb-4 print:mb-2">Devan Huapaya</H>
                <div className={classNames(
                  firaCode.className,
                  'text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1 print:text-black print:space-y-0'
                )}>
                  <div className="flex flex-wrap justify-center gap-4 print:gap-2">
                    <span>📍 Seattle, WA</span>
                    <span>🌐 <a href="https://devanhuapaya.com" className="text-[#e26460] dark:text-[#e26460] print:text-black">devanhuapaya.com</a></span>
                    <span>💼 <a href="https://linkedin.com/in/devanhuapaya" className="text-[#e26460] dark:text-[#e26460] print:text-black">/in/devanhuapaya</a></span>
                    <span>✉️ <a href="mailto:hello@devanhuapaya.com" className="text-[#e26460] dark:text-[#e26460] print:text-black">hello@devanhuapaya.com</a></span>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="mb-8 print:mb-6">
                <H s={2} className="mb-4 print:mb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-black pb-2">
                  Summary
                </H>
                <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
                  Versatile full stack engineer with 8+ years experience blending design intuition with deep technical range.
                  Delivered secure, scalable apps for health, research, and startup environments. Strong in React, Node, and TypeScript.
                </p>
              </div>

              {/* Experience Section */}
              <div className="mb-8 print:mb-6">
                <H s={2} className="mb-6 print:mb-4 border-b-2 border-gray-200 dark:border-gray-700 print:border-black pb-2">
                  Experience
                </H>

                <div className="space-y-6 print:space-y-4">
                  {/* Home Tax Shield */}
                  <div className="border-l-4 border-[#e26460] pl-4 print:border-black">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg print:text-base">Senior Software Engineer Consultant</h3>
                        <p className="text-[#e26460] dark:text-[#e26460] print:text-black font-medium">Home Tax Shield</p>
                      </div>
                      <span className={classNames(
                        firaCode.className,
                        'text-sm text-gray-600 dark:text-gray-400 print:text-black font-medium'
                      )}>
                        Aug 2023 - Jan 2025
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 print:text-black space-y-3">
                      <li>Developed a web portal to enable client's support teams to efficiently manage over 12K real estate property tax appeals and over $7M in assets utilizing the code-lite platform Retool, Typescript, and websockets.</li>
                    </ul>
                  </div>

                  {/* GenUI */}
                  <div className="border-l-4 border-[#e26460] pl-4 print:border-black">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg print:text-base">Senior Software Engineer</h3>
                        <p className="text-[#e26460] dark:text-[#e26460] print:text-black font-medium">GenUI</p>
                      </div>
                      <span className={classNames(
                        firaCode.className,
                        'text-sm text-gray-600 dark:text-gray-400 print:text-black font-medium'
                      )}>
                        Mar 2021 - Mar 2023
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 print:text-black space-y-3">
                      <li>Technical lead on multiple project teams to successfully deliver early-stage products for Microsoft Research and the health research sector, Utilized React, TypeScript, NextJS, and Node.js to develop secure, scalable solutions that handled sensitive data and met strict compliance requirements combined budget of $1M.</li>
                      <li>Architected and built a full stack dev kit with React, NextJS and Prisma for launching two client projects. This production-ready tooling generated over $1.5M in revenue and saved over $100K in startup costs.</li>
                      <li>Developed unit tests, end-to-end tests, typesafe architectures, and formatting tools to ensure project stability in Playwright and Jest, reducing post-deployment defects and improving application reliability.</li>
                      <li>Collaborated on cross-team efforts to provide support for various projects across polyglot codebases that enhanced speed of development by 30 percent. Codebases included C Sharp, Python, Elixir and PHP.</li>
                      <li>Mentored junior engineers in React, TypeScript and client communication best practices, leading to increased code quality and team efficiency.</li>
                    </ul>
                  </div>

                  {/* Freelance */}
                  <div className="border-l-4 border-[#e26460] pl-4 print:border-black">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg print:text-base">Full Stack Development and Design</h3>
                        <p className="text-[#e26460] dark:text-[#e26460] print:text-black font-medium">Freelance</p>
                      </div>
                      <span className={classNames(
                        firaCode.className,
                        'text-sm text-gray-600 dark:text-gray-400 print:text-black font-medium'
                      )}>
                        Jan 2017 - Mar 2021
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 print:text-black mb-3">
                      Delivered fullstack apps for startups and nonprofits that generated more than $200K in revenue.
                      Development spanned across React, Node.js, and typescript for diverse domains and platforms used by more than 10K monthly active users.
                    </p>

                    <div className="mb-2">
                      <h4 className="font-semibold text-center text-gray-800 dark:text-gray-200 print:text-black">Selected Projects</h4>
                    </div>

                    <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 print:text-black space-y-3">
                      <li><strong>Evan360 (Hybrid Mobile App):</strong> Launched a cross-platform app, design system, and backend API for an "Uber-for-IT" service resulting in more than $25K in client revenue. Stack included React, Sails.js, and PostgreSQL. Also built scalable multi-tenant infrastructure for white label enterprise deployments.</li>
                      <li><strong>GoodToday (Subscription Management and Website):</strong> Built landing page and subscription signup used to support nonprofit donation subscriptions and fundraising that helped raise more than $500K for charities.</li>
                      <li><strong>Get Biofuel (Web App and Landing Page):</strong> Developed a web app helping users locate 5K+ clean fuel stations using React, Gatsby, the WordPress API, and Google Maps API.</li>
                    </ul>
                  </div>

                  {/* IBM */}
                  <div className="border-l-4 border-[#e26460] pl-4 print:border-black">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg print:text-base">Full Stack Software Engineer</h3>
                        <p className="text-[#e26460] dark:text-[#e26460] print:text-black font-medium">IBM</p>
                      </div>
                      <span className={classNames(
                        firaCode.className,
                        'text-sm text-gray-600 dark:text-gray-400 print:text-black font-medium'
                      )}>
                        Jun 2015 - Oct 2016
                      </span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 print:text-black space-y-3">
                      <li>Implemented frontend and backend contributions for internal platforms used by more than 80K IBM employees</li>
                      <li>Modernized tooling for over 8K agile teams through Slack, GitHub, and TravisCI integrations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mb-8 print:mb-6">
                <H s={2} className="mb-4 print:mb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-black pb-2">
                  Skills
                </H>
                <div className="grid md:grid-cols-3 gap-4 print:gap-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 print:text-black mb-2">Frontend</h4>
                    <p className={classNames(
                      firaCode.className,
                      'text-sm text-gray-700 dark:text-gray-300 print:text-black'
                    )}>
                      React, TypeScript, NextJS, Redux, Tailwind, React Native, Jest, Playwright, CSS, UX, build tooling
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 print:text-black mb-2">Backend</h4>
                    <p className={classNames(
                      firaCode.className,
                      'text-sm text-gray-700 dark:text-gray-300 print:text-black'
                    )}>
                      Node, Express, PostgreSQL, SQLite, GraphQL, Docker, SSR, AWS Lambda, Python, Go, CI/CD, Ruby
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 print:text-black mb-2">Tools</h4>
                    <p className={classNames(
                      firaCode.className,
                      'text-sm text-gray-700 dark:text-gray-300 print:text-black'
                    )}>
                      Cursor, Greptile, agentic development workflows, Bash scripting, Figma
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-8 print:mb-6">
                <H s={2} className="mb-4 print:mb-2 border-b-2 border-gray-200 dark:border-gray-700 print:border-black pb-2">
                  Education
                </H>
                <div className="border-l-4 border-[#e26460] pl-4 print:border-black">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="font-bold text-lg print:text-base">B.S. in Computer Engineering</h3>
                      <p className="text-[#e26460] dark:text-[#e26460] print:text-black font-medium">Texas A&M University</p>
                    </div>
                    <span className={classNames(
                      firaCode.className,
                      'text-sm text-gray-600 dark:text-gray-400 print:text-black font-medium'
                    )}>
                      2015
                    </span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }

          .print\\:mb-2 {
            margin-bottom: 0.5rem !important;
          }

          .print\\:mb-4 {
            margin-bottom: 1rem !important;
          }

          .print\\:mb-6 {
            margin-bottom: 1.5rem !important;
          }

          .print\\:mb-8 {
            margin-bottom: 2rem !important;
          }

          .print\\:space-y-0 > * + * {
            margin-top: 0 !important;
          }

          .print\\:space-y-4 > * + * {
            margin-top: 1rem !important;
          }

          .print\\:gap-2 {
            gap: 0.5rem !important;
          }

          .print\\:text-black {
            color: black !important;
          }

          .print\\:text-base {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }

          .print\\:border-black {
            border-color: black !important;
          }

          /* Hide elements that shouldn't print */
          header,
          .fixed,
          [class*="bg-gradient"],
          .theme-switcher {
            display: none !important;
          }

          /* Ensure proper page breaks */
          .border-l-4 {
            page-break-inside: avoid;
          }

          /* Adjust margins for print */
          .container {
            max-width: none !important;
            padding: 0 !important;
          }

          .pt-32 {
            padding-top: 1rem !important;
          }
        }
      `}</style>
    </>
  )
}
