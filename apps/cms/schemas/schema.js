// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

import album from './documents/album';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([album]),
});
