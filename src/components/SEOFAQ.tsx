import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SEOFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy that typically shows initial improvements within 3-4 months, with significant results appearing after 6-12 months. However, technical fixes and local SEO improvements can often be seen sooner. The timeline depends on factors like competition level, current website condition, and the comprehensiveness of the SEO strategy implemented."
    },
    {
      question: "What makes your SEO services different from other agencies?",
      answer: "Our approach combines deep technical expertise with business-focused strategy. We provide transparent reporting, guaranteed communication schedules, and focus on ROI rather than just rankings. Every client gets a dedicated strategy tailored to their specific business goals, and we maintain a 90%+ client retention rate due to our results-driven approach and exceptional service."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "While we can't guarantee specific rankings (as search engines control their algorithms), we do guarantee our process and communication standards. We focus on driving qualified traffic and business growth rather than just rankings. Our typical clients see 70%+ of their target keywords ranking on the first page within 12 months, and we provide performance guarantees with optimization adjustments if targets aren't met."
    },
    {
      question: "How do you measure SEO success and ROI?",
      answer: "We track comprehensive metrics including organic traffic growth, keyword rankings, conversion rates, lead quality, and revenue attribution. Every client receives detailed monthly reports showing progress against baseline metrics. We also set up proper analytics tracking to measure the business impact of SEO, including lead generation, sales attribution, and customer acquisition cost improvements."
    },
    {
      question: "Can you help with local SEO for my business?",
      answer: "Absolutely! Local SEO is one of our specialties. We optimize your Google Business Profile, build local citations, manage reviews, and ensure NAP (Name, Address, Phone) consistency across the web. Our local SEO strategies help businesses dominate local search results, with most clients seeing significant improvements in local visibility within 2-3 months."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer satisfaction guarantees on all our packages. SEO Starter includes a 30-day satisfaction checkpoint, SEO Pro has a 60-day performance guarantee, and SEO Premium comes with a 90-day enterprise SLA. If you're not satisfied, we'll work to optimize the strategy or provide a refund according to the package terms. Our 90%+ client retention rate reflects our commitment to delivering results."
    },
    {
      question: "Do you work with businesses in competitive industries?",
      answer: "Yes, we specialize in competitive markets and have successfully helped businesses in industries like legal services, healthcare, real estate, finance, and e-commerce. Competitive industries often require more aggressive strategies, which is why we offer our SEO Pro and Premium packages with advanced link building, content marketing, and technical optimization to help you outrank established competitors."
    },
    {
      question: "Will you take over my existing SEO or start from scratch?",
      answer: "We can work with your existing SEO foundation or start fresh – it depends on your current situation. We always begin with a comprehensive audit to identify what's working, what's not, and what opportunities exist. If you have solid existing work, we'll build on it. If there are issues or penalties, we'll address those first. Our goal is to maximize your existing investments while implementing improvements."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary text-balance">
            Get answers to common questions about our SEO services, process, and what you can expect from working with us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <Card key={index} className="bg-background border-border hover:border-border-strong transition-all duration-300">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary pr-4 text-balance">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-action" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-0"
                  >
                    <div className="border-t border-border pt-4">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">
              Still Have Questions?
            </h3>
            <p className="text-lg text-text-secondary">
              Our SEO experts are here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-action hover:bg-action-hover text-action-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Schedule Free Consultation
              </button>
              <a 
                href="mailto:hello@hirebestseoservices.com"
                className="border-2 border-action text-action hover:bg-action hover:text-action-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQ;