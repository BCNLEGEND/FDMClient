import React from 'react';
import Services from '../src/components/Services/Services';
import VerticalTabs from '../src/components/Services/ServicesDetails/ServiceMenu';

export default function services() {
  return (
    <main>
      <Services />
      <VerticalTabs />
    </main>
  );
}
