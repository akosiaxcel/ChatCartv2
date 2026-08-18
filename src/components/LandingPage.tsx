import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Globe, QrCode, CheckCircle2, Menu as MenuIcon, X, ExternalLink, Plus, Edit2, Trash2, LayoutDashboard, MousePointer2, Search, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Auto-slide sequence: 0 -> 1 -> 2 and stop
    if (activeSlide < 2) {
      const timer = setTimeout(() => {
        setActiveSlide(activeSlide + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide]);

  const slides = [
    {
      title: "Business Profile",
      content: (
        <div className="w-full h-full bg-slate-50 overflow-y-auto no-scrollbar pt-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Welcome, Hallel Cafe!</h3>
                <p className="text-slate-500 text-sm">Your digital menu is live and ready for customers.</p>
              </div>
              <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full border border-emerald-100 flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Store is Live
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">Business Profile</h4>
                </div>
                <div className="space-y-4">
                  <div className="h-10 bg-slate-50 rounded-xl border border-slate-100" />
                  <div className="h-10 bg-slate-50 rounded-xl border border-slate-100" />
                  <div className="h-12 bg-slate-900 rounded-xl mt-6" />
                </div>
              </div>

              <div className="col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-full flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-brand" />
                    <h4 className="font-bold text-slate-900">Public Menu</h4>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </div>
                <div className="w-32 h-32 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-4">
                  <QrCode className="w-20 h-20 text-slate-300" />
                </div>
                <div className="w-full h-8 bg-slate-50 rounded-lg mb-4" />
                <div className="w-full h-10 bg-slate-900 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Menu Editor",
      content: (
        <div className="w-full h-full bg-slate-50 overflow-y-auto pt-8 px-6 custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900">Menu Editor</h3>
                <p className="text-slate-500 text-sm">Organize your categories and items</p>
              </div>
              <button className="px-6 py-2.5 bg-brand text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-brand/20">
                <Plus className="w-4 h-4" /> Add Category
              </button>
            </div>

            <div className="space-y-8 pb-10">
              {/* Category: Meals */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden text-left">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-5 bg-brand rounded-full" />
                    <span className="text-lg">🍽️</span>
                    <h4 className="font-bold text-slate-900">Meals</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-1.5 text-slate-300 hover:text-slate-500"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-1.5 text-slate-300 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    <button className="ml-2 px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Add Item
                    </button>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  {[
                    { name: 'Chicken Inasal', price: 120, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=200&h=200&q=80' },
                    { name: 'Korean Chicken Wings', price: 100, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=200&h=200&q=80' },
                    { name: 'Shawarma Rice', price: 90, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=200&h=200&q=80', popular: true },
                    { name: 'Fish Fillet', price: 90, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=200&h=200&q=80' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-brand/20 transition-colors group">
                      <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h5 className="text-[12px] font-bold text-slate-900 truncate">{item.name}</h5>
                          <span className="text-[12px] font-bold text-brand">₱{item.price.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase tracking-wider">Available</span>
                            {item.popular && <span className="text-[9px] font-bold bg-red-50 text-red-500 px-2 py-0.5 rounded uppercase tracking-wider">Popular</span>}
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 text-slate-300 hover:text-slate-500"><Edit2 className="w-3 h-3" /></button>
                            <button className="p-1 text-slate-300 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category: Drinks */}
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden text-left">
                <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-5 bg-brand rounded-full" />
                    <span className="text-lg">☕</span>
                    <h4 className="font-bold text-slate-900">Drinks</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-1.5 text-slate-300 hover:text-slate-500"><Edit2 className="w-4 h-4" /></button>
                    <button className="p-1.5 text-slate-300 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    <button className="ml-2 px-4 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Add Item
                    </button>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-brand/20 transition-colors group">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=200&h=200&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h5 className="text-[12px] font-bold text-slate-900 truncate">Americano</h5>
                        <span className="text-[12px] font-bold text-brand">₱50.00</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded uppercase tracking-wider">Available</span>
                        </div>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1 text-slate-300 hover:text-slate-500"><Edit2 className="w-3 h-3" /></button>
                          <button className="p-1 text-slate-300 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Public Menu",
      content: (
        <div className="w-full h-full bg-white overflow-y-auto custom-scrollbar text-left">
          {/* Desktop Public Menu Mockup */}
          <header className="px-8 py-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-[10px] text-white font-bold">HC</div>
              <span className="font-black text-brand tracking-tighter">HALLEL CAFE</span>
            </div>
            <nav className="flex items-center gap-6">
              {['All Items', 'Meals', 'Drinks', 'Refreshers'].map((cat, i) => (
                <span key={cat} className={`text-[10px] font-bold uppercase tracking-wider cursor-pointer ${i === 0 ? 'text-brand border-b-2 border-brand pb-1' : 'text-slate-400'}`}>
                  {cat}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <Search className="w-4 h-4 text-slate-400" />
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-slate-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand text-white text-[6px] flex items-center justify-center rounded-full">2</span>
              </div>
            </div>
          </header>

          <main className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 mb-1">Meals</h2>
              <div className="w-12 h-1 bg-brand rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {[
                { name: 'Chicken Inasal', price: 120, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=300&h=300&q=80' },
                { name: 'Korean Chicken Wings', price: 100, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=300&h=300&q=80' },
                { name: 'Shawarma Rice', price: 90, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=300&h=300&q=80', popular: true },
                { name: 'Fish Fillet', price: 90, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&h=300&q=80' },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-3">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 hover:bg-brand hover:text-white transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    {item.popular && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Popular</span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                  <p className="text-slate-400 text-xs mt-0.5 font-medium">from ₱{item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Logo className="w-9 h-9 text-slate-900" />
              <div className="flex flex-col -gap-1">
                <span className="font-display font-bold text-2xl tracking-tight leading-none">ChatCart</span>
                <a href="https://wapdev.xyz" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-brand hover:underline">by WapDev</a>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Pricing</a>
              <a href="https://chatcart.wapdev.xyz" className="px-5 py-2.5 bg-brand text-white rounded-full text-sm font-semibold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                Get Started
              </a>
            </div>

            <button className="md:hidden p-2 text-slate-600 hover:text-brand transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#features" 
                  className="block text-lg font-medium text-slate-600 hover:text-brand transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block text-lg font-medium text-slate-600 hover:text-brand transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </a>
                <a 
                  href="#pricing" 
                  className="block text-lg font-medium text-slate-600 hover:text-brand transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="https://chatcart.wapdev.xyz" 
                  className="block w-full py-4 bg-brand text-white rounded-2xl text-center font-bold shadow-lg shadow-brand/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100 shadow-xs">
              <span className="w-2 h-2 bg-brand rounded-full animate-ping" />
              ⚡ Instant Facebook Messenger Ordering
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              The Social Way to <br className="hidden sm:block" />
              <span className="text-brand">Sell More</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              ChatCart bridges the gap between a professional digital menu and the convenience of social media messaging. Leverage Facebook Messenger as your primary order channel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://chatcart.wapdev.xyz" className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-full text-lg font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand/25 flex items-center justify-center gap-2 group hover:scale-[1.02]">
                <MessageCircle className="w-5 h-5 fill-current" />
                Start Your Free Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#use-cases" className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 rounded-full text-lg font-bold hover:bg-slate-200 transition-all">
                See Use Cases
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative max-w-5xl mx-auto px-4 hidden md:block"
          >
            {/* Demo Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border border-slate-700">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                Live Product Demo
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-20 bg-gradient-to-r from-brand/20 to-emerald-400/10 blur-[120px] rounded-full -z-10 opacity-60" />
            
            {/* MacBook Mockup */}
            <div className="relative mx-auto">
              {/* Laptop Screen/Body */}
              <div className="relative bg-slate-800 rounded-[2.5rem] p-4 shadow-2xl border-[8px] border-slate-900 overflow-hidden">
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-[1.5rem] overflow-hidden border border-white/5 aspect-[16/10]">
                  {/* Camera Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  </div>
                  
                  {/* Carousel Content */}
                  <div className="w-full h-full relative flex">
                    {/* Sidebar Mockup */}
                    <div className="w-40 bg-white border-r border-slate-100 hidden lg:flex flex-col p-4 gap-6 shrink-0">
                      <div className="flex items-center gap-2 mb-4">
                        <Logo className="w-5 h-5 text-brand" />
                        <span className="font-bold text-[10px] whitespace-nowrap">ChatCart Admin</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg text-slate-400 text-[10px] font-semibold">
                          <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                          <MenuIcon className="w-3.5 h-3.5" /> Menu Editor
                        </div>
                      </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 h-full relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeSlide}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4 }}
                          className="w-full h-full"
                        >
                          {slides[activeSlide].content}
                        </motion.div>
                      </AnimatePresence>

                      {/* Scroll Hint Indicator */}
                      <AnimatePresence>
                        {activeSlide === 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-6 right-6 z-30 pointer-events-none"
                          >
                            <div className="bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl border border-white/10">
                              <motion.div
                                animate={{ y: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                <MousePointer2 className="w-4 h-4" />
                              </motion.div>
                              <span className="text-[10px] font-bold uppercase tracking-wider">Scroll to explore</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Bottom/Base */}
              <div className="relative -mt-2 mx-auto w-[105%] -left-[2.5%] h-4 bg-slate-700 rounded-b-xl shadow-xl border-t border-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-900/20 rounded-b-full" />
              </div>

              {/* iPhone Mockup - Floats above MacBook */}
              <AnimatePresence>
                {activeSlide === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="absolute -right-12 -bottom-16 z-50 w-52 h-[420px] hidden md:block"
                  >
                    <div className="relative w-full h-full bg-slate-900 rounded-[2.8rem] p-2.5 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] border-[5px] border-slate-800 overflow-hidden">
                      {/* iPhone Screen */}
                      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col text-left">
                        {/* Mobile Header */}
                        <header className="px-4 py-3.5 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-[6px] text-white font-bold">HC</div>
                            <span className="font-black text-emerald-500 text-[10px] tracking-tighter">HALLEL CAFE</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Search className="w-3 h-3 text-slate-400" />
                            <ShoppingCart className="w-3 h-3 text-slate-400" />
                          </div>
                        </header>

                        {/* Mobile Categories */}
                        <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar border-b border-slate-50">
                          {['All Items', 'Meals', 'Drinks'].map((cat, i) => (
                            <span key={cat} className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-[8px] font-bold uppercase tracking-wider ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'}`}>
                              {cat}
                            </span>
                          ))}
                        </div>

                        {/* Mobile Content */}
                        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                          <div className="mb-4">
                            <h2 className="text-xl font-black text-emerald-500 mb-0.5">Meals</h2>
                            <div className="w-8 h-0.5 bg-emerald-500 rounded-full" />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { name: 'Chicken Inasal', price: 120, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=150&h=150&q=80' },
                              { name: 'Korean Chicken Wings', price: 100, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=150&h=150&q=80' },
                              { name: 'Shawarma Rice', price: 90, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=150&h=150&q=80', popular: true },
                              { name: 'Fish Fillet', price: 90, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=150&h=150&q=80' },
                            ].map((item, i) => (
                              <div key={i} className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden mb-1.5 relative">
                                  <img src={item.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                  <button className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-slate-900">
                                    <Plus className="w-2.5 h-2.5" />
                                  </button>
                                  {item.popular && (
                                    <span className="absolute top-1.5 left-1.5 bg-red-500 text-white text-[5px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
                                  )}
                                </div>
                                <h3 className="font-bold text-slate-900 text-[10px] leading-tight">{item.name}</h3>
                                <p className="text-slate-400 text-[8px] font-medium">from ₱{item.price}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-3 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'w-8 bg-brand' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Mobile & Tablet Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-14 relative max-w-sm sm:max-w-md mx-auto px-2 block md:hidden"
          >
            {/* Demo Badge for Mobile */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-900 text-white rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md border border-slate-700">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                Live Demo Preview
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-r from-brand/25 to-emerald-400/15 blur-3xl rounded-full -z-10 opacity-70" />

            {/* Mobile Tab Selector */}
            <div className="flex items-center justify-between bg-slate-100/90 p-1.5 rounded-2xl mb-6 border border-slate-200/80 shadow-inner">
              {[
                { label: "1. Store & QR", icon: QrCode },
                { label: "2. Editor", icon: Edit2 },
                { label: "3. Messenger", icon: MessageCircle }
              ].map((tab, idx) => {
                const IconComp = tab.icon;
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex-1 py-2 px-1 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-md shadow-slate-200/50 border border-slate-200/50"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-brand" : "text-slate-400"}`} />
                    <span className="truncate">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Smartphone Mockup */}
            <div className="relative w-full bg-slate-900 rounded-[2.8rem] p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45)] border-[5px] border-slate-800 overflow-hidden">
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2 h-2 rounded-full bg-slate-800/80" />
              </div>

              {/* Smartphone Screen */}
              <div className="w-full bg-slate-50 rounded-[2rem] overflow-hidden relative flex flex-col text-left aspect-[9/16] min-h-[500px]">
                {/* Status Bar */}
                <div className="pt-3 px-5 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-700 bg-white/70 backdrop-blur-sm z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <span className="text-[9px]">5G</span>
                    <div className="w-4 h-2 border border-slate-600 rounded-sm p-0.5 flex items-center">
                      <div className="w-full h-full bg-slate-700 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Mobile Slide Content with Animation */}
                <div className="flex-1 overflow-y-auto no-scrollbar relative p-3 pb-6">
                  <AnimatePresence mode="wait">
                    {activeSlide === 0 && (
                      <motion.div
                        key="mob-slide-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 pt-1"
                      >
                        {/* Store Header Card */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-xs text-white font-bold">
                                HC
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-slate-900 leading-tight">Hallel Cafe</h4>
                                <p className="text-[10px] text-slate-400">Coffee & Artisan Bites</p>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live
                            </span>
                          </div>

                          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-slate-600 truncate">chatcart.wapdev.xyz/hallel</span>
                            <span className="text-[9px] font-bold text-brand uppercase bg-white px-2 py-0.5 rounded-md shadow-xs">Link Active</span>
                          </div>
                        </div>

                        {/* QR Code Feature Card */}
                        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm text-center">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-1.5">
                              <QrCode className="w-4 h-4 text-brand" />
                              <span className="text-xs font-bold text-slate-900">Tableside QR Menu</span>
                            </div>
                            <span className="text-[9px] text-slate-400 font-medium">Auto-generated</span>
                          </div>

                          <div className="w-32 h-32 mx-auto bg-slate-50 rounded-2xl border border-slate-100 p-3 flex flex-col items-center justify-center shadow-inner mb-3">
                            <QrCode className="w-20 h-20 text-slate-800" />
                            <span className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Scan to Order</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-left">
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                              <p className="text-[9px] text-slate-400">Total Scans</p>
                              <p className="text-xs font-bold text-slate-900">142 Today</p>
                            </div>
                            <div className="bg-emerald-50/60 p-2 rounded-xl border border-emerald-100">
                              <p className="text-[9px] text-emerald-600">Messenger DMs</p>
                              <p className="text-xs font-bold text-emerald-700">100% Direct</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeSlide === 1 && (
                      <motion.div
                        key="mob-slide-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 pt-1"
                      >
                        {/* Editor Header */}
                        <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Live Menu Editor</h4>
                            <p className="text-[9px] text-slate-400">Update items & stock on your phone</p>
                          </div>
                          <button className="px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg flex items-center gap-1 shadow-sm">
                            <Plus className="w-3 h-3" /> Add Item
                          </button>
                        </div>

                        {/* Category Selector */}
                        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                          <span className="px-2.5 py-1 bg-brand text-slate-900 font-bold text-[10px] rounded-lg shadow-xs shrink-0">🍽️ Meals (4)</span>
                          <span className="px-2.5 py-1 bg-white text-slate-500 font-semibold text-[10px] rounded-lg border border-slate-200 shrink-0">☕ Drinks (3)</span>
                          <span className="px-2.5 py-1 bg-white text-slate-500 font-semibold text-[10px] rounded-lg border border-slate-200 shrink-0">🍰 Dessert</span>
                        </div>

                        {/* Items List */}
                        <div className="space-y-2">
                          {[
                            { name: 'Chicken Inasal', price: 120, status: 'Available', popular: true, img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=150&h=150&q=80' },
                            { name: 'Korean Wings', price: 100, status: 'Available', popular: false, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=150&h=150&q=80' },
                            { name: 'Shawarma Rice', price: 90, status: 'Sold Out', popular: true, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=150&h=150&q=80' }
                          ].map((food, idx) => (
                            <div key={idx} className="bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-2.5">
                              <img src={food.img} className="w-12 h-12 rounded-xl object-cover shrink-0" alt={food.name} referrerPolicy="no-referrer" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-[11px] font-bold text-slate-900 truncate">{food.name}</p>
                                  <span className="text-[11px] font-bold text-emerald-600">₱{food.price}</span>
                                </div>
                                <div className="flex items-center justify-between mt-1">
                                  <div className="flex items-center gap-1">
                                    <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${food.status === 'Available' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                                      {food.status}
                                    </span>
                                    {food.popular && (
                                      <span className="text-[8px] font-bold bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded">🔥 Popular</span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1 text-slate-400">
                                    <Edit2 className="w-3 h-3 hover:text-slate-600" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeSlide === 2 && (
                      <motion.div
                        key="mob-slide-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 pt-1 text-left"
                      >
                        {/* Customer Menu View Header */}
                        <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black tracking-tight text-brand uppercase">HALLEL CAFE MENU</span>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-brand text-white rounded-full text-[9px] font-bold">
                              <ShoppingCart className="w-2.5 h-2.5" /> 2 items
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                              <p className="text-[10px] font-bold text-slate-900 truncate">1x Chicken Inasal</p>
                              <p className="text-[9px] text-slate-400">₱120.00</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                              <p className="text-[10px] font-bold text-slate-900 truncate">1x Americano</p>
                              <p className="text-[9px] text-slate-400">₱50.00</p>
                            </div>
                          </div>
                        </div>

                        {/* Direct Messenger Chat Box */}
                        <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-lg relative overflow-hidden border border-slate-800">
                          <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-800">
                            <div className="w-5 h-5 bg-brand rounded-full flex items-center justify-center text-slate-900">
                              <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            </div>
                            <span className="text-[10px] font-bold tracking-wide uppercase">Messenger Instant Order</span>
                          </div>

                          <div className="bg-white text-slate-900 p-2.5 rounded-xl text-[10px] space-y-1 shadow-sm font-sans">
                            <p className="font-bold text-slate-800">👋 New Order from Table #4:</p>
                            <div className="text-slate-600 pl-1 border-l-2 border-brand space-y-0.5">
                              <p>• 1x Chicken Inasal (₱120)</p>
                              <p>• 1x Americano (₱50)</p>
                            </div>
                            <div className="pt-1 flex items-center justify-between border-t border-slate-100 font-bold">
                              <span>Total:</span>
                              <span className="text-brand">₱170.00</span>
                            </div>
                          </div>

                          <div className="mt-2 text-center text-[9px] font-semibold text-emerald-400">
                            ⚡ No forms. 1-tap direct conversation in Messenger.
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Bottom Bar */}
                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-800">
                      {activeSlide === 0 ? "1. Business Setup" : activeSlide === 1 ? "2. Mobile Menu" : "3. Instant DM"}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveSlide((activeSlide + 1) % 3)}
                    className="px-3 py-1 bg-brand text-white rounded-full text-[10px] font-bold hover:bg-brand-dark transition-colors flex items-center gap-1"
                  >
                    Next <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? "w-6 bg-brand" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-4">Best Use Cases for ChatCart</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">Designed for businesses that want to avoid high costs of traditional delivery apps or complex POS systems.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Home-Based Food Businesses", 
                subtitle: "Instagram/FB Sellers",
                problem: "Constantly asked \"What's on the menu?\" or \"How much?\" in DMs.",
                solution: "Put your chatcart.wapdev.xyz/your-shop link in your bio. Receive perfectly formatted order summaries in Messenger."
              },
              { 
                title: "Cafes and Coffee Shops", 
                subtitle: "QR on Table",
                problem: "Printing new menus for seasonal drink changes is expensive and slow.",
                solution: "Place a permanent QR code on every table. Toggle \"Sold Out\" items instantly in your dashboard."
              },
              { 
                title: "Food Stalls & Food Trucks", 
                subtitle: "Fast-Paced Environments",
                problem: "Long lines and crowded counters make it hard to see the menu board.",
                solution: "Customers scan the QR code while waiting in line. They know exactly what they want by the time they reach you."
              },
              { 
                title: "Pop-Up Events & Markets", 
                subtitle: "Temporary Setups",
                problem: "No permanent storefront or complex internet setup for a full POS.",
                solution: "Set up your digital storefront in minutes. Gives your stall a high-tech, professional feel that builds trust."
              },
              { 
                title: "Hotels & Resorts", 
                subtitle: "Room Service",
                problem: "Guests lose physical menus or find them outdated.",
                solution: "A QR code on the nightstand allows guests to browse and send orders directly to Messenger."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">{item.subtitle}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">The Problem</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">The ChatCart Solution</p>
                    <p className="text-slate-900 text-sm font-medium leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Why it Wins Card */}
            <div className="p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col justify-center border border-slate-800">
              <h3 className="font-display text-2xl font-bold mb-6">Why it wins:</h3>
              <ul className="space-y-4">
                {[
                  { t: "Zero Friction", d: "No app download or account needed." },
                  { t: "Messenger-First", d: "Uses the app everyone already has." },
                  { t: "Low Overhead", d: "No expensive tablets or printers needed." },
                  { t: "Real-Time Control", d: "Instant price and inventory updates." }
                ].map((win, j) => (
                  <li key={j} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                    <div>
                      <p className="font-bold text-sm">{win.t}</p>
                      <p className="text-slate-400 text-xs">{win.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bento-card bg-brand text-slate-900 border-none overflow-hidden relative p-8 md:p-12">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-slate-900" />
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-4">Direct-to-Messenger Ordering</h3>
                <p className="text-slate-800 text-base md:text-lg max-w-md font-medium leading-relaxed">Bypass complex checkout forms. Start a conversation and build a direct relationship with your customers right in Messenger.</p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/20 blur-3xl -rotate-12 translate-x-1/2" />
            </div>
            
            <div className="md:col-span-4 bento-card p-8 md:p-10">
              <Globe className="w-8 h-8 md:w-10 md:h-10 text-brand mb-6" />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Custom URLs</h3>
              <p className="text-slate-600 text-sm md:text-base">Get a professional link like chatcart.com/your-brand. No app download required.</p>
            </div>

            <div className="md:col-span-4 bento-card p-8 md:p-10">
              <QrCode className="w-8 h-8 md:w-10 md:h-10 text-brand mb-6" />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">QR Ready</h3>
              <p className="text-slate-600 text-sm md:text-base">Built-in QR generator for tableside or storefront placement. Just print and go.</p>
            </div>

            <div className="md:col-span-8 bento-card p-8 md:p-12">
              <div className="max-w-2xl">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-brand mb-6" />
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4">Real-time Updates</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">Change prices, add items, or mark things as 'Sold Out' instantly from your phone. Your customers always see the most accurate information without you needing to reprint anything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">3 Steps to Better Sales</h2>
            <p className="text-slate-400 text-sm md:text-base">Launch your digital menu in under 10 minutes.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Build Your Menu", desc: "Upload your items and set your prices in our mobile-friendly dashboard in under 10 minutes." },
              { step: "02", title: "Share Your Link", desc: "Place your unique URL in your social media bio or print your QR code for tables and stalls." },
              { step: "03", title: "Sell via Messenger", desc: "Receive perfectly formatted orders directly in your Messenger inbox. Chat instantly to confirm." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-6xl font-display font-black text-white/5 absolute -top-8 -left-4">{item.step}</span>
                <h3 className="font-display text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 text-sm md:text-base">Choose the plan that fits your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 rounded-3xl border border-slate-200 bg-white">
              <h3 className="font-display text-2xl font-bold mb-2">Free Starter</h3>
              <p className="text-slate-500 mb-6">Perfect for small food stalls & home sellers.</p>
              <div className="text-4xl font-bold mb-8">₱0<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-brand" /> Up to 15 Menu Items</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-brand" /> Basic QR Code</li>
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-brand" /> Messenger Integration</li>
              </ul>
              <a href="https://chatcart.wapdev.xyz" className="block w-full py-4 text-center bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all">
                Get Started
              </a>
            </div>

            <div className="p-10 rounded-3xl border-2 border-brand bg-white relative shadow-xl shadow-emerald-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-slate-900 text-xs font-bold rounded-full uppercase tracking-widest shadow-md">Most Popular</div>
              <h3 className="font-display text-2xl font-bold mb-2">Pro Business</h3>
              <p className="text-slate-500 mb-6">For growing cafes & restaurants.</p>
              <div className="text-4xl font-bold mb-8">₱499<span className="text-lg font-normal text-slate-400">/mo</span></div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-600"><CheckCircle2 className="w-5 h-5 text-brand" /> Unlimited Menu Items</li>
                <li className="flex items-center gap-3 text-brand font-semibold"><CheckCircle2 className="w-5 h-5" /> Custom Branding & Logo</li>
                <li className="flex items-center gap-3 text-brand font-semibold"><CheckCircle2 className="w-5 h-5" /> "Popular" Item Highlighting</li>
                <li className="flex items-center gap-3 text-brand font-semibold"><CheckCircle2 className="w-5 h-5" /> Priority Support</li>
              </ul>
              <a href="https://chatcart.wapdev.xyz" className="block w-full py-4 text-center bg-brand text-slate-900 font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand/25 hover:scale-[1.02] rounded-full">
                Go Pro Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto bg-brand rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-slate-900 relative overflow-hidden shadow-2xl shadow-emerald-500/20">
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">Ready to grow your business?</h2>
            <p className="text-base md:text-xl text-slate-800 mb-8 md:mb-12 max-w-2xl mx-auto font-medium">Join hundreds of businesses bridging the gap between digital menus and social media messaging. Setup takes less than 10 minutes.</p>
            <a href="https://chatcart.wapdev.xyz" className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-slate-900 text-white rounded-full text-lg md:text-xl font-bold hover:bg-slate-800 transition-all shadow-2xl hover:scale-105">
              <MessageCircle className="w-6 h-6 fill-current text-brand" />
              Create Your Menu Now
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2.5">
            <Logo className="w-7 h-7 text-slate-900" />
            <div className="flex flex-col -gap-1">
              <span className="font-display font-bold text-lg leading-none">ChatCart</span>
              <a href="https://wapdev.xyz" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold text-brand hover:underline">by WapDev</a>
            </div>
          </div>
          <p className="text-slate-500 text-sm">© 2024 ChatCart by WapDev. Powered by Messenger Ordering.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-brand transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand transition-colors"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
