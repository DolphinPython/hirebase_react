import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-seo-team.jpg';
import { ArrowRight, TrendingUp } from 'lucide-react';

const SEOHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-surface to-surface-elevated overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--action))_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-success-light text-success px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Proven SEO Results Since 2019
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight text-balance">
                Get Found by Your Ideal Customers with 
                <span className="text-action"> Expert SEO</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-text-secondary text-balance max-w-2xl">
                Drive qualified leads and sustainable growth with data-driven SEO strategies that put your business at the top of search results.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 py-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-success">124%</div>
                <div className="text-sm text-text-muted">Avg Traffic Growth</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-success">38%</div>
                <div className="text-sm text-text-muted">Lower Cost Per Lead</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-success">90%</div>
                <div className="text-sm text-text-muted">Client Retention Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View SEO Packages
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-text-muted mb-4">Trusted by 200+ businesses</p>
              <div className="flex items-center gap-8 opacity-60">
                {/* Trust Logos - Using SVG placeholders */}
                <div className="h-8 bg-text-muted/20 rounded px-6 flex items-center justify-center text-xs font-medium">
                  Google Partner
                </div>
                <div className="h-8 bg-text-muted/20 rounded px-6 flex items-center justify-center text-xs font-medium">
                  Certified Agency
                </div>
                <div className="h-8 bg-text-muted/20 rounded px-6 flex items-center justify-center text-xs font-medium">
                  5-Star Reviews
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional SEO team analyzing search rankings and organic traffic growth"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
                width={800}
                height={600}
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-sm text-text-muted">This Month</div>
                <div className="text-2xl font-bold text-success">+2,847</div>
                <div className="text-sm text-text-secondary">New Organic Visitors</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-action text-action-foreground p-3 rounded-lg shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOHero;