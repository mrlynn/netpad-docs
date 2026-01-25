import React from 'react';
import Link from '@docusaurus/Link';
import SpotlightCard from '@site/src/components/SpotlightCard';
import styles from './styles.module.css';

interface Pillar {
  title: string;
  icon: React.ReactNode;
  link: string;
  description: string;
  highlight?: boolean;
}

const pillars: Pillar[] = [
  {
    title: 'Forms',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.pillarIcon}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="7" y1="8" x2="17" y2="8" />
        <line x1="7" y1="12" x2="14" y2="12" />
        <line x1="7" y1="16" x2="11" y2="16" />
      </svg>
    ),
    link: '/docs/forms/overview',
    description: '30+ field types, validation rules, conditional logic, and visual form builder.',
  },
  {
    title: 'Workflows',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.pillarIcon}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 12h4l2-6h4" />
        <path d="M11 12l2 6h4" />
      </svg>
    ),
    link: '/docs/workflows/overview',
    description: '25+ node types, triggers, actions, and visual drag-and-drop editor.',
  },
  {
    title: 'Data',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.pillarIcon}>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
    link: '/docs/data-explorer/overview',
    description: 'Browse, search, import, and export MongoDB collections visually.',
  },
  {
    title: 'AI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.pillarIcon}>
        <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.4V11h3a3 3 0 013 3v1h-2v4h2v2H4v-2h2v-4H4v-1a3 3 0 013-3h3V9.4A4 4 0 018 6a4 4 0 014-4z" />
        <circle cx="9" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
    link: '/docs/ai/overview',
    description: 'RAG-powered forms, 15+ AI agents, and MongoDB Vector Search integration.',
    highlight: true,
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Link to={pillar.link} className={styles.pillarLink}>
      <SpotlightCard className={`${styles.pillarCard} ${pillar.highlight ? styles.highlighted : ''}`}>
        <div className={styles.iconWrapper}>
          {pillar.icon}
        </div>
        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
        <p className={styles.pillarDescription}>{pillar.description}</p>
        <span className={styles.learnMore}>
          Learn more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.arrowIcon}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </SpotlightCard>
    </Link>
  );
}

export default function PillarsSection() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Build Without Limits</h2>
          <p className={styles.sectionSubtitle}>
            Everything you need to create data-driven applications, connected directly to MongoDB.
          </p>
        </div>
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, idx) => (
            <PillarCard key={idx} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
