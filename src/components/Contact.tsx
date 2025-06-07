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

  const contactInfo = [{
    Icon: Phone,
    text: "+91-91597730898",
    action: () => {
      console.log('Calling phone number');
      window.open('tel:+919159773089');
    }
  }, {
    Icon: Mail,
    text: "sumitneetbooking@gmail.com",
    action: () => {
      console.log('Opening email for booking');
      window.open('mailto:sumitneetbooking@gmail.com?subject=Seminar Registration Inquiry');
    }
  }, {
    Icon: MapPin,
    text: "www.sumitneetcoaching@gmail.com",
    action: () => {
      console.log('Opening email for coaching');
      window.open('mailto:sumitneetcoaching@gmail.com?subject=Coaching Inquiry');
    }
  }, {
    Icon: Mail,
    text: "www.joharinform@gmail.com",
    action: () => {
      console.log('Opening email for information');
      window.open('mailto:joharinform@gmail.com?subject=Information Request');
    }
  }];

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
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you ${formData.name}! We have received your message and will get back to you at ${formData.email} soon.`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'}`}>
            Get in Touch
          </h2>
          <p className={`text-gray-600 transition-all duration-700 ${titleVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'}`} style={{
          animationDelay: '200ms'
        }}>
            Best Place to learning for coaching be the future to.
          </p>
        </div>

      <div className="grid lg:grid-cols-2 gap-12" ref={contentRef}>
        {/* Contact Info */}
        <div className={`transition-all duration-700 ${contentVisible ? 'animate-gentle-slide-in-left' : 'opacity-0 -translate-x-8'}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Feel Free To Contact</h3>
          <p className="text-gray-600 mb-8">
            You may easily get in touch with us if you have any questions. Please feel free.
          </p>

          <div className="space-y-4">
            {contactInfo.map(({ Icon, text, action }, index) => (
              <button
                key={index}
                onClick={action}
                className={`flex items-center space-x-3 group transition-all duration-500 w-full text-left hover:bg-gray-50 p-2 rounded-lg ${contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-500">
                  <Icon className="w-4 h-4 text-white transition-transform duration-300 group-hover:text-black" />
                </div>
                <span className="text-gray-700 transition-colors duration-300 group-hover:text-black font-medium">{text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className={`bg-black p-8 rounded-lg transition-all duration-700 ${contentVisible ? 'animate-gentle-slide-in-right' : 'opacity-0 translate-x-8'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={`transition-all duration-500 ${contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'}`} style={{
            animationDelay: '300ms'
          }}>
              <Input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleInputChange} required className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" />
            </div>
            
            <div className={`transition-all duration-500 ${contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'}`} style={{
            animationDelay: '400ms'
          }}>
              <Input type="email" name="email" placeholder="Your Email*" value={formData.email} onChange={handleInputChange} required className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" />
            </div>
            
            <div className={`transition-all duration-500 ${contentVisible ? 'animate-gentle-fade-in-up' : 'opacity-0'}`} style={{
            animationDelay: '500ms'
          }}>
              <Textarea name="message" placeholder="Your Message*" rows={5} value={formData.message} onChange={handleInputChange} required className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300" />
            </div>
            
            <Button type="submit" disabled={isSubmitting} className={`w-full bg-yellow-500 text-black font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${contentVisible ? 'animate-gentle-scale-in' : 'opacity-0 scale-75'}`} style={{
            animationDelay: '700ms'
          }}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
