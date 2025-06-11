
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Star, Eye } from 'lucide-react';
import FormattingControls from './FormattingControls';
import { FormattingOptions } from '@/types/content';

interface EnhancedHeroTextEditorProps {
  onContentChange: () => void;
}

const EnhancedHeroTextEditor = ({ onContentChange }: EnhancedHeroTextEditorProps) => {
  const { content, contentFormatting, updateContent } = useContent();
  const [heroData, setHeroData] = useState(content.hero);
  const [formatting, setFormatting] = useState<Record<string, FormattingOptions>>(
    contentFormatting.hero || {}
  );
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    setHeroData(content.hero);
    setFormatting(contentFormatting.hero || {});
  }, [content.hero, contentFormatting.hero]);

  const handleSave = async () => {
    await updateContent('hero', heroData, formatting);
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

  const handleFormattingChange = (fieldName: string, newFormatting: FormattingOptions) => {
    setFormatting(prev => ({
      ...prev,
      [fieldName]: newFormatting
    }));
    onContentChange();
  };

  const getTextStyle = (fieldName: string) => {
    const fieldFormatting = formatting[fieldName];
    if (!fieldFormatting) return {};
    
    return {
      fontFamily: fieldFormatting.fontFamily,
      fontSize: fieldFormatting.fontSize ? `${fieldFormatting.fontSize}px` : undefined,
      fontWeight: fieldFormatting.fontWeight,
      color: fieldFormatting.color,
      textAlign: fieldFormatting.textAlign,
      lineHeight: fieldFormatting.lineHeight,
      letterSpacing: fieldFormatting.letterSpacing ? `${fieldFormatting.letterSpacing}px` : undefined
    };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5" />
            <span>Hero Section Content & Formatting</span>
          </div>
          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            size="sm"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showPreview ? 'Hide' : 'Show'} Preview
          </Button>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your homepage hero section text, formatting, and content
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {showPreview && (
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h1 style={getTextStyle('title')}>{heroData.title}</h1>
                <h2 style={getTextStyle('subtitle')}>{heroData.subtitle}</h2>
                <p style={getTextStyle('tagline')}>{heroData.tagline}</p>
                <Button style={getTextStyle('buttonText')} className="mt-4">
                  {heroData.buttonText}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">Main Title</Label>
            <Input
              id="heroTitle"
              value={heroData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="WELCOME TO SUMIT NEET COACHING"
              style={getTextStyle('title')}
            />
            <FormattingControls
              formatting={formatting.title || {}}
              onChange={(newFormatting) => handleFormattingChange('title', newFormatting)}
              fieldName="Main Title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">Subtitle</Label>
            <Input
              id="heroSubtitle"
              value={heroData.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
              placeholder="COACHING"
              style={getTextStyle('subtitle')}
            />
            <FormattingControls
              formatting={formatting.subtitle || {}}
              onChange={(newFormatting) => handleFormattingChange('subtitle', newFormatting)}
              fieldName="Subtitle"
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
            style={getTextStyle('tagline')}
          />
          <FormattingControls
            formatting={formatting.tagline || {}}
            onChange={(newFormatting) => handleFormattingChange('tagline', newFormatting)}
            fieldName="Tagline"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="heroButton">Button Text</Label>
          <Input
            id="heroButton"
            value={heroData.buttonText}
            onChange={(e) => handleChange('buttonText', e.target.value)}
            placeholder="Register for Seminar"
            style={getTextStyle('buttonText')}
          />
          <FormattingControls
            formatting={formatting.buttonText || {}}
            onChange={(newFormatting) => handleFormattingChange('buttonText', newFormatting)}
            fieldName="Button Text"
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
          Save Hero Section & Formatting
        </Button>
      </CardContent>
    </Card>
  );
};

export default EnhancedHeroTextEditor;
