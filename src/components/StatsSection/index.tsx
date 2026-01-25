import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 165, suffix: '+', label: 'API Endpoints', description: 'Comprehensive REST API' },
  { value: 30, suffix: '+', label: 'Field Types', description: 'From text to file uploads' },
  { value: 25, suffix: '+', label: 'Workflow Nodes', description: 'Triggers, actions, logic' },
  { value: 15, suffix: '+', label: 'AI Agents', description: 'Pre-built automation' },
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className={styles.counterValue}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={styles.statCard}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statDescription}>{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
