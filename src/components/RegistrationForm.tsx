
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    console.log('Registration form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your seminar registration has been received. We'll contact you at ${formData.email} with seminar details.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        courseInterest: '',
        message: ''
      });
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-yellow-500 text-xl font-bold">
            Register for Free Seminar
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number*"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <Input
              type="text"
              name="courseInterest"
              placeholder="Course Interest (e.g., NEET, JEE)"
              value={formData.courseInterest}
              onChange={handleInputChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Any questions or special requirements?"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 disabled:opacity-50"
          >
            {isSubmitting ? 'Registering...' : 'Register for Seminar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;
