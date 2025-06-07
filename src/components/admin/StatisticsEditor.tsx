
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Plus, Trash2 } from 'lucide-react';

const StatisticsEditor = () => {
  const { content, updateContent } = useContent();
  const [statsData, setStatsData] = useState(content.statistics);

  useEffect(() => {
    setStatsData(content.statistics);
  }, [content.statistics]);

  const handleSave = () => {
    updateContent('statistics', statsData);
    alert('Statistics updated successfully!');
  };

  const handleStatChange = (index: number, field: string, value: string) => {
    setStatsData(prev => ({
      ...prev,
      stats: prev.stats.map((stat, i) => 
        i === index ? { ...stat, [field]: value } : stat
      )
    }));
  };

  const addStat = () => {
    const newStat = {
      id: Date.now().toString(),
      number: "0",
      label: "NEW STATISTIC"
    };
    setStatsData(prev => ({
      ...prev,
      stats: [...prev.stats, newStat]
    }));
  };

  const removeStat = (index: number) => {
    setStatsData(prev => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Statistics Section</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your achievement statistics and numbers
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Statistics</Label>
              <Button onClick={addStat} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Statistic
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {statsData.stats.map((stat, index) => (
                <div key={stat.id} className="p-4 border rounded-lg">
                  <div className="space-y-3">
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
                    <Button
                      onClick={() => removeStat(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 w-full"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Statistic
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Statistics
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsEditor;
