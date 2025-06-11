
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Target } from 'lucide-react';

interface StrategyTextEditorProps {
  onContentChange: () => void;
}

const StrategyTextEditor = ({ onContentChange }: StrategyTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [strategyData, setStrategyData] = useState(content.strategy);

  useEffect(() => {
    setStrategyData(content.strategy);
  }, [content.strategy]);

  const handleSave = () => {
    updateContent('strategy', strategyData);
    alert('Strategy section saved successfully!');
  };

  const handleTitleChange = (field: string, value: string) => {
    setStrategyData(prev => ({ ...prev, [field]: value }));
    onContentChange();
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    setStrategyData(prev => ({
      ...prev,
      steps: prev.steps.map((step, i) => 
        i === index ? { ...step, [field]: value } : step
      )
    }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="w-5 h-5" />
          <span>Strategy Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your strategy section titles and step descriptions
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="strategyTitle">Main Title</Label>
            <Input
              id="strategyTitle"
              value={strategyData.title}
              onChange={(e) => handleTitleChange('title', e.target.value)}
              placeholder="Our Strategy"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="strategySubtitle">Subtitle</Label>
            <Input
              id="strategySubtitle"
              value={strategyData.subtitle}
              onChange={(e) => handleTitleChange('subtitle', e.target.value)}
              placeholder="Our Strategic Comprehensive NEET"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Strategy Steps</Label>
          <div className="space-y-4">
            {strategyData.steps.map((step, index) => (
              <div key={step.id} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Step Number</Label>
                    <Input
                      value={step.number}
                      onChange={(e) => handleStepChange(index, 'number', e.target.value)}
                      placeholder="1"
                    />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <Label className="text-xs">Step Title</Label>
                    <Input
                      value={step.title}
                      onChange={(e) => handleStepChange(index, 'title', e.target.value)}
                      placeholder="Concept"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Step Description</Label>
                  <Textarea
                    value={step.description}
                    onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                    placeholder="Step description..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Strategy Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default StrategyTextEditor;
