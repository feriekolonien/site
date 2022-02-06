import { RiCamera3Line } from 'react-icons/ri';

const album = {
  name: 'album',
  type: 'document',
  icon: RiCamera3Line,
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
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
    prepare(selection: any) {
      const { title, coverImage } = selection;

      return {
        title,
        media: coverImage || undefined,
      };
    },
  },
};

export default album;
