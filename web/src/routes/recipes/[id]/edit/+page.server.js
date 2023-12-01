import { error, redirect } from "@sveltejs/kit";

export const load = async ({ locals, params }) => {
  if (!locals.pb.authStore.isValid) {
    throw error(401, "Unauthorized");
  }
  try {
    const recipe = structuredClone(
      await locals.pb.collection("recipes").getOne(params.id)
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

    // const thumbnail = formData.get("thumbnail");

    // if (thumbnail.size === 0) { formData.delete("thumbnail");  }

    try {
      await locals.pb.collection("recipes").update(params.id, formData);
    } catch (err) {
      console.log(err);
      throw error(err.status, err.message);
    }

    throw redirect(302, `/recipes/${params.id}`);
  },
  delete: async ({ locals, params }) => {
    try {
      await locals.pb.collection('recipes').delete(params.id);
    } catch (err) {
      console.log(err);
      throw error(err.status, err.message);
    }

    throw redirect(302, '/recipes');
  },
};
