import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter, Instagram, } from 'lucide-react';
import {  MapPin,} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl text-accent mb-4">FRD</h3>
            <p className="text-light-dimmed mb-4 max-w-md">
          Have a project idea or just want to exchange ideas?
          Send me a message—I’m happy to discuss and am here to help.
            </p>
            <div className="flex items-start">
                <div className="mr-4 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-light-dimmed">Tangerang city, indonesia</p>
                </div>
              </div>
            </div>

          <div>
            <h4 className="text-light font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-light-dimmed hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-light-dimmed hover:text-accent transition-colors">
                  Aboutme
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="text-light-dimmed hover:text-accent transition-colors">
                portofolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-dimmed hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-medium mb-4">sosial media</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/faridalfais"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-dimmed hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-farid-alfais-712716309/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-dimmed hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-dimmed hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/my_idchat?igsh=bXNneTF6ZHFpNWxj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-dimmed hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mychatbot27@gmail.com"
                className="text-light-dimmed hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark-lightest text-center text-light-dimmed text-sm">
          <p>&copy; {currentYear} FARID ALFAIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer