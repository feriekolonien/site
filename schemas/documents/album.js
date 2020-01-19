import { MdPhotoLibrary } from 'react-icons/md';

export default {
  name: 'album',
  type: 'document',
  icon: MdPhotoLibrary,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    { type: 'array', name: 'images', of: [{ type: 'image' }] },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare(selection) {
      const { title, images } = selection;

      return {
        title,
        media: images[0] || undefined,
      };
    },
  },
};
