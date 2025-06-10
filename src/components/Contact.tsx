
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { toast } = useToast();
  
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
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Error submitting contact form:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: `Thank you ${formData.name}! We have received your message and will get back to you at ${formData.email} soon.`,
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Corporate Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Executive geometric patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-yellow-50/50 to-transparent rounded-full blur-2xl" />
        
        {/* Luxury grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Premium accent lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-connection-line" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${titleVisible ? 'animate-gentle-scale-in' : 'opacity-0'}`}>
            Get in Touch
          </h2>
          <p className={`text-gray-600 transition-all duration-1000 ${titleVisible ? 'animate-soothing-fade-in-up' : 'opacity-0'}`} style={{
          animationDelay: '200ms'
        }}>
            Best Place to learning for coaching be the future to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" ref={contentRef}>
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${contentVisible ? 'animate-form-reveal' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Feel Free To Contact</h3>
            <p className="text-gray-600 mb-8">
              You may easily get in touch with us if you have any questions. Please feel free.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, text, action }, index) => (
                <button
                  key={index}
                  onClick={action}
                  className={`flex items-center space-x-4 group transition-all duration-700 w-full text-left hover:bg-white/80 p-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-lg backdrop-blur-sm ${contentVisible ? 'animate-corporate-slide' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 150 + 300}ms` }}
                >
                  <div className="relative w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:from-yellow-500 group-hover:to-yellow-600 group-hover:shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="w-5 h-5 text-white relative z-10 transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <span className="text-gray-700 transition-all duration-500 group-hover:text-gray-900 font-medium flex-1">{text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`relative transition-all duration-1000 ${contentVisible ? 'animate-form-reveal' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl blur-sm opacity-80" />
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 p-8 rounded-2xl backdrop-blur-md border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className={`transition-all duration-700 ${contentVisible ? 'animate-corporate-slide' : 'opacity-0'}`} style={{
                animationDelay: '500ms'
              }}>
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name*" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 transition-all duration-500 focus:border-blue-400/60 focus:bg-gray-800/70 focus:shadow-lg focus:animate-elegant-focus rounded-xl h-12 backdrop-blur-sm" 
                  />
                </div>
                
                <div className={`transition-all duration-700 ${contentVisible ? 'animate-corporate-slide' : 'opacity-0'}`} style={{
                animationDelay: '600ms'
              }}>
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email*" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 transition-all duration-500 focus:border-blue-400/60 focus:bg-gray-800/70 focus:shadow-lg focus:animate-elegant-focus rounded-xl h-12 backdrop-blur-sm" 
                  />
                </div>
                
                <div className={`transition-all duration-700 ${contentVisible ? 'animate-corporate-slide' : 'opacity-0'}`} style={{
                animationDelay: '700ms'
              }}>
                  <Textarea 
                    name="message" 
                    placeholder="Your Message*" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 transition-all duration-500 focus:border-blue-400/60 focus:bg-gray-800/70 focus:shadow-lg focus:animate-elegant-focus rounded-xl backdrop-blur-sm resize-none" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className={`w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed h-12 rounded-xl relative overflow-hidden group ${contentVisible ? 'animate-luxury-reveal' : 'opacity-0 scale-75'}`} 
                  style={{
                  animationDelay: '800ms'
                }}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
