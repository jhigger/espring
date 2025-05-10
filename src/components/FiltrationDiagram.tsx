export const FiltrationDiagram = () => {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-md">
      {/* Main Container */}
      <svg
        viewBox="0 90 300 500"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base/Housing */}
        <rect
          x="100"
          y="500"
          width="100"
          height="50"
          rx="5"
          fill="#e2e8f0"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Main Filter Body */}
        <rect
          x="110"
          y="150"
          width="80"
          height="350"
          rx="10"
          fill="#f1f5f9"
          stroke="#94a3b8"
          strokeWidth="2"
        />

        {/* Water Input */}
        <path
          d="M150 100 L150 150"
          stroke="#0ea5e9"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="150" cy="100" r="10" fill="#0ea5e9" />

        {/* Water Output */}
        <path
          d="M150 550 L150 580"
          stroke="#0ea5e9"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="150" cy="580" r="10" fill="#0ea5e9" />

        {/* 1. Prefilter Section - Top */}
        <g id="prefilter" className="filter-component">
          <rect
            x="120"
            y="150"
            width="60"
            height="60"
            rx="5"
            fill="#bae6fd"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <text
            x="150"
            y="185"
            textAnchor="middle"
            fill="#0c4a6e"
            fontSize="12"
            fontWeight="bold"
          >
            1
          </text>
          {/* Particles */}
          <circle cx="130" cy="165" r="3" fill="#94a3b8" />
          <circle cx="140" cy="170" r="2" fill="#94a3b8" />
          <circle cx="155" cy="165" r="2.5" fill="#94a3b8" />
          <circle cx="165" cy="175" r="2" fill="#94a3b8" />
        </g>

        {/* 2. Protective Filter - Middle Top */}
        <g id="protective-filter" className="filter-component">
          <rect
            x="120"
            y="220"
            width="60"
            height="80"
            rx="5"
            fill="#a5f3fc"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <text
            x="150"
            y="260"
            textAnchor="middle"
            fill="#0c4a6e"
            fontSize="12"
            fontWeight="bold"
          >
            2
          </text>
          {/* Filter Mesh Pattern */}
          <line
            x1="120"
            y1="240"
            x2="180"
            y2="240"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="250"
            x2="180"
            y2="250"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="260"
            x2="180"
            y2="260"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="270"
            x2="180"
            y2="270"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
          <line
            x1="120"
            y1="280"
            x2="180"
            y2="280"
            stroke="#0ea5e9"
            strokeWidth="1"
          />
        </g>

        {/* 3. Carbon Filter - Middle Bottom */}
        <g id="carbon-filter" className="filter-component">
          <rect
            x="120"
            y="310"
            width="60"
            height="100"
            rx="5"
            fill="#7dd3fc"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <text
            x="150"
            y="360"
            textAnchor="middle"
            fill="#0c4a6e"
            fontSize="12"
            fontWeight="bold"
          >
            3
          </text>
          {/* Carbon Particles */}
          <circle cx="130" cy="330" r="2" fill="#1e293b" />
          <circle cx="140" cy="335" r="3" fill="#1e293b" />
          <circle cx="150" cy="325" r="2" fill="#1e293b" />
          <circle cx="160" cy="330" r="2.5" fill="#1e293b" />
          <circle cx="170" cy="335" r="2" fill="#1e293b" />
          <circle cx="135" cy="345" r="3" fill="#1e293b" />
          <circle cx="145" cy="350" r="2" fill="#1e293b" />
          <circle cx="155" cy="345" r="2.5" fill="#1e293b" />
          <circle cx="165" cy="350" r="2" fill="#1e293b" />
          <circle cx="130" cy="360" r="2.5" fill="#1e293b" />
          <circle cx="140" cy="365" r="2" fill="#1e293b" />
          <circle cx="150" cy="370" r="3" fill="#1e293b" />
          <circle cx="160" cy="365" r="2" fill="#1e293b" />
          <circle cx="170" cy="370" r="2.5" fill="#1e293b" />
          <circle cx="135" cy="380" r="2" fill="#1e293b" />
          <circle cx="145" cy="385" r="3" fill="#1e293b" />
          <circle cx="155" cy="380" r="2" fill="#1e293b" />
          <circle cx="165" cy="385" r="2.5" fill="#1e293b" />
        </g>

        {/* 4. UV-C LED System - Bottom */}
        <g id="uv-system" className="filter-component">
          <rect
            x="120"
            y="420"
            width="60"
            height="70"
            rx="5"
            fill="#38bdf8"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <text
            x="150"
            y="455"
            textAnchor="middle"
            fill="#0c4a6e"
            fontSize="12"
            fontWeight="bold"
          >
            4
          </text>
          {/* UV Light Representation */}
          <circle cx="150" cy="455" r="15" fill="#0c4a6e" />
          <circle cx="150" cy="455" r="12" fill="#0ea5e9" />
          <circle cx="150" cy="455" r="8" fill="#e0f2fe" />
          {/* Light Rays */}
          <line
            x1="150"
            y1="435"
            x2="150"
            y2="440"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="470"
            x2="150"
            y2="475"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="130"
            y1="455"
            x2="135"
            y2="455"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="165"
            y1="455"
            x2="170"
            y2="455"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="137"
            y1="442"
            x2="140"
            y2="445"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="160"
            y1="465"
            x2="163"
            y2="468"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="137"
            y1="468"
            x2="140"
            y2="465"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
          <line
            x1="160"
            y1="445"
            x2="163"
            y2="442"
            stroke="#e0f2fe"
            strokeWidth="2"
          />
        </g>

        {/* Water Flow Animation */}
        <g className="water-flow">
          <circle
            cx="150"
            cy="130"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "0s" }}
          />
          <circle
            cx="150"
            cy="200"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="150"
            cy="270"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="150"
            cy="340"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            cx="150"
            cy="410"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "2s" }}
          />
          <circle
            cx="150"
            cy="480"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "2.5s" }}
          />
          <circle
            cx="150"
            cy="520"
            r="3"
            fill="#0ea5e9"
            className="animate-water-drop"
            style={{ animationDelay: "3s" }}
          />
        </g>

        {/* Component Labels */}
        <g className="component-labels">
          <text x="210" y="180" fill="#0c4a6e" fontSize="12" fontWeight="bold">
            Prefilter
          </text>
          <text x="210" y="260" fill="#0c4a6e" fontSize="12" fontWeight="bold">
            Protective Filter
          </text>
          <text x="210" y="360" fill="#0c4a6e" fontSize="12" fontWeight="bold">
            Carbon Filter
          </text>
          <text x="210" y="455" fill="#0c4a6e" fontSize="12" fontWeight="bold">
            UV-C LED System
          </text>
        </g>
      </svg>
    </div>
  );
};
