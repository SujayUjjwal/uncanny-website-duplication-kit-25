
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600">Best Place to learning for coaching be the future to.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Feel Free To Contact</h3>
            <p className="text-gray-600 mb-8">
              You may easily get in touch with us if you have any questions. Please feel free.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">+91-91597730898</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">sumitneetbooking@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">www.sumitneetcoaching@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">www.joharinform@gmail.com</span>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Map Location</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name*" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
              </div>
              
              <div>
                <Input type="email" placeholder="Your Email*" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
              </div>
              
              <div>
                <Textarea placeholder="Your Message*" rows={5} className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
              </div>
              
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
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
