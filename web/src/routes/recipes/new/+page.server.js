import { error, redirect } from "@sveltejs/kit"
import { convertToSlug } from "$lib/utils"

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw error(401, "Unauthorized");
    }
}

export const actions = {
    create: async ({ locals, request }) => {

        let recipe;

        const body = Object.fromEntries(await request.formData())
        const id = convertToSlug(body.name)
        const createdBy = locals.user.id

        try {
            console.log(id);
            recipe = await locals.pb.collection('recipes').create({ id, createdBy, ...body })
            console.log(recipe)
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }

        throw redirect(303, `/recipes/${recipe.id}`)
    }

}