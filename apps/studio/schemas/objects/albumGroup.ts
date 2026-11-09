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
    // Don't select the whole `images` array here: the studio then resolves
    // every image asset in a single request, which fails for large groups.
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
};

export default albumGroup;
