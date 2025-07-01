"use client";

import { cn } from "@/lib/utils";

export interface CpuArchitectureSvgProps {
  className?: string;
  width?: string;
  height?: string;
  text?: string;
  showCpuConnections?: boolean;
  lineMarkerSize?: number;
  animateText?: boolean;
  animateLines?: boolean;
  animateMarkers?: boolean;
}

const CpuArchitecture = ({
  className,
  width = "100%",
  height = "100%",
  text = "CPU",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
}: CpuArchitectureSvgProps) => {

  return (
    <svg
      className={cn("text-muted", className)}
      width={width}
      height={height}
      viewBox="0 0 1360 720"
    >
      {/* Paths */}
      <g
        stroke="currentColor"
        fill="none"
        strokeWidth="2.08"
        strokeDasharray="100 100"
        pathLength="100"
        markerStart="url(#cpu-circle-marker)"
      >
        {/* 1st */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 68 144 h 540.6 q 34 0 34 34 v 216"
        />
        {/* 2nd */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 1224 72 h -474.36 q -34 0 -34 34 v 216"
        />
        {/* 3rd */}
        <path d="M 884 144 v 148.32 q 0 34 -34 34 h -68" />
        {/* 4th */}
        <path d="M 1156 576 v -148.32 q 0 -34 -34 -34 h -340" />
        {/* 5th */}
        <path
          strokeDasharray="100 100"
          pathLength="100"
          d="M 918 468 h 102 q 34 0 34 34 v 72 q 0 34 -34 34 h -270.64 q -34 0 -34 -34 v -144"
        />
        {/* 6th */}
        <path d="M 644.64 684 v -259.2" />
        {/* 7th */}
        <path d="M 598.4 633.6 v -108 q 0 -34 -34 -34 h -68 q -34 0 -34 -34 v -36 q 0 -34 34 -34 h 95.2" />
        {/* 8th */}
        <path d="M 204 216 h 170 q 34 0 34 34 v 46.8 q 0 34 34 34 h 136" />
        {/* 9th */}
        <path d="M 400 650 v -200 q 0 -34 34 -34 h 150" />
        {/* 10th */}
        <path d="M 900 100 v 150 q 0 34 -34 34 h -100" />
        {/* Animation For Path Starting */}
        {animateLines && (
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        )}
      </g>

      {/* 1. Blue Light */}
      <g mask="url(#cpu-mask-1)">
        <circle
          className="cpu-architecture cpu-line-1"
          cx="0"
          cy="0"
          r="54.4"
          fill="url(#cpu-blue-grad)"
        />
      </g>
      {/* 2. Yellow Light */}
      <g mask="url(#cpu-mask-2)">
        <circle
          className="cpu-architecture cpu-line-2"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-yellow-grad)"
        />
      </g>
      {/* 3. Pinkish Light */}
      <g mask="url(#cpu-mask-3)">
        <circle
          className="cpu-architecture cpu-line-3"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-pinkish-grad)"
        />
      </g>
      {/* 4. White Light */}
      <g mask="url(#cpu-mask-4)">
        <circle
          className="cpu-architecture cpu-line-4"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-white-grad)"
        />
      </g>
      {/* 5. Green Light */}
      <g mask="url(#cpu-mask-5)">
        <circle
          className="cpu-architecture cpu-line-5"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-green-grad)"
        />
      </g>
      {/* 6. Orange Light */}
      <g mask="url(#cpu-mask-6)">
        <circle
          className="cpu-architecture cpu-line-6"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-orange-grad)"
        />
      </g>
      {/* 7. Cyan Light */}
      <g mask="url(#cpu-mask-7)">
        <circle
          className="cpu-architecture cpu-line-7"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-cyan-grad)"
        />
      </g>
      {/* 8. Rose Light */}
      <g mask="url(#cpu-mask-8)">
        <circle
          className="cpu-architecture cpu-line-8"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-rose-grad)"
        />
      </g>
      {/* 9. Purple Light */}
      <g mask="url(#cpu-mask-9)">
        <circle
          className="cpu-architecture cpu-line-9"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-purple-grad)"
        />
      </g>
      {/* 10. Teal Light */}
      <g mask="url(#cpu-mask-10)">
        <circle
          className="cpu-architecture cpu-line-10"
          cx="0"
          cy="0"
          r="8"
          fill="url(#cpu-teal-grad)"
        />
      </g>
      {/* CPU Box */}
      <g>
        {/* CPU Box Glow */}
        <rect
          x="578"
          y="288"
          width="204"
          height="144"
          rx="13.6"
          fill="hsl(var(--primary))"
          filter="url(#cpu-glow-filter)"
          opacity="0.5"
        />
        {/* Cpu connections */}
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="632.4" y="266.4" width="17" height="36" rx="4.76" />
            <rect x="707.2" y="266.4" width="17" height="36" rx="4.76" />
            <rect
              x="790.44"
              y="316.8"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(90 790.5 327.6)"
            />
            <rect
              x="835.04"
              y="316.8"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(90 790.5 327.6)"
            />
            <rect
              x="707.2"
              y="115.2"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(180 715.7 284.4)"
            />
            <rect
              x="778.6"
              y="115.2"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(180 715.7 284.4)"
            />
            <rect
              x="544"
              y="-97.92"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(270 783.7 140.4)"
            />
            <rect
              x="591.6"
              y="-97.92"
              width="17"
              height="36"
              rx="4.76"
              transform="rotate(270 783.7 140.4)"
            />
          </g>
        )}
        {/* Main CPU Rectangle */}
        <rect
          x="578"
          y="288"
          width="204"
          height="144"
          rx="13.6"
          fill="#181818"
          filter="url(#cpu-light-shadow)"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="1"
        />
        {/* CPU internal lines for detail */}
        <g stroke="hsl(var(--primary) / 0.2)" strokeWidth="1">
            <path d="M 598 310 h 164" />
            <path d="M 598 325 h 164" />
            <path d="M 598 340 h 100" />
            <path d="M 598 355 h 100" />
            <path d="M 598 370 h 100" />
            <path d="M 598 385 h 100" />
            <path d="M 598 400 h 164" />

            <rect x="718" y="335" width="44" height="50" fill="hsl(var(--primary) / 0.05)" rx="4" />
        </g>
        {/* CPU Text */}
        <text
          x="680"
          y="360"
          fontSize="47.6"
          fill={animateText ? "url(#cpu-text-gradient)" : "white"}
          fontWeight="600"
          letterSpacing="0.05em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text}
        </text>
      </g>
      {/* Masks */}
      <defs>
        <mask id="cpu-mask-1">
          <path
            d="M 68 144 h 540.6 q 34 0 34 34 v 172.8"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-2">
          <path
            d="M 1224 72 h -474.36 q -34 0 -34 34 v 172.8"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-3">
          <path
            d="M 884 144 v 148.32 q 0 34 -34 34 h -68"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-4">
          <path
            d="M 1156 576 v -148.32 q 0 -34 -34 -34 h -340"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-5">
          <path
            d="M 918 468 h 102 q 34 0 34 34 v 72 q 0 34 -34 34 h -270.64 q -34 0 -34 -34 v -144"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-6">
          <path d="M 644.64 684 v -259.2" strokeWidth="4" stroke="white" />
        </mask>
        <mask id="cpu-mask-7">
          <path
            d="M 598.4 633.6 v -108 q 0 -34 -34 -34 h -68 q -34 0 -34 -34 v -36 q 0 -34 34 -34 h 95.2"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-8">
          <path
            d="M 204 216 h 170 q 34 0 34 34 v 46.8 q 0 34 34 34 h 136"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-9">
          <path
            d="M 400 650 v -200 q 0 -34 34 -34 h 150"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        <mask id="cpu-mask-10">
          <path
            d="M 900 100 v 150 q 0 34 -34 34 h -100"
            strokeWidth="4"
            stroke="white"
          />
        </mask>
        {/* Gradients */}
        <radialGradient id="cpu-blue-grad" fx="1">
          <stop offset="0%" stopColor="#80dfff" />
          <stop offset="50%" stopColor="#00aaff" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-yellow-grad" fx="1">
          <stop offset="0%" stopColor="#ffef80" />
          <stop offset="50%" stopColor="#ffd800" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-pinkish-grad" fx="1">
          <stop offset="0%" stopColor="#d980ff" />
          <stop offset="50%" stopColor="#c700ff" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-green-grad" fx="1">
          <stop offset="0%" stopColor="#80ffaa" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-orange-grad" fx="1">
          <stop offset="0%" stopColor="#ffb380" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-cyan-grad" fx="1">
          <stop offset="0%" stopColor="#80deea" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-rose-grad" fx="1">
          <stop offset="0%" stopColor="#ff99a9" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-purple-grad" fx="1">
          <stop offset="0%" stopColor="#e0b3ff" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-teal-grad" fx="1">
          <stop offset="0%" stopColor="#b3fff5" />
          <stop offset="50%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter
          id="cpu-light-shadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="1.5"
            dy="1.5"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.1"
          />
        </filter>
        <filter id="cpu-glow-filter">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <marker
          id="cpu-circle-marker"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth={lineMarkerSize}
          markerHeight={lineMarkerSize}
        >
          <circle
            id="innerMarkerCircle"
            cx="5"
            cy="5"
            r="2"
            fill="black"
            stroke="#232323"
            strokeWidth="0.5"
          >
            {animateMarkers && (
              <animate attributeName="r" values="0; 3; 2" dur="0.5s" />
            )}
          </circle>
        </marker>
        {/* Cpu connection gradient */}
        <linearGradient
          id="cpu-connection-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#4F4F4F" />
          <stop offset="60%" stopColor="#121214" />
        </linearGradient>
        {/* Add CPU Text Gradient */}
        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="-2; -1; 0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="25%" stopColor="white">
            <animate
              attributeName="offset"
              values="-1; 0; 1"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
          <stop offset="50%" stopColor="#666666">
            <animate
              attributeName="offset"
              values="0; 1; 2;"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CpuArchitecture;
