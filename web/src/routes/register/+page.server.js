import { error, redirect } from "@sveltejs/kit"
import { generateUsername } from "$lib/utils"

export const actions = {
    register: async ({ locals, request }) => {

        let username = generateUsername();
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').create({ username, ...body })
        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }

        throw redirect(303, '/')
    }

}