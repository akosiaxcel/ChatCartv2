import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Info, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import { Business, Category, MenuItem } from '../types';
import Logo from './Logo';

export default function MenuView() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<{ business: Business; categories: Category[]; menuItems: MenuItem[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/businesses/${slug}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        if (data.categories.length > 0) {
          setActiveCategory(data.categories[0].id);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
    </div>
  );

  if (!data) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Menu Not Found</h1>
      <p className="text-slate-600">The business you're looking for doesn't exist or has been removed.</p>
    </div>
  );

  const { business, categories, menuItems } = data;

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {business.logo_url ? (
              <img src={business.logo_url} alt={business.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
                <Logo className="text-white w-7 h-7" />
              </div>
            )}
            <h1 className="font-display font-bold text-lg truncate max-w-[150px]">{business.name}</h1>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-600">
            <Info className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Scroller */}
        <div className="max-w-2xl mx-auto px-4 overflow-x-auto no-scrollbar py-3 flex gap-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {menuItems
              .filter(item => item.category_id === activeCategory)
              .length === 0 && (
                <div className="text-center py-20">
                  <ShoppingBag className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-400">No items in this category yet.</p>
                </div>
              )}
            {menuItems
              .filter(item => item.category_id === activeCategory)
              .map(item => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4 relative overflow-hidden group active:scale-[0.98] transition-transform"
                >
                  {item.is_popular && (
                    <div className="absolute top-0 right-0 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      POPULAR
                    </div>
                  )}
                  
                  {item.image_url && (
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-brand">₱{item.price.toFixed(2)}</span>
                      {!item.is_available && (
                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">SOLD OUT</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Messenger Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-40">
        <a 
          href={`https://m.me/${business.messenger_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-brand text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-brand/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          Order via Messenger
          <ChevronRight className="w-5 h-5 opacity-50" />
        </a>
      </div>
    </div>
  );
}
