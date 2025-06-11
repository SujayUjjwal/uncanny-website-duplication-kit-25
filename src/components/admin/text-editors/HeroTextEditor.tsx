
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Star } from 'lucide-react';

interface HeroTextEditorProps {
  onContentChange: () => void;
}

const HeroTextEditor = ({ onContentChange }: HeroTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [heroData, setHeroData] = useState(content.hero);

  useEffect(() => {
    setHeroData(content.hero);
  }, [content.hero]);

  const handleSave = () => {
    updateContent('hero', heroData);
    alert('Hero section saved successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setHeroData(prev => ({ ...prev, [field]: value }));
    onContentChange();
  };

  const handleSocialLinkChange = (platform: string, value: string) => {
    setHeroData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Star className="w-5 h-5" />
          <span>Hero Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your homepage hero section text and content
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Main Title</Label>
            <Input
              id="heroTitle"
              value={heroData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="WELCOME TO SUMIT NEET COACHING"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">Subtitle</Label>
            <Input
              id="heroSubtitle"
              value={heroData.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              placeholder="COACHING"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroTagline">Tagline</Label>
          <Input
            id="heroTagline"
            value={heroData.tagline}
            onChange={(e) => handleChange('tagline', e.target.value)}
            placeholder="A COACHING FOR EXCELLENCE"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroButton">Button Text</Label>
          <Input
            id="heroButton"
            value={heroData.buttonText}
            onChange={(e) => handleChange('buttonText', e.target.value)}
            placeholder="Register for Seminar"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroBackground">Background Image URL</Label>
          <Textarea
            id="heroBackground"
            value={heroData.backgroundImage}
            onChange={(e) => handleChange('backgroundImage', e.target.value)}
            placeholder="https://images.unsplash.com/..."
            rows={2}
          />
        </div>

        <div className="space-y-4">
          <Label>Social Media Links</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <Label className="text-xs">Facebook URL</Label>
              <Input
                value={heroData.socialLinks.facebook}
                onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                placeholder="https://facebook.com"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Twitter URL</Label>
              <Input
                value={heroData.socialLinks.twitter}
                onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                placeholder="https://twitter.com"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Instagram URL</Label>
              <Input
                value={heroData.socialLinks.instagram}
                onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                placeholder="https://instagram.com"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Hero Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default HeroTextEditor;
