import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  FileText, 
  Settings, 
  MapPin, 
  Link2, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';

const SEOServices = () => {
  const services = [
    {
      icon: Settings,
      title: 'Technical SEO',
      description: 'Optimize your website\'s foundation for search engines with comprehensive technical audits and fixes.',
      features: [
        'Core Web Vitals optimization',
        'Site speed improvements',
        'Mobile responsiveness',
        'Schema markup implementation',
        'XML sitemap management'
      ],
      color: 'action'
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description: 'Maximize your page relevancy and user experience with strategic content optimization.',
      features: [
        'Keyword research & mapping',
        'Title & meta optimization',
        'Content structure improvement',
        'Internal linking strategy',
        'Image optimization'
      ],
      color: 'success'
    },
    {
      icon: Search,
      title: 'Content Strategy',
      description: 'Create high-value content that ranks well and converts visitors into customers.',
      features: [
        'Content gap analysis',
        'Editorial calendar planning',
        'SEO copywriting',
        'Blog post optimization',
        'Landing page content'
      ],
      color: 'primary'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers to your business.',
      features: [
        'Google Business Profile optimization',
        'Local citation building',
        'Review management',
        'Local keyword targeting',
        'NAP consistency'
      ],
      color: 'action'
    },
    {
      icon: Link2,
      title: 'Link Building',
      description: 'Earn high-quality backlinks that boost your authority and search rankings.',
      features: [
        'Digital PR campaigns',
        'Guest posting outreach',
        'Resource page inclusion',
        'Broken link building',
        'Competitor analysis'
      ],
      color: 'success'
    },
    {
      icon: TrendingUp,
      title: 'SEO Analytics',
      description: 'Track, measure, and optimize your SEO performance with detailed reporting.',
      features: [
        'Ranking monitoring',
        'Traffic analysis',
        'Conversion tracking',
        'Competitor insights',
        'ROI reporting'
      ],
      color: 'primary'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Comprehensive SEO Services That Drive Results
          </h2>
          <p className="text-xl text-text-secondary text-balance">
            Our full-service SEO approach covers every aspect of search optimization to maximize your online visibility and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="group p-8 bg-background hover:bg-surface-elevated transition-all duration-300 hover:shadow-xl border-border hover:border-border-strong">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-${service.color}/10`}>
                    <IconComponent className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary group-hover:text-action transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-text-secondary">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm text-text-muted">
                          <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-action/5 to-success/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            Ready to Dominate Search Results?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let our SEO experts create a custom strategy that drives qualified traffic and grows your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free SEO Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Pricing Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOServices;