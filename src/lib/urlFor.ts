import sanityClient from '@/lib/client';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}