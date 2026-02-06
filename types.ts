
import React from 'react';

export interface Probe {
  id: string;
  name: string;
  core: string;
  sequence: string;
  target: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  // Use React.ReactNode which requires importing React
  icon: React.ReactNode;
}