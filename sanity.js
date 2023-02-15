import sanityClinet from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClinet({
    projectId: "yrguwuth",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"


})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
    return builder.image(source)
}

export default client;