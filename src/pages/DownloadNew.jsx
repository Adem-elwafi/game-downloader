import React, { useState } from 'react';
import { Check, Download as DownloadIcon, HardDrive, Cpu, MemoryStick, Monitor } from 'lucide-react';
export default function DownloadNew() {
  const [selectedPlatform, setSelectedPlatform] = useState('linux');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const systemRequirements = {
    windows: {
      os: 'Windows 10 64-bit',
      processor: 'Intel Core i5-4460 / AMD FX-8350',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 960 / AMD Radeon R9 280',
      storage: '50 GB available space',
      directX: 'Version 11'
    },
    mac: {
      os: 'macOS 10.14+',
      processor: 'Intel Core i5-6500 / AMD Ryzen 5 1600',
      memory: '8 GB RAM',
      graphics: 'AMD Radeon Pro 560X / NVIDIA GeForce GTX 1650',
      storage: '50 GB available space'
    },
    linux: {
      os: 'Ubuntu 18.04+',
      processor: 'Intel Core i5-6500 / AMD Ryzen 5 1600',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 1060 / AMD RX 570',
      storage: '50 GB available space',
      additional: 'Vulkan 1.2+ support'
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Download Game Downloader
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          </p>
        </div>

        {/* Platform Selection */}
        <div className="bg-gray-800 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { 
                id: 'windows', 
                name: 'Windows', 
                icon: (
                  <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                )
              },
              { 
                id: 'mac', 
                name: 'macOS',
                icon: (
                  <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )
              },
              { 
                id: 'linux', 
                name: 'Linux',
                icon: (
                  <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 7c-.3 0-.5.2-.5.5v9c0 .3.2.5.5.5s.5-.2.5-.5v-9c0-.3-.2-.5-.5-.5zM8 4c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5s.5-.2.5-.5v-15c0-.3-.2-.5-.5-.5zm5.5 1c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5s.5-.2.5-.5v-13c0-.3-.2-.5-.5-.5zm5.5 1c-.3 0-.5.2-.5.5v11c0 .3.2.5.5.5s.5-.2.5-.5v-11c0-.3-.2-.5-.5-.5z"/>
                  </svg>
                )
              }
            ].map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all duration-200 ${
                  selectedPlatform === platform.id
                    ? 'border-purple-500 bg-gray-700/50'
                    : 'border-gray-700 hover:border-gray-600 hover:bg-gray-700/30'
                }`}
              >
                {platform.icon}
                <span className="text-lg font-medium">{platform.name}</span>
                {selectedPlatform === platform.id && (
                  <div className="mt-2 text-purple-400 flex items-center">
                    <Check className="w-5 h-5 mr-1" />
                    Selected
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 flex items-center justify-center mx-auto ${
                isDownloading
                  ? 'bg-purple-700 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 transform hover:scale-105'
              }`}
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Downloading... {downloadProgress}%
                </>
              ) : (
                <>
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download for {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}
                </>
              )}
            </button>
            <p className="text-sm text-gray-400 mt-2">Version 2.3.4 • 85.2 MB</p>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(systemRequirements[selectedPlatform]).map(([key, value]) => (
              <div key={key} className="flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                  {key === 'os' ? (
                    selectedPlatform === 'linux' ? (
                      <span className="text-2xl">🐧</span>
                    ) : (
                      <Monitor className="w-6 h-6 text-purple-400" />
                    )
                  ) : key === 'processor' ? (
                    <Cpu className="w-6 h-6 text-purple-400" />
                  ) : null}
                  {key === 'memory' && <MemoryStick className="w-6 h-6 text-purple-400" />}
                  {key === 'graphics' && <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                  {key === 'storage' && <HardDrive className="w-6 h-6 text-purple-400" />}
                  {!['os', 'processor', 'memory', 'graphics', 'storage'].includes(key) && <Check className="w-6 h-6 text-purple-400" />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <p className="text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Easy Installation</h3>
            <p className="text-gray-300">Simple and fast installation process. Get started in just a few clicks.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">Automatic Updates</h3>
            <p className="text-gray-300">Always have the latest features and security updates automatically.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p className="text-gray-300">Our support team is always here to help you with any issues.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'Is the download free?',
                answer: 'Yes, our game launcher is completely free to download and use. You only pay for the games you want to purchase.'
              },
              {
                question: 'Can I play games on multiple devices?',
                answer: 'Yes, you can install and play your games on multiple devices. Just sign in with your account to access your library.'
              },
              {
                question: 'How do I update my games?',
                answer: 'Games are updated automatically when updates are available. You can also manually check for updates in your library.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and select cryptocurrencies for your convenience.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-medium text-purple-300 mb-1">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
