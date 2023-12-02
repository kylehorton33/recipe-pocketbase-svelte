<script>
    import { Input, Modal } from "$lib/components";
    export let data, form;

    let usernameModalOpen;

    $: usernameModalOpen = false;
</script>

<h1 class="text-2xl">{data.user.username}</h1>
<h3 class="text-lg">Account Settings</h3>

<ul class="mt-8 list-disc text-sm">
    <li>Email: {data.user.email}</li>
    <li>User Since: {data.user.created}</li>
</ul>

<Modal label="change-username" checked={usernameModalOpen}>
    <span slot="trigger" class="btn btn-primary mt-8">Change Username</span>
    <h3 slot="heading">Change Your Username</h3>
    <form action="?/updateUsername" method="POST" class="space-y-2">
        <Input
            type="text"
            name="username"
            label="Enter your new username:"
            value={form?.data?.username}
        />
        <button type="submit" class="btn btn-success w-full md:max-w-md">Save</button>
    </form>
</Modal>
