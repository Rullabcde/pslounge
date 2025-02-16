import React, { useState, useEffect } from "react";
import { Gamepad, Sword, Target, Flame } from "lucide-react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplitScreen, setSplitScreen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setSplitScreen(true);
      // Remove loader after animation
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Split screen elements */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-transform duration-1000 ${
          showSplitScreen ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gray-900 transition-transform duration-1000 ${
          showSplitScreen ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Main content */}
      <div className="relative z-10">
        {/* Gaming icons animation */}
        <div className="flex space-x-6">
          <Gamepad
            className="w-6 h-6 text-blue-500 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <Sword
            className="w-6 h-6 text-pink-500 animate-bounce"
            style={{ animationDelay: "200ms" }}
          />
          <Target
            className="w-6 h-6 text-purple-500 animate-bounce"
            style={{ animationDelay: "400ms" }}
          />
          <Flame
            className="w-6 h-6 text-green-500 animate-bounce"
            style={{ animationDelay: "600ms" }}
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 mt-6 overflow-hidden bg-gray-700 rounded-full">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        </div>

        {/* Loading text */}
        <div className="mt-4 text-center text-white">
          <p className="text-sm font-medium animate-pulse">
            Loading Gaming Experience
          </p>
          <p className="mt-1 text-xs text-gray-400">Prepare for Adventure</p>
        </div>

        {/* Rotating border effect */}
        <div
          className="absolute border rounded-lg opacity-50 -inset-8 border-white/10 animate-spin-slow"
          style={{ animationDuration: "3s" }}
        />
      </div>
    </div>
  );
};

export default Preloader;
