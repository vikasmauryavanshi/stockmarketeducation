import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Vikas Maurya Finance</h3>
            <p className="text-gray-400">
              Professional finance services and data analysis for informed investment decisions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/data-analysis" className="hover:text-green-400 transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@vikasmauryafinance.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-6">
            <p className="text-yellow-200 text-sm">
              <strong>DISCLAIMER:</strong> I/We Are Not SEBI Registered Advisors. All content, videos, and live streams 
              are for educational purposes only. Securities quoted are exemplary and are not recommendatory. 
              Please consult with a certified financial advisor before making any investment decisions.
            </p>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Vikas Maurya Finance Service. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
