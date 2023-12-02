<script>
    export let type = "text";
    export let name;
    export let label;
    export let value = "";
    export let placeholder = "";
</script>

<div class="form-control w-full max-w-md">
    <label for={name} class="label font-medium pb-1">
        <span class="label-text">{label}</span>
    </label>
    <input
        {type}
        {name}
        id={name}
        {value}
        {placeholder}
        class="input input-bordered w-full max-w-md"
    />
</div>
