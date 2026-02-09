import { defineType, defineField } from 'sanity';
import { BlockContentIcon } from '@sanity/icons';

export const splitImageType = defineType({
  name: 'splitImage',
  title: 'Split Image',
  type: 'object',
  fields: [
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: [{title: 'Image Left', value: 'imageLeft'}, {title: 'Image Right', value: 'imageRight'}],
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
        title: "title",
        media: "image",
    },
    prepare({ title, media }) {
        return {
            title,
            subtitle: "Text and Image",
            media: media ?? BlockContentIcon,
      };
    }
  }
});