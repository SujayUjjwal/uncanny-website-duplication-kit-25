
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { Icon: Phone, text: "+91-91597730898", action: () => window.open('tel:+919159773089') },
    { Icon: Mail, text: "sumitneetbooking@gmail.com", action: () => window.open('mailto:sumitneetbooking@gmail.com') },
    { Icon: MapPin, text: "www.sumitneetcoaching@gmail.com", action: () => window.open('mailto:sumitneetcoaching@gmail.com') },
    { Icon: Mail, text: "www.joharinform@gmail.com", action: () => window.open('mailto:joharinform@gmail.com') }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted:', formData);
    
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 animate-breathing ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-gray-600 transition-all duration-700 animate-gentle-float ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms', animationDuration: '5s' }}>
            Best Place to learning for coaching be the future to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" ref={contentRef}>
          {/* Contact Info */}
          <div className={`transition-all duration-700 animate-gentle-sway ${
            contentVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
          }`} style={{ animationDuration: '6s' }}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 animate-breathing">Feel Free To Contact</h3>
            <p className="text-gray-600 mb-8 animate-gentle-float" style={{ animationDuration: '4s' }}>
              You may easily get in touch with us if you have any questions. Please feel free.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, text, action }, index) => (
                <button
                  key={index}
                  onClick={action}
                  className={`flex items-center space-x-3 group transition-all duration-500 w-full text-left animate-bob ${
                    contentVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${(index * 100) + 200}ms`,
                    animationDuration: `${2 + index * 0.2}s`
                  }}
                >
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center transition-all duration-300 animate-orbital"
                       style={{ animationDuration: `${8 + index * 2}s` }}>
                    <Icon className="w-4 h-4 text-white transition-transform duration-300 animate-rotate-slow"
                          style={{ animationDuration: `${10 + index * 3}s` }} />
                  </div>
                  <span className="text-gray-700 transition-colors duration-300 animate-gentle-float"
                        style={{ animationDuration: `${4 + index * 0.3}s` }}>{text}</span>
                </button>
              ))}
            </div>

            {/* Map placeholder */}
            <div className={`mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-700 cursor-pointer animate-breathing ${
              contentVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
            }`} 
            style={{ animationDelay: '600ms', animationDuration: '3s' }}
            onClick={() => console.log('Opening map location')}
            >
              <span className="text-gray-500 transition-colors duration-300 animate-gentle-float" style={{ animationDuration: '5s' }}>
                Click to View Map Location
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-black p-8 rounded-lg transition-all duration-700 animate-gentle-sway ${
            contentVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`} style={{ animationDuration: '6.5s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`transition-all duration-500 animate-breathing ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '300ms', animationDuration: '2.5s' }}>
                <Input 
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" 
                />
              </div>
              
              <div className={`transition-all duration-500 animate-breathing ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '400ms', animationDuration: '3s' }}>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" 
                />
              </div>
              
              <div className={`transition-all duration-500 animate-breathing ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '500ms', animationDuration: '3.5s' }}>
                <Textarea 
                  name="message"
                  placeholder="Your Message*" 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" 
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-yellow-500 text-black font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-breathing ${
                  contentVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
                }`} 
                style={{ animationDelay: '700ms', animationDuration: '2s' }}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
