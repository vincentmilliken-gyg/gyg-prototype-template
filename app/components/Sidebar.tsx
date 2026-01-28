'use client';

import { motion } from 'motion/react';

interface SidebarProps {
  settings: PrototypeSettings;
  onSettingsChange: (settings: PrototypeSettings) => void;
}

export interface PrototypeSettings {
  theme: 'light' | 'dark';
  animationSpeed: number;
  features: {
    showStatusBar: boolean;
    showNavigation: boolean;
    showBrowserNav: boolean;
  };
}

export default function Sidebar({ settings, onSettingsChange }: SidebarProps) {
  const updateSetting = <K extends keyof PrototypeSettings>(
    key: K,
    value: PrototypeSettings[K]
  ) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const updateFeature = (feature: keyof PrototypeSettings['features'], value: boolean) => {
    onSettingsChange({
      ...settings,
      features: { ...settings.features, [feature]: value },
    });
  };

  return (
    <motion.aside
      initial={{ x: 280 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="w-[280px] h-screen bg-sidebar-bg border-l border-sidebar-border flex flex-col overflow-y-auto"
    >
      {/* Header */}
      <div className="p-5 border-b border-sidebar-border">
        <h1 className="text-lg font-semibold text-white">Prototype Studio</h1>
        <p className="text-sm text-text-muted mt-1">Configure your mockup</p>
      </div>

      {/* Theme Toggle */}
      <div className="p-5 border-b border-sidebar-border">
        <label className="block text-sm font-medium text-white mb-3">Theme</label>
        <div className="flex gap-2">
          <button
            onClick={() => updateSetting('theme', 'light')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              settings.theme === 'light'
                ? 'bg-accent text-white'
                : 'bg-surface text-text-muted hover:bg-surface-hover'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => updateSetting('theme', 'dark')}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              settings.theme === 'dark'
                ? 'bg-accent text-white'
                : 'bg-surface text-text-muted hover:bg-surface-hover'
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {/* Animation Speed */}
      <div className="p-5 border-b border-sidebar-border">
        <label className="block text-sm font-medium text-white mb-3">
          Animation Speed: {settings.animationSpeed}x
        </label>
        <input
          type="range"
          min="0.25"
          max="2"
          step="0.25"
          value={settings.animationSpeed}
          onChange={(e) => updateSetting('animationSpeed', Number(e.target.value))}
          className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-text-muted mt-2">
          <span>0.25x</span>
          <span>1x</span>
          <span>2x</span>
        </div>
      </div>

      {/* Feature Toggles */}
      <div className="p-5">
        <label className="block text-sm font-medium text-white mb-3">Features</label>
        <div className="space-y-3">
          <ToggleSwitch
            label="Status Bar"
            checked={settings.features.showStatusBar}
            onChange={(checked) => updateFeature('showStatusBar', checked)}
          />
          <ToggleSwitch
            label="Navigation Bar"
            checked={settings.features.showNavigation}
            onChange={(checked) => updateFeature('showNavigation', checked)}
          />
          <ToggleSwitch
            label="Browser Nav"
            checked={settings.features.showBrowserNav}
            onChange={(checked) => updateFeature('showBrowserNav', checked)}
          />
        </div>
      </div>
    </motion.aside>
  );
}

function ToggleSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm text-text-muted">{label}</span>
      <motion.button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          checked ? 'bg-accent' : 'bg-surface'
        }`}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </motion.button>
    </label>
  );
}
