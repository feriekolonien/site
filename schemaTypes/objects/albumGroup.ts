import { FolderIcon } from '@sanity/icons/Folder';
import { defineArrayMember, defineField, defineType } from 'sanity';

// A named group of images inside an album, e.g. "1. parti".
export const albumGroup = defineType({
  name: 'albumGroup',
  title: 'Gruppe',
  type: 'object',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'F.eks. "1. parti"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
      options: { layout: 'grid' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
});
