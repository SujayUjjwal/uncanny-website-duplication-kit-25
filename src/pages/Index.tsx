import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Star } from "lucide-react";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = [{
    name: "Complete Level of Learning",
    color: "bg-red-500",
    width: "w-full"
  }, {
    name: "Science Test and Product Guidance",
    color: "bg-blue-500",
    width: "w-5/6"
  }, {
    name: "Computational Modeling Aptitude",
    color: "bg-green-500",
    width: "w-4/5"
  }, {
    name: "One-on-one Personalized Learning",
    color: "bg-yellow-500",
    width: "w-3/4"
  }, {
    name: "Strength Improvement Focused Sessions in NEET",
    color: "bg-orange-500",
    width: "w-5/6"
  }, {
    name: "Subject Test and Evaluation",
    color: "bg-purple-500",
    width: "w-4/5"
  }, {
    name: "Best Education from Expert AIMS",
    color: "bg-teal-500",
    width: "w-full"
  }];
  const strategySteps = [{
    number: "1",
    title: "Concept",
    description: "Creating conceptual clarity to solidify concepts and ensure strong foundation."
  }, {
    number: "2",
    title: "Prepare",
    description: "Prepare Adequately for Exams with Smart Study Techniques."
  }, {
    number: "3",
    title: "Revision",
    description: "Revise to get Good in Entrance with Smart Revision and Test Methods."
  }, {
    number: "4",
    title: "Selection",
    description: "Continuous Active Plan That Sets Achieving Your Future by Making Steps."
  }];
  const stats = [{
    number: "9",
    label: "YEARS AND COUNTING"
  }, {
    number: "10",
    label: "YEARS AND COUNTING"
  }, {
    number: "11",
    label: "PHYSICS, CHEMISTRY AND BIOLOGY"
  }, {
    number: "12",
    label: "PHYSICS, CHEMISTRY AND BIOLOGY"
  }];
  const team = [{
    name: "Kiran Shah",
    title: "Director",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }, {
    name: "Sumit Sir",
    title: "PHYSICS TEACHER",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }, {
    name: "Prakash Sir",
    title: "BIOLOGY",
    image: "/lovable-uploads/ab2cb6d5-bf7e-467e-8cef-dfaf2945b20a.png"
  }];
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">SUMIT NEET COACHING</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-yellow-600 font-medium">HOME</a>
                <a href="#services" className="text-gray-700 hover:text-yellow-600">SERVICES</a>
                <a href="#" className="text-gray-700 hover:text-yellow-600">WORKS</a>
                <a href="#" className="text-gray-700 hover:text-yellow-600">REVIEWS</a>
                <a href="#team" className="text-gray-700 hover:text-yellow-600">OUR TEAM</a>
                <a href="#contact" className="text-gray-700 hover:text-yellow-600">CONTACT US</a>
              </div>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-yellow-600 font-medium">HOME</a>
              <a href="#services" className="block px-3 py-2 text-gray-700">SERVICES</a>
              <a href="#" className="block px-3 py-2 text-gray-700">WORKS</a>
              <a href="#" className="block px-3 py-2 text-gray-700">REVIEWS</a>
              <a href="#team" className="block px-3 py-2 text-gray-700">OUR TEAM</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">CONTACT US</a>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/lovable-uploads/8a3625cc-aee4-4302-a346-652c2f9d7432.png')"
      }} />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-6 tracking-wide md:text-8xl">
            WELCOME TO SUMIT NEET<br />COACHING
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="h-0.5 w-16 bg-yellow-500 mr-4" />
            <span className="text-yellow-500 font-medium text-lg tracking-wider">A COACHING FOR EXCELLENCE</span>
            <div className="h-0.5 w-16 bg-yellow-500 ml-4" />
          </div>
          
          <div className="flex justify-center space-x-4 mb-12">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* What Do We Offer Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Do We Offer</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{service.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${service.color} h-2 rounded-full ${service.width}`} />
                  </div>
                </div>)}
            </div>

            {/* Features */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-600 rounded" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Physics</h3>
                      <p className="text-gray-600 text-sm">
                        Physics is extremely important and its topics as asked in NEET.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-600 rounded" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Chemistry</h3>
                      <p className="text-gray-600 text-sm">
                        Chemistry is important because every thing in this body from face and blood, is made of chemicals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-600 rounded" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Biology</h3>
                      <p className="text-gray-600 text-sm">
                        Biology as it important since giving access other that can in biology of science medicine which most important.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strategy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategy</h2>
            <p className="text-gray-600">Our Strategic Comprehensive NEET</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategySteps.map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => <div key={index}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-800">{stat.number}</span>
                </div>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Reviews</h2>
          <p className="text-gray-400 mb-12">Our Institute past students previous reviews</p>
          
          <div className="mb-8">
            <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <blockquote className="text-lg italic mb-6">
              "I attended demo classes of almost all coaching but their faculties were very qualified and has experience. I missed initial week and found exceptionally excellent faculties."
            </blockquote>
            <p className="text-gray-400">- Best Client EVER</p>
          </div>

          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Meet The Teachers Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet The Teacher's</h2>
            <p className="text-gray-600">Our provides our coaching systematic structure</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => <div key={index} className="text-center">
                <div className="w-48 h-64 bg-gray-300 rounded-lg mx-auto mb-4 overflow-hidden">
                  <img src="/api/placeholder/200/250" alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Sumit NEET Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Index;