export interface FocusProfile {
  id: string;
  code: string;
  name: string;
  description: string;
  priorityTools: string[];
  quote: string;
}

export const FOCUS_PROFILES: FocusProfile[] = [
  {
    id: "scroller",
    code: "A",
    name: "The Scroller",
    description: "You repeatedly open social media, YouTube, messaging apps, or other feeds without a clear reason.",
    priorityTools: ["Phone Environment Redesign (Day 8)", "Distraction Delay Technique (Day 9)"],
    quote: "You pick up your phone to check the time and lose 40 minutes to reels."
  },
  {
    id: "avoider",
    code: "B",
    name: "The Avoider",
    description: "You know what needs to be done but repeatedly delay starting because the task feels difficult, vague, uncomfortable, or intimidating.",
    priorityTools: ["Task Breakdown Exercise (Day 3)", "Avoidance Pattern Worksheet (Day 4)"],
    quote: "The task feels too big, so facing it feels painful."
  },
  {
    id: "overthinker",
    code: "C",
    name: "The Overthinker",
    description: "You spend more time planning, researching, organizing, or preparing than actually doing the work.",
    priorityTools: ["Morning Clarity Check (Day 6)", "The 3-3-3 Sprint (Day 7)"],
    quote: "Endless tutorial watching and timetable making with zero actual execution."
  },
  {
    id: "task-switcher",
    code: "D",
    name: "The Task-Switcher",
    description: "You start one thing, check another, return to the first, then switch again without finishing anything.",
    priorityTools: ["Phone Environment Redesign (Day 8)", "Single-Task Sprints", "Distraction Delay (Day 9)"],
    quote: "Starting five things at once and ending the day with none of them finished."
  },
  {
    id: "inconsistent",
    code: "E",
    name: "The Inconsistent Worker",
    description: "You can have highly productive days but struggle to repeat them. Great on Monday, completely burned out by Wednesday.",
    priorityTools: ["Evening Reset (Day 17)", "Weekly Recalibration (Day 19)", "Minimum Viable Day", "Relapse Recovery (Day 18)"],
    quote: "Cycles of superhuman effort followed by weeks of abandoning the routine."
  }
];

export interface SprintPhase {
  phase: number;
  days: string;
  title: string;
  tagline: string;
  objective: string;
  keyDeliverable: string;
  sampleDays: {
    day: number | string;
    title: string;
    exercise: string;
    actionTime: string;
  }[];
}

