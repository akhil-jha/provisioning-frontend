export const PF_SUCCESS_100 = '#3E8635';
export const PF_DANGER_100 = '#C9190B';

export const POLLING_BACKOFF_INTERVAL = [
  500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 3000, 4000, 5000, 10000, 15000, 20000, 25000, 30000,
];

export const AWS_STEPS = [
  { name: 'Create reservation', description: `Submit requested data` },
  {
    name: 'Transfer keys',
    description: 'Uploading public key to AWS',
  },
  { name: 'Launch instance(s)', description: 'Call AWS API for launching instance(s)' },
];

export const GCP_STEPS = [
  { name: 'Create reservation', description: `Submit requested data` },
  { name: 'Launch instance(s)', description: 'Call Google API' },
];

export const SSH_STEP = [{ name: 'New SSH key', description: 'Creating new SSH public key resource' }];