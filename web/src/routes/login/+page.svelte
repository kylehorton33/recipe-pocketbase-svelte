<script>
    import { Input } from "$lib/components";
</script>

<div class="flex flex-col mt-8">
    <form action="?/login" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">Login:</h3>
        <Input type="email" name="email" label="E-mail" />
        <Input type="password" name="password" label="Password" />
        <div class="pt-8">
            <button type="submit" class="btn btn-success w-full">LOGIN</button>
        </div>
    </form>
</div>
