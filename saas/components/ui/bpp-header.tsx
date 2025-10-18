export function BPPHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-900">
            Platform
          </div>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

