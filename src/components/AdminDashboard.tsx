import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Menu as MenuIcon, Settings, Plus, Trash2, Edit2, Save, X, QrCode as QrIcon, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Business, Category, MenuItem } from '../types';
import Logo from './Logo';

export default function AdminDashboard() {
  const [business, setBusiness] = useState<Business | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'menu' | 'qr'>('dashboard');
  const [isSetup, setIsSetup] = useState(false);

  // Setup Form State
  const [setupForm, setSetupForm] = useState({ name: '', slug: '', messenger_id: '' });

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/setup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(setupForm)
    });
    if (res.ok) {
      window.location.reload();
    } else {
      alert("Slug already taken or error occurred.");
    }
  };

  // Mock data for demo if not setup
  useEffect(() => {
    // In a real app, we'd check if the user has a business
    // For this demo, we'll just show the setup if no business is found
  }, []);

  if (!isSetup && !business) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-md w-full"
        >
          <h1 className="font-display text-2xl font-bold mb-2">Setup Your ChatCart</h1>
          <p className="text-slate-500 mb-8">Launch your digital menu in seconds.</p>
          
          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1.5">Business Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                placeholder="e.g. Starbucks"
                value={setupForm.name}
                onChange={e => setSetupForm({...setupForm, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Custom URL Slug</label>
              <div className="flex items-center">
                <span className="px-3 py-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-xl text-slate-500 text-sm">chatcart.com/</span>
                <input 
                  type="text" 
                  required
                  className="flex-1 px-4 py-3 rounded-r-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                  placeholder="starbucks"
                  value={setupForm.slug}
                  onChange={e => setSetupForm({...setupForm, slug: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5">Messenger Username/ID</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                placeholder="e.g. starbucks"
                value={setupForm.messenger_id}
                onChange={e => setSetupForm({...setupForm, messenger_id: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full py-4 bg-brand text-white rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 mt-4">
              Create My Menu
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
              <Logo className="text-white w-7 h-7" />
            </div>
            <span className="font-display font-bold text-xl">ChatCart Admin</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'menu', label: 'Menu Editor', icon: MenuIcon },
            { id: 'qr', label: 'QR Engine', icon: QrIcon },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id ? 'bg-brand/10 text-brand' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-8 flex justify-between items-center">
          <div>
            <h2 className="font-display text-3xl font-bold capitalize">
              {activeTab === 'menu' ? 'Menu Editor' : activeTab}
            </h2>
            <p className="text-slate-500 mt-1">
              {activeTab === 'menu' ? 'Organize your categories and items' : 'Manage your business performance'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {activeTab === 'menu' && (
              <button className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-bold shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all">
                <Plus className="w-5 h-5" /> Add Category
              </button>
            )}
            <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200" />
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="admin-card p-8">
                <p className="text-slate-500 text-sm mb-1 font-semibold">Total Menu Views</p>
                <h3 className="text-4xl font-bold">1,284</h3>
                <div className="mt-4 text-xs text-emerald-500 font-bold bg-emerald-50 inline-block px-2 py-1 rounded">+12% from last week</div>
              </div>
              <div className="admin-card p-8">
                <p className="text-slate-500 text-sm mb-1 font-semibold">Messenger Clicks</p>
                <h3 className="text-4xl font-bold">432</h3>
                <div className="mt-4 text-xs text-emerald-500 font-bold bg-emerald-50 inline-block px-2 py-1 rounded">+8% from last week</div>
              </div>
              <div className="admin-card p-8">
                <p className="text-slate-500 text-sm mb-1 font-semibold">Conversion Rate</p>
                <h3 className="text-4xl font-bold">33.6%</h3>
                <div className="mt-4 text-xs text-emerald-500 font-bold bg-emerald-50 inline-block px-2 py-1 rounded">+2% from last week</div>
              </div>
            </div>
          )}

          {activeTab === 'qr' && (
            <div className="max-w-md mx-auto bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl text-center">
              <h3 className="font-display text-2xl font-bold mb-6">Your Menu QR Code</h3>
              <div className="bg-slate-50 p-8 rounded-3xl inline-block mb-8">
                <QRCodeSVG 
                  value={`${window.location.origin}/menu/${business?.slug || 'demo'}`} 
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-slate-500 mb-8">Print this code and place it on your tables for instant access.</p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                Download High-Res PNG
              </button>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="space-y-12">
              {[
                { 
                  name: 'Meals', 
                  icon: '🍽️',
                  items: [
                    { name: 'Chicken Inasal', price: 120, status: 'AVAILABLE', img: 'https://picsum.photos/seed/inasal/200/200' },
                    { name: 'Korean Chicken Wings', price: 100, status: 'AVAILABLE', img: 'https://picsum.photos/seed/wings/200/200' },
                    { name: 'Shawarma Rice', price: 90, status: 'AVAILABLE', img: 'https://picsum.photos/seed/shawarma/200/200', popular: true },
                    { name: 'Fish Fillet', price: 90, status: 'AVAILABLE', img: 'https://picsum.photos/seed/fish/200/200' },
                  ]
                },
                { 
                  name: 'Drinks', 
                  icon: '☕',
                  items: [
                    { name: 'Americano', price: 50, status: 'AVAILABLE', img: 'https://picsum.photos/seed/coffee/200/200' },
                  ]
                }
              ].map((category, idx) => (
                <div key={idx} className="admin-card">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-brand rounded-full" />
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="font-display text-2xl font-bold">{category.name}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-2 text-slate-400 hover:text-slate-600"><Edit2 className="w-5 h-5" /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-5 h-5" /></button>
                      <button className="ml-4 flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
                        <Plus className="w-4 h-4" /> Add Item
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 grid md:grid-cols-2 gap-6">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-brand/20 transition-colors group">
                        <img src={item.img} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-slate-900">{item.name}</h4>
                              {item.popular && (
                                <span className="text-[10px] font-bold bg-red-50 text-red-500 px-2 py-0.5 rounded-full uppercase">Popular</span>
                              )}
                            </div>
                            <span className="font-mono font-bold text-brand">₱{item.price.toFixed(2)}</span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-500 px-2 py-0.5 rounded uppercase">
                                {item.status}
                              </span>
                              <button className="p-1 text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Edit2 className="w-3 h-3" />
                              </button>
                              <button className="p-1 text-slate-300 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
