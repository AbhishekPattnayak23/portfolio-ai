import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface FooterLink {
  title: string;
  links: {
    text: string;
    url: string;
    external?: boolean;
  }[];
}

interface FooterProps {
  siteTitle: string;
  copyright?: string;
  socialLinks?: SocialLink[];
  footerLinks?: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({
  siteTitle,
  copyright = ` ${new Date().getFullYear()} ${siteTitle}. All rights reserved.`,
  socialLinks = [],
  footerLinks = [],
}) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Site Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <h2 className="text-xl font-bold">{siteTitle}</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Thanks for visiting my portfolio. Feel free to reach out if you'd like to connect!
            </p>
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          {copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
