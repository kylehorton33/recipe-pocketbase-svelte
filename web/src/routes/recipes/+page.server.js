import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    try {
        const recipes = await locals.pb.collection('recipes').getFullList()
        return {
            recipes
        }
    } catch (err) {
        console.log(err)
        throw errror(err.status, err.message)
    }
}