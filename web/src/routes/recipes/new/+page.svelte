<script>
    import { Input, TextArea } from "$lib/components";
</script>

<div class="flex flex-col mt-8">
    <form action="?/create" id="create-recipe" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">New Recipe:</h3>
        <Input type="text" name="name" label="Name" />
        <TextArea name="ingredients" label="Ingredients" placeholder="e.g. 1.5 oz gin, 1 oz lemon..." />
        <TextArea name="instructions" label="Instructions" placeholder="e.g. Add all ingredients and shake..." />
        <div class="pt-8">
            <button form="create-recipe" type="submit" class="btn btn-success w-full">CREATE</button>
        </div>
    </form>
</div>
