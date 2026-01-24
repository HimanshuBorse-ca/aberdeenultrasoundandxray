export function DoctorCharacter() {
  return (
    <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <circle cx="100" cy="60" r="25" fill="#f4a460" />
      
      {/* Hair */}
      <path d="M 75 50 Q 75 30 100 30 Q 125 30 125 50" fill="#8b4513" />
      
      {/* Eyes */}
      <circle cx="92" cy="55" r="3" fill="#333" />
      <circle cx="108" cy="55" r="3" fill="#333" />
      
      {/* Smile */}
      <path d="M 92 65 Q 100 70 108 65" stroke="#333" strokeWidth="2" fill="none" />
      
      {/* Lab Coat */}
      <path d="M 75 85 L 70 200 L 130 200 L 125 85 Z" fill="#ffffff" stroke="#1e5a8e" strokeWidth="2" />
      
      {/* Coat buttons */}
      <circle cx="100" cy="110" r="3" fill="#1e5a8e" />
      <circle cx="100" cy="130" r="3" fill="#1e5a8e" />
      <circle cx="100" cy="150" r="3" fill="#1e5a8e" />
      
      {/* Stethoscope */}
      <path d="M 85 95 Q 75 90 70 100" stroke="#e67e22" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="70" cy="100" r="4" fill="#e67e22" />
      
      {/* Arms */}
      <line x1="75" y1="90" x2="50" y2="120" stroke="#f4a460" strokeWidth="8" strokeLinecap="round" />
      <line x1="125" y1="90" x2="150" y2="120" stroke="#f4a460" strokeWidth="8" strokeLinecap="round" />
      
      {/* Hands */}
      <circle cx="50" cy="120" r="6" fill="#f4a460" />
      <circle cx="150" cy="120" r="6" fill="#f4a460" />
      
      {/* Legs */}
      <line x1="85" y1="200" x2="85" y2="260" stroke="#333" strokeWidth="6" strokeLinecap="round" />
      <line x1="115" y1="200" x2="115" y2="260" stroke="#333" strokeWidth="6" strokeLinecap="round" />
      
      {/* Shoes */}
      <ellipse cx="85" cy="265" rx="8" ry="5" fill="#333" />
      <ellipse cx="115" cy="265" rx="8" ry="5" fill="#333" />
    </svg>
  );
}

export function SonographerCharacter() {
  return (
    <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <circle cx="100" cy="60" r="25" fill="#daa76a" />
      
      {/* Hair - longer */}
      <path d="M 75 50 Q 75 30 100 30 Q 125 30 125 50 Q 125 45 120 42 Q 115 40 100 40 Q 85 40 80 42 Q 75 45 75 50" fill="#2c3e50" />
      
      {/* Eyes */}
      <circle cx="92" cy="55" r="3" fill="#333" />
      <circle cx="108" cy="55" r="3" fill="#333" />
      
      {/* Smile */}
      <path d="M 92 65 Q 100 70 108 65" stroke="#333" strokeWidth="2" fill="none" />
      
      {/* Medical Scrubs */}
      <path d="M 75 85 L 70 200 L 130 200 L 125 85 Z" fill="#2c8c99" stroke="#1e5a8e" strokeWidth="2" />
      
      {/* Pocket */}
      <rect x="95" y="110" width="15" height="20" fill="none" stroke="#1e5a8e" strokeWidth="1" />
      
      {/* Ultrasound Probe in hand */}
      <line x1="125" y1="90" x2="155" y2="100" stroke="#daa76a" strokeWidth="8" strokeLinecap="round" />
      <rect x="152" y="95" width="8" height="12" fill="#e67e22" rx="2" />
      
      {/* Arms */}
      <line x1="75" y1="90" x2="50" y2="120" stroke="#daa76a" strokeWidth="8" strokeLinecap="round" />
      <line x1="125" y1="90" x2="155" y2="100" stroke="#daa76a" strokeWidth="8" strokeLinecap="round" />
      
      {/* Hands */}
      <circle cx="50" cy="120" r="6" fill="#daa76a" />
      <circle cx="155" cy="100" r="6" fill="#daa76a" />
      
      {/* Legs */}
      <line x1="85" y1="200" x2="85" y2="260" stroke="#1e5a8e" strokeWidth="6" strokeLinecap="round" />
      <line x1="115" y1="200" x2="115" y2="260" stroke="#1e5a8e" strokeWidth="6" strokeLinecap="round" />
      
      {/* Shoes */}
      <ellipse cx="85" cy="265" rx="8" ry="5" fill="#1e5a8e" />
      <ellipse cx="115" cy="265" rx="8" ry="5" fill="#1e5a8e" />
    </svg>
  );
}