export const SPRINT_PHASES: SprintPhase[] = [
  {
    phase: 1,
    days: "Days 1–5",
    title: "PHASE 1 — DIAGNOSE",
    tagline: "Build the self-awareness that makes everything else work.",
    objective: "Understand why you are actually stuck. Map your distraction patterns and see where your time actually goes without judgment.",
    keyDeliverable: "Your Personal Baseline & Avoidance Map",
    sampleDays: [
      {
        day: 1,
        title: "The Distraction Cost Calculator",
        exercise: "Calculate hours lost per week, month, and year to specific feeds (TikTok, YouTube, X, WhatsApp). Confront what you could have built.",
        actionTime: "10 mins"
      },
      {
        day: 2,
        title: "Map Your Danger Times",
        exercise: "Map your 3 highest-risk times (morning phone grab, 2–4pm slump, late night) and identify the real emotional trigger behind each.",
        actionTime: "10 mins"
      },
      {
        day: 3,
        title: "The Task Breakdown Exercise",
        exercise: "Procrastination comes from vagueness, not laziness. Break your avoided project into tiny 15-to-30-minute visible micro-actions.",
        actionTime: "15 mins"
      },
      {
        day: 4,
        title: "Understand Your Avoidance Pattern",
        exercise: "Write honest sentences: 'I use [distraction] when I should be [task] because [real reason].' Name what you are running from.",
        actionTime: "10 mins"
      }
    ]
  },
  {
    phase: 2,
    days: "Days 6–16",
    title: "PHASE 2 — APPLY",
    tagline: "Follow the daily system. Do the work. Build new attention patterns one day at a time.",
    objective: "Implement the Daily Reset Protocol: a 2-minute morning clarity check before your phone, 33-minute focused work sprints, and a 5-minute evening reset.",
    keyDeliverable: "The 3-3-3 Work Sprint & Phone Redesign",
    sampleDays: [
      {
        day: 6,
        title: "The Morning Clarity Check",
        exercise: "Write 3 things before opening your phone: #1 task, why it matters, when you will do it. Decide your priority before the world decides for you.",
        actionTime: "2 mins"
      },
      {
        day: 7,
        title: "Your First 3-3-3 Sprint",
        exercise: "The engine of the system: 33 minutes of single-task work. Phone in another room. Short enough to start without motivation, long enough for real work.",
        actionTime: "33 mins"
      },
      {
        day: 8,
        title: "The Phone Environment Redesign",
        exercise: "Delete TikTok during sprints, move social apps to page 3, turn off all notifications except calls, charge phone outside your bedroom.",
        actionTime: "15 mins"
      },
      {
        day: 9,
        title: "The Distraction Delay Technique",
        exercise: "Write down the urge: 'Wanted to check Instagram at 3:04pm.' Wait 10 minutes before acting. Insert agency between urge and action.",
        actionTime: "Real-time"
      }
    ]
  },
  {
    phase: 3,
    days: "Days 17–21",
    title: "PHASE 3 — LOCK IN",
    tagline: "Build habits that survive real life — bad weeks, low energy, power outages, and family pressure.",
    objective: "Learn to handle relapse days without spiraling. Lock in the Minimum Viable Day and build a system you will continue using for months.",
    keyDeliverable: "Your Personal Focus System & Quick Reference Card",
    sampleDays: [
      {
        day: 17,
        title: "The Evening Reset Ritual",
        exercise: "5 minutes before bed: 1 thing completed, 1 thing that pulled you off track, #1 task for tomorrow, phone charging outside your bedroom.",
        actionTime: "5 mins"
      },
      {
        day: 18,
        title: "How to Handle Relapse Days",
        exercise: "The Relapse Recovery Protocol: Do not spiral. Do not try to catch up with 6 sprints. Write 1 honest sentence on trigger and do 1 sprint same day.",
        actionTime: "10 mins"
      },
      {
        day: 19,
        title: "The Weekly Recalibration",
        exercise: "Every Sunday for 15 minutes: Review completed sprints, select the #1 weekly outcome, chunk it into daily actions, and block sprint calendar times.",
        actionTime: "15 mins"
      },
      {
        day: 20,
        title: "Expanding Your Capacity",
        exercise: "Progress naturally from 33-minute sprints (Weeks 1–3) to 45-minute sessions (Weeks 4–6) to 60–90 minute deep work (Weeks 7–12).",
        actionTime: "Ongoing"
      }
    ]
  }
];

export interface RealEnvironmentTip {
  situation: string;
  protocol: string[];
}

export const REAL_ENVIRONMENTS: RealEnvironmentTip[] = [
  {
    situation: "IF YOUR HOME IS NOISY",
    protocol: [
      "Identify the quietest predictable window you have (early morning or late night).",
      "Tell people around you when you are unavailable, when possible.",
      "Use headphones or earplugs if they genuinely help.",
      "Choose tasks that tolerate noise for noisy periods, and reserve demanding deep work for quiet windows."
    ]
  },
  {
    situation: "IF POWER OR INTERNET IS UNRELIABLE",
    protocol: [
      "Download required materials, PDFs, tutorials, or code docs before your focus session.",
      "Keep an offline task list for work that does not require an active internet connection.",
      "Charge essential devices immediately when power is available.",
      "Never let a technical interruption or power cut automatically become an excuse for a social media scroll session."
    ]
  },
  {
    situation: "IF FAMILY OR OTHER RESPONSIBILITIES INTERRUPT YOU",
    protocol: [
      "Plan focus windows around predictable responsibilities instead of pretending interruptions will never happen.",
      "Use shorter minimum sprints (10-minute Minimum Viable Day) when necessary.",
      "When interrupted, write down the exact next action on paper before switching tasks so returning is effortless."
    ]
  },
  {
    situation: "IF YOUR SCHEDULE CHANGES CONSTANTLY",
    protocol: [
      "Do not build your system around a rigid clock.",
      "Anchor your Morning Clarity Check to the beginning of your active day, whenever you wake up.",
      "Schedule your 33-minute sprint around the most realistic available window in your actual day."
    ]
  }
];

export interface DifferentiationItem {
  category: string;
  typicalProblem: string;
  manualDifference: string;
}

