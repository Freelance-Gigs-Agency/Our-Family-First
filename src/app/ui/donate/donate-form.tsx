"use client";

import { useState, useEffect } from "react";

interface GenericFormProps {
  iframeSrc: string;
  bannerTitle: string;
}

export default function DonateForm({ iframeSrc, bannerTitle }: GenericFormProps) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    // Hide the scroll indicator after 5 seconds
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-sectionBlue min-h-screen flex flex-col">
      <div className="bg-customBlue text-white text-center py-4 flex-shrink-0">
        <h1 className="text-2xl font-bold">{bannerTitle}</h1>
      </div>
      <div className="flex-1 flex flex-col px-6 lg:px-8 relative">
        <div className="flex-1 w-full max-w-7xl mx-auto relative">
          <iframe
            title={bannerTitle}
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency={true}
            allow="geolocation; microphone; camera; fullscreen"
            src={iframeSrc}
            style={{
              width: "100%",
              height: "100%",
              minHeight: "calc(100vh - 100px)",
              border: "none",
            }}
          ></iframe>
        </div>
        
        {/* Scroll Indicator - moved outside iframe container */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
            <div className="flex flex-col items-center text-white animate-bounce">
              <div className="text-sm font-medium mb-2 bg-blue-600 bg-opacity-90 px-4 py-2 rounded-full shadow-lg border border-white border-opacity-30">
                Scroll down inside the form for more
              </div>
              <svg 
                className="w-8 h-8 animate-pulse drop-shadow-lg" 
                fill="currentColor" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
