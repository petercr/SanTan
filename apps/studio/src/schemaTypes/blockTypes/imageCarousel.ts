import { ImagesIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const imageCarousel = defineType({
  name: 'imageCarousel',
  type: 'object',
  title: 'Bilde-karusell',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'images',
      title: 'Bilder',
      description: 'Legg til bilder for karusellen',
      type: 'array',
      of: [{ type: 'enrichedImage' }],
      validation: (Rule) => Rule.min(1).error('Karusellen må inneholde minst ett bilde.'),
    }),
    defineField({
      name: 'numberOfImagesToShow',
      title: 'Antall bilder å vise samtidig',
      description: 'Velg hvor mange bilder som skal vises samtidig i karusellen',
      type: 'number',
      initialValue: 1,
      validation: (Rule) => Rule.min(1).max(5).error('Karusellen må vise mellom ett og fem bilder.'),
    }),
  ],
});
