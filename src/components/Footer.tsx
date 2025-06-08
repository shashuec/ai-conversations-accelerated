
import React from 'react';
import { MessageSquare } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API", "Security"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Help Center", "Webinars"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Privacy Policy", "Terms of Service", "Contact"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">ConversAI Labs</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-First Lead Management Platform. Qualify, nurture, and convert across every channel.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <span className="text-sm font-semibold">Yt</span>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 ConversAI Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
