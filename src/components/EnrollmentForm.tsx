
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

interface EnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollmentForm = ({ open, onOpenChange }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    education: '',
    courseSelection: '',
    parentName: '',
    parentPhone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Enrollment form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your enrollment application has been received. Our admissions team will contact you at ${formData.email} within 24 hours.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        education: '',
        courseSelection: '',
        parentName: '',
        parentPhone: '',
        address: '',
        message: ''
      });
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto bg-black text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-yellow-500 text-xl font-bold">
            Enroll Now - Start Your Journey
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Student Name*"
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
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Student Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <Input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth*"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          <div>
            <Input
              type="text"
              name="education"
              placeholder="Current Education Level (e.g., 12th Grade, Dropper)*"
              value={formData.education}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <select
              name="courseSelection"
              value={formData.courseSelection}
              onChange={handleInputChange}
              required
              className="w-full h-10 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white"
            >
              <option value="">Select Course*</option>
              <option value="NEET Foundation">NEET Foundation</option>
              <option value="NEET Dropper">NEET Dropper</option>
              <option value="NEET 11th">NEET 11th</option>
              <option value="NEET 12th">NEET 12th</option>
              <option value="JEE Preparation">JEE Preparation</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="parentName"
                placeholder="Parent/Guardian Name*"
                value={formData.parentName}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <Input
                type="tel"
                name="parentPhone"
                placeholder="Parent Phone*"
                value={formData.parentPhone}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          
          <div>
            <Textarea
              name="address"
              placeholder="Complete Address*"
              rows={2}
              value={formData.address}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Any additional information or questions?"
              rows={2}
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
            {isSubmitting ? 'Submitting Application...' : 'Submit Enrollment Application'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
