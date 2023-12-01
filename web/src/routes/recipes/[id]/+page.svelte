<script>
    export let data;
    console.log(data)
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
    <footer class="pt-6 flex flex-col space-y-0">
        <small>Last Updated: {data.recipe.updated}</small>
        <small>By: {data.recipe.expand.createdBy.username}</small>
    </footer>
</div>

