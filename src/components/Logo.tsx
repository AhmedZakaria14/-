
import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", isLight = false }) => {
  // Brand Colors
  const brandColor = "#001534";
  const white = "#FFFFFF";
  
  // Logic for colors based on theme
  const mainFill = isLight ? white : brandColor;
  const inverseFill = isLight ? brandColor : white;
  const subTextFill = isLight ? "rgba(255,255,255,0.9)" : "#001534";

  return (
    <div className={`group flex items-center ${className} cursor-pointer select-none`}>
      
      {/* 
        COMPACT LOGO CONTAINER (NH)
        - Visible by default on Desktop.
        - On Desktop Hover: Collapses to width 0 and fades out.
        - On Mobile: Remains static as the default logo.
      */}
      <div className="
        relative flex items-center justify-center overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        w-auto opacity-100 max-w-[200px]
        md:group-hover:max-w-0 md:group-hover:opacity-0 md:group-hover:px-0
      ">
        <svg 
           viewBox="0 0 160 100" 
           className="h-full w-auto block"
           style={{ aspectRatio: '160/100' }}
           fill="none" 
           xmlns="http://www.w3.org/2000/svg"
           aria-label="Nashar Hub Logo (Compact)"
        >
          <rect width="160" height="100" rx="24" fill={mainFill} />
          <text 
            x="80" 
            y="75" 
            fontFamily="'Outfit', sans-serif" 
            fontWeight="800" 
            fontSize="70" 
            fill={inverseFill} 
            textAnchor="middle" 
            letterSpacing="-3"
          >
            NH
          </text>
        </svg>
      </div>

      {/* 
        FULL LOGO CONTAINER (Nashar Hub)
        - Hidden by default on Desktop (max-w-0).
        - On Desktop Hover: Expands to natural width.
      */}
      <div className="
        relative flex items-center overflow-hidden
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        max-w-0 opacity-0
        md:group-hover:max-w-[600px] md:group-hover:opacity-100
      ">
         {/* 
            The SVG height is determined by the parent's height.
            Width is auto to preserve aspect ratio.
         */}
         <svg 
           viewBox="0 0 540 140" 
           className="h-full w-auto block min-w-max"
           style={{ aspectRatio: '540/140' }}
           fill="none" 
           xmlns="http://www.w3.org/2000/svg"
           aria-label="Nashar Hub Marketing Agency Logo (Full)"
         >
           {/* Nashar Text */}
           {/* Using a tighter spacing and alignment matching the uploaded image */}
           <text 
             x="0" 
             y="85" 
             fontFamily="'Outfit', sans-serif" 
             fontWeight="800" 
             fontSize="90" 
             fill={mainFill}
             letterSpacing="-2"
           >
             Nashar
           </text>

           {/* Hub Badge - Positioned next to Nashar */}
           <g transform="translate(320, 15)">
              <rect width="140" height="85" rx="16" fill={mainFill} />
              <text 
                x="70" 
                y="62" 
                fontFamily="'Outfit', sans-serif" 
                fontWeight="800" 
                fontSize="60" 
                fill={inverseFill} 
                textAnchor="middle"
                letterSpacing="-1"
              >
                Hub
              </text>
           </g>

           {/* Marketing Agency Subtitle - Centered under the whole lockup */}
           <text 
             x="230" 
             y="130" 
             fontFamily="'Outfit', sans-serif" 
             fontWeight="700" 
             fontSize="20" 
             letterSpacing="0.25em" 
             // Fix: textTransform is not a valid SVG attribute in React, moving it to style
             style={{ textTransform: 'uppercase' }}
             fill={subTextFill} 
             textAnchor="middle"
           >
             Marketing Agency
           </text>
         </svg>
      </div>
    </div>
  );
};
