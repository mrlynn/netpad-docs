import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

export default function DocImage({ src, alt = '', caption, width, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  return (
    <>
      <figure className={`${styles.figure} ${className}`} style={width ? { maxWidth: width } : undefined}>
        <div className={styles.imageWrapper} onClick={openModal} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openModal()}>
          <img
            src={src}
            alt={alt}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay}>
            <svg className={styles.zoomIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
              <path d="M11 8v6M8 11h6" />
            </svg>
          </div>
        </div>
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </figure>

      {isOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <button className={styles.closeButton} onClick={closeModal} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className={styles.modalImage} />
            {(caption || alt) && (
              <p className={styles.modalCaption}>{caption || alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
