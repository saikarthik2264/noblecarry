
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight, Zap, RefreshCw, Users, ShieldCheck, Globe } from 'lucide-react';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Impact from './pages/Impact';
import Checkout from './pages/Checkout';
import Cart from './components/Cart';
import BackgroundAnimations from './components/BackgroundAnimations';
import Collections from './pages/Collections';
import { CartItem, Product } from './types';

const Header: React.FC<{ cartCount: number; onCartOpen: () => void }> = ({ cartCount, onCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const backpackProducts = [
    { id: 'bp-everyday', name: 'Everyday Backpack' },
    { id: 'bp-work', name: 'Work Backpack' },
    { id: 'bp-travel', name: 'Travel Backpack' }
  ];

  const handbagProducts = [
    { id: 'hb-daily', name: 'Daily Handbag' },
    { id: 'hb-office', name: 'Office Handbag' },
    { id: 'hb-minimal', name: 'Minimal Carry Bag' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 bg-[#f2efe8]/95 backdrop-blur-sm border-b border-[#2d3a2d]/10">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="./noble-carry-logo.png"
          alt="Noble Carry"
          className="h-14 sm:h-16 md:h-20 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex gap-10 font-mono text-sm uppercase tracking-widest text-[#2d3a2d]">
          {/* Backpacks Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('backpacks')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/category/BACKPACKS" className="hover:text-[#556b2f] transition-colors">
              Backpacks
            </Link>
            {activeDropdown === 'backpacks' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden min-w-[220px] border border-[#2d3a2d]/10">
                  {backpackProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="block px-6 py-3 hover:bg-[#f2efe8] transition-colors text-[#2d3a2d] hover:text-[#556b2f] border-b border-[#2d3a2d]/5 last:border-b-0"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Handbags Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('handbags')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/category/HANDBAGS" className="hover:text-[#556b2f] transition-colors">
              Handbags
            </Link>
            {activeDropdown === 'handbags' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden min-w-[220px] border border-[#2d3a2d]/10">
                  {handbagProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="block px-6 py-3 hover:bg-[#f2efe8] transition-colors text-[#2d3a2d] hover:text-[#556b2f] border-b border-[#2d3a2d]/5 last:border-b-0"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/impact" className="hover:text-[#556b2f] transition-colors">Impact</Link>
          <Link to="/about" className="hover:text-[#556b2f] transition-colors">Story</Link>
        </div>

        <button onClick={onCartOpen} className="relative group p-2 text-[#2d3a2d] hover:text-[#556b2f] transition-colors">
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#2d3a2d] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">
              {cartCount}
            </span>
          )}
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#2d3a2d]">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-[#8fbc8f]/80 backdrop-blur-sm text-white z-[100] flex flex-col items-center justify-center p-8">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-[101]"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center justify-center gap-12">
            <Link to="/category/BACKPACKS" className="text-4xl font-black uppercase tracking-tighter hover:text-[#2d3a2d] transition-colors">Backpacks</Link>
            <Link to="/category/HANDBAGS" className="text-4xl font-black uppercase tracking-tighter hover:text-[#2d3a2d] transition-colors">Handbags</Link>
            <Link to="/impact" className="text-4xl font-black uppercase tracking-tighter hover:text-[#2d3a2d] transition-colors">Impact</Link>
            <Link to="/about" className="text-4xl font-black uppercase tracking-tighter hover:text-[#2d3a2d] transition-colors">Story</Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <BackgroundAnimations />
      <div className="min-h-screen bg-[#f2efe8] relative">
        <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/category/:type" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/checkout" element={<Checkout cartItems={cart} clearCart={clearCart} />} />
        </Routes>
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onRemove={removeFromCart}
          onUpdateQty={updateQuantity}
        />

        <footer className="bg-[#333333] text-[#faf9f6] py-32 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-8">Noble Carry</h2>
              <p className="font-mono text-base max-w-sm text-gray-400 leading-relaxed uppercase tracking-widest">
                A movement toward responsible consumption. We don't just make bags; we reclaim waste and support artisans.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-6 tracking-[0.3em] text-sm">Explore</h4>
              <ul className="font-mono text-sm space-y-4 text-gray-400 uppercase tracking-widest">
                <li><Link to="/category/BACKPACKS" className="hover:text-white transition-colors">Backpacks</Link></li>
                <li><Link to="/category/HANDBAGS" className="hover:text-white transition-colors">Handbags</Link></li>
                <li><Link to="/impact" className="hover:text-white transition-colors">Impact Dashboard</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-6 tracking-[0.3em] text-sm">Join Us</h4>
              <p className="font-mono text-xs text-gray-400 mb-6 uppercase tracking-widest leading-relaxed">Get honest updates on our radical impact journey.</p>
              <div className="flex border-b border-gray-600 pb-3">
                <input type="email" placeholder="YOUR EMAIL" className="bg-transparent outline-none w-full text-sm font-mono uppercase tracking-widest" />
                <button className="hover:translate-x-2 transition-transform"><ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
            <p>© 2024 Noble Carry — RAW. RADICAL. RESPONSIBLE.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
