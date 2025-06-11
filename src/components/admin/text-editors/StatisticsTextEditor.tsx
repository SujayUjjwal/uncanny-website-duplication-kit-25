
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, BarChart3 } from 'lucide-react';

interface StatisticsTextEditorProps {
  onContentChange: () => void;
}

const StatisticsTextEditor = ({ onContentChange }: StatisticsTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [statsData, setStatsData] = useState(content.statistics);

  useEffect(() => {
    setStatsData(content.statistics);
  }, [content.statistics]);

  const handleSave = () => {
    updateContent('statistics', statsData);
    alert('Statistics section saved successfully!');
  };

  const handleStatChange = (index: number, field: string, value: string) => {
    setStatsData(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5" />
          <span>Statistics Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your statistics numbers and labels
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Statistics</Label>
          <div className="space-y-4">
            {statsData.stats.map((stat, index) => (
              <div key={stat.id} className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Number/Value</Label>
                    <Input
                      value={stat.number}
                      onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                      placeholder="9"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Label/Description</Label>
                    <Input
                      value={stat.label}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      placeholder="YEARS AND COUNTING"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Statistics Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default StatisticsTextEditor;
