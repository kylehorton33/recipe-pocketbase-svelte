<script>
    import { Input, Modal } from "$lib/components";
    import {Trash} from '$lib/icons';
    export let data;

    let deleteModalOpen;

    $: deleteModalOpen = false;
</script>

<Modal label="delete-recipe" checked={deleteModalOpen}>
    <div slot="trigger">
        <div class="relative w-screen">
            <div class="absolute right-2">
                <span class="btn btn-ghost">
                    <Trash cls="h-4 w-4" />
                </span>
            </div>
        </div>
        
    </div>
    <div slot="heading" class="flex flex-col space-y-4">
        <h3>Are you sure you want to delete '{data.recipe.name}'?</h3>
        <small>This action cannot be undone</small>
    </div>
    <form action="?/delete" method="POST" class="flex flex-col items-center">
        <input type="hidden" id="id" name="id" value={data.recipe.id} />
        <button type="submit" class="btn btn-error w-full mt-4 md:max-w-sm"
            >DELETE</button
        >
    </form>
</Modal>

<div class="flex flex-col mt-2">
    <form action="?/update" id="update-recipe" method="POST" class="space-y-2">
        <input type="hidden" id="id" name="id" value={data.recipe.id} />
        <h3 class="text-2xl text-center">Update:</h3>
        <div class="flex space-x-2">
            <div class="form-control">
                <label for="color" class="label font-medium pb-1">
                    <span class="label-text">Color</span>
                </label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={data.recipe.color}
                />
            </div>
            <Input
                type="text"
                name="name"
                label="Name"
                value={data.recipe.name}
            />
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
</div>
