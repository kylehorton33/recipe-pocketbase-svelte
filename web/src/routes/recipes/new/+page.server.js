import { error, redirect } from "@sveltejs/kit"
import { convertToSlug } from "$lib/utils"

export const actions = {
    create: async ({ locals, request }) => {

        let recipe;

        const body = Object.fromEntries(await request.formData())
        const slug = convertToSlug(body.name)
        const createdBy = locals.user.id

        try {
            recipe = await locals.pb.collection('recipes').create({ createdBy, slug, ...body })
            console.log(recipe)
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }

        throw redirect(303, `/recipes/${recipe.slug}`)
    }

}