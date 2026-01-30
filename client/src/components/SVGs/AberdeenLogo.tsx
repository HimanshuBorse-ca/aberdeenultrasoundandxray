interface AberdeenLogoProps {
  iconColor?: string;
  textColor?: string;
  subtextColor?: string;
  className?: string;
}

export function AberdeenLogo({
  iconColor = "#FF8C00",
  textColor = "#000000",
  subtextColor = "#333333",
  className = "h-16"
}: AberdeenLogoProps) {
  return (
    <svg
      viewBox="0 0 350 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      Icon Background - Rounded Square
      <rect
        x="8"
        y="8"
        width="70"
        height="70"
        rx="12"
        fill={iconColor}
      />

        {/* Icon Background - Rounded Square */}
        <rect
          x="8"
          y="8"
          width="70"
          height="70"
          rx="12"
          fill={iconColor}
        />

        {/* Icon - Medical/Ultrasound Symbol */}
        <g transform="translate(43, 43)">
          {/* Stylized "A" outline */}
          <path
            d="M -16 18 L 0 -18 L 16 18"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Three ultrasound scan lines */}
          <path
            d="M -14 6 L 6 0"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -14 10 L 4 6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M -14 14 L 2 12"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      {/* Main Text - "Aberdeen" */}
      <text
        x="90"
        y="35"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Aberdeen
      </text>

      {/* Subtext - "ULTRASOUND & X-RAY" */}
      <text
        x="90"
        y="58"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontSize="11"
        fontWeight="600"
        fill={subtextColor}
        letterSpacing="1.2"
      >
        ULTRASOUND & X-RAY
      </text>

      {/* Decorative line under main text */}
      <line
        x1="90"
        y1="40"
        x2="350"
        y2="40"
        stroke={iconColor}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

/**
 * Logo Variants for Different Contexts
 */

export function AberdeenLogoDark() {
  return (
    <AberdeenLogo
      iconColor="#FF8C00"
      textColor="#FFFFFF"
      subtextColor="#E0E0E0"
    />
  );
}

export function AberdeenLogoLight() {
  return (
    <AberdeenLogo
      iconColor="#FF8C00"
      textColor="#000000"
      subtextColor="#333333"
    />
  );
}

export function AberdeenLogoAccent() {
  return (
    <AberdeenLogo
      iconColor="#1E5A8E"
      textColor="#FFFFFF"
      subtextColor="#E0E0E0"
    />
  );
}
