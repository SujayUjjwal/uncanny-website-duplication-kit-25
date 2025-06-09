
-- Create enum for submission status
CREATE TYPE submission_status AS ENUM ('New', 'Contacted', 'Processed', 'Resolved', 'Rejected', 'Enrolled', 'Registered');

-- Create table for seminar registrations
CREATE TABLE public.seminar_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_interest TEXT,
  message TEXT,
  status submission_status DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for contact messages
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status submission_status DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create table for course enrollments
CREATE TABLE public.course_enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  education TEXT NOT NULL,
  course_selection TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  address TEXT NOT NULL,
  message TEXT,
  status submission_status DEFAULT 'New',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.seminar_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (forms can be submitted by anyone)
CREATE POLICY "Anyone can insert seminar registrations" ON public.seminar_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can insert course enrollments" ON public.course_enrollments
  FOR INSERT WITH CHECK (true);

-- Create policies for admin access (assuming we'll add authentication later)
CREATE POLICY "Admins can view all seminar registrations" ON public.seminar_registrations
  FOR SELECT USING (true);

CREATE POLICY "Admins can update seminar registrations" ON public.seminar_registrations
  FOR UPDATE USING (true);

CREATE POLICY "Admins can delete seminar registrations" ON public.seminar_registrations
  FOR DELETE USING (true);

CREATE POLICY "Admins can view all contact messages" ON public.contact_messages
  FOR SELECT USING (true);

CREATE POLICY "Admins can update contact messages" ON public.contact_messages
  FOR UPDATE USING (true);

CREATE POLICY "Admins can delete contact messages" ON public.contact_messages
  FOR DELETE USING (true);

CREATE POLICY "Admins can view all course enrollments" ON public.course_enrollments
  FOR SELECT USING (true);

CREATE POLICY "Admins can update course enrollments" ON public.course_enrollments
  FOR UPDATE USING (true);

CREATE POLICY "Admins can delete course enrollments" ON public.course_enrollments
  FOR DELETE USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_seminar_registrations_updated_at BEFORE UPDATE
  ON public.seminar_registrations FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at BEFORE UPDATE
  ON public.contact_messages FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_course_enrollments_updated_at BEFORE UPDATE
  ON public.course_enrollments FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
