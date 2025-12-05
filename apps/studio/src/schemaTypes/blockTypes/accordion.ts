import { ExpandIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const accordion = defineType({
  name: 'accordion',
  type: 'object',
  title: 'Akkordion',
  icon: ExpandIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      title: 'Innhold',
      description: 'Innholdet i akkordionen',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Tittel' }),
            defineField({ name: 'accordionContent', type: 'array', title: 'Innhold', of: [{ type: 'block' }] }),
          ],
        },
      ],
    }),
  ],
});
