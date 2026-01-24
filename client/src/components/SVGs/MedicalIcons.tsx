export function XRayIcon() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Frame */}
      <rect x="30" y="30" width="140" height="140" fill="none" stroke="#1e5a8e" strokeWidth="4" rx="8" />
      
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2c8c99" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect x="30" y="30" width="140" height="140" fill="url(#grid)" />
      
      {/* Chest X-ray silhouette */}
      <ellipse cx="100" cy="85" rx="35" ry="45" fill="none" stroke="#e67e22" strokeWidth="2" opacity="0.8" />
      
      {/* Ribs */}
      <path d="M 75 70 Q 70 85 75 100" stroke="#e67e22" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 80 65 Q 72 85 80 105" stroke="#e67e22" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 120 65 Q 128 85 120 105" stroke="#e67e22" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 125 70 Q 130 85 125 100" stroke="#e67e22" strokeWidth="1.5" fill="none" opacity="0.6" />
      
      {/* Heart */}
      <path d="M 100 75 L 105 70 Q 110 65 115 70 Q 120 75 100 90 Q 80 75 85 70 Q 90 65 95 70 Z" fill="#e67e22" opacity="0.7" />
      
      {/* Spine */}
      <line x1="100" y1="50" x2="100" y2="120" stroke="#e67e22" strokeWidth="2" opacity="0.6" />
      <circle cx="100" cy="60" r="2" fill="#e67e22" opacity="0.6" />
      <circle cx="100" cy="70" r="2" fill="#e67e22" opacity="0.6" />
      <circle cx="100" cy="80" r="2" fill="#e67e22" opacity="0.6" />
      <circle cx="100" cy="90" r="2" fill="#e67e22" opacity="0.6" />
      <circle cx="100" cy="100" r="2" fill="#e67e22" opacity="0.6" />
      <circle cx="100" cy="110" r="2" fill="#e67e22" opacity="0.6" />
    </svg>
  );
}

export function UltrasoundIcon() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Device body */}
      <rect x="40" y="50" width="120" height="100" fill="#2c8c99" stroke="#1e5a8e" strokeWidth="3" rx="8" />
      
      {/* Screen */}
      <rect x="50" y="60" width="100" height="60" fill="#1a1a1a" stroke="#e67e22" strokeWidth="2" rx="4" />
      
      {/* Ultrasound waves on screen */}
      <path d="M 60 95 Q 70 85 80 95 Q 90 105 100 95 Q 110 85 120 95" stroke="#2c8c99" strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M 60 105 Q 70 98 80 105 Q 90 112 100 105 Q 110 98 120 105" stroke="#2c8c99" strokeWidth="1.5" fill="none" opacity="0.6" />
      
      {/* Probe connector */}
      <rect x="60" y="125" width="80" height="12" fill="#1e5a8e" stroke="#1e5a8e" strokeWidth="2" rx="2" />
      
      {/* Probe */}
      <rect x="75" y="140" width="50" height="8" fill="#e67e22" stroke="#1e5a8e" strokeWidth="2" rx="2" />
      <circle cx="75" cy="144" r="5" fill="#e67e22" />
      
      {/* Sound waves emanating from probe */}
      <path d="M 75 155 Q 70 165 75 175" stroke="#2c8c99" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M 85 155 Q 75 170 85 180" stroke="#2c8c99" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M 95 155 Q 90 170 95 180" stroke="#2c8c99" strokeWidth="2" fill="none" opacity="0.5" />
    </svg>
  );
}

export function DiagnosticWaves() {
  return (
    <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Animated diagnostic waves */}
      <defs>
        <style>{`
          @keyframes wave {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 10; }
          }
          .wave-line {
            animation: wave 3s ease-in-out infinite;
            stroke-dasharray: 10, 5;
          }
        `}</style>
      </defs>
      
      {/* Wave 1 - X-ray theme */}
      <path d="M 0 50 Q 25 30 50 50 T 100 50 T 150 50 T 200 50" 
            stroke="#1e5a8e" strokeWidth="3" fill="none" className="wave-line" />
      
      {/* Wave 2 - Ultrasound theme */}
      <path d="M 0 50 Q 25 40 50 50 T 100 50 T 150 50 T 200 50" 
            stroke="#2c8c99" strokeWidth="2" fill="none" opacity="0.6" 
            style={{ animationDelay: '0.3s' }} className="wave-line" />
      
      {/* Wave 3 - Accent */}
      <path d="M 0 50 Q 25 60 50 50 T 100 50 T 150 50 T 200 50" 
            stroke="#e67e22" strokeWidth="2" fill="none" opacity="0.4" 
            style={{ animationDelay: '0.6s' }} className="wave-line" />
    </svg>
  );
}

export function HeartbeatLine() {
  return (
    <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes heartbeat {
            0%, 100% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: 5; }
          }
          .heartbeat-line {
            animation: heartbeat 1.5s ease-in-out infinite;
            stroke-dasharray: 5, 3;
          }
        `}</style>
      </defs>
      
      {/* Heartbeat waveform */}
      <polyline points="10,40 30,40 35,20 40,50 45,35 50,40 80,40 85,35 90,40 120,40 125,15 135,50 140,30 145,40 200,40" 
                stroke="#e67e22" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="heartbeat-line" />
      
      {/* Continuation line */}
      <line x1="200" y1="40" x2="400" y2="40" stroke="#e67e22" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}
