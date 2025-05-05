import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CloudIcon from '@mui/icons-material/Cloud';
import GroupsIcon from '@mui/icons-material/Groups';
import ImageIcon from '@mui/icons-material/Image';

const FeatureList = [
  {
    title: 'Real-time Collaboration',
    Icon: GroupsIcon,
    description: (
      <>
        Collaborate with your team in real time. Multiple users can edit diagrams simultaneously, with instant updates for everyone.
      </>
    ),
  },
  {
    title: 'Cloud Diagram Storage',
    Icon: CloudIcon,
    description: (
      <>
        All your diagrams are securely saved in the cloud. Access your work from anywhere, on any device, with MongoDB Atlas-powered persistence.
      </>
    ),
  },
  {
    title: 'Easy SVG/PNG Export',
    Icon: ImageIcon,
    description: (
      <>
        Export your diagrams as SVG or PNG with a single click. Share, embed, or use your visuals in presentations and documents effortlessly.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon style={{ fontSize: 64, color: '#4FC3F7' }} />
      </div>
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
