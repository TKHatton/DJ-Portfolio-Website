
import React from 'react';
import { Mail, Linkedin, Youtube, Twitter } from 'lucide-react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <Section subtitle="Get In Touch" title="Let's Talk" variant="cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl text-brand-black/60 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to automate your workflow? Let's have a conversation
            about how we can build something that actually works for you.
          </p>

          <ContactForm />

          <div className="mt-16 pt-16 border-t border-brand-black/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-black">Direct Contact</h3>
                <div className="space-y-3 text-brand-black/60">
                  <p className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-orange" />
                    <a href="mailto:info@digitaljaywalking.com" className="hover:text-brand-orange transition-colors">
                      info@digitaljaywalking.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-brand-black">Follow Along</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-brand-black/40 hover:text-brand-orange transition-all hover:-translate-y-1">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="text-brand-black/40 hover:text-brand-orange transition-all hover:-translate-y-1">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-brand-black/40 hover:text-brand-orange transition-all hover:-translate-y-1">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
