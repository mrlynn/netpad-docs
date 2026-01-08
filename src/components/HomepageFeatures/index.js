import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import SpotlightCard from '@site/src/components/SpotlightCard';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Forms',
    icon: '📝',
    link: '/docs/forms/overview',
    description: (
      <>
        Create beautiful, functional data entry forms with our visual form builder.
        Support for 30+ field types, conditional logic, validation rules, and seamless MongoDB integration.
      </>
    ),
  },
  {
    title: 'Workflows',
    icon: '⚡',
    link: '/docs/workflows/overview',
    description: (
      <>
        Automate processes with our visual workflow editor. Build complex automation workflows
        using drag-and-drop nodes, triggers, and integrations—no code required.
      </>
    ),
  },
  {
    title: 'Data Explorer',
    icon: '🔍',
    link: '/docs/data-explorer/overview',
    description: (
      <>
        Browse and manage MongoDB collections visually. Import, export, search, and edit your data
        with an intuitive interface. No need for MongoDB Compass or command-line tools.
      </>
    ),
  },
];

function Feature({title, icon, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <SpotlightCard className={styles.featureCard}>
          <div className={styles.featureIcon}>{icon}</div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </SpotlightCard>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
