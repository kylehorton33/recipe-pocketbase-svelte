import { error, redirect } from "@sveltejs/kit";

export const load = async ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw error(401, "Unauthorized");
  }
  try {
    const recipe = structuredClone(
      await locals.pb.collection("recipes").getFirstListItem(`slug="${params.slug}"`)
    );

    if (locals.user.id === recipe.createdBy) {
      return {
        recipe,
      };
    } else {
      throw error(403, "Forbidden");
    }
  } catch (err) {
    console.log(err);
    throw error(err.status, err.message);
  }
};

export const actions = {
  update: async ({ request, locals, params }) => {
    const formData = await request.formData();
    const id = formData.get('id')

    try {
      await locals.pb.collection("recipes").update(id, formData);
    } catch (err) {
      console.log(err);
      throw error(err.status, err.message);
    }

    throw redirect(302, `/recipes/${params.slug}`);
  },
  delete: async ({ locals, request }) => {
    const formData = await request.formData();
    const id = formData.get('id')

    try {
      await locals.pb.collection('recipes').delete(id);
    } catch (err) {
      console.log(err);
      throw error(err.status, err.message);
    }

    throw redirect(302, '/recipes');
  },
};
