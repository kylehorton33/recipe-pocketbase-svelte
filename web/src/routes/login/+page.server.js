import { error, redirect } from "@sveltejs/kit"

export const actions = {
    login: async ({ locals, request }) => {

        const body = Object.fromEntries(await request.formData())

        try {
            console.log(body)
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
            if (!locals.pb.authStore.model.verified) {
                locals.pb.authStore.clear()
                throw error(401, 'User account not verified')
            }

        } catch (err) {
            console.log(err)
            throw error(err.status, err.message)
        }

        throw redirect(303, '/')
    }

}