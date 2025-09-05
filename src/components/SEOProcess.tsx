import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Search, 
  BarChart3, 
  Wrench, 
  TrendingUp, 
  Target,
  CheckCircle 
} from 'lucide-react';

const SEOProcess = () => {
  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: 'SEO Audit & Analysis',
      duration: 'Week 1',
      description: 'Comprehensive analysis of your current SEO performance, technical issues, and competitive landscape.',
      deliverables: [
        'Technical SEO audit report',
        'Keyword opportunity analysis',
        'Competitor benchmarking',
        'Site architecture review'
      ],
      outcome: 'Clear roadmap for SEO improvements and growth opportunities'
    },
    {
      number: '02',
      icon: Target,
      title: 'Strategy & Planning',
      duration: 'Week 2',
      description: 'Custom SEO strategy development based on your business goals and market opportunities.',
      deliverables: [
        'Custom SEO strategy document',
        'Keyword targeting plan',
        'Content calendar outline',
        'Priority action items'
      ],
      outcome: 'Data-driven strategy aligned with business objectives'
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Technical Implementation',
      duration: 'Weeks 3-4',
      description: 'Execute critical technical fixes and optimizations to improve site performance and crawlability.',
      deliverables: [
        'Technical SEO fixes',
        'Site speed optimization',
        'Schema markup implementation',
        'Mobile optimization'
      ],
      outcome: 'Solid technical foundation for sustained SEO growth'
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Content Optimization',
      duration: 'Weeks 5-8',
      description: 'Optimize existing content and create new high-value content targeting your key opportunities.',
      deliverables: [
        'On-page SEO optimization',
        'New content creation',
        'Internal linking strategy',
        'Meta tag optimization'
      ],
      outcome: 'Improved relevancy and user engagement signals'
    },
    {
      number: '05',
      icon: TrendingUp,
      title: 'Authority Building',
      duration: 'Ongoing',
      description: 'Build domain authority through strategic link acquisition and digital PR campaigns.',
      deliverables: [
        'High-quality backlink acquisition',
        'Digital PR outreach',
        'Local citation building',
        'Brand mention optimization'
      ],
      outcome: 'Increased domain authority and search visibility'
    },
    {
      number: '06',
      icon: CheckCircle,
      title: 'Monitor & Optimize',
      duration: 'Ongoing',
      description: 'Continuous monitoring, reporting, and optimization to maximize ROI and performance.',
      deliverables: [
        'Monthly performance reports',
        'Ranking monitoring',
        'Traffic analysis',
        'Strategy refinements'
      ],
      outcome: 'Sustained growth and competitive advantage'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Our Proven SEO Process
          </h2>
          <p className="text-xl text-text-secondary text-balance">
            A systematic approach that delivers measurable results through strategic planning, expert execution, and continuous optimization.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="space-y-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-action to-success rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 p-8 bg-surface-elevated border-border hover:border-border-strong transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                        <span className="px-3 py-1 bg-action/10 text-action text-sm font-medium rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>

                    {/* Deliverables & Outcome */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-start gap-2 text-sm text-text-muted">
                              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Expected Outcome:</h4>
                        <p className="text-sm text-text-secondary italic bg-success/5 p-4 rounded-lg border-l-4 border-success">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-border mt-24" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">
              Ready to Start Your SEO Journey?
            </h3>
            <p className="text-lg text-text-secondary">
              Let's discuss how our proven process can drive sustainable growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-action hover:bg-action-hover text-action-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
              >
                Book Free Consultation
              </button>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-action text-action hover:bg-action hover:text-action-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                See Pricing Options
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;