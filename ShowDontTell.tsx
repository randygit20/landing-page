import React, { useState } from 'react';
import { CheckSquare, Square, AlertTriangle, Clock, Zap, Volume2, RefreshCw, ArrowRight } from 'lucide-react';
import { REAL_ENVIRONMENTS } from '../data/manualContent';
import { usePricing } from '../context/PricingContext';

interface ShowDontTellProps {
  onOpenCheckout: () => void;
}

const RECOVERY_TRIGGERS = [
  {
    id: 'scrolling',
    label: 'I got distracted and started scrolling.',
    cue: 'Put the phone in another room for 10 minutes. Urges fade once physical distance breaks the loop.'
  },
  {
    id: 'avoiding',
    label: "I've been avoiding an important task.",
    cue: 'Shrink the task into one visible 10-minute micro-step so starting carries zero intimidation.'
  },
  {
    id: 'overwhelmed',
    label: "I feel overwhelmed and don't know where to start.",
    cue: 'Pick only one next physical action on paper. Ignore the rest of the list for the next 10 minutes.'
  },
  {
    id: 'abandoned',
    label: "I've abandoned my routine.",
    cue: 'Drop the guilt. You do not restart from Day 1—deploy one 10-minute sprint right now to regain traction.'
  },
  {
    id: 'other',
    label: 'Something else happened.',
    cue: 'Name the interruption in one honest sentence on paper, clear your desk, and commit to 10 minutes.'
  }
];

const RECOVERY_STEPS = [
  {
    step: '1. Recognise',
    desc: 'Identify what caused the interruption.'
  },
  {
    step: '2. Reset',
    desc: 'Follow a short intervention to interrupt the behaviour and let go of the guilt.'
  },
  {
    step: '3. Refocus',
    desc: 'Choose one manageable task to resume.'
  },
  {
    step: '4. Restart',
    desc: 'Start a 10-minute focus session.'
  }
];

