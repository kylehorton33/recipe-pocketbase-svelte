import { error } from '@sveltejs/kit'

export async function load({ locals, params }) {
    try {
        let recipe;
        if (locals.user) {
            recipe = await locals.pb.collection('recipes').getOne(params.id, { expand: 'createdBy'});
        } else {
            recipe = await locals.pb.collection('recipes').getOne(params.id);
        }
        return { recipe }
    } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
    }

}