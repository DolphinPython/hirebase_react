import React from 'react';
import { 
  Search, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const SEOFooter = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'SEO Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Case Studies', href: '#results' },
    { label: 'Pricing', href: '#packages' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Technical SEO',
    'On-Page Optimization',
    'Content Strategy',
    'Local SEO',
    'Link Building',
    'SEO Analytics'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Search className="w-6 h-6" />
              <span className="text-xl font-bold">Hire Best SEO Services</span>
            </div>
            
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Drive sustainable business growth with expert SEO strategies that put your website at the top of search results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-action" />
                <a 
                  href="mailto:hello@hirebestseoservices.com"
                  className="hover:text-action transition-colors"
                >
                  hello@hirebestseoservices.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-action" />
                <a 
                  href="tel:+15551234567"
                  className="hover:text-action transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-action mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 SEO Street<br />
                  Digital City, DC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm text-primary-foreground/80 hover:text-action transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">SEO Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="text-sm text-primary-foreground/80"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            
            <p className="text-sm text-primary-foreground/80">
              Get the latest SEO tips and industry insights delivered to your inbox.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-sm placeholder:text-primary-foreground/60 focus:ring-2 focus:ring-action focus:border-transparent"
                />
                <button className="px-4 py-2 bg-action hover:bg-action-hover text-action-foreground rounded-lg text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                No spam. Unsubscribe anytime.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-sm font-medium mb-3">Follow Us</div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-primary-foreground/10 hover:bg-action/20 rounded-lg transition-all duration-200 hover:scale-110"
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <div>
              © {currentYear} Hire Best SEO Services. All rights reserved.
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-action transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-action transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-action transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Hire Best SEO Services",
            "image": "https://hirebestseoservices.com/logo.png",
            "url": "https://hirebestseoservices.com",
            "telephone": "+1-555-123-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 SEO Street",
              "addressLocality": "Digital City",
              "addressRegion": "DC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "description": "Professional SEO services that drive sustainable business growth through expert search engine optimization strategies.",
            "serviceType": "Search Engine Optimization",
            "areaServed": "United States",
            "sameAs": [
              "https://facebook.com/hirebestseoservices",
              "https://twitter.com/hirebestseoservices",
              "https://linkedin.com/company/hirebestseoservices"
            ]
          })
        }}
      />
    </footer>
  );
};

export default SEOFooter;