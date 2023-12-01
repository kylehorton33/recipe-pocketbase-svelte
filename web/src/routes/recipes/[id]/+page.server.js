import { error } from '@sveltejs/kit'

export async function load({ locals, params }) {
    try {
        const recipe = await locals.pb.collection('recipes').getOne(params.id, { expand: 'createdBy'});
        return { recipe }
    } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
    }

}