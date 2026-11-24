import React from 'react';
import { X, Check, Zap, BatteryLow } from 'lucide-react';

export const ParadigmShift: React.FC = () => {
  return (
    <section id="the-problem" className="py-14 md:py-20 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-2.5 font-mono">
            <span>The Core Realization</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Page 3 & 4 Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.18] mb-4 text-balance">
            Eliminate procrastination not by force, but by design.
          </h2>

          <div className="space-y-2.5 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-[#F5F2EA]">
              You may be seeing your peers starting businesses, creating content, traveling abroad, getting jobs, internships, and remote roles. From the outside, it always seems easy—but the real barrier is rarely talent or capability. The trick is just getting you started... actually sitting down and starting.
            </p>
            <p className="text-[#A6A6A0]">
              I designed a system of daily rituals, prompts, mini routines and bite-sized tasks for work/study so you don't have to. All you need to do is take out 5–15 minutes of your day and read/follow the prompt for the day. That's all.
            </p>
          </div>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Treating the Symptom (By Force) */}
          <div className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] p-6 rounded-sm shadow-xs flex flex-col justify-between" data-delay="100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A6A6A0] mb-3 pb-2.5 border-b border-[#2A2A2A] font-mono">
                <X className="w-4 h-4 text-[#A6A6A0]" />
                <span>Treating the Symptom (By Force)</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#F5F2EA] mb-1">
                What you've probably tried.
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A6A0] mb-4 pb-3 border-b border-[#2A2A2A]/60">
                Tools that can help, but don't always solve the underlying problem.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#A6A6A0]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-0.5 shrink-0">—</span>
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">Notion dashboards and planners</strong>
                    <span>Organising your entire life without necessarily improving your ability to follow through.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-0.5 shrink-0">—</span>
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">Pomodoro and focus apps</strong>
                    <span>Tracking focused minutes without teaching you how to recover when your attention slips.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-0.5 shrink-0">—</span>
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">Habit trackers and streaks</strong>
                    <span>Counting consecutive productive days without giving you a practical way to restart after missing one.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#A6A6A0]/50 font-mono text-xs mt-0.5 shrink-0">—</span>
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">Rigid time-blocking schedules</strong>
                    <span>Planning every hour without accounting for interruptions, low-energy days or unpredictable environments.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#2A2A2A] text-[11px] font-mono text-[#A6A6A0]/70 tracking-wide">
              RESULT: MORE PLANNING · FRAGILE ROUTINES · STARTING OVER
            </div>
          </div>

          {/* Right Column: Treating the Disease (By Design) */}
          <div className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] p-6 rounded-sm shadow-sm flex flex-col justify-between relative ring-1 ring-[#6B3FA0]/60" data-delay="200">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 pb-2.5 border-b border-[#2A2A2A] font-mono">
                <Check className="w-4 h-4 text-[#9B6BD6]" />
                <span>Treating the Disease (By Design)</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#F5F2EA] mb-1">
                What Reclaim does differently.
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A6A0] mb-4 pb-3 border-b border-[#2A2A2A]/60">
                A practical system built around how you actually work, struggle and recover.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-[#A6A6A0]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">A recovery-first companion</strong>
                    <span>An included companion app designed to help you interrupt distractions and return to your work.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">The Minimum Viable Day &amp; Relapse Recovery</strong>
                    <span>A way to maintain momentum and restart without turning one bad day into three lost weeks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">The Focus Profile Diagnostic</strong>
                    <span>Identify your distraction patterns and understand what is actually getting in your way.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#F5F2EA] font-medium block">A flexible 21-day system</strong>
                    <span>Manage tasks in smaller chunks, use the 3-3-3 Sprint and build routines that account for real-life interruptions.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#2A2A2A] text-[11px] font-mono text-[#9B6BD6] tracking-wide">
              RESULT: PRACTICAL STRUCTURE · FASTER RECOVERY · SUSTAINABLE RHYTHM.
            </div>
          </div>
        </div>

        {/* Additional USPs Strip */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] px-5 py-4 rounded-sm flex items-start gap-3.5" data-delay="260">
            <div className="w-8 h-8 rounded-sm bg-[#3F2466]/60 border border-[#6B3FA0]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#9B6BD6]">
              <Zap className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="text-[#F5F2EA] font-medium block mb-0.5">No complicated setup</strong>
              <span className="text-[#A6A6A0]">
                You don't need to spend hours configuring a productivity system before you can start using it.
              </span>
            </div>
          </div>

          <div className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] px-5 py-4 rounded-sm flex items-start gap-3.5" data-delay="320">
            <div className="w-8 h-8 rounded-sm bg-[#3F2466]/60 border border-[#6B3FA0]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#9B6BD6]">
              <BatteryLow className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong className="text-[#F5F2EA] font-medium block mb-0.5">Designed for low-energy days</strong>
              <span className="text-[#A6A6A0]">
                Your productivity shouldn't depend on waking up motivated every morning.
              </span>
            </div>
          </div>
        </div>

        {/* Recovery-First Philosophy Callout */}
        <div className="reveal-on-scroll mt-10 pt-10 border-t border-[#2A2A2A] max-w-3xl" data-delay="360">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#F5F2EA] leading-[1.22] mb-3 text-balance">
            You don't need another productivity system. You need a way back when your current one falls apart.
          </h3>
          <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
            Most productivity products focus on helping people start, organise and track their work. Reclaim puts equal emphasis on what happens when they get distracted, lose momentum or fall behind.
          </p>
        </div>
      </div>
    </section>
  );
};
