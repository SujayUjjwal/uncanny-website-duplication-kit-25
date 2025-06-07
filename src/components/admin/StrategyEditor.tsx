
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Plus, Trash2 } from 'lucide-react';

const StrategyEditor = () => {
  const { content, updateContent } = useContent();
  const [strategyData, setStrategyData] = useState(content.strategy);

  useEffect(() => {
    setStrategyData(content.strategy);
  }, [content.strategy]);

  const handleSave = () => {
    updateContent('strategy', strategyData);
    alert('Strategy updated successfully!');
  };

  const handleStepChange = (index: number, field: string, value: string) => {
    setStrategyData(prev => ({
      ...prev,
      steps: prev.steps.map((step, i) => 
        i === index ? { ...step, [field]: value } : step
      )
    }));
  };

  const addStep = () => {
    const newStep = {
      id: Date.now().toString(),
      number: (strategyData.steps.length + 1).toString(),
      title: "New Step",
      description: "Step description"
    };
    setStrategyData(prev => ({
      ...prev,
      steps: [...prev.steps, newStep]
    }));
  };

  const removeStep = (index: number) => {
    setStrategyData(prev => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index).map((step, i) => ({
        ...step,
        number: (i + 1).toString()
      }))
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Strategy Section</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your learning strategy steps
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="strategyTitle">Section Title</Label>
              <Input
                id="strategyTitle"
                value={strategyData.title}
                onChange={(e) => setStrategyData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Our Strategy"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="strategySubtitle">Subtitle</Label>
              <Input
                id="strategySubtitle"
                value={strategyData.subtitle}
                onChange={(e) => setStrategyData(prev => ({ ...prev, subtitle: e.target.value }))}
                placeholder="Our Strategic Comprehensive NEET"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Strategy Steps</Label>
              <Button onClick={addStep} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Step
              </Button>
            </div>
            
            <div className="space-y-4">
              {strategyData.steps.map((step, index) => (
                <div key={step.id} className="p-4 border rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Step Number</Label>
                      <Input
                        value={step.number}
                        onChange={(e) => handleStepChange(index, 'number', e.target.value)}
                        placeholder="1"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Step Title</Label>
                      <Input
                        value={step.title}
                        onChange={(e) => handleStepChange(index, 'title', e.target.value)}
                        placeholder="Concept"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button
                        onClick={() => removeStep(index)}
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 w-full"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Description</Label>
                    <Textarea
                      value={step.description}
                      onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                      placeholder="Creating conceptual clarity to solidify concepts and ensure strong foundation."
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Strategy Content
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategyEditor;
