import React from "react";
import styles from "./styles.module.css";

export type NetPadMongoControlPlaneProps = {
  title?: string;
  subtitle?: string;
  /**
   * Background rendering mode for the SVG container.
   * - "dark": fixed dark background
   * - "light": fixed light background
   * - "transparent": inherit from page/theme
   */
  bg?: "dark" | "light" | "transparent";
  /**
   * Enable animated rotation of the NetPad ring
   */
  animated?: boolean;
  /**
   * Show pulse animation on the MongoDB core
   */
  pulse?: boolean;
  className?: string;
};

const NetPadMongoControlPlane: React.FC<NetPadMongoControlPlaneProps> = ({
  title = "NetPad control plane for MongoDB",
  subtitle = "MongoDB stores the truth. NetPad governs how it moves.",
  bg = "transparent",
  animated = false,
  pulse = true,
  className = "",
}) => {
  const bgFill =
    bg === "dark" ? "#0f172a" : bg === "light" ? "#ffffff" : "none";

  const outerText = bg === "light" ? "#334155" : "#94a3b8";
  const labelStrong = bg === "light" ? "#0f172a" : "#e0f2fe";
  const labelSub = bg === "light" ? "#334155" : "#bae6fd";
  const netpadStroke = bg === "light" ? "#0284c7" : "#38bdf8";
  const netpadLabel = bg === "light" ? "#0284c7" : "#7dd3fc";

  return (
    <figure className={`${styles.figure} ${className}`}>
      {(title || subtitle) && (
        <figcaption className={styles.caption}>
          {title && <div className={styles.title}>{title}</div>}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </figcaption>
      )}

      <div className={styles.svgWrap} aria-label={title} role="img">
        <svg
          className={styles.svg}
          viewBox="0 0 900 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Definitions for animations and gradients */}
          <defs>
            {/* Gradient for the NetPad ring */}
            <linearGradient id="netpadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Glow filter for MongoDB core */}
            <filter id="mongoGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Animated dash pattern for the ring */}
            {animated && (
              <style>
                {`
                  @keyframes dash {
                    to {
                      stroke-dashoffset: -1382;
                    }
                  }
                  @keyframes pulse {
                    0%, 100% { opacity: 0.15; r: 120; }
                    50% { opacity: 0.25; r: 130; }
                  }
                  @keyframes glow {
                    0%, 100% { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4)); }
                    50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.6)); }
                  }
                  .netpad-ring {
                    stroke-dasharray: 40 20;
                    animation: dash 20s linear infinite;
                  }
                  .mongo-pulse {
                    animation: pulse 3s ease-in-out infinite;
                  }
                  .mongo-core {
                    animation: glow 3s ease-in-out infinite;
                  }
                `}
              </style>
            )}
          </defs>

          {/* Background */}
          <rect width="100%" height="100%" fill={bgFill} />

          {/* ===== MongoDB Core ===== */}
          <circle
            cx={450}
            cy={450}
            r={120}
            fill="#10b981"
            opacity={0.15}
            className={animated && pulse ? "mongo-pulse" : ""}
          />
          <circle
            cx={450}
            cy={450}
            r={90}
            fill="#10b981"
            className={animated && pulse ? "mongo-core" : ""}
            filter={pulse ? "url(#mongoGlow)" : undefined}
          />

          <text
            x={450}
            y={440}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={22}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
          >
            MongoDB
          </text>

          <text
            x={450}
            y={465}
            textAnchor="middle"
            fill="#e5e7eb"
            fontSize={13}
            fontFamily="Inter, system-ui, sans-serif"
          >
            system of record
          </text>

          <text
            x={450}
            y={485}
            textAnchor="middle"
            fill="#d1fae5"
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            documents · collections · queries
          </text>

          {/* ===== NetPad Ring ===== */}
          <circle
            cx={450}
            cy={450}
            r={220}
            fill="none"
            stroke={netpadStroke}
            strokeWidth={14}
            className={animated ? "netpad-ring" : ""}
          />

          {/* Lifecycle stage indicators on the ring */}
          <g className={styles.lifecycleMarkers}>
            {/* Create - top */}
            <circle cx={450} cy={230} r={8} fill={netpadStroke} />
            {/* Review - top right */}
            <circle cx={605} cy={295} r={8} fill={netpadStroke} />
            {/* Decide - bottom right */}
            <circle cx={605} cy={605} r={8} fill={netpadStroke} />
            {/* Act - bottom */}
            <circle cx={450} cy={670} r={8} fill={netpadStroke} />
            {/* Audit - bottom left */}
            <circle cx={295} cy={605} r={8} fill={netpadStroke} />
            {/* Evolve - top left */}
            <circle cx={295} cy={295} r={8} fill={netpadStroke} />
          </g>

          {/* NetPad Label */}
          <text
            x={450}
            y={200}
            textAnchor="middle"
            fill={netpadLabel}
            fontSize={18}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
          >
            NetPad — operational control plane
          </text>

          {/* ===== Lifecycle Labels ===== */}

          {/* Create */}
          <text
            x={450}
            y={120}
            textAnchor="middle"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Create
          </text>
          <text
            x={450}
            y={138}
            textAnchor="middle"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Forms · APIs · AI intake
          </text>

          {/* Review */}
          <text
            x={675}
            y={285}
            textAnchor="start"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Review
          </text>
          <text
            x={675}
            y={303}
            textAnchor="start"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Ownership · approvals
          </text>

          {/* Decide */}
          <text
            x={675}
            y={525}
            textAnchor="start"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Decide
          </text>
          <text
            x={675}
            y={543}
            textAnchor="start"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            State transitions
          </text>

          {/* Act */}
          <text
            x={450}
            y={760}
            textAnchor="middle"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Act
          </text>
          <text
            x={450}
            y={778}
            textAnchor="middle"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Automation · integrations
          </text>

          {/* Audit */}
          <text
            x={225}
            y={525}
            textAnchor="end"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Audit
          </text>
          <text
            x={225}
            y={543}
            textAnchor="end"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Immutable events
          </text>

          {/* Evolve */}
          <text
            x={225}
            y={285}
            textAnchor="end"
            fill={labelStrong}
            fontSize={14}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Evolve
          </text>
          <text
            x={225}
            y={303}
            textAnchor="end"
            fill={labelSub}
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Schemas & workflows
          </text>

          {/* Interfaces */}
          <text
            x={450}
            y={40}
            textAnchor="middle"
            fill={outerText}
            fontSize={12}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Humans · Systems · AI
          </text>

          {/* Connection lines from ring to labels */}
          <g stroke={labelSub} strokeWidth={1} strokeDasharray="4 2" opacity={0.5}>
            {/* Create */}
            <line x1={450} y1={230} x2={450} y2={145} />
            {/* Review */}
            <line x1={613} y1={295} x2={670} y2={295} />
            {/* Decide */}
            <line x1={613} y1={605} x2={670} y2={535} />
            {/* Act */}
            <line x1={450} y1={670} x2={450} y2={750} />
            {/* Audit */}
            <line x1={287} y1={605} x2={230} y2={535} />
            {/* Evolve */}
            <line x1={287} y1={295} x2={230} y2={295} />
          </g>
        </svg>
      </div>
    </figure>
  );
};

export default NetPadMongoControlPlane;
