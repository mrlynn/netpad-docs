import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

function DataParticle({ style, delay }: { style: React.CSSProperties; delay: number }) {
  return (
    <div
      className={styles.particle}
      style={{ ...style, animationDelay: `${delay}s` }}
    />
  );
}

function HeroMascot() {
  return (
    <div className={styles.mascotContainer}>
      <div className={styles.mascotGlow} />
      <div className={styles.pulseRing} />
      <div className={styles.pulseRing} style={{ animationDelay: '-1s' }} />
      <div className={styles.pulseRing} style={{ animationDelay: '-2s' }} />
      <img
        src="/img/netpad-avatar.png"
        alt="NetPad mascot"
        className={styles.mascotImage}
      />
    </div>
  );
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <header className={styles.hero}>
      {/* Animated background */}
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      {/* Floating particles */}
      <div className={styles.particlesContainer}>
        <DataParticle style={{ left: '10%', top: '20%' }} delay={0} />
        <DataParticle style={{ left: '85%', top: '15%' }} delay={1.5} />
        <DataParticle style={{ left: '75%', top: '70%' }} delay={3} />
        <DataParticle style={{ left: '15%', top: '75%' }} delay={4.5} />
        <DataParticle style={{ left: '50%', top: '85%' }} delay={2} />
        <DataParticle style={{ left: '30%', top: '10%' }} delay={5} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.heroTitle}>
            {title || (
              <>
                <span className={styles.gradientText}>MongoDB-Native</span>
                <br />
                Data Platform
              </>
            )}
          </h1>
          <p className={styles.heroSubtitle}>
            {subtitle || 'Build forms, automate workflows, and harness AI—all connected to your MongoDB data.'}
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className={styles.ctaPrimary}
              to="/docs/getting-started/introduction">
              Get Started
            </Link>
            <Link
              className={styles.ctaSecondary}
              to="/docs/getting-started/quickstart">
              Quick Start
            </Link>
          </div>
        </div>

        <HeroMascot />
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </header>
  );
}
