import { randomBytes } from 'node:crypto';

export const generateUsername = () => {
    const id = randomBytes(2).toString('hex')
    return `user_${id}`
}