
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Type, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { FormattingOptions, FONT_FAMILIES, FONT_WEIGHTS, FONT_SIZES } from '@/types/content';

interface FormattingControlsProps {
  formatting: FormattingOptions;
  onChange: (formatting: FormattingOptions) => void;
  fieldName: string;
}

const FormattingControls = ({ formatting, onChange, fieldName }: FormattingControlsProps) => {
  const handleChange = (key: keyof FormattingOptions, value: string) => {
    onChange({
      ...formatting,
      [key]: value
    });
  };

  const alignmentOptions = [
    { value: 'left', icon: AlignLeft, label: 'Left' },
    { value: 'center', icon: AlignCenter, label: 'Center' },
    { value: 'right', icon: AlignRight, label: 'Right' },
    { value: 'justify', icon: AlignJustify, label: 'Justify' }
  ];

  return (
    <Card className="mt-3 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center space-x-2">
          <Type className="w-4 h-4" />
          <span>Text Formatting - {fieldName}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-xs">Font Family</Label>
            <Select value={formatting.fontFamily || 'Inter'} onValueChange={(value) => handleChange('fontFamily', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {FONT_FAMILIES.map((font) => (
                  <SelectItem key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Font Size (px)</Label>
            <Select value={formatting.fontSize || '16'} onValueChange={(value) => handleChange('fontSize', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                {FONT_SIZES.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}px
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Font Weight</Label>
            <Select value={formatting.fontWeight || '400'} onValueChange={(value) => handleChange('fontWeight', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Weight" />
              </SelectTrigger>
              <SelectContent>
                {FONT_WEIGHTS.map((weight) => (
                  <SelectItem key={weight.value} value={weight.value}>
                    {weight.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs flex items-center space-x-1">
              <Palette className="w-3 h-3" />
              <span>Text Color</span>
            </Label>
            <div className="flex space-x-2">
              <Input
                type="color"
                value={formatting.color || '#000000'}
                onChange={(e) => handleChange('color', e.target.value)}
                className="w-12 h-8 p-1 rounded"
              />
              <Input
                type="text"
                value={formatting.color || '#000000'}
                onChange={(e) => handleChange('color', e.target.value)}
                placeholder="#000000"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Text Alignment</Label>
            <div className="flex space-x-1">
              {alignmentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Button
                    key={option.value}
                    variant={formatting.textAlign === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleChange('textAlign', option.value as any)}
                    className="flex-1"
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs">Line Height</Label>
            <Select value={formatting.lineHeight || '1.5'} onValueChange={(value) => handleChange('lineHeight', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Line height" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 (Tight)</SelectItem>
                <SelectItem value="1.25">1.25</SelectItem>
                <SelectItem value="1.5">1.5 (Normal)</SelectItem>
                <SelectItem value="1.75">1.75</SelectItem>
                <SelectItem value="2">2 (Loose)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs">Letter Spacing (px)</Label>
            <Select value={formatting.letterSpacing || '0'} onValueChange={(value) => handleChange('letterSpacing', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Spacing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="-1">-1px (Tight)</SelectItem>
                <SelectItem value="0">0px (Normal)</SelectItem>
                <SelectItem value="1">1px</SelectItem>
                <SelectItem value="2">2px</SelectItem>
                <SelectItem value="3">3px (Wide)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Live Preview */}
        <div className="space-y-2">
          <Label className="text-xs">Live Preview</Label>
          <div 
            className="p-3 border rounded-lg bg-gray-50"
            style={{
              fontFamily: formatting.fontFamily || 'Inter',
              fontSize: `${formatting.fontSize || '16'}px`,
              fontWeight: formatting.fontWeight || '400',
              color: formatting.color || '#000000',
              textAlign: formatting.textAlign || 'left',
              lineHeight: formatting.lineHeight || '1.5',
              letterSpacing: `${formatting.letterSpacing || '0'}px`
            }}
          >
            Sample text with your formatting applied
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormattingControls;
