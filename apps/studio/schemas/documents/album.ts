import { MdPhotoLibrary } from 'react-icons/md';

const album = {
  name: 'album',
  type: 'document',
  icon: MdPhotoLibrary,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      type: 'image',
    },
    { type: 'array', name: 'images', of: [{ type: 'image' }] },
  ],
  preview: {
    select: {
      title: 'title',
      coverImage: 'coverImage',
    },
    prepare(selection) {
      const { title, coverImage } = selection;

      return {
        title,
        media: coverImage || undefined,
      };
    },
  },
};

export default album;
