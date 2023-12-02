<script>
    export let data;
    console.log(data.recipes)
</script>

<div class="flex flex-col space-y-4">
    <h1 class="text-xl">Choose from {data.recipes.length} recipes:</h1>
    <div class="grid md:grid-cols-2 gap-2">
        {#each data.recipes as { name, slug, ingredients }}
            <div class="card shadow-xl">
                <div class="card-body">
                    <h2 class="card-title capitalize">{name}</h2>
                    <p>
                        {ingredients}
                    </p>
                    <div class="card-actions justify-end">
                        <a href="/recipes/{slug}" class="btn btn-neutral">View</a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {#if data.user}
        <div class="pt-4 flex flex-col items-center">
            <a href="/recipes/new" class="btn btn-primary w-full md:max-w-md"
                >Create a new recipe</a
            >
        </div>
    {/if}
</div>
