import React from 'react';
import Services from '../src/components/Services/Services';
import ServiceTabs from '../src/components/Services/ServicesDetails/ServiceMenu';
import styles from '../styles/Services.module.css';

export default function services() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Els Nostres Serveis:</h1>
      <Services />
      <ServiceTabs />
    </main>
  );
}