export const ShowDontTell: React.FC<ShowDontTellProps> = ({ onOpenCheckout }) => {
  const { pricing } = usePricing();
  const [activeTab, setActiveTab] = useState<'daily-reset' | 'distraction-calc' | 'emergency-mvd' | 'imperfect' | 'cheat-sheet' | 'recovery-companion'>('daily-reset');

  // Interactive checklist states for Emergency Protocol
  const [checkedSteps, setCheckedSteps] = useState<number[]>([0, 1]);
  const toggleStep = (idx: number) => {
    setCheckedSteps(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  // Interactive Focus Recovery Companion state
  const [selectedTriggerId, setSelectedTriggerId] = useState<string>(RECOVERY_TRIGGERS[0].id);

  const selectedTrigger = RECOVERY_TRIGGERS.find(t => t.id === selectedTriggerId) || RECOVERY_TRIGGERS[0];

  return (
    <section id="inside-the-manual" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>Show, Don't Just Tell</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">Direct Pages from the PDF</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-6 text-balance">
            Here's a sneak peek of exactly what you're getting.
          </h2>

          <p className="text-base sm:text-lg text-[#A6A6A0] leading-relaxed">
            What you need is a practical system with little daily actions, accountability, and recovery protocols.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="reveal-on-scroll flex flex-wrap items-center gap-2 mb-8 border-b border-[#2A2A2A] pb-3" data-delay="100">
          <button
            onClick={() => setActiveTab('daily-reset')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'daily-reset'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            The Daily Reset & 3-3-3 Sprint
          </button>
          <button
            onClick={() => setActiveTab('distraction-calc')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'distraction-calc'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            Day 1: Distraction Calculator
          </button>
          <button
            onClick={() => setActiveTab('emergency-mvd')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'emergency-mvd'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            The Minimum Viable Day & Reset
          </button>
          <button
            onClick={() => setActiveTab('imperfect')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'imperfect'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            Focus in Imperfect Environments (Chaos & Noise)
          </button>
          <button
            onClick={() => setActiveTab('cheat-sheet')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'cheat-sheet'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            Page 29 Quick Reference Card
          </button>
          <button
            onClick={() => setActiveTab('recovery-companion')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-sm transition-all cursor-pointer ${
              activeTab === 'recovery-companion'
                ? 'bg-[#111111] text-[#F5F2EA] border border-[#9B6BD6] shadow-xs'
                : 'bg-[#141414] text-[#A6A6A0] hover:text-[#F5F2EA] border border-[#2A2A2A]'
            }`}
          >
            Focus Recovery Companion app
          </button>
        </div>

        {/* Display Canvas Container */}
        <div className="reveal-on-scroll bg-[#111111] border border-[#2A2A2A] rounded-sm shadow-xl overflow-hidden" data-delay="180">
          {/* Header Bar */}
          <div className="bg-[#161616] border-b border-[#2A2A2A] px-6 py-3 flex items-center justify-between text-xs text-[#A6A6A0] font-mono">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B6BD6] inline-block" />
              <span className="text-[#F5F2EA]">RECLAIM YOUR FOCUS // 30-PAGE PDF EXTRACT</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[#A6A6A0]">
              <span className="text-[#9B6BD6]">EXPANDED EDITION</span>
            </div>
          </div>

          <div className="p-5 sm:p-10">
            {/* TAB 1: THE DAILY RESET & 3-3-3 SPRINT */}
            {activeTab === 'daily-reset' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold">
                      PAGE 14 & 15 OF THE PDF
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      The Daily Reset Protocol & The 3-3-3 Sprint
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Core Engine
                  </span>
                </div>

                <p className="text-sm text-[#A6A6A0] mb-6 leading-relaxed">
                  "This system combines a short planning ritual, a focused work block, and a brief evening reset. The goal is to make meaningful focused work easier to repeat."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="border border-[#2A2A2A] p-4 rounded-sm bg-[#161616]">
                    <span className="text-xs font-mono font-semibold text-[#9B6BD6] block mb-1">
                      PART 1 · 2 MINUTES
                    </span>
                    <div className="font-serif font-medium text-[#F5F2EA] text-base mb-2">
                      Morning Clarity Check
                    </div>
                    <p className="text-xs text-[#A6A6A0] leading-relaxed">
                      Done <em className="text-[#F5F2EA]">before</em> opening your phone. Answer 3 questions: What is my #1 task? Why does it matter? When exactly will I do it? Decide your priority before feeds decide for you.
                    </p>
                  </div>

                  <div className="border border-[#9B6BD6]/60 p-4 rounded-sm bg-[#1A1A1A] shadow-xs relative">
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#9B6BD6]" />
                    <span className="text-xs font-mono font-semibold text-[#9B6BD6] block mb-1">
                      PART 2 · 33 MINUTES
                    </span>
                    <div className="font-serif font-medium text-[#F5F2EA] text-base mb-2">
                      The 3-3-3 Work Sprint
                    </div>
                    <p className="text-xs text-[#A6A6A0] leading-relaxed">
                      One task only. Phone face down in another room. Why 33 minutes? Short enough to start even with zero motivation, long enough to get deep into real flow.
                    </p>
                  </div>

                  <div className="border border-[#2A2A2A] p-4 rounded-sm bg-[#161616]">
                    <span className="text-xs font-mono font-semibold text-[#9B6BD6] block mb-1">
                      PART 3 · 5 MINUTES
                    </span>
                    <div className="font-serif font-medium text-[#F5F2EA] text-base mb-2">
                      Evening Reset Ritual
                    </div>
                    <p className="text-xs text-[#A6A6A0] leading-relaxed">
                      1 thing completed today. 1 thing that pulled you off track. 1 task for tomorrow. Phone charging outside your bedroom. Close the day with intention instead of guilt.
                    </p>
                  </div>
                </div>

                <div className="bg-[#161616] border border-[#2A2A2A] p-4 rounded-sm text-xs sm:text-sm text-[#F5F2EA]">
                  <strong className="text-[#9B6BD6]">The Distraction Delay Technique (Page 17):</strong> When you feel the urge to check Instagram during a sprint, write down <em className="text-[#A6A6A0]">"Wanted to check Instagram at 3:04pm"</em> on paper and wait 10 minutes. Most urges disappear because they are about avoiding initial friction, not the app itself.
                </div>
              </div>
            )}

            {/* TAB 2: DISTRACTION CALCULATOR & AVOIDANCE WORKSHEET */}
            {activeTab === 'distraction-calc' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold">
                      PAGE 9 & 12 OF THE PDF
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      The Distraction Cost Calculator & Avoidance Worksheet
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Phase 1 Worksheet
                  </span>
                </div>

                <p className="text-sm text-[#A6A6A0] mb-6 leading-relaxed">
                  "Before you try to fix anything, you need to see the real cost of what is happening. Not 'I should be disciplined.' But 'I am throwing away my future one scroll at a time, and I can take it back.'"
                </p>

                <div className="border border-[#2A2A2A] rounded-sm p-5 bg-[#161616] space-y-4 mb-6">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9B6BD6]">
                    Distraction Cost Worksheet (Sample Extract)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#111111] p-3 border border-[#2A2A2A] rounded-sm">
                      <span className="text-[#A6A6A0] block">Distraction Source: TikTok / Reels</span>
                      <span className="font-medium text-[#F5F2EA]">14 hours lost per week</span>
                    </div>
                    <div className="bg-[#111111] p-3 border border-[#2A2A2A] rounded-sm">
                      <span className="text-[#A6A6A0] block">Distraction Source: X / WhatsApp Groups</span>
                      <span className="font-medium text-[#F5F2EA]">10 hours lost per week</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#A6A6A0] pt-2 border-t border-[#2A2A2A]">
                    <strong className="text-[#F5F2EA]">Total annual loss:</strong> 1,248 hours. <em className="text-[#9B6BD6]">"If I had those hours back, I could have built: a full portfolio, landed an internship, and learned full-stack development."</em>
                  </div>
                </div>

                <div className="border border-[#6B3FA0]/60 rounded-sm p-5 bg-[#3F2466]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#9B6BD6]">
                      Avoidance Pattern Worksheet (Day 4, Page 12)
                    </span>
                    <span className="text-[10px] font-mono text-[#9B6BD6] bg-[#3F2466] px-2 py-0.5 rounded-xs border border-[#6B3FA0]/60">
                      ROOT CAUSE AUDIT
                    </span>
                  </div>
                  <p className="text-xs text-[#A6A6A0] italic">
                    "You are not scrolling because you love TikTok. You are scrolling because something else feels worse. What are you actually running from? Fear of failure? Fear of starting imperfectly?"
                  </p>
                  <div className="p-3 bg-[#111111] rounded-sm border border-[#6B3FA0]/40 text-xs text-[#9B6BD6] font-mono">
                    "I scroll Instagram when I should be studying because studying feels too hard and I do not know where to start."
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: THE MINIMUM VIABLE DAY & EMERGENCY FOCUS PROTOCOL */}
            {activeTab === 'emergency-mvd' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold">
                      PAGE 15 & 16 OF THE PDF
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      The Minimum Viable Day & Emergency Focus Protocol
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Bad Day Armor
                  </span>
                </div>

                <p className="text-sm text-[#A6A6A0] mb-6 leading-relaxed">
                  "Some days will not have normal capacity. You may have exams, poor sleep, a power outage, unreliable internet, or simply a difficult day. The answer is not to abandon the system until tomorrow. Reduce the workload without abandoning the habit."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Left: Minimum Viable Day */}
                  <div className="border border-[#2A2A2A] p-5 rounded-sm bg-[#161616]">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9B6BD6] block mb-2">
                      The Minimum Viable Day Checklist
                    </span>
                    <ul className="space-y-3 text-xs sm:text-sm text-[#A6A6A0]">
                      <li className="flex items-start gap-2.5">
                        <CheckSquare className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                        <span><strong className="text-[#F5F2EA]">2 minutes:</strong> Complete the Morning Clarity Check.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckSquare className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                        <span><strong className="text-[#F5F2EA]">10 minutes:</strong> Work on one clearly defined micro-task.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckSquare className="w-4 h-4 text-[#9B6BD6] shrink-0 mt-0.5" />
                        <span><strong className="text-[#F5F2EA]">1 minute:</strong> Record what you completed and what interrupted you.</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-[#2A2A2A] text-xs text-[#A6A6A0]/80">
                      Prevents one difficult day from turning into a week of avoidance.
                    </div>
                  </div>

                  {/* Right: Emergency Focus Protocol */}
                  <div className="border border-[#2A2A2A] p-5 rounded-sm bg-[#161616]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F2EA]">
                        Emergency Focus Protocol (Interactive)
                      </span>
                      <span className="text-[11px] font-mono text-[#9B6BD6]">
                        {checkedSteps.length}/5 DONE
                      </span>
                    </div>
                    <div className="space-y-2 text-xs text-[#A6A6A0]">
                      {[
                        "1. Name the problem: Am I avoiding a task, reacting, or exhausted?",
                        "2. Remove easiest distraction: Phone away, close unnecessary tabs.",
                        "3. Make the task smaller: Write visible action taking ≤ 10 mins.",
                        "4. Start a 10-minute reset sprint: Commit only to next 10 mins.",
                        "5. Decide what happens next: Continue into full sprint or rest deliberately."
                      ].map((step, idx) => {
                        const isDone = checkedSteps.includes(idx);
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleStep(idx)}
                            className={`p-2.5 rounded-sm border cursor-pointer transition-colors flex items-center gap-2.5 ${
                              isDone
                                ? 'bg-[#1A1A1A] border-[#9B6BD6]/60 text-[#F5F2EA]'
                                : 'bg-[#111111] border-[#2A2A2A] text-[#A6A6A0] hover:border-[#3A3A3A]'
                            }`}
                          >
                            {isDone ? (
                              <CheckSquare className="w-3.5 h-3.5 text-[#9B6BD6] shrink-0" />
                            ) : (
                              <Square className="w-3.5 h-3.5 text-[#A6A6A0]/40 shrink-0" />
                            )}
                            <span className={isDone ? 'font-medium' : ''}>{step}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: FOCUS IN IMPERFECT ENVIRONMENTS */}
            {activeTab === 'imperfect' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold">
                      PAGE 16 & 17 OF THE PDF
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      Focus in Imperfect Environments (Real Everyday Conditions)
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Real Life Ready
                  </span>
                </div>

                <p className="text-sm text-[#A6A6A0] mb-6 leading-relaxed">
                  "The system is designed to work with real life, not only ideal conditions. You do not need a silent Scandinavian office to build discipline."
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {REAL_ENVIRONMENTS.map((env, i) => (
                    <div key={i} className="border border-[#2A2A2A] p-4 rounded-sm bg-[#161616]">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#F5F2EA] mb-2">
                        {env.situation.includes("NOISY") && <Volume2 className="w-4 h-4 text-[#9B6BD6]" />}
                        {env.situation.includes("POWER") && <Zap className="w-4 h-4 text-[#9B6BD6]" />}
                        {env.situation.includes("INTERRUPT") && <AlertTriangle className="w-4 h-4 text-[#9B6BD6]" />}
                        {env.situation.includes("SCHEDULE") && <Clock className="w-4 h-4 text-[#9B6BD6]" />}
                        <span>{env.situation}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#A6A6A0]">
                        {env.protocol.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#9B6BD6] font-mono text-[10px] mt-0.5">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 5: CHEAT SHEET (PAGE 29) */}
            {activeTab === 'cheat-sheet' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold">
                      PAGE 29 OF THE PDF
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      The 1-Page Quick Reference Desk Card
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Keep Open Daily
                  </span>
                </div>

                <div className="bg-[#0B0B0B] border border-[#2A2A2A] text-[#F5F2EA] p-6 rounded-sm space-y-5 font-mono text-xs">
                  <div className="border-b border-[#2A2A2A] pb-2 flex items-center justify-between">
                    <span className="text-[#9B6BD6] font-semibold">QUICK REFERENCE CARD · REFER BACK DAILY</span>
                    <span className="text-[#9B6BD6] text-[11px]">[PRINTABLE EXTRACT]</span>
                  </div>

                  <div>
                    <div className="text-[#F5F2EA] font-semibold mb-1">THE DAILY RESET PROTOCOL:</div>
                    <div className="text-[#A6A6A0] pl-3 space-y-1">
                      <div>• Morning (2 mins): Write your #1 task, why it matters, when you will do it. Before phone.</div>
                      <div>• Day (33 mins): One 3-3-3 sprint. Phone in another room. One task only. Timer running.</div>
                      <div>• Evening (5 mins): One win. One lesson. One task for tomorrow. Phone charging outside bedroom.</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#F5F2EA] font-semibold mb-1">WHEN DISTRACTION HITS:</div>
                    <div className="text-[#A6A6A0] pl-3 space-y-1">
                      <div>1. Write down the urge: 'Wanted to check [app] at [time].'</div>
                      <div>2. Wait 10 minutes before acting on it.</div>
                      <div>3. Most urges disappear. If not, take a 5-minute break — then return.</div>
                      <div>4. Never judge yourself for the urge. Judge only whether you acted on it.</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[#F5F2EA] font-semibold mb-1">WHEN YOU RELAPSE (DAY 18):</div>
                    <div className="text-[#A6A6A0] pl-3 space-y-1">
                      <div>1. Do not spiral. One bad day does not erase your progress.</div>
                      <div>2. Do not catch up. Just restart with one sprint.</div>
                      <div>3. Write one sentence about what caused it.</div>
                      <div>4. Do one sprint the same day. Restart momentum immediately.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: FOCUS RECOVERY COMPANION */}
            {activeTab === 'recovery-companion' && (
              <div className="max-w-3xl mx-auto font-sans">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2A2A2A]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#9B6BD6] font-semibold flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>RECLAIM · FOCUS RECOVERY</span>
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-[#F5F2EA] mt-1">
                      Lost your focus?
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 rounded text-[#9B6BD6]">
                    Companion Tool
                  </span>
                </div>

                <p className="text-sm text-[#A6A6A0] mb-6 leading-relaxed">
                  You don't have to lose the rest of your day. Let's get you back on track.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Left Column: What happened? */}
                  <div className="md:col-span-6 space-y-2.5">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9B6BD6] mb-2">
                      What happened?
                    </div>

                    <div className="space-y-2">
                      {RECOVERY_TRIGGERS.map((trigger) => {
                        const isSelected = trigger.id === selectedTriggerId;
                        return (
                          <button
                            key={trigger.id}
                            type="button"
                            onClick={() => setSelectedTriggerId(trigger.id)}
                            className={`w-full text-left px-3.5 py-2.5 rounded-sm border text-xs transition-all cursor-pointer flex items-center justify-between gap-2.5 ${
                              isSelected
                                ? 'bg-[#1A1A1A] border-[#9B6BD6] text-[#F5F2EA] font-medium shadow-xs'
                                : 'bg-[#161616] border-[#2A2A2A] text-[#A6A6A0] hover:border-[#3A3A3A] hover:text-[#F5F2EA]'
                            }`}
                          >
                            <span>{trigger.label}</span>
                            <span
                              className={`w-2 h-2 rounded-full shrink-0 ${
                                isSelected ? 'bg-[#9B6BD6]' : 'bg-[#2A2A2A]'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-3 p-3 bg-[#3F2466]/30 border border-[#6B3FA0]/50 rounded-sm text-xs text-[#F5F2EA]/90 leading-relaxed">
                      <span className="font-mono text-[#9B6BD6] uppercase tracking-wider text-[10px] block mb-1">
                        Immediate Reset Cue:
                      </span>
                      {selectedTrigger.cue}
                    </div>
                  </div>

                  {/* Right Column: Your recovery process */}
                  <div className="md:col-span-6 bg-[#161616] border border-[#2A2A2A] rounded-sm p-5">
                    <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-[#2A2A2A]">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F5F2EA]">
                        Your recovery process
                      </span>
                      <span className="text-[11px] font-mono text-[#9B6BD6]">4 STEPS</span>
                    </div>

                    <ol className="space-y-3.5">
                      {RECOVERY_STEPS.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#3F2466]/60 border border-[#6B3FA0]/50 flex items-center justify-center text-[10px] font-mono text-[#9B6BD6] font-semibold shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-[#F5F2EA]">
                              {item.step}
                            </div>
                            <p className="text-xs text-[#A6A6A0] mt-0.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    {/* CTA Button */}
                    <div className="mt-5 pt-4 border-t border-[#2A2A2A]">
                      <button
                        type="button"
                        onClick={onOpenCheckout}
                        className="w-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-colors rounded-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Get the manual and get access to the app</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="bg-[#161616] border-t border-[#2A2A2A] px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-[#A6A6A0]">
              The exact 30-page protocol, daily exercises, and worksheets ready for your workday.
            </span>
            <a
              href="https://selar.com/6hq21hc66q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-colors rounded-xs cursor-pointer whitespace-nowrap text-center"
            >
              Get Reclaim Your Focus — {pricing.displayPrice}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
