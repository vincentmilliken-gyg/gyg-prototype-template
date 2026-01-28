'use client';

import { motion } from 'motion/react';
import { PrototypeSettings } from './Sidebar';

interface PrototypeScreenProps {
  settings: PrototypeSettings;
}

export default function PrototypeScreen({ settings }: PrototypeScreenProps) {
  const isDark = settings.theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900' : 'bg-white';
  const statusBarColor = isDark ? '#ffffff' : '#1a2b49';
  const navBgColor = isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)';
  const navBorderColor = isDark ? '#374151' : '#dcdfe4';
  const inactiveColor = isDark ? '#9ca3af' : '#63687a';
  const browserNavBg = isDark ? 'rgba(31, 41, 55, 0.7)' : 'rgba(250, 250, 250, 0.7)';
  const browserNavBorder = isDark ? '#4b5563' : '#ffffff';
  const browserNavText = isDark ? '#ffffff' : '#000000';

  return (
    <div className={`relative w-full h-full flex flex-col ${bgColor}`}>
      {/* Status Bar */}
      {settings.features.showStatusBar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 * settings.animationSpeed }}
          className="h-[52px] shrink-0 flex items-center justify-between px-8"
        >
          {/* Time */}
          <div className="w-[140px]">
            <p 
              className="font-semibold text-[17px] leading-[22px]"
              style={{ color: statusBarColor, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              9:41
            </p>
          </div>
          
          {/* Status Icons */}
          <div className="w-[140px] flex items-center justify-end gap-2">
            {/* Cellular */}
            <svg width="19" height="12" viewBox="0 0 19.2 12.2264" fill="none">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" 
                fill={statusBarColor}
              />
            </svg>
            
            {/* WiFi */}
            <svg width="17" height="12" viewBox="0 0 17.1417 12.3283" fill="none">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" 
                fill={statusBarColor}
              />
            </svg>
            
            {/* Battery */}
            <div className="relative flex items-center">
              <div 
                className="w-[25px] h-[13px] rounded-[4.3px] border opacity-35"
                style={{ borderColor: statusBarColor }}
              />
              <div 
                className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[21px] h-[9px] rounded-[2.5px]"
                style={{ backgroundColor: statusBarColor }}
              />
              <svg 
                className="ml-[1px] opacity-40" 
                width="1.5" 
                height="4" 
                viewBox="0 0 1.32804 4.07547" 
                fill="none"
              >
                <path 
                  d="M0 0V4.07547C0.804731 3.7303 1.32804 2.92734 1.32804 2.03774C1.32804 1.14813 0.804731 0.345169 0 0" 
                  fill={statusBarColor}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto" />

      {/* Bottom Navigation */}
      {settings.features.showNavigation && (
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 * settings.animationSpeed, delay: 0.2 }}
          className="shrink-0 backdrop-blur-[10px] border-t overflow-hidden"
          style={{ 
            backgroundColor: navBgColor,
            borderColor: navBorderColor,
          }}
        >
          {/* Nav Items */}
          <div className="flex items-start justify-center gap-1 px-6 pt-[18px] pb-6">
            {/* Discover - Active */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center gap-[2px]"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20.4141 20" fill="none">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M8 0C12.4183 0 16 3.58172 16 8C16 9.74248 15.4429 11.3551 14.4971 12.6689L20.4141 18.5859L19 20L13.1348 14.1348C11.7453 15.299 9.95454 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" 
                    fill="#FF5533"
                  />
                </svg>
              </div>
              <span 
                className="text-[11px] font-medium h-3 leading-[20px]"
                style={{ color: '#FF5533', fontFamily: 'GT Eesti Pro Display, -apple-system, sans-serif' }}
              >
                Discover
              </span>
            </motion.button>

            {/* Your Trips - Inactive */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center gap-[2px]"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M13.5 9C15.9853 9 18 11.0147 18 13.5C18 15.9853 15.9853 18 13.5 18H5.8291C5.41725 19.1652 4.3062 20 3 20C1.34315 20 0 18.6569 0 17C0 15.3431 1.34315 14 3 14C4.3062 14 5.41725 14.8348 5.8291 16H13.5C14.8807 16 16 14.8807 16 13.5C16 12.1193 14.8807 11 13.5 11H13V9H13.5ZM3 16C2.44772 16 2 16.4477 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 16.4477 3.55228 16 3 16Z" 
                    fill={inactiveColor}
                  />
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M15 0C16.6569 0 18 1.34315 18 3C18 4.65685 16.6569 6 15 6C13.6938 6 12.5828 5.16516 12.1709 4H4.5C3.11929 4 2 5.11929 2 6.5C2 7.88071 3.11929 9 4.5 9H7.58594L6.29297 7.70703L7.70703 6.29297L11.4141 10L7.70703 13.707L6.29297 12.293L7.58594 11H4.5C2.01472 11 0 8.98528 0 6.5C0 4.01472 2.01472 2 4.5 2H12.1709C12.5828 0.834839 13.6938 0 15 0ZM15 2C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2Z" 
                    fill={inactiveColor}
                  />
                </svg>
              </div>
              <span 
                className="text-[11px] font-medium h-3 leading-[20px]"
                style={{ color: inactiveColor, fontFamily: 'GT Eesti Pro Display, -apple-system, sans-serif' }}
              >
                Your Trips
              </span>
            </motion.button>

            {/* Login - Inactive */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center gap-[2px]"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M8 0C10.4853 0 12.5 2.01472 12.5 4.5C12.5 5.72078 12.0138 6.82798 11.2246 7.63867C13.9724 8.86885 15.1788 11.6525 15.6943 14C15.8543 14.7284 15.9477 15.4149 16 16H0C0.0522687 15.4149 0.145705 14.7284 0.305664 14C0.821158 11.6525 2.02757 8.86885 4.77539 7.63867C3.98617 6.82798 3.5 5.72078 3.5 4.5C3.5 2.01472 5.51472 0 8 0ZM8 9C5.61878 9 4.28903 10.0516 3.43066 11.4102C2.93082 12.2013 2.58984 13.1101 2.36133 14H13.6387C13.4102 13.1101 13.0692 12.2013 12.5693 11.4102C11.711 10.0516 10.3812 9 8 9ZM8 2C6.61929 2 5.5 3.11929 5.5 4.5C5.5 5.88071 6.61929 7 8 7C9.38071 7 10.5 5.88071 10.5 4.5C10.5 3.11929 9.38071 2 8 2Z" 
                    fill={inactiveColor}
                  />
                </svg>
              </div>
              <span 
                className="text-[11px] font-medium h-3 leading-[20px]"
                style={{ color: inactiveColor, fontFamily: 'GT Eesti Pro Display, -apple-system, sans-serif' }}
              >
                Login
              </span>
            </motion.button>
          </div>

          {/* Browser Nav */}
          {settings.features.showBrowserNav && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * settings.animationSpeed, delay: 0.4 }}
              className="flex flex-col items-center gap-2 pb-[14px]"
            >
              <div 
                className="backdrop-blur-[12px] border rounded-[24px] px-[18px] py-[9px] h-8 flex items-center justify-center shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]"
                style={{ 
                  backgroundColor: browserNavBg,
                  borderColor: browserNavBorder,
                }}
              >
                <span 
                  className="text-[12px] font-medium tracking-[0.12px]"
                  style={{ 
                    color: browserNavText,
                    fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
                  }}
                >
                  getyourguide.com
                </span>
              </div>
            </motion.div>
          )}
        </motion.nav>
      )}

      {/* Browser Nav when Navigation is hidden */}
      {!settings.features.showNavigation && settings.features.showBrowserNav && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 * settings.animationSpeed }}
          className="shrink-0 flex flex-col items-center gap-2 pb-[14px] pt-2"
        >
          <div 
            className="backdrop-blur-[12px] border rounded-[24px] px-[18px] py-[9px] h-8 flex items-center justify-center shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]"
            style={{ 
              backgroundColor: browserNavBg,
              borderColor: browserNavBorder,
            }}
          >
            <span 
              className="text-[12px] font-medium tracking-[0.12px]"
              style={{ 
                color: browserNavText,
                fontFamily: 'SF Pro, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              getyourguide.com
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
