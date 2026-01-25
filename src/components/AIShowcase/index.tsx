import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// AI Agent data
const aiAgents = [
  { name: 'Form Generator', icon: '📝', description: 'Auto-generate forms from descriptions' },
  { name: 'Data Validator', icon: '✓', description: 'Intelligent validation rules' },
  { name: 'Translation', icon: '🌐', description: 'Multi-language support' },
  { name: 'Compliance', icon: '🛡️', description: 'Regulatory compliance checks' },
  { name: 'Analytics', icon: '📊', description: 'Data insights and trends' },
  { name: 'Summarizer', icon: '📋', description: 'Document summarization' },
  { name: 'Classifier', icon: '🏷️', description: 'Auto-categorization' },
  { name: 'Extractor', icon: '🔍', description: 'Key info extraction' },
  { name: 'Sentiment', icon: '💭', description: 'Response analysis' },
  { name: 'Q&A Bot', icon: '💬', description: 'Context-aware answers' },
  { name: 'Code Gen', icon: '⚡', description: 'Generate integrations' },
  { name: 'Formatter', icon: '✨', description: 'Smart formatting' },
];

function ConversationalDemo() {
  return (
    <div className={styles.chatDemo}>
      <div className={styles.chatHeader}>
        <div className={styles.chatDot} />
        <span>Conversational Form</span>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.messageBot}>
          <div className={styles.messageContent}>
            Hi! I'll help you submit a support request. What's the issue you're experiencing?
          </div>
        </div>
        <div className={styles.messageUser}>
          <div className={styles.messageContent}>
            I can't access my dashboard after the update
          </div>
        </div>
        <div className={styles.messageBot}>
          <div className={styles.messageContent}>
            I understand. When did you first notice this issue?
            <div className={styles.citationBadge}>
              <span className={styles.citationIcon}>📄</span>
              Based on KB-2341
            </div>
          </div>
        </div>
        <div className={styles.typingIndicator}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

function RAGVisualization() {
  return (
    <div className={styles.ragFlow}>
      <div className={styles.ragStep}>
        <div className={styles.ragIcon}>📄</div>
        <span className={styles.ragLabel}>Documents</span>
      </div>
      <div className={styles.ragArrow}>
        <svg viewBox="0 0 24 12" className={styles.arrowSvg}>
          <path d="M0 6 L20 6 M16 2 L20 6 L16 10" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className={styles.ragStep}>
        <div className={styles.ragIcon}>🧠</div>
        <span className={styles.ragLabel}>Embeddings</span>
      </div>
      <div className={styles.ragArrow}>
        <svg viewBox="0 0 24 12" className={styles.arrowSvg}>
          <path d="M0 6 L20 6 M16 2 L20 6 L16 10" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className={styles.ragStep}>
        <div className={styles.ragIcon}>🔍</div>
        <span className={styles.ragLabel}>Vector Search</span>
      </div>
      <div className={styles.ragArrow}>
        <svg viewBox="0 0 24 12" className={styles.arrowSvg}>
          <path d="M0 6 L20 6 M16 2 L20 6 L16 10" stroke="currentColor" fill="none" strokeWidth="2" />
        </svg>
      </div>
      <div className={styles.ragStep + ' ' + styles.ragStepFinal}>
        <div className={styles.ragIcon}>✨</div>
        <span className={styles.ragLabel}>AI Response</span>
      </div>
    </div>
  );
}

function AgentGrid() {
  return (
    <div className={styles.agentGrid}>
      {aiAgents.map((agent, idx) => (
        <div key={idx} className={styles.agentCard}>
          <span className={styles.agentIcon}>{agent.icon}</span>
          <span className={styles.agentName}>{agent.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function AIShowcase() {
  return (
    <section className={styles.aiShowcase}>
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>AI-Powered</span>
          <h2 className={styles.sectionTitle}>
            Intelligent Data Collection
          </h2>
          <p className={styles.sectionSubtitle}>
            RAG-powered conversational forms with citations, 15+ AI agents, and seamless MongoDB vector search integration.
          </p>
        </div>

        {/* Main showcase area */}
        <div className={styles.showcaseGrid}>
          {/* Left: Conversational demo */}
          <div className={styles.demoColumn}>
            <h3 className={styles.columnTitle}>Conversational Forms</h3>
            <p className={styles.columnDescription}>
              Transform static forms into natural conversations. Users interact through chat while structured data flows to MongoDB.
            </p>
            <ConversationalDemo />
          </div>

          {/* Right: Features list */}
          <div className={styles.featuresColumn}>
            <h3 className={styles.columnTitle}>RAG Integration</h3>
            <p className={styles.columnDescription}>
              Upload documents, create embeddings, and let AI provide context-aware responses with source citations.
            </p>
            <RAGVisualization />

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>Document upload & processing</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>MongoDB Atlas Vector Search</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>Source citations in responses</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>Multi-model support (GPT, Claude)</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Agents section */}
        <div className={styles.agentsSection}>
          <h3 className={styles.agentsSectionTitle}>15+ AI Agents</h3>
          <p className={styles.agentsSectionSubtitle}>
            Pre-built agents for common tasks—from form generation to compliance audits.
          </p>
          <AgentGrid />
        </div>

        {/* CTA */}
        <div className={styles.ctaArea}>
          <Link to="/docs/ai/overview" className={styles.learnMoreLink}>
            Explore AI Features →
          </Link>
        </div>
      </div>
    </section>
  );
}
