import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Settings, Save, RotateCcw, Download, Upload, X, Home, Briefcase, Users, Mail, LogOut, Cloud, Menu as MenuIcon } from 'lucide-react';
import useContent from '@/lib/useContent';

const AdminPage = () => {
  const { content, updateContent } = useContent();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [activeTab, setActiveTab] = useState('hero');

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin123';

  const tabs = [
    { id: 'hero', name: 'Hero', icon: Home },
    { id: 'navbar', name: 'Navbar', icon: MenuIcon },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'about', name: 'About', icon: Users },
    { id: 'contact', name: 'Contact', icon: Mail },
    { id: 'footer', name: 'Footer', icon: Cloud },
  ];

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setEditedContent(content);
  }, [content]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError('');
      sessionStorage.setItem('adminLoggedIn', 'true');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('adminLoggedIn');
    setUsername('');
    setPassword('');
    setIsPanelOpen(false);
  };

  const handleSave = () => {
    updateContent(editedContent);
    alert('✅ Content saved successfully!');
  };

  const handleReset = () => {
    setEditedContent(content);
    alert('↩️ Changes reset');
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(editedContent, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'content-config.json');
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
          alert('✅ Content imported!');
        } catch (error) {
          alert('❌ Error importing file');
        }
      };
      reader.readAsText(file);
    }
  };

  const updateField = (section: keyof typeof editedContent, field: string, value: any) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-950 dark:via-blue-950 dark:to-cyan-950">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 100, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md p-8">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Login</h1>
              <p className="text-gray-600 dark:text-gray-400">Content Management</p>
            </div>
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                <p className="text-sm text-red-600 dark:text-red-400 text-center">{error}</p>
              </motion.div>
            )}
            <form onSubmit={handleLogin} className="space-y-6">
              <div><Label>Username</Label><Input value={username} onChange={(e) => setUsername(e.target.value)} className="mt-2 h-12" required /></div>
              <div>
                <Label>Password</Label>
                <div className="relative mt-2">
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 pr-12" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">Sign In</Button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">Default: admin / admin123</p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">QiamConsulting Admin</h1>
            <Button onClick={handleLogout} variant="outline" className="border-red-300 text-red-600"><LogOut className="w-4 h-4 mr-2" />Logout</Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <Button onClick={() => setIsPanelOpen(true)} className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl mb-8">
          <Settings className="w-5 h-5 mr-2" />Open Content Editor
        </Button>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">All Pages</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Edit Hero, Services, About, Contact & more</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Instant Save</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Changes saved to localStorage</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Backup</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Export/Import as JSON</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPanelOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 bottom-0 w-full max-w-4xl bg-white dark:bg-gray-900 z-[201] shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-bold text-white">Content Editor</h2>
                </div>
                <button onClick={() => setIsPanelOpen(false)} className="p-2 rounded-lg hover:bg-white/20"><X className="w-6 h-6 text-white" /></button>
              </div>
              <div className="flex gap-2 px-6 py-4 border-b bg-gray-50 dark:bg-gray-800/50">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700"><Save className="w-4 h-4 mr-2" />Save</Button>
                <Button onClick={handleReset} variant="outline"><RotateCcw className="w-4 h-4 mr-2" />Reset</Button>
                <Button onClick={handleExport} variant="outline"><Download className="w-4 h-4 mr-2" />Export</Button>
                <label className="cursor-pointer">
                  <Button variant="outline" asChild><span><Upload className="w-4 h-4 mr-2" />Import</span></Button>
                  <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                </label>
              </div>
              <div className="flex gap-1 px-6 py-3 border-b overflow-x-auto bg-gray-50 dark:bg-gray-800/50">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                      <Icon className="w-4 h-4" />{tab.name}
                    </button>
                  );
                })}
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {activeTab === 'hero' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Hero Section</h3>
                    <div><Label className="text-gray-900 dark:text-white">Badge Text</Label><Input value={editedContent.hero.badge} onChange={(e) => updateField('hero', 'badge', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Main Title</Label><Input value={editedContent.hero.title} onChange={(e) => updateField('hero', 'title', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Gradient Title</Label><Input value={editedContent.hero.titleGradient} onChange={(e) => updateField('hero', 'titleGradient', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Subtitle</Label><Textarea value={editedContent.hero.subtitle} onChange={(e) => updateField('hero', 'subtitle', e.target.value)} className="mt-2" rows={3} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label className="text-gray-900 dark:text-white">Primary CTA</Label><Input value={editedContent.hero.ctaPrimary} onChange={(e) => updateField('hero', 'ctaPrimary', e.target.value)} className="mt-2" /></div>
                      <div><Label className="text-gray-900 dark:text-white">Secondary CTA</Label><Input value={editedContent.hero.ctaSecondary} onChange={(e) => updateField('hero', 'ctaSecondary', e.target.value)} className="mt-2" /></div>
                    </div>
                    <div>
                      <Label className="text-gray-900 dark:text-white">Social Proof Items</Label>
                      {editedContent.hero.socialProof.map((item: string, idx: number) => (
                        <Input key={idx} value={item} onChange={(e) => {
                          const newProof = [...editedContent.hero.socialProof];
                          newProof[idx] = e.target.value;
                          updateField('hero', 'socialProof', newProof);
                        }} className="mt-2" />
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'navbar' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Navbar</h3>
                    <div><Label className="text-gray-900 dark:text-white">Brand Name</Label><Input value={editedContent.navbar.brandName} onChange={(e) => updateField('navbar', 'brandName', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">CTA Button Text</Label><Input value={editedContent.navbar.ctaButton} onChange={(e) => updateField('navbar', 'ctaButton', e.target.value)} className="mt-2" /></div>
                  </div>
                )}
                {activeTab === 'services' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Services Section</h3>
                    <div><Label className="text-gray-900 dark:text-white">Badge</Label><Input value={editedContent.services.badge} onChange={(e) => updateField('services', 'badge', e.target.value)} className="mt-2" /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label className="text-gray-900 dark:text-white">Title</Label><Input value={editedContent.services.title} onChange={(e) => updateField('services', 'title', e.target.value)} className="mt-2" /></div>
                      <div><Label className="text-gray-900 dark:text-white">Gradient Title</Label><Input value={editedContent.services.titleGradient} onChange={(e) => updateField('services', 'titleGradient', e.target.value)} className="mt-2" /></div>
                    </div>
                    <div><Label className="text-gray-900 dark:text-white">Subtitle</Label><Textarea value={editedContent.services.subtitle} onChange={(e) => updateField('services', 'subtitle', e.target.value)} className="mt-2" rows={2} /></div>
                  </div>
                )}
                {activeTab === 'about' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">About Section</h3>
                    <div><Label className="text-gray-900 dark:text-white">Badge</Label><Input value={editedContent.about.badge} onChange={(e) => updateField('about', 'badge', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Name</Label><Input value={editedContent.about.name} onChange={(e) => updateField('about', 'name', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Title Gradient</Label><Input value={editedContent.about.titleGradient} onChange={(e) => updateField('about', 'titleGradient', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Description</Label><Textarea value={editedContent.about.description} onChange={(e) => updateField('about', 'description', e.target.value)} className="mt-2" rows={4} /></div>
                  </div>
                )}
                {activeTab === 'contact' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact Section</h3>
                    <div><Label className="text-gray-900 dark:text-white">Badge</Label><Input value={editedContent.contact.badge} onChange={(e) => updateField('contact', 'badge', e.target.value)} className="mt-2" /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label className="text-gray-900 dark:text-white">Title</Label><Input value={editedContent.contact.title} onChange={(e) => updateField('contact', 'title', e.target.value)} className="mt-2" /></div>
                      <div><Label className="text-gray-900 dark:text-white">Gradient Title</Label><Input value={editedContent.contact.titleGradient} onChange={(e) => updateField('contact', 'titleGradient', e.target.value)} className="mt-2" /></div>
                    </div>
                    <div><Label className="text-gray-900 dark:text-white">Subtitle</Label><Textarea value={editedContent.contact.subtitle} onChange={(e) => updateField('contact', 'subtitle', e.target.value)} className="mt-2" rows={2} /></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div><Label className="text-gray-900 dark:text-white">Email</Label><Input value={editedContent.contact.email} onChange={(e) => updateField('contact', 'email', e.target.value)} className="mt-2" /></div>
                      <div><Label className="text-gray-900 dark:text-white">Phone</Label><Input value={editedContent.contact.phone} onChange={(e) => updateField('contact', 'phone', e.target.value)} className="mt-2" /></div>
                      <div><Label className="text-gray-900 dark:text-white">Location</Label><Input value={editedContent.contact.location} onChange={(e) => updateField('contact', 'location', e.target.value)} className="mt-2" /></div>
                    </div>
                  </div>
                )}
                {activeTab === 'footer' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Footer</h3>
                    <div><Label className="text-gray-900 dark:text-white">Brand Name</Label><Input value={editedContent.footer.brandName} onChange={(e) => updateField('footer', 'brandName', e.target.value)} className="mt-2" /></div>
                    <div><Label className="text-gray-900 dark:text-white">Description</Label><Textarea value={editedContent.footer.description} onChange={(e) => updateField('footer', 'description', e.target.value)} className="mt-2" rows={3} /></div>
                    <div><Label className="text-gray-900 dark:text-white">Copyright</Label><Input value={editedContent.footer.copyright} onChange={(e) => updateField('footer', 'copyright', e.target.value)} className="mt-2" /></div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPage;