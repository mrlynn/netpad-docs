import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Forms',
    description: (
      <>
        Create beautiful, functional data entry forms with our visual form builder. 
        Support for 30+ field types, conditional logic, validation rules, and seamless MongoDB integration.
      </>
    ),
  },
  {
    title: 'Workflows',
    description: (
      <>
        Automate processes with our visual workflow editor. Build complex automation workflows 
        using drag-and-drop nodes, triggers, and integrations—no code required.
      </>
    ),
  },
  {
    title: 'Data Explorer',
    description: (
      <>
        Browse and manage MongoDB collections visually. Import, export, search, and edit your data 
        with an intuitive interface. No need for MongoDB Compass or command-line tools.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
