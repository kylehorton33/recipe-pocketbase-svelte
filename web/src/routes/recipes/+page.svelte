<script>
    import { MagnifyingGlass } from "$lib/icons";
    import { fly } from "svelte/transition";
    export let data;

    let searchTerm = "";
    let isSearchVisible;

    $: isSearchVisible = false;

    $: filteredRecipes = data.recipes.filter((recipe) => {
        return (
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
</script>

{#if isSearchVisible}
    <div
        aria-hidden="true"
        on:click={() => (isSearchVisible = false)}
        class="fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
        <div
            aria-hidden="true"
            on:click|stopPropagation
            transition:fly={{ duration: 300, y: 50 }}
            class="relative mx-5 w-[500px] rounded-md bg-white/20 outline outline-2 outline-white/40"
        >
            <div
                class="sticky inset-x-0 top-0 flex w-full items-center justify-between gap-2 border-b-[1.5px] border-b-white/40 bg-black/30 py-2 pl-3 pr-2"
            >
                <MagnifyingGlass cls="w-4 h-4" />
                <!-- svelte-ignore a11y-autofocus -->
                <input
                    bind:value={searchTerm}
                    autofocus
                    class="flex-1 bg-transparent py-2 placeholder:text-white/50 focus:outline-none"
                    type="text"
                    placeholder="Search recipes"
                />
            </div>
            {#if searchTerm}
                <div class="w-full p-3" transition:fly={{ duration: 150, y: 50 }}>
                    <p class="my-1 text-white/50">
                        {#if filteredRecipes.length === 0}
                            No recipes found.
                        {:else}
                            Found <span class="text-main"
                                >{filteredRecipes.length}</span
                            >
                            {filteredRecipes.length === 1
                                ? "recipe"
                                : "recipes"}
                        {/if}
                    </p>
                    <div class="hide-scrollbar overflow-y-scroll h-[300px]">
                        {#each filteredRecipes as { name, slug, ingredients }}
                            <a
                                href="/recipes/{slug}"
                                class="flex w-full items-center justify-between rounded-md bg-transparent p-3 transition hover:bg-white/5"
                            >
                                <div>
                                    <h3 class="text-start">
                                        {name}: <small>{ingredients}</small>
                                    </h3>
                                </div>
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}

<div class="flex flex-col space-y-4 items-center">
    <button
        on:click={() => {
            isSearchVisible = true;
        }}
        class="flex items-center justify-center gap-2 rounded-full bg-none p-2 text-white/50 outline outline-[1.5px] outline-white/10 transition hover:bg-white/10"
    >
        <MagnifyingGlass cls="w-4 h-4" />
    </button>
    <div class="grid lg:grid-cols-2 gap-2">
        {#each data.recipes as { name, slug, ingredients, color }}
            <div class="card shadow-xl max-w-md">
                <div class="card-body">
                    <h2 class="card-title capitalize">
                        <div class="avatar">
                            <div
                                style="background: {color} ;"
                                class="bg-neutral rounded-full w-4"
                            ></div>
                        </div>
                        {name}
                    </h2>
                    <p>
                        {ingredients}
                    </p>
                    <div class="card-actions justify-end">
                        <a href="/recipes/{slug}" class="btn btn-neutral"
                            >View</a
                        >
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
