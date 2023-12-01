<script>
    import { Input } from "$lib/components";
    export let data;

    const showModal = () => {
        alert('need to make modal to confirm delete')
    }
</script>

<div class="flex flex-col mt-8">
    <form action="?/update" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">Update:</h3>
        <Input type="text" name="name" label="Name" value={data.recipe.name} />
        <div class="pt-8 flex flex-col space-y-4">
            <button type="submit" class="btn btn-warning">SAVE</button>
            <button on:click|preventDefault={showModal} class="btn btn-error">DELETE</button>
        </div>
    </form>
</div>