import React from 'react';
import Services from '../src/components/Services/Services';
import ServiceTabs from '../src/components/Services/ServicesDetails/ServiceMenu';

export default function services() {
  return (
    <main>
      <Services />
      <ServiceTabs />
    </main>
  );
}
