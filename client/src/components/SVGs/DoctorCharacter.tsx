// File: DiagnosticLogo.jsx

export function DoctorCharacter() {
  // Holographic X-Ray featuring a clean upper-torso (half skeleton) view.
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
      <defs>
        {/* Indigo to Pink Gradient */}
        <linearGradient id="xrayHolo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo 600 */}
          <stop offset="100%" stopColor="#db2777" /> {/* Pink 600 */}
        </linearGradient>

        {/* Scanning Laser Gradient */}
        <linearGradient id="laserBeam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>

        {/* Bone Glow Filter */}
        <filter id="boneGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>

      {/* Main Background Card */}
      <rect width="200" height="200" rx="40" fill="url(#xrayHolo)" />

      {/* Glass Overlay Layer */}
      <rect x="20" y="20" width="160" height="160" rx="24" fill="#ffffff" opacity="0.15" />

      {/* The Upper Spine Structure (6 Vertebrae) */}
      <g filter="url(#boneGlow)">
          {/* Central Cord */}
          <rect x="94" y="45" width="12" height="100" rx="6" fill="#ffffff" opacity="0.8" />
          
          {/* 6 Vertebrae Blocks (Clean and Larger) */}
          <g fill="#ffffff" opacity="0.9">
             <rect x="90" y="45" width="20" height="14" rx="4" />
             <rect x="90" y="61" width="20" height="14" rx="4" />
             <rect x="90" y="77" width="20" height="14" rx="4" />
             <rect x="90" y="93" width="20" height="14" rx="4" />
             <rect x="90" y="109" width="20" height="14" rx="4" />
             <rect x="90" y="125" width="20" height="14" rx="4" />
          </g>
      </g>

      {/* The 6 Pairs of Upper Ribs (Clean "Half Skeleton") */}
      <g fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
         {/* Rib Pair 1 (Collarbone level) */}
         <path d="M 100 48 Q 75 50 60 60" /> <path d="M 100 48 Q 125 50 140 60" />
         
         {/* Rib Pair 2 */}
         <path d="M 100 64 Q 70 66 55 78" /> <path d="M 100 64 Q 130 66 145 78" />
         
         {/* Rib Pair 3 */}
         <path d="M 100 80 Q 65 82 50 95" /> <path d="M 100 80 Q 135 82 150 95" />
         
         {/* Rib Pair 4 */}
         <path d="M 100 96 Q 65 98 50 110" /> <path d="M 100 96 Q 135 98 150 110" />
         
         {/* Rib Pair 5 */}
         <path d="M 100 112 Q 70 114 58 125" /> <path d="M 100 112 Q 130 114 142 125" />
         
         {/* Rib Pair 6 (Last visible) */}
         <path d="M 100 128 Q 80 130 70 140" /> <path d="M 100 128 Q 120 130 130 140" />
      </g>

      {/* The Active Scanning Beam (Focused on the upper area) */}
      <g opacity="0.8">
        <rect x="30" y="40" width="140" height="15" fill="url(#laserBeam)">
             <animate attributeName="y" values="40;150;40" dur="2.5s" repeatCount="indefinite" />
        </rect>
        {/* The Laser Guide Lines */}
        <line x1="30" y1="47.5" x2="170" y2="47.5" stroke="#ffffff" strokeWidth="1">
             <animate attributeName="y1" values="40;150;40" dur="2.5s" repeatCount="indefinite" />
             <animate attributeName="y2" values="40;150;40" dur="2.5s" repeatCount="indefinite" />
        </line>
      </g>
      
      {/* Tech Dots (Static context) */}
      <circle cx="40" cy="40" r="3" fill="#ffffff" opacity="0.5"/>
      <circle cx="160" cy="160" r="3" fill="#ffffff" opacity="0.5"/>
    </svg>
  );
}

export function SonographerCharacter() {
  // Holographic Ultrasound with active heartbeat drawing and sonar pulses.
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32">
      <defs>
        {/* Orange to Red Gradient */}
        <linearGradient id="ultraHolo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" /> {/* Orange 500 */}
          <stop offset="100%" stopColor="#ef4444" /> {/* Red 500 */}
        </linearGradient>

        {/* Clip Path for the Fan Shape */}
        <clipPath id="fanClip">
           <path d="M 100 100 L 20 180 A 85 85 0 0 1 180 180 Z" />
        </clipPath>

        <filter id="screenGlow" x="-20%" y="-20%" width="140%" height="140%">
             <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
             <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
             </feMerge>
        </filter>
      </defs>

      {/* Main Background Card */}
      <rect width="200" height="200" rx="40" fill="url(#ultraHolo)" />

      {/* Glass Overlay Layer */}
      <rect x="20" y="20" width="160" height="160" rx="24" fill="#ffffff" opacity="0.15" />

      {/* The Ultrasound Fan Container */}
      <g clipPath="url(#fanClip)">
          
          {/* Darker interior */}
          <rect x="0" y="0" width="200" height="200" fill="#000000" opacity="0.2" />
          
          {/* Grid Lines */}
          <path d="M 100 100 L 20 180" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
          <path d="M 100 100 L 180 180" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
          <path d="M 100 100 A 50 50 0 0 1 100 100" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />

          {/* Animated Heartbeat Line (Drawing itself) */}
          <path d="M 30 170 L 50 170 L 60 160 L 70 180 L 80 170 L 120 170 L 130 150 L 140 190 L 150 170 L 180 170" 
                stroke="#4ade80" strokeWidth="3" fill="none" filter="url(#screenGlow)">
             <animate attributeName="stroke-dasharray" values="0, 1000; 1000, 0" dur="2s" repeatCount="indefinite" />
        </path>

        {/* Simulated Noise/Speckle (Floating randomly) */}
        <circle cx="80" cy="150" r="1.5" fill="#ffffff" opacity="0.5">
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
        </circle>
        <circle cx="130" cy="160" r="1.5" fill="#ffffff" opacity="0.5">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>

      {/* Active Sonar Rings (Expanding from Probe) */}
      <g stroke="#ffffff" fill="none" strokeWidth="2">
         <circle cx="100" cy="100" r="15" opacity="0.8">
            <animate attributeName="r" values="15;80" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
         </circle>
         <circle cx="100" cy="100" r="15" opacity="0.6">
            <animate attributeName="r" values="15;80" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0" dur="2s" begin="1s" repeatCount="indefinite" />
         </circle>
      </g>

      {/* The Probe Handle (Center Top) */}
      <path d="M 85 90 L 115 90 L 100 130 Z" fill="#ffffff" opacity="0.2" />
      <circle cx="100" cy="90" r="8" fill="#ffffff" filter="url(#screenGlow)" />
    </svg>
  );
}