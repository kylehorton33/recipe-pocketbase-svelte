<script>
    export let name;
    export let label;
    export let placeholder = "";
</script>

<div class="form-control w-full max-w-md">
    <label for={name} class="label font-medium pb-1">
        <span class="label-text">{label}</span>
    </label>
    <textarea
        {name}
        id={name}
        {placeholder}
        class="textarea textarea-bordered h-24 w-full max-w-md"
    />
</div>
