
-- Create a table to store website content globally with formatting options
CREATE TABLE public.website_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT NOT NULL UNIQUE,
  content_data JSONB NOT NULL,
  formatting_options JSONB DEFAULT '{}',
  version INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for faster lookups by section
CREATE INDEX idx_website_content_section ON public.website_content(section_key);

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_website_content_updated_at
  BEFORE UPDATE ON public.website_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable real-time updates for the table
ALTER TABLE public.website_content REPLICA IDENTITY FULL;

-- Add the table to the realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.website_content;

-- Insert default content structure (migrating from existing structure)
INSERT INTO public.website_content (section_key, content_data, formatting_options) VALUES 
(
  'navigation', 
  '{
    "brandName": "SUMIT NEET COACHING",
    "menuItems": [
      {"id": "1", "name": "HOME", "href": "#", "section": "Hero"},
      {"id": "2", "name": "SERVICES", "href": "#services", "section": "Services"},
      {"id": "3", "name": "STRATEGY", "href": "#strategy", "section": "Strategy"},
      {"id": "4", "name": "REVIEWS", "href": "#reviews", "section": "Reviews"},
      {"id": "5", "name": "OUR TEAM", "href": "#team", "section": "Team"},
      {"id": "6", "name": "CONTACT US", "href": "#contact", "section": "Contact"}
    ]
  }',
  '{
    "brandName": {"fontFamily": "Inter", "fontSize": "24", "fontWeight": "700", "color": "#1f2937"},
    "menuItems": {"fontFamily": "Inter", "fontSize": "16", "fontWeight": "500", "color": "#374151"}
  }'
),
(
  'hero',
  '{
    "title": "WELCOME TO SUMIT NEET COACHING",
    "subtitle": "COACHING",
    "tagline": "A COACHING FOR EXCELLENCE",
    "backgroundImage": "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "socialLinks": {
      "facebook": "https://facebook.com",
      "twitter": "https://twitter.com",
      "instagram": "https://instagram.com"
    },
    "buttonText": "Register for Seminar"
  }',
  '{
    "title": {"fontFamily": "Inter", "fontSize": "48", "fontWeight": "800", "color": "#ffffff"},
    "subtitle": {"fontFamily": "Inter", "fontSize": "32", "fontWeight": "600", "color": "#ffffff"},
    "tagline": {"fontFamily": "Inter", "fontSize": "20", "fontWeight": "400", "color": "#ffffff"},
    "buttonText": {"fontFamily": "Inter", "fontSize": "16", "fontWeight": "600", "color": "#ffffff"}
  }'
),
(
  'services',
  '{
    "title": "What Do We Offer",
    "services": [
      {"id": "1", "name": "Complete Level of Learning", "color": "bg-red-500", "width": "w-full"},
      {"id": "2", "name": "Science Test and Product Guidance", "color": "bg-blue-500", "width": "w-5/6"},
      {"id": "3", "name": "Computational Modeling Aptitude", "color": "bg-green-500", "width": "w-4/5"},
      {"id": "4", "name": "One-on-one Personalized Learning", "color": "bg-yellow-500", "width": "w-3/4"},
      {"id": "5", "name": "Strength Improvement Focused Sessions in NEET", "color": "bg-orange-500", "width": "w-5/6"},
      {"id": "6", "name": "Subject Test and Evaluation", "color": "bg-purple-500", "width": "w-4/5"},
      {"id": "7", "name": "Best Education from Expert AIMS", "color": "bg-teal-500", "width": "w-full"}
    ],
    "subjects": [
      {"id": "1", "title": "Physics", "description": "Physics is extremely important and its topics as asked in NEET.", "icon": "Book"},
      {"id": "2", "title": "Chemistry", "description": "Chemistry is important because every thing in this body from face and blood, is made of chemicals.", "icon": "TestTube"},
      {"id": "3", "title": "Biology", "description": "Biology as it important since giving access other that can in biology of science medicine which most important.", "icon": "Stethoscope"}
    ]
  }',
  '{
    "title": {"fontFamily": "Inter", "fontSize": "36", "fontWeight": "700", "color": "#1f2937"},
    "services": {"fontFamily": "Inter", "fontSize": "16", "fontWeight": "500", "color": "#ffffff"},
    "subjects": {
      "title": {"fontFamily": "Inter", "fontSize": "24", "fontWeight": "600", "color": "#1f2937"},
      "description": {"fontFamily": "Inter", "fontSize": "14", "fontWeight": "400", "color": "#6b7280"}
    }
  }'
),
(
  'strategy',
  '{
    "title": "Our Strategy",
    "subtitle": "Our Strategic Comprehensive NEET",
    "steps": [
      {"id": "1", "number": "1", "title": "Concept", "description": "Creating conceptual clarity to solidify concepts and ensure strong foundation."},
      {"id": "2", "number": "2", "title": "Prepare", "description": "Prepare Adequately for Exams with Smart Study Techniques."},
      {"id": "3", "number": "3", "title": "Revision", "description": "Revise to get Good in Entrance with Smart Revision and Test Methods."},
      {"id": "4", "number": "4", "title": "Selection", "description": "Continuous Active Plan That Sets Achieving Your Future by Making Steps."}
    ]
  }',
  '{
    "title": {"fontFamily": "Inter", "fontSize": "36", "fontWeight": "700", "color": "#1f2937"},
    "subtitle": {"fontFamily": "Inter", "fontSize": "20", "fontWeight": "500", "color": "#6b7280"},
    "steps": {
      "title": {"fontFamily": "Inter", "fontSize": "20", "fontWeight": "600", "color": "#1f2937"},
      "description": {"fontFamily": "Inter", "fontSize": "14", "fontWeight": "400", "color": "#6b7280"}
    }
  }'
),
(
  'statistics',
  '{
    "stats": [
      {"id": "1", "number": "9", "label": "YEARS AND COUNTING"},
      {"id": "2", "number": "10", "label": "YEARS AND COUNTING"},
      {"id": "3", "number": "11", "label": "PHYSICS, CHEMISTRY AND BIOLOGY"},
      {"id": "4", "number": "12", "label": "PHYSICS, CHEMISTRY AND BIOLOGY"}
    ]
  }',
  '{
    "stats": {
      "number": {"fontFamily": "Inter", "fontSize": "48", "fontWeight": "800", "color": "#1f2937"},
      "label": {"fontFamily": "Inter", "fontSize": "14", "fontWeight": "500", "color": "#6b7280"}
    }
  }'
),
(
  'team',
  '{
    "title": "Meet The Teachers",
    "subtitle": "Our provides our coaching systematic structure",
    "members": [
      {
        "id": "1",
        "name": "Sumit Sir",
        "title": "PHYSICS TEACHER",
        "image": "/lovable-uploads/cd6caae8-576f-4eb6-9780-ebfc731840c3.png",
        "specialization": "Advanced Physics & Problem Solving"
      },
      {
        "id": "2",
        "name": "Faculty Member",
        "title": "BIOLOGY TEACHER",
        "image": "/lovable-uploads/be221229-7e52-40c8-b71a-b6cba2a50769.png",
        "specialization": "Botany, Zoology & Medical Concepts"
      }
    ]
  }',
  '{
    "title": {"fontFamily": "Inter", "fontSize": "36", "fontWeight": "700", "color": "#1f2937"},
    "subtitle": {"fontFamily": "Inter", "fontSize": "18", "fontWeight": "400", "color": "#6b7280"},
    "members": {
      "name": {"fontFamily": "Inter", "fontSize": "24", "fontWeight": "600", "color": "#1f2937"},
      "title": {"fontFamily": "Inter", "fontSize": "16", "fontWeight": "500", "color": "#6366f1"},
      "specialization": {"fontFamily": "Inter", "fontSize": "14", "fontWeight": "400", "color": "#6b7280"}
    }
  }'
),
(
  'contact',
  '{
    "title": "Contact Us",
    "subtitle": "Get in touch with us",
    "phone": "+91 12345 67890",
    "email": "contact@sumitneet.com",
    "address": "123 Education Street, Learning City, State 123456",
    "hours": "Mon-Sat: 9AM-7PM"
  }',
  '{
    "title": {"fontFamily": "Inter", "fontSize": "36", "fontWeight": "700", "color": "#1f2937"},
    "subtitle": {"fontFamily": "Inter", "fontSize": "18", "fontWeight": "400", "color": "#6b7280"},
    "info": {"fontFamily": "Inter", "fontSize": "16", "fontWeight": "400", "color": "#374151"}
  }'
),
(
  'footer',
  '{
    "text": "© 2024 Sumit NEET Coaching. All rights reserved."
  }',
  '{
    "text": {"fontFamily": "Inter", "fontSize": "14", "fontWeight": "400", "color": "#6b7280"}
  }'
);
