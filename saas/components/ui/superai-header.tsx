export function SuperAIHeader() {
  return (
    <header className="w-full shadow-md" style={{ background: 'linear-gradient(to right, #2A0148, #1a0a30)' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Company Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-xl" style={{ color: '#2A0148' }}>
              SA
            </div>
            <span className="text-2xl font-bold text-white">SuperAI</span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              Products
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              Blog
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              About Us
            </a>
          </nav>

          {/* Right: Login and Contact */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-purple-200 transition-colors font-medium">
              Login
            </a>
            <a href="#" className="bg-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors" style={{ color: '#2A0148' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

