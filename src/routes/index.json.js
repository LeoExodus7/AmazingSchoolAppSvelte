import { load } from 'js-yaml';

import { readFileSync } from 'fs';
const config = load(readFileSync('./config.yml', { encoding: 'utf8' }));
console.log('config:', config);

export const get = () => {
  return {
    body: {
      page: {
        component: '/src/routes/+page.svelte',
        // optionally pass any props your component needs here
        // props: {}
      }
    }
  };
}
