import React from 'react';
import SEONavigation from '@/components/SEONavigation';
import SEOHero from '@/components/SEOHero';
import SEOServices from '@/components/SEOServices';
import SEOProcess from '@/components/SEOProcess';
import SEOResults from '@/components/SEOResults';
import SEOPackages from '@/components/SEOPackages';
import SEOFAQ from '@/components/SEOFAQ';
import SEOContact from '@/components/SEOContact';
import SEOFooter from '@/components/SEOFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <SEONavigation />
      
      {/* Main Content */}
      <main id="main">
        {/* Hero Section */}
        <section id="hero">
          <SEOHero />
        </section>
        
        {/* Services Section */}
        <SEOServices />
        
        {/* Process Section */}
        <SEOProcess />
        
        {/* Results Section */}
        <SEOResults />
        
        {/* Packages Section */}
        <SEOPackages />
        
        {/* FAQ Section */}
        <SEOFAQ />
        
        {/* Contact Section */}
        <SEOContact />
      </main>
      
      {/* Footer */}
      <SEOFooter />
    </div>
  );
};

export default Index;
