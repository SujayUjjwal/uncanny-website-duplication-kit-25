
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';

const HeroEditor = () => {
  const { content, updateContent } = useContent();
  const [heroData, setHeroData] = useState(content.hero);

  useEffect(() => {
    setHeroData(content.hero);
  }, [content.hero]);

  const handleSave = () => {
    updateContent('hero', heroData);
    alert('Hero section updated successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setHeroData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (platform: string, value: string) => {
    setHeroData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hero Section Content</CardTitle>
          <p className="text-sm text-gray-600">
            Manage the main hero section of your website
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Main Title</Label>
              <Input
                id="title"
                value={heroData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="WELCOME TO SUMIT NEET COACHING"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={heroData.subtitle}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                placeholder="COACHING"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              value={heroData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              placeholder="A COACHING FOR EXCELLENCE"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="backgroundImage">Background Image URL</Label>
            <Textarea
              id="backgroundImage"
              value={heroData.backgroundImage}
              onChange={(e) => handleChange('backgroundImage', e.target.value)}
              placeholder="https://images.unsplash.com/photo-..."
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buttonText">Button Text</Label>
            <Input
              id="buttonText"
              value={heroData.buttonText}
              onChange={(e) => handleChange('buttonText', e.target.value)}
              placeholder="Register for Seminar"
            />
          </div>

          <div className="space-y-4">
            <Label>Social Media Links</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook URL</Label>
                <Input
                  id="facebook"
                  value={heroData.socialLinks.facebook}
                  onChange={(e) => handleSocialChange('facebook', e.target.value)}
                  placeholder="https://facebook.com/yourpage"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter URL</Label>
                <Input
                  id="twitter"
                  value={heroData.socialLinks.twitter}
                  onChange={(e) => handleSocialChange('twitter', e.target.value)}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={heroData.socialLinks.instagram}
                  onChange={(e) => handleSocialChange('instagram', e.target.value)}
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Hero Content
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroEditor;
