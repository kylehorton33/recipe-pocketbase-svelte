<script>
    export let data;
</script>

<div class="flex flex-col space-y-4 h-full">
    <h1 class="text-2xl w-full text-center">{data.recipe.name}</h1>
    <div class="w-full pl-4">
        <ul class="space-y-1 list-disc list-inside">
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ul>
    </div>
    <p class="pl-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt
        exercitationem impedit corporis ab eligendi assumenda placeat fugiat vel
        itaque, aspernatur dicta velit aliquid quis! Vitae commodi tenetur
        itaque at.
    </p>
    {#if data.user}
        <div class="pt-6 space-y-4">
            <a href="/recipes/{data.recipe.id}/edit" class="btn btn-neutral w-full"
                >Update</a
            >
            <footer class="flex flex-col space-y-0">
                <small>Last Updated: {data.recipe.updated}</small>
                <small>By: {data.recipe.expand.createdBy.username}</small>
            </footer>
        </div>
    {/if}
</div>
