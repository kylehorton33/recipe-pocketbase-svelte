import { error } from '@sveltejs/kit'

export const actions = {
    updateUsername: async ({ request, locals }) => {
        const formData = await request.formData();

        try {
            console.log(formData)
            const { username } = await locals.pb.collection('users').update(locals?.user?.id, formData);
            locals.user.username = username;
        } catch (err) {
            console.log(err);
            throw error(err.status, err.message);
        }
    },
};
