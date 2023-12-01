import { randomBytes } from 'node:crypto';

export const generateUsername = () => {
    const id = randomBytes(2).toString('hex')
    return `user_${id}`
}

export const convertToSlug = (text) => {
    // collection id in PocketBase must be exactly 15 characters.
    //   use this method to generate a slug from the name with some
    //   extra characters attached to ensure length requirement is met
    const slug = text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    const buf = randomBytes(8).toString('hex')
    return `${slug}-${buf}`.slice(0, 15);
}