import { ImageIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const enrichedImage = defineType({
  name: 'enrichedImage',
  title: 'Beriket bilde',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Bilde',
      description: 'Selve bildet',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (R) => R.required().error('Et bilde må velges.'),
    }),
    defineField({
      name: 'caption',
      title: 'Bilde-tekst',
      type: 'string',
      description: 'Bildeteksten vises som regel under bildet',
      validation: (R) => R.required().error('Bildetekst er et påkrevd felt.'),
    }),
    defineField({
      name: 'altText',
      title: 'Alt-tekst',
      type: 'string',
      description: 'En kort beskrivelse av bildet for tilgjengelighet (alt-tekst)',
      validation: (R) => R.required().error('Alt-tekst er et påkrevd felt.'),
    }),
    defineField({
      name: 'credits',
      title: 'Fotograf',
      type: 'reference',
      to: [{ type: 'person' }],
      description: 'Velg fotografen som tok bildet',
      validation: (R) => R.required().error('Fotograf er et påkrevd felt.'),
    }),
  ],
});
