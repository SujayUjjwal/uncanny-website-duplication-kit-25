
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const contactInfo = [
    { Icon: Phone, text: "+91-91597730898" },
    { Icon: Mail, text: "sumitneetbooking@gmail.com" },
    { Icon: MapPin, text: "www.sumitneetcoaching@gmail.com" },
    { Icon: Mail, text: "www.joharinform@gmail.com" }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" ref={titleRef}>
          <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
            titleVisible ? 'animate-scale-in' : 'opacity-0'
          }`}>
            Get in Touch
          </h2>
          <p className={`text-gray-600 transition-all duration-700 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '200ms' }}>
            Best Place to learning for coaching be the future to.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12" ref={contentRef}>
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${
            contentVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Feel Free To Contact</h3>
            <p className="text-gray-600 mb-8">
              You may easily get in touch with us if you have any questions. Please feel free.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ Icon, text }, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 group transition-all duration-500 hover:translate-x-2 ${
                    contentVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index * 100) + 200}ms` }}
                >
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-600 group-hover:scale-110">
                    <Icon className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900">{text}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className={`mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-700 hover:bg-gray-300 ${
              contentVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
            }`} style={{ animationDelay: '600ms' }}>
              <span className="text-gray-500 transition-colors duration-300 hover:text-gray-700">Map Location</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-black p-8 rounded-lg transition-all duration-700 ${
            contentVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}>
            <form className="space-y-6">
              {[
                { type: "text", placeholder: "Your Name*" },
                { type: "email", placeholder: "Your Email*" }
              ].map((field, index) => (
                <div key={index} className={`transition-all duration-500 ${
                  contentVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`} style={{ animationDelay: `${(index * 100) + 300}ms` }}>
                  <Input 
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:scale-105 focus:bg-gray-700" 
                  />
                </div>
              ))}
              
              <div className={`transition-all duration-500 ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '500ms' }}>
                <Textarea 
                  placeholder="Your Message*" 
                  rows={5} 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 transition-all duration-300 focus:scale-105 focus:bg-gray-700" 
                />
              </div>
              
              <Button className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                contentVisible ? 'animate-bounce-in' : 'opacity-0 scale-75'
              }`} style={{ animationDelay: '700ms' }}>
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
