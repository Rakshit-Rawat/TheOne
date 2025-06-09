import React from "react";

interface CurvedTextCircleProps {
  text: string;
  speed: number;
  radius: number;
  fontSize: number;
  letterSpacing: number;
  wordSpacing: number;
  className?: string;
}

const CurvedTextCircle: React.FC<CurvedTextCircleProps> = ({
  text,
  speed,
  radius,
  fontSize,
  letterSpacing,
  wordSpacing,
  className = "",
}) => {
  const svgSize = (radius + 60) * 2;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className="relative flex justify-center items-center"
        style={{
          width: `${svgSize}px`,
          height: `${svgSize}px`,
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="absolute"
          style={{
            animation: `spin ${speed}s linear infinite`,
          }}
        >
          <defs>
            <path
              id="circle-path"
              d={`M ${radius + 60}, ${
                radius + 60
              } m -${radius}, 0 a ${radius},${radius} 0 1,1 ${
                radius * 2
              },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text
            className="font-bold"
            style={{
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              wordSpacing: `${wordSpacing}px`,
            }}
          >
            <textPath href="#circle-path" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CurvedTextCircle;
