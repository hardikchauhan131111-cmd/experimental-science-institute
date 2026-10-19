export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-white font-semibold">Experimental Science Institute</h3>
            <p className="text-sm">
              Pioneering scientific education and research for the next generation.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-white font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@expsci.edu</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Science Drive, Innovation City</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-white font-semibold">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-white">
                {/* Twitter icon */}
              </a>
              <a href="#" className="hover:text-white">
                {/* LinkedIn icon */}
              </a>
              <a href="#" className="hover:text-white">
                {/* Instagram icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; {new Date().getFullYear()} Experimental Science Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};