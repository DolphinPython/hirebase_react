import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';

const SEOContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({
        name: '',
        email: '',
        website: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@hirebestseoservices.com',
      link: 'mailto:hello@hirebestseoservices.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 SEO Street, Digital City, DC 12345',
      link: null
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM EST',
      link: null
    }
  ];

  const budgetOptions = [
    { value: '', label: 'Select your budget range' },
    { value: 'under-1k', label: 'Under $1,000/month' },
    { value: '1k-3k', label: '$1,000 - $3,000/month' },
    { value: '3k-5k', label: '$3,000 - $5,000/month' },
    { value: '5k-10k', label: '$5,000 - $10,000/month' },
    { value: 'over-10k', label: 'Over $10,000/month' }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6 text-balance">
            Ready to Grow Your Business with SEO?
          </h2>
          <p className="text-xl text-text-secondary text-balance">
            Get started with a free SEO consultation. We'll analyze your current performance and create a custom strategy for your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-surface-elevated border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Get Your Free SEO Analysis</h3>
                <p className="text-text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours with a custom SEO strategy.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-muted focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-muted focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Website Field */}
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-primary mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-muted focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                {/* Budget Field */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
                    Monthly Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Tell us about your SEO goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-primary placeholder:text-text-muted focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-vertical"
                    placeholder="Describe your business, current challenges, and what you'd like to achieve with SEO..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={formStatus === 'success'}
                >
                  {formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      Send My Free Analysis Request
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Form Status Messages */}
                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Please fill in all required fields.</span>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="flex items-center gap-2 text-success bg-success-light p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Thank you! We'll be in touch within 24 hours.</span>
                  </div>
                )}

                {/* Disclaimer */}
                <p className="text-xs text-text-muted">
                  * Required fields. By submitting this form, you agree to receive email communications from Hire Best SEO Services. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 bg-surface-elevated border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-action/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-action" />
                      </div>
                      <div>
                        <div className="font-medium text-primary">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-text-secondary hover:text-action transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-text-secondary">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Response Promise */}
            <Card className="p-6 bg-gradient-to-r from-success/5 to-action/5 border-success/20">
              <div className="space-y-4">
                <h4 className="font-bold text-primary">Our Response Promise</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Initial response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Free SEO analysis within 48 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    Custom strategy proposal within 1 week
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    No obligation to move forward
                  </li>
                </ul>
              </div>
            </Card>

            {/* Trust Indicators */}
            <Card className="p-6 bg-surface-elevated border-border">
              <h4 className="font-bold text-primary mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>5+ years of proven SEO expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>200+ successful client campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>90%+ client retention rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Transparent reporting & communication</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContact;