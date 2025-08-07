import React from 'react';
import { Sparkles, Copy, FileCheck } from 'lucide-react';

export default function PortfolioStats() {
  return (
    <div className=" bg-black flex items-center justify-center p-4">
      <div className="container mx-auto">
        {/* Stats Container */}
        <div className="border-2 border-cyan-400 rounded-lg bg-black p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Stat 1 */}
            <div className="text-center flex-1">
              <div className="text-5xl md:text-7xl font-black text-green-300 mb-4">
                90%
              </div>
              <div className="flex justify-center mb-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-white text-sm md:text-base font-semibold">
                Job Success<br />Score on Upwork
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-cyan-400/30"></div>

            {/* Stat 2 */}
            <div className="text-center flex-1">
              <div className="text-5xl md:text-7xl font-black text-green-300 mb-4">
                &gt;25,000
              </div>
              <div className="flex justify-center mb-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-white text-sm md:text-base font-semibold">
                Duplicates on Figma<br />Community
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-24 bg-cyan-400/30"></div>

            {/* Stat 3 */}
            <div className="text-center flex-1">
              <div className="text-5xl md:text-7xl font-black text-green-300 mb-4">
                &gt;2K
              </div>
              <div className="flex justify-center mb-3">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-white text-sm md:text-base font-semibold">
                In Finished<br />Works
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
