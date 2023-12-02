<script>
    import { Input, Modal } from "$lib/components";
    export let data;

    let deleteModalOpen;

    $: deleteModalOpen = false;
</script>

<div class="flex flex-col mt-8">
    <form action="?/update" id="update-recipe" method="POST" class="space-y-4">
        <input type="hidden" id="id" name="id" value={data.recipe.id} />
        <h3 class="text-2xl text-center">Update:</h3>
        <Input type="text" name="name" label="Name" value={data.recipe.name} />
        <div class="form-control">
            <label for="color" class="label font-medium pb-1">
                Color
            </label>
            <input type="color" id="color" name="color" value={data.recipe.color}>
        </div>
        <div class="form-control w-full max-w-md">
            <label for="ingredients" class="label font-medium pb-1">
                <span class="label-text">Ingredients</span>
            </label>
            <textarea
                name="ingredients"
                id="ingredients"
                class="textarea textarea-bordered h-24 w-full max-w-md"
                >{data.recipe.ingredients}</textarea
            >
        </div>
        <div class="form-control w-full max-w-md">
            <label for="instructions" class="label font-medium pb-1">
                <span class="label-text">Instructions</span>
            </label>
            <textarea
                name="instructions"
                id="instructions"
                class="textarea textarea-bordered h-24 w-full max-w-md"
                >{data.recipe.instructions}</textarea
            >
        </div>
        <div class="pt-8 flex flex-col space-y-4">
            <button type="submit" class="btn btn-warning">SAVE</button>
        </div>
    </form>
    <Modal label="delete-recipe" checked={deleteModalOpen}>
        <span slot="trigger" class="btn btn-ghost w-full mt-36">DELETE</span>
        <div slot="heading" class="flex flex-col space-y-4">
            <h3>Are you sure you want to delete '{data.recipe.name}'?</h3>
            <small>This action cannot be undone</small>
        </div>
        <form
            action="?/delete"
            method="POST"
            class="flex flex-col items-center"
        >
            <input type="hidden" id="id" name="id" value={data.recipe.id} />
            <button type="submit" class="btn btn-error w-full mt-4 md:max-w-sm"
                >DELETE</button
            >
        </form>
    </Modal>
</div>
