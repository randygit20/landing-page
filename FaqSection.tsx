import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/manualContent';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-28 border-b border-[#2A2A2A] bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="reveal-on-scroll mb-10 md:mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B6BD6] mb-3 font-mono">
            <span>Direct Answers</span>
            <span aria-hidden="true" className="text-[#A6A6A0]/40">·</span>
            <span className="text-[#A6A6A0] normal-case tracking-normal">No Hidden Surprises</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#F5F2EA] leading-[1.2] mb-4 text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#A6A6A0] leading-relaxed">
            Specific, honest answers about format, compatibility, and what to expect during the 21 days.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#2A2A2A] border-t border-b border-[#2A2A2A]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const delay = Math.min((idx + 1) * 50, 350);
            return (
              <div key={idx} className="reveal-on-scroll py-4 sm:py-5" data-delay={delay}>
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left flex items-center justify-between gap-4 py-2 cursor-pointer transition-colors group"
                >
                  <span className="font-serif text-base sm:text-xl font-medium text-[#F5F2EA] group-hover:text-[#9B6BD6] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 rounded-sm bg-[#111111] border border-[#2A2A2A] flex items-center justify-center text-[#A6A6A0] shrink-0 group-hover:text-[#F5F2EA] transition-colors">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#9B6BD6]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#A6A6A0]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-xs sm:text-sm text-[#A6A6A0] leading-relaxed max-w-3xl space-y-2.5 animate-in fade-in duration-150">
                    {item.answer.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
