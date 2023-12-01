import { error } from '@sveltejs/kit'

export async function load({ locals, params }) {
    try {
        let recipe;
        if (locals.user) {
            recipe = await locals.pb.collection('recipes').getFirstListItem(`slug="${params.slug}"`, { expand: 'createdBy'});
        } else {
            recipe = await locals.pb.collection('recipes').getFirstListItem(`slug="${params.slug}"`);
        }
        return { recipe }
    } catch (err) {
        console.log(err)
        throw error(err.status, err.message)
    }

}