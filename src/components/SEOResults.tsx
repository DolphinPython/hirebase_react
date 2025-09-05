import React from 'react';
import { Card } from '@/components/ui/card';
import resultsImage from '@/assets/seo-results-graphic.jpg';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Search,
  Target,
  Star,
  ArrowUpRight 
} from 'lucide-react';

const SEOResults = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '+124%',
      label: 'Average Organic Traffic Growth',
      description: 'Clients see significant traffic increases within 6 months',
      color: 'success'
    },
    {
      icon: Users,
      value: '+89%',
      label: 'Qualified Lead Generation',
      description: 'More high-intent visitors converting to customers',
      color: 'action'
    },
    {
      icon: DollarSign,
      value: '38%',
      label: 'Reduction in Cost Per Lead',
      description: 'Lower acquisition costs through organic visibility',
      color: 'success'
    },
    {
      icon: Search,
      value: '73%',
      label: 'First Page Rankings',
      description: 'Target keywords ranking on Google\'s first page',
      color: 'action'
    }
  ];

  const caseStudies = [
    {
      industry: 'Local Service Business',
      challenge: 'Low local visibility and declining foot traffic',
      solution: 'Local SEO optimization and Google Business Profile enhancement',
      results: [
        '340% increase in local search visibility',
        '67% more phone calls from Google',
        '45% increase in store visits'
      ],
      timeframe: '4 months'
    },
    {
      industry: 'E-commerce Store',
      challenge: 'High PPC costs and limited organic reach',
      solution: 'Technical SEO overhaul and content marketing strategy',
      results: [
        '156% increase in organic revenue',
        '89% reduction in PPC dependency',
        '234% growth in product page rankings'
      ],
      timeframe: '6 months'
    },
    {
      industry: 'Professional Services',
      challenge: 'Intense competition and low brand awareness',
      solution: 'Authority building and thought leadership content',
      results: [
        '278% increase in qualified leads',
        '92% improvement in brand searches',
        '145% growth in referral traffic'
      ],
      timeframe: '8 months'
    }
  ];

  return (
    <section id="results" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-text-secondary text-balance">
            Our data-driven approach consistently delivers measurable improvements in search rankings, traffic, and business growth.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            
            return (
              <Card key={index} className="p-6 bg-background hover:bg-surface-elevated transition-all duration-300 hover:shadow-lg text-center group border-border hover:border-border-strong">
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl bg-${metric.color}/10 group-hover:bg-${metric.color}/20 transition-colors`}>
                    <IconComponent className={`w-8 h-8 text-${metric.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className={`text-3xl lg:text-4xl font-bold text-${metric.color}`}>
                      {metric.value}
                    </div>
                    <h3 className="font-semibold text-primary">
                      {metric.label}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {metric.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Case Studies Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={resultsImage}
              alt="SEO analytics dashboard showing improved search rankings and organic traffic growth"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
            
            {/* Floating Stats */}
            <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2 text-success font-semibold">
                <ArrowUpRight className="w-4 h-4" />
                <span>Rankings Up 73%</span>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Real Client Success Stories
              </h3>
              <p className="text-text-secondary mb-8">
                See how our strategic SEO approach has transformed businesses across different industries.
              </p>
            </div>

            {caseStudies.map((study, index) => (
              <Card key={index} className="p-6 bg-background border-border hover:border-border-strong hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-primary">{study.industry}</h4>
                    <span className="text-sm text-action font-medium bg-action/10 px-3 py-1 rounded-full">
                      {study.timeframe}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-text-muted">Challenge:</span>
                      <p className="text-sm text-text-secondary">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-text-muted">Solution:</span>
                      <p className="text-sm text-text-secondary">{study.solution}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-text-muted">Results:</span>
                      <ul className="space-y-1 mt-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-2 text-sm text-success">
                            <Star className="w-3 h-3 fill-current" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-primary/5 to-action/5 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-primary font-medium italic text-balance">
              "The SEO results have been incredible. We've seen a 200% increase in qualified leads and our organic traffic has tripled. The team's expertise and communication have been outstanding throughout the process."
            </blockquote>
            
            <div className="space-y-2">
              <div className="font-semibold text-primary">Sarah Johnson</div>
              <div className="text-text-muted">CEO, TechStart Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOResults;