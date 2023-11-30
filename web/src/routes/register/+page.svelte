<script>
    import { Input } from "$lib/components";
</script>

<div class="flex flex-col mt-8">
    <form action="?/register" method="POST" class="space-y-4">
        <h3 class="text-2xl text-center">Register:</h3>
        <Input type="email" name="email" label="E-mail" />
        <Input type="password" name="password" label="Password" />
        <Input
            type="password"
            name="passwordConfirm"
            label="Confirm Password"
        />
        <div class="pt-8">
            <button type="submit" class="btn btn-success w-full"
                >REGISTER</button
            >
        </div>
    </form>
</div>