export const DIFFERENTIATION_DATA: DifferentiationItem[] = [
  {
    category: "Motivation Videos & Cold Showers",
    typicalProblem: "Gives you a 2-hour burst of emotional hype that completely evaporates the moment fatigue or confusion sets in.",
    manualDifference: "Zero motivation cheerleading. Eliminates procrastination not by force, but by design: small chunks, clear next actions, and pre-committed rules."
  },
  {
    category: "Complex Productivity Apps & Notion Setups",
    typicalProblem: "Turns into 'procrastination through organizing': spending hours setting up aesthetic timetables, databases, and color codes instead of actually doing the work.",
    manualDifference: "100% tool-agnostic. Requires zero software. Works in a simple PDF, on a sheet of paper beside your desk, or in a physical notebook."
  },
  {
    category: "Extreme 'Dopamine Detoxes'",
    typicalProblem: "Requires unrealistic monastic isolation (no screens, no music, no messaging) that immediately shatters the minute you return to real work, Slack, or family.",
    manualDifference: "Built for real life. Teaches focus inside imperfect conditions—with WhatsApp, with noisy homes, with power cuts, with family duties, and real deadlines."
  },
  {
    category: "Heavy 400-Page Academic Books",
    typicalProblem: "Fills hundreds of pages with laboratory rat studies and neuroscience theory, but leaves you stranded at 2:30 PM with 20 open tabs.",
    manualDifference: "A direct, 30-page tactical field protocol. Each day takes 10–15 minutes. Includes exact worksheets, danger maps, and quick reference cards."
  },
  {
    category: "Rigid 'Streak' Habit Systems",
    typicalProblem: "Assumes you are a robot with 100% daily energy. Missing one single day triggers shame, self-blame, and a complete downward spiral.",
    manualDifference: "Setback-hardened architecture. Includes the 'Relapse Recovery Protocol' and 'Minimum Viable Day' specifically designed for bad days."
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "1. What exactly is Reclaim Your Focus?",
    answer: "Reclaim Your Focus is a practical 21-day productivity reset designed to help you understand your distractions, break the procrastination cycle and build better systems for getting important work done. It's a digital field manual with daily lessons, exercises, worksheets and practical recovery strategies you can apply to your everyday life."
  },
  {
    question: "2. Who is this programme for?",
    answer: "It's designed for ambitious young Africans, particularly students, freelancers, creators and early-career professionals who struggle with procrastination, phone distractions and staying consistent with their goals.\n\nYou don't need to be particularly productive already. The programme is designed to help you build those skills."
  },
  {
    question: "3. How much time will I need each day?",
    answer: "You don't need to dedicate several hours to the programme. The daily lessons and exercises are designed to fit around your existing responsibilities. You'll also apply what you learn to the actual work you're trying to accomplish."
  },
  {
    question: "4. What is the 3-3-3 Sprint?",
    answer: "It's a structured 33-minute focus method included in the programme. It gives you a practical way to approach focused work, especially when you're struggling to get started or find it difficult to maintain momentum."
  },
  {
    question: "5. What happens if I miss a day or fall off track?",
    answer: "You don't have to start over every time you miss a day. Reclaim Your Focus includes strategies such as the Minimum Viable Day and Relapse Recovery to help you manage setbacks, regain momentum and return to your priorities without abandoning the entire programme."
  },
  {
    question: "6. Will this work if I have noisy roommates, unreliable electricity or unstable internet?",
    answer: "That's one of the realities the programme takes into account. Reclaim isn't built around the assumption that you'll always have a quiet room, uninterrupted internet or perfect working conditions. It focuses on building practical systems that can accommodate everyday interruptions."
  },
  {
    question: "7. Is this just another productivity planner or motivational ebook?",
    answer: "No. It's designed as a practical field manual rather than something you simply read and forget. You'll work through daily lessons, identify your distraction patterns, complete exercises and develop strategies for managing your attention and recovering when you lose focus."
  },
  {
    question: "8. Does my purchase include the companion app?",
    answer: "Yes, your purchase includes access to the Reclaim focus-recovery companion app. It's designed to complement the PDF by giving you additional support when you're distracted or struggling to get back to work."
  },
  {
    question: "9. Do I need any previous productivity experience?",
    answer: "Not at all. You don't need to have used productivity systems, habit trackers or focus apps before. The programme starts by helping you understand your current habits and builds from there."
  },
  {
    question: "10. What format will I receive after purchasing?",
    answer: "You'll receive a digital PDF that you can access on your phone, tablet or computer. You can also print it if you prefer working through physical worksheets. You'll receive access to the companion app as part of the offer."
  },
  {
    question: "11. How much does it cost?",
    answer: "Reclaim Your Focus costs ₦5,900. It's a one-time purchase, not a monthly subscription."
  },
  {
    question: "12. What if I purchase it and don't find it useful?",
    answer: "You're covered by our 30-day guarantee. Go through the first seven days, complete the exercises and genuinely try applying the system. If you don't find it useful, contact us within 30 days of purchase to request a refund, subject to the stated guarantee conditions."
  }
];
