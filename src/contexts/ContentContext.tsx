
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WebsiteContent } from '@/types/content';

interface ContentContextType {
  content: WebsiteContent;
  updateContent: (section: keyof WebsiteContent, data: any) => void;
  exportContent: () => string;
  importContent: (jsonData: string) => boolean;
}

const defaultContent: WebsiteContent = {
  navigation: {
    brandName: "SUMIT NEET COACHING",
    menuItems: [
      { id: "1", name: "HOME", href: "#", section: "Hero" },
      { id: "2", name: "SERVICES", href: "#services", section: "Services" },
      { id: "3", name: "STRATEGY", href: "#strategy", section: "Strategy" },
      { id: "4", name: "REVIEWS", href: "#reviews", section: "Reviews" },
      { id: "5", name: "OUR TEAM", href: "#team", section: "Team" },
      { id: "6", name: "CONTACT US", href: "#contact", section: "Contact" }
    ]
  },
  hero: {
    title: "WELCOME TO SUMIT NEET COACHING",
    subtitle: "COACHING",
    tagline: "A COACHING FOR EXCELLENCE",
    backgroundImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    },
    buttonText: "Register for Seminar"
  },
  services: {
    title: "What Do We Offer",
    services: [
      { id: "1", name: "Complete Level of Learning", color: "bg-red-500", width: "w-full" },
      { id: "2", name: "Science Test and Product Guidance", color: "bg-blue-500", width: "w-5/6" },
      { id: "3", name: "Computational Modeling Aptitude", color: "bg-green-500", width: "w-4/5" },
      { id: "4", name: "One-on-one Personalized Learning", color: "bg-yellow-500", width: "w-3/4" },
      { id: "5", name: "Strength Improvement Focused Sessions in NEET", color: "bg-orange-500", width: "w-5/6" },
      { id: "6", name: "Subject Test and Evaluation", color: "bg-purple-500", width: "w-4/5" },
      { id: "7", name: "Best Education from Expert AIMS", color: "bg-teal-500", width: "w-full" }
    ],
    subjects: [
      { id: "1", title: "Physics", description: "Physics is extremely important and its topics as asked in NEET.", icon: "Book" },
      { id: "2", title: "Chemistry", description: "Chemistry is important because every thing in this body from face and blood, is made of chemicals.", icon: "TestTube" },
      { id: "3", title: "Biology", description: "Biology as it important since giving access other that can in biology of science medicine which most important.", icon: "Stethoscope" }
    ]
  },
  strategy: {
    title: "Our Strategy",
    subtitle: "Our Strategic Comprehensive NEET",
    steps: [
      { id: "1", number: "1", title: "Concept", description: "Creating conceptual clarity to solidify concepts and ensure strong foundation." },
      { id: "2", number: "2", title: "Prepare", description: "Prepare Adequately for Exams with Smart Study Techniques." },
      { id: "3", number: "3", title: "Revision", description: "Revise to get Good in Entrance with Smart Revision and Test Methods." },
      { id: "4", number: "4", title: "Selection", description: "Continuous Active Plan That Sets Achieving Your Future by Making Steps." }
    ]
  },
  statistics: {
    stats: [
      { id: "1", number: "9", label: "YEARS AND COUNTING" },
      { id: "2", number: "10", label: "YEARS AND COUNTING" },
      { id: "3", number: "11", label: "PHYSICS, CHEMISTRY AND BIOLOGY" },
      { id: "4", number: "12", label: "PHYSICS, CHEMISTRY AND BIOLOGY" }
    ]
  },
  team: {
    title: "Meet The Teacher's",
    subtitle: "Our provides our coaching systematic structure",
    members: [
      {
        id: "1",
        name: "Sumit Sir",
        title: "PHYSICS TEACHER",
        image: "/lovable-uploads/cd6caae8-576f-4eb6-9780-ebfc731840c3.png",
        specialization: "Advanced Physics & Problem Solving"
      },
      {
        id: "2",
        name: "Faculty Member",
        title: "BIOLOGY TEACHER",
        image: "/lovable-uploads/be221229-7e52-40c8-b71a-b6cba2a50769.png",
        specialization: "Botany, Zoology & Medical Concepts"
      }
    ]
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get in touch with us",
    phone: "+91 12345 67890",
    email: "contact@sumitneet.com",
    address: "123 Education Street, Learning City, State 123456",
    hours: "Mon-Sat: 9AM-7PM"
  },
  footer: {
    text: "© 2024 Sumit NEET Coaching. All rights reserved."
  }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<WebsiteContent>(defaultContent);

  useEffect(() => {
    const savedContent = localStorage.getItem('website-content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
      } catch (error) {
        console.error('Failed to parse saved content:', error);
      }
    }
  }, []);

  const updateContent = (section: keyof WebsiteContent, data: any) => {
    const newContent = {
      ...content,
      [section]: data
    };
    setContent(newContent);
    localStorage.setItem('website-content', JSON.stringify(newContent));
  };

  const exportContent = () => {
    return JSON.stringify(content, null, 2);
  };

  const importContent = (jsonData: string) => {
    try {
      const importedContent = JSON.parse(jsonData);
      setContent(importedContent);
      localStorage.setItem('website-content', JSON.stringify(importedContent));
      return true;
    } catch (error) {
      console.error('Failed to import content:', error);
      return false;
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, exportContent, importContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
