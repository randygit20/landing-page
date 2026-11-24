import React, { useState } from 'react';
import { FOCUS_PROFILES, FocusProfile } from '../data/manualContent';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { usePricing } from '../context/PricingContext';

interface ProblemSectionProps {
  onOpenCheckout?: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenCheckout }) => {
  const [selectedProfile, setSelectedProfile] = useState<FocusProfile>(FOCUS_PROFILES[0]);
  const { pricing } = usePricing();

  return (
    <section id="focus-profiles" className="py-20 md:py-28 border-b border-[#2A2A2A] bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* The Exact Focus Profile Diagnostic from Page 7-8 of the PDF */}
        <div className="reveal-on-scroll bg-[#161616] border border-[#2A2A2A] rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="mb-6 pb-4 border-b border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#9B6BD6] font-semibold mb-1">
                PAGE 7 OF THE GUIDE
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F5F2EA]">
                Identify Your Focus Profile (Which Distraction Pattern Sounds Most Like You?)
              </h3>
              <p className="text-xs text-[#A6A6A0] mt-1">
                Before Day 1, the guide has you diagnose your dominant pattern so you know which priority tools to emphasize.
              </p>
            </div>
            <span className="text-xs font-mono text-[#A6A6A0]/60 shrink-0">[PROFILES A — E]</span>
          </div>

          {/* Profile Selection Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {FOCUS_PROFILES.map((profile, pIdx) => {
              const isSelected = selectedProfile.id === profile.id;
              const delay = (pIdx + 1) * 80;
              return (
                <button
                  key={profile.id}
                  data-delay={delay}
                  onClick={() => setSelectedProfile(profile)}
                  className={`reveal-on-scroll text-left p-4 rounded-sm border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#9B6BD6] bg-[#1A1A1A] shadow-xs'
                      : 'border-[#2A2A2A] hover:border-[#3A3A3A] bg-[#111111]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-semibold text-[#9B6BD6]">
                        PROFILE {profile.code}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#9B6BD6]' : 'bg-[#2A2A2A]'}`} />
                    </div>
                    <div className="font-medium text-sm text-[#F5F2EA] mb-1">
                      {profile.name}
                    </div>
                    <p className="text-xs text-[#A6A6A0] line-clamp-3 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-medium text-[#9B6BD6]">
                    {isSelected ? 'Currently Viewing' : 'Select Profile →'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Breakdown for Selected Profile */}
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9B6BD6] bg-[#3F2466]/60 border border-[#6B3FA0]/40 px-2 py-0.5 rounded-xs font-mono">
                  Pattern Diagnosis · Profile {selectedProfile.code}
                </span>
              </div>
              <h4 className="font-serif text-xl font-medium text-[#F5F2EA] mb-2">
                {selectedProfile.name}
              </h4>
              <p className="text-sm text-[#9B6BD6]/95 leading-relaxed mb-3 italic">
                "{selectedProfile.quote}"
              </p>
              <p className="text-xs text-[#A6A6A0]">
                {selectedProfile.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#111111] border border-[#2A2A2A] p-4 rounded-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-2 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#9B6BD6] shrink-0" />
                <span>Your Priority Tools in the Guide:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#F5F2EA]">
                {selectedProfile.priorityTools.map((tool, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#9B6BD6] font-mono">→</span>
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Button Underneath Focus Profiles */}
          <div className="mt-8 pt-6 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#161616] p-5 rounded-sm">
            <div>
              <div className="font-medium text-sm text-[#F5F2EA]">
                Diagnosed with Profile {selectedProfile.code} ({selectedProfile.name})?
              </div>
              <div className="text-xs text-[#A6A6A0] mt-0.5">
                The 21-day protocol includes the exact step-by-step tools to reset this pattern.
              </div>
            </div>

            <a
              href="https://selar.com/6hq21hc66q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#9B6BD6] hover:bg-[#6B3FA0] transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] whitespace-nowrap shrink-0"
            >
              <span>Get the PDF Guide — {pricing.displayPrice}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
