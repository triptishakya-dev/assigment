import React from 'react';
import { Sparkles, Copy, FileCheck } from 'lucide-react';

export default function PortfolioStats() {
  return (
    <div className="bg-black flex items-center justify-center p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Stats Container */}
        <div className="border-1 border-gray-200 rounded-lg bg-black p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-24 md:gap-12 my-10 md:my-0">
            
            {/* Stat 1 */}
            <div className="text-center flex-1 ">
              <div className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-green-300 mb-2 sm:mb-3 md:mb-4">
                90%
              </div>
              <div className="flex justify-center mb-2 sm:mb-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <div className="text-green-300 text-base  lg:text-lg font-semibold leading-tight">
                <span className="block">Job Success</span>
                <span className="block">Score on Upwork</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 sm:h-20 md:h-24 bg-cyan-400/30"></div>
            {/* Mobile Divider */}

            {/* Stat 2 */}
            <div className="text-center flex-1">
              <div className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-green-300 mb-2 sm:mb-3 md:mb-4">
                &gt;25K
              </div>
              <div className="flex justify-center mb-2 sm:mb-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <div className="text-green-300 text-base  lg:text-lg font-semibold leading-tight">
                <span className="block">Duplicates on Figma</span>
                <span className="block">Community</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-16 sm:h-20 md:h-24 bg-cyan-400/30"></div>
            {/* Mobile Divider */}

            {/* Stat 3 */}
            <div className="text-center flex-1">
              <div className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-green-300 mb-2 sm:mb-3 md:mb-4">
                &gt;2K
              </div>
              <div className="flex justify-center mb-2 sm:mb-3">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <div className="text-green-300 text-base  lg:text-lg font-semibold leading-tight">
                <span className="block">In Finished</span>
                <span className="block">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
