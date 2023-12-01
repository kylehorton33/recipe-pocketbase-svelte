<script>
    import { Input } from "$lib/components";
</script>

<div class="flex flex-col mt-8">
    <form action="?/create" id="create-recipe" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">New Recipe:</h3>
        <Input type="text" name="name" label="Name" />
        <div class="pt-8">
            <button form="create-recipe" type="submit" class="btn btn-success w-full">CREATE</button>
        </div>
    </form>
</div>
