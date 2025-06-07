
import { useState, useEffect } from 'react';
import { useContent } from '@/contexts/ContentContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Save, Plus, Trash2 } from 'lucide-react';

const TeamEditor = () => {
  const { content, updateContent } = useContent();
  const [teamData, setTeamData] = useState(content.team);

  useEffect(() => {
    setTeamData(content.team);
  }, [content.team]);

  const handleSave = () => {
    updateContent('team', teamData);
    alert('Team updated successfully!');
  };

  const handleMemberChange = (index: number, field: string, value: string) => {
    setTeamData(prev => ({
      ...prev,
      members: prev.members.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const addMember = () => {
    const newMember = {
      id: Date.now().toString(),
      name: "New Faculty",
      title: "TEACHER",
      image: "/lovable-uploads/cd6caae8-576f-4eb6-9780-ebfc731840c3.png",
      specialization: "Subject Specialization"
    };
    setTeamData(prev => ({
      ...prev,
      members: [...prev.members, newMember]
    }));
  };

  const removeMember = (index: number) => {
    setTeamData(prev => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Section</CardTitle>
          <p className="text-sm text-gray-600">
            Manage your faculty and team members
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teamTitle">Section Title</Label>
              <Input
                id="teamTitle"
                value={teamData.title}
                onChange={(e) => setTeamData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Meet The Teacher's"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="teamSubtitle">Subtitle</Label>
              <Input
                id="teamSubtitle"
                value={teamData.subtitle}
                onChange={(e) => setTeamData(prev => ({ ...prev, subtitle: e.target.value }))}
                placeholder="Our provides our coaching systematic structure"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Team Members</Label>
              <Button onClick={addMember} size="sm" variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Member
              </Button>
            </div>
            
            <div className="space-y-4">
              {teamData.members.map((member, index) => (
                <div key={member.id} className="p-4 border rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Name</Label>
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
                  
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Profile Image URL</Label>
                      <Textarea
                        value={member.image}
                        onChange={(e) => handleMemberChange(index, 'image', e.target.value)}
                        placeholder="/lovable-uploads/cd6caae8-576f-4eb6-9780-ebfc731840c3.png"
                        rows={2}
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label className="text-xs">Specialization</Label>
                      <Input
                        value={member.specialization}
                        onChange={(e) => handleMemberChange(index, 'specialization', e.target.value)}
                        placeholder="Advanced Physics & Problem Solving"
                      />
                    </div>
                    
                    <Button
                      onClick={() => removeMember(index)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 w-full"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove Member
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="w-4 h-4 mr-2" />
            Save Team Content
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamEditor;
