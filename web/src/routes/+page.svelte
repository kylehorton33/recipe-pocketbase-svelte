<script>
    export let data;
</script>

<div class="flex flex-col w-full h-full space-y-4 items-center">
    <div class="mt-24">
        <h1 class="text-3xl">Welcome</h1>
    </div>
    {#if data.user}
        <div>
            <p>
                Logged in as: <span class="underline">{data.user.username}</span
                >
            </p>
        </div>
    {:else}
        <div class="flex space-x-2">
            <a href="/login" class="btn btn-primary w-24">Login</a>
            <a href="/register" class="btn btn-secondary w-24">Regsiter</a>
        </div>
    {/if}
</div>
