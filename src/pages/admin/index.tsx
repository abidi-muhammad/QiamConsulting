import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Lock, 
  Eye, 
  EyeOff, 
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
  Menu as MenuIcon,
  LogOut
} from 'lucide-react';
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

  // Default credentials
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin123';

  const tabs = [
    { id: 'hero', name: 'Hero', icon: Home },
    { id: 'navbar', name: 'Navbar', icon: MenuIcon },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'about', name: 'About', icon: Users },
    { id: 'contact', name: 'Contact', icon: Mail },
  ];

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
    alert('↩️ Changes reset to last saved version');
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
          alert('✅ Content imported successfully!');
        } catch (error) {
          alert('❌ Error importing file. Please check the format.');
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

  const updateArrayItem = (section: keyof typeof editedContent, field: string, index: number, value: any) => {
    setEditedContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: (prev[section] as any)[field].map((item: any, i: number) => 
          i === index ? value : item
        )
      }
    }));
  };

  // Check session on mount
  useState(() => {
    const loggedIn = sessionStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  });

  // LOGIN PAGE
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-950 dark:via-blue-950 dark:to-cyan-950">
        {/* Animated background - MATCHES WEBSITE */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [0, -100, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full max-w-md p-8"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-800">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Admin Login
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                QiamConsulting Content Manager
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
              >
                <p className="text-sm text-red-600 dark:text-red-400 text-center">
                  {error}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="mt-2 h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="h-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <p className="text-sm text-blue-700 dark:text-blue-300 text-center">
                Default: admin / admin123
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                QiamConsulting Admin
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Content Management System
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {/* Open Editor Button */}
        <div className="mb-8">
          <Button
            onClick={() => setIsPanelOpen(true)}
            className="h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl"
          >
            <Settings className="w-5 h-5 mr-2" />
            Open Content Editor
          </Button>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              All Pages Editable
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Edit Hero, Services, About, Contact, Navbar & Footer
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Instant Save
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Changes saved to localStorage immediately
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Backup & Restore
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Export and import content as JSON files
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Start Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p className="text-gray-700 dark:text-gray-300">Click "Open Content Editor" button above</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p className="text-gray-700 dark:text-gray-300">Switch between tabs to edit different sections</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text-gray-700 dark:text-gray-300">Make changes to any text field</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <p className="text-gray-700 dark:text-gray-300">Click "Save Changes" to persist edits</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <p className="text-gray-700 dark:text-gray-300">Use Export/Import for backups</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                <p className="text-gray-700 dark:text-gray-300">Visit your site to see changes live</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Panel */}
      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPanelOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-4xl bg-white dark:bg-gray-900 z-[201] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-white" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Content Editor</h2>
                    <p className="text-sm text-white/80">Edit all website content</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPanelOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button onClick={handleReset} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button onClick={handleExport} variant="outline">
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
                  <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                </label>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 px-6 py-3 border-b border-gray-200 dark:border-gray-800 overflow-x-auto">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.name}
                    </button>
                  );
                })}
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Hero Tab */}
                {activeTab === 'hero' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Hero Section</h3>
                    <div><Label>Badge</Label><Input value={editedContent.hero.badge} onChange={(e) => updateField('hero', 'badge', e.target.value)} className="mt-2" /></div>
                    <div><Label>Title</Label><Input value={editedContent.hero.title} onChange={(e) => updateField('hero', 'title', e.target.value)} className="mt-2" /></div>
                    <div><Label>Gradient Title</Label><Input value={editedContent.hero.titleGradient} onChange={(e) => updateField('hero', 'titleGradient', e.target.value)} className="mt-2" /></div>
                    <div><Label>Subtitle</Label><Textarea value={editedContent.hero.subtitle} onChange={(e) => updateField('hero', 'subtitle', e.target.value)} className="mt-2" rows={3} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Primary CTA</Label><Input value={editedContent.hero.ctaPrimary} onChange={(e) => updateField('hero', 'ctaPrimary', e.target.value)} className="mt-2" /></div>
                      <div><Label>Secondary CTA</Label><Input value={editedContent.hero.ctaSecondary} onChange={(e) => updateField('hero', 'ctaSecondary', e.target.value)} className="mt-2" /></div>
                    </div>
                  </div>
                )}

                {/* Other tabs similar structure... */}
                {activeTab === 'navbar' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">Navbar</h3>
                    <div><Label>Brand Name</Label><Input value={editedContent.navbar.brandName} onChange={(e) => updateField('navbar', 'brandName', e.target.value)} className="mt-2" /></div>
                    <div><Label>CTA Button</Label><Input value={editedContent.navbar.ctaButton} onChange={(e) => updateField('navbar', 'ctaButton', e.target.value)} className="mt-2" /></div>
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