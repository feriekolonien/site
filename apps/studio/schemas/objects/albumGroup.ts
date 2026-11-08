import { RiGalleryLine } from 'react-icons/ri';

// A named group of images inside an album, e.g. "1. parti".
const albumGroup = {
  name: 'albumGroup',
  title: 'Gruppe',
  type: 'object',
  icon: RiGalleryLine,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'F.eks. "1. parti"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [{ type: 'image' }],
      options: { layout: 'grid' },
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
      media: 'images.0',
    },
    prepare({ title, images, media }: any) {
      const count = Array.isArray(images) ? images.length : 0;
      return {
        title,
        subtitle: `${count} bilder`,
        media,
      };
    },
  },
};

export default albumGroup;
