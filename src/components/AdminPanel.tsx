import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  X,
  Home,
  Briefcase,
  Users,
  Mail,
} from 'lucide-react';
import useContent from '@/lib/useContent';

const AdminPanel = () => {
  const { content, updateContent } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [activeTab, setActiveTab] = useState('hero');

  const tabs = [
    { id: 'hero', name: 'Hero Section', icon: Home },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'about', name: 'About', icon: Users },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

  const handleSave = () => {
    updateContent(editedContent);
    alert('✅ Content saved successfully!');
  };

  const handleReset = () => {
    setEditedContent(content);
    alert('↩️ Changes reset to last saved version');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(editedContent, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'content-config.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setEditedContent(imported);
          alert('✅ Content imported successfully!');
        } catch (error) {
          alert('❌ Error importing file. Please check the format.');
        }
      };
      reader.readAsText(file);
    }
  };

  const updateField = (section: string, field: string, value: any) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <>
      {/* Floating Admin Button */}


      {/* Admin Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-4xl bg-white dark:bg-gray-900 z-[201] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-white" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Content Manager</h2>
                    <p className="text-sm text-white/80">Edit all website text</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <Button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  onClick={handleReset}
                  variant="outline"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button
                  onClick={handleExport}
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <label className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>
                      <Upload className="w-4 h-4 mr-2" />
                      Import
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 px-6 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 overflow-x-auto">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Hero Section */}
                {activeTab === 'hero' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hero Section</h3>
                    
                    <div>
                      <Label>Badge Text</Label>
                      <Input
                        value={editedContent.hero.badge}
                        onChange={(e) => updateField('hero', 'badge', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Main Title</Label>
                      <Input
                        value={editedContent.hero.title}
                        onChange={(e) => updateField('hero', 'title', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Gradient Title</Label>
                      <Input
                        value={editedContent.hero.titleGradient}
                        onChange={(e) => updateField('hero', 'titleGradient', e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Subtitle</Label>
                      <Textarea
                        value={editedContent.hero.subtitle}
                        onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                        className="mt-2"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Primary CTA</Label>
                        <Input
                          value={editedContent.hero.ctaPrimary}
                          onChange={(e) => updateField('hero', 'ctaPrimary', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label>Secondary CTA</Label>
                        <Input
                          value={editedContent.hero.ctaSecondary}
                          onChange={(e) => updateField('hero', 'ctaSecondary', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Services/About/Contact tabs similar pattern */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminPanel;