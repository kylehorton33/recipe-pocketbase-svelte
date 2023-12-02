<script>
    export let data;
</script>

<div class="flex flex-col space-y-4 h-full md:max-w-md">
    <h1 class="text-2xl w-full text-center"><div class="avatar mr-2">
        <div
            style="background: {data.recipe.color} ;"
            class="bg-neutral rounded-full w-4"
        ></div>
    </div>{data.recipe.name}</h1>
    <div class="w-full pl-4">
        <ul class="space-y-1 list-disc list-inside">
            {#if data.recipe.ingredients}
                {#each data.recipe.ingredients.split(', ') as line}
                    <li>{line}</li>
                {/each}
            {:else}
                <li>No ingredients save</li>
            {/if}
        </ul>
    </div>
    <p class="pl-4">
        {data.recipe.instructions}
    </p>
    {#if data.user}
        <div class="pt-6 space-y-4">
            <a
                href="/recipes/{data.recipe.slug}/edit"
                class="btn btn-neutral w-full">Update</a
            >
            <footer class="flex flex-col space-y-0">
                <small>Last Updated: {data.recipe.updated}</small>
                <small>By: {data.recipe.expand.createdBy.username}</small>
            </footer>
        </div>
    {/if}
</div>
