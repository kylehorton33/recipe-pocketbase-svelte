<script>
    import { Input, Modal } from "$lib/components";
    export let data;

    let deleteModalOpen;

    $: deleteModalOpen = false;

</script>

<div class="flex flex-col mt-8">
    <form action="?/update" id="update-recipe" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">Update:</h3>
        <Input type="text" name="name" label="Name" value={data.recipe.name} />
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
        <form action="?/delete" method="POST">
            <button type="submit" class="btn btn-error w-full">DELETE</button>
        </form>
    </Modal>
</div>