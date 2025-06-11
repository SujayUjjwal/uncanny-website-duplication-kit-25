
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Users } from 'lucide-react';

interface TeamTextEditorProps {
  onContentChange: () => void;
}

const TeamTextEditor = ({ onContentChange }: TeamTextEditorProps) => {
  const { content, updateContent } = useContent();
  const [teamData, setTeamData] = useState(content.team);

  useEffect(() => {
    setTeamData(content.team);
  }, [content.team]);

  const handleSave = () => {
    updateContent('team', teamData);
    alert('Team section saved successfully!');
  };

  const handleTitleChange = (field: string, value: string) => {
    setTeamData(prev => ({ ...prev, [field]: value }));
    onContentChange();
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    setTeamData(prev => ({
      ...prev,
      members: prev.members.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
    onContentChange();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>Team Section Content</span>
        </CardTitle>
        <p className="text-sm text-gray-600">
          Edit your team section titles and member information
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="teamTitle">Main Title</Label>
            <Input
              id="teamTitle"
              value={teamData.title}
              onChange={(e) => handleTitleChange('title', e.target.value)}
              placeholder="Meet The Teacher's"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="teamSubtitle">Subtitle</Label>
            <Input
              id="teamSubtitle"
              value={teamData.subtitle}
              onChange={(e) => handleTitleChange('subtitle', e.target.value)}
              placeholder="Our provides our coaching systematic structure"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Team Members</Label>
          <div className="space-y-4">
            {teamData.members.map((member, index) => (
              <div key={member.id} className="p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Member Name</Label>
                    <Input
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                      placeholder="Sumit Sir"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Title/Position</Label>
                    <Input
                      value={member.title}
                      onChange={(e) => handleMemberChange(index, 'title', e.target.value)}
                      placeholder="PHYSICS TEACHER"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Specialization</Label>
                  <Input
                    value={member.specialization}
                    onChange={(e) => handleMemberChange(index, 'specialization', e.target.value)}
                    placeholder="Advanced Physics & Problem Solving"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Image URL</Label>
                  <Textarea
                    value={member.image}
                    onChange={(e) => handleMemberChange(index, 'image', e.target.value)}
                    placeholder="/lovable-uploads/..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Team Section
        </Button>
      </CardContent>
    </Card>
  );
};

export default TeamTextEditor;
