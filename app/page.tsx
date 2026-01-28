'use client';

import { useState } from 'react';
import Sidebar, { PrototypeSettings } from './components/Sidebar';
import PhoneFrame from './components/PhoneFrame';
import PrototypeScreen from './components/PrototypeScreen';

const DEFAULT_SETTINGS: PrototypeSettings = {
  theme: 'light',
  animationSpeed: 1,
  device: {
    name: 'iPhone 14/15 Pro',
    screenWidth: 393,
    screenHeight: 852,
  },
  zoom: 1,
  features: {
    showStatusBar: true,
    showNavigation: false,
    showBrowserNav: true,
  },
};

export default function Home() {
  const [settings, setSettings] = useState<PrototypeSettings>(DEFAULT_SETTINGS);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Main Prototype Area */}
      <main className="flex-1 flex items-center justify-center bg-[#0d0d1a] relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, white 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Phone Mockup Container */}
        <div className="relative z-10">
          <PhoneFrame
            screenWidth={settings.device.screenWidth}
            screenHeight={settings.device.screenHeight}
            zoom={settings.zoom}
          >
            <PrototypeScreen settings={settings} />
          </PhoneFrame>
        </div>
      </main>

      {/* Sidebar */}
      <Sidebar settings={settings} onSettingsChange={setSettings} />
    </div>
  );
}
