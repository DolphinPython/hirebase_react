import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Trophy 
} from 'lucide-react';

const SEOPackages = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const packages = [
    {
      name: 'SEO Starter',
      badge: 'Most Popular',
      icon: Shield,
      description: 'Perfect for small businesses getting started with SEO',
      monthlyPrice: 997,
      annualPrice: 897, // 10% discount
      idealFor: 'Local businesses, startups, small websites (under 50 pages)',
      features: [
        'Comprehensive SEO audit',
        'Keyword research (up to 25 keywords)',
        'On-page optimization (10 pages)',
        'Basic technical SEO fixes',
        'Google Business Profile optimization',
        'Local citation building (20 citations)',
        'Basic schema markup implementation',
        'Monthly ranking reports',
        'Email support',
        'Quarterly strategy review'
      ],
      deliverables: 'Monthly reports, technical fixes, content recommendations',
      kpis: 'Keyword rankings, organic traffic, local visibility',
      guarantee: '30-day satisfaction checkpoint with full refund option'
    },
    {
      name: 'SEO Pro',
      badge: 'Best Value',
      icon: Zap,
      description: 'Accelerated growth for established businesses',
      monthlyPrice: 1997,
      annualPrice: 1797, // 10% discount
      idealFor: 'Growing businesses, e-commerce sites, competitive markets',
      features: [
        'Everything in SEO Starter',
        'Advanced keyword research (up to 75 keywords)',
        'On-page optimization (25 pages)',
        'Advanced technical SEO optimization',
        'Content strategy & brief creation (4 pieces/month)',
        'Link building campaign (5 high-quality links/month)',
        'Competitor analysis & monitoring',
        'Local SEO (50 citations)',
        'Conversion rate optimization basics',
        'Bi-weekly check-ins',
        'Priority phone support',
        'Advanced schema markup',
        'Page speed optimization',
        'Mobile optimization'
      ],
      deliverables: 'Bi-weekly reports, content briefs, technical audits, link building',
      kpis: 'Traffic growth, lead generation, conversion improvements, ROI tracking',
      guarantee: '60-day performance guarantee with optimization adjustments'
    },
    {
      name: 'SEO Premium',
      badge: 'Enterprise',
      icon: Trophy,
      description: 'Aggressive scaling for serious growth-focused businesses',
      monthlyPrice: 3997,
      annualPrice: 3597, // 10% discount
      idealFor: 'Large businesses, e-commerce, highly competitive industries',
      features: [
        'Everything in SEO Pro',
        'Unlimited keyword targeting',
        'On-page optimization (unlimited pages)',
        'Enterprise technical SEO',
        'Content operations (8+ pieces/month)',
        'Aggressive link building (15+ links/month)',
        'Digital PR campaigns',
        'Advanced local SEO (unlimited citations)',
        'Programmatic SEO guidance',
        'Custom landing page optimization',
        'Weekly strategy calls',
        'Dedicated account manager',
        'Advanced analytics setup',
        'Conversion funnel optimization',
        'International SEO (if applicable)',
        'Crisis management support'
      ],
      deliverables: 'Weekly reports, custom content, advanced technical work, PR campaigns',
      kpis: 'Revenue attribution, market share growth, enterprise KPIs',
      guarantee: '90-day enterprise SLA with performance benchmarks'
    }
  ];

  const comparison = [
    'SEO Audit & Analysis',
    'Keyword Research',
    'On-Page Optimization',
    'Technical SEO',
    'Content Strategy',
    'Link Building',
    'Local SEO',
    'Reporting Frequency',
    'Support Level',
    'Account Management'
  ];

  const getPrice = (pkg: typeof packages[0]) => {
    return billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.annualPrice;
  };

  const getSavings = (pkg: typeof packages[0]) => {
    if (billingCycle === 'annual') {
      const monthlyCost = pkg.monthlyPrice * 12;
      const annualCost = pkg.annualPrice * 12;
      return monthlyCost - annualCost;
    }
    return 0;
  };

  return (
    <section id="packages" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            SEO Packages Built for Growth
          </h2>
          <p className="text-xl text-text-secondary text-balance mb-8">
            Choose the perfect SEO package to match your business goals and budget. All plans include our proven methodology and transparent reporting.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-surface p-1 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-action text-action-foreground shadow-md'
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-action text-action-foreground shadow-md'
                  : 'text-text-muted hover:text-primary'
              }`}
            >
              Annual
              <Badge className="ml-2 bg-success text-success-foreground">Save 10%</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const isPopular = pkg.badge === 'Most Popular';
            const price = getPrice(pkg);
            const savings = getSavings(pkg);
            
            return (
              <Card 
                key={index} 
                className={`relative p-8 bg-surface-elevated hover:bg-background transition-all duration-300 hover:shadow-xl border-border hover:border-border-strong ${
                  isPopular ? 'ring-2 ring-action transform scale-105' : ''
                }`}
              >
                {pkg.badge && (
                  <Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                    isPopular ? 'bg-action text-action-foreground' : 'bg-success text-success-foreground'
                  }`}>
                    {pkg.badge}
                  </Badge>
                )}
                
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-3 rounded-xl bg-action/10">
                      <IconComponent className="w-8 h-8 text-action" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                      <p className="text-text-secondary">{pkg.description}</p>
                    </div>
                    
                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-primary">
                        ${price.toLocaleString()}
                        <span className="text-lg text-text-muted font-normal">/month</span>
                      </div>
                      {savings > 0 && (
                        <div className="text-sm text-success font-medium">
                          Save ${savings.toLocaleString()}/year
                        </div>
                      )}
                    </div>
                    
                    <div className="text-sm text-text-muted bg-surface p-3 rounded-lg">
                      <strong>Ideal for:</strong> {pkg.idealFor}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div>
                      <span className="text-xs font-medium text-text-muted">DELIVERABLES:</span>
                      <p className="text-sm text-text-secondary">{pkg.deliverables}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-text-muted">KEY METRICS:</span>
                      <p className="text-sm text-text-secondary">{pkg.kpis}</p>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-success mb-1">Satisfaction Guarantee</div>
                        <div className="text-xs text-text-muted">{pkg.guarantee}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={isPopular ? "hero" : "primary"} 
                    size="lg" 
                    className="w-full group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started with {pkg.name}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Package Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 font-semibold text-primary">Features</th>
                  <th className="text-center py-4 font-semibold text-primary">Starter</th>
                  <th className="text-center py-4 font-semibold text-primary">Pro</th>
                  <th className="text-center py-4 font-semibold text-primary">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 text-text-secondary">{feature}</td>
                    <td className="text-center py-4">
                      <Check className="w-4 h-4 text-success mx-auto" />
                    </td>
                    <td className="text-center py-4">
                      <Check className="w-4 h-4 text-success mx-auto" />
                    </td>
                    <td className="text-center py-4">
                      <Check className="w-4 h-4 text-success mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary">
              Not Sure Which Package Is Right for You?
            </h3>
            <p className="text-lg text-text-secondary">
              Schedule a free consultation and we'll recommend the perfect SEO strategy for your business goals and budget.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOPackages;