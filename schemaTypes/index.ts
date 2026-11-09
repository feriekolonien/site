import { album } from './documents/album';
import { author } from './documents/author';
import { category } from './documents/category';
import { post } from './documents/post';
import { albumGroup } from './objects/albumGroup';
import { complexPortableText } from './objects/complexPortableText';

export const schemaTypes = [
  // Documents
  album,
  post,
  author,
  category,
  // Objects
  albumGroup,
  complexPortableText,
];
