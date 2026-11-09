import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { media } from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemaTypes';

export const projectId = 'bvwemm0b';
export const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'Feriekolonien',
  projectId,
  dataset,
  plugins: [structureTool(), media(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
