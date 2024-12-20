import ImageGenerator from "./components/ImageGenerator";
import Logo from "./components/Logo";
import { ApiKeyProvider } from "./context/ApiKeyContext";

function App() {
  return (
    <ApiKeyProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-midnight to-cosmic text-white font-inter">
        <header className="py-12 px-6 text-center glass-effect relative">
          <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer opacity-20"></div>
          <h1 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(125,137,255,0.3)]">
            AI-Image Generator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Transform your imagination into stunning visuals
          </p>
        </header>
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          <ImageGenerator />
        </main>
        <footer className="glass-effect">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="space-y-4">
                <Logo className="mx-auto md:mx-0" />
               
              </div>

              <nav className="grid grid-cols-2 gap-4 text-center md:text-left">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Product
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider text-center md:text-right">
                  Connect With Us
                </h3>
                <div className="flex justify-center md:justify-end gap-3">
                  <a
                    href="https://x.com/theoluwa_pelumi"
                    className="p-3 rounded-xl hover:bg-white/5 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20 group"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Pery99"
                    className="p-3 rounded-xl hover:bg-white/5 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 group"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-xl hover:bg-white/5 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20 group"
                    aria-label="Discord"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-xl hover:bg-white/5 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 group"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-xs text-gray-500">
                © 2024 AIGen. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ApiKeyProvider>
  );
}

export default App;
