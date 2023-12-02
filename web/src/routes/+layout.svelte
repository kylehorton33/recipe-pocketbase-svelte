<script>
  import "../app.pcss";

  export let data;
</script>

<nav class="navbar bg-base-300 border-b">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">mise</a>
  </div>
  <div class="flex-none">
    <!-- TODO make this dropdown close when clicked outside -->
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn m-1">=</div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <ul
        tabindex="0"
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#if data.user}
          <li>
            <a href="/account">{data.user.username}</a>
          </li>
          <div class="divider px-2"></div>
          <form action="/logout" method="POST">
            <li>
              <button type="submit" class="w-full">Logout</button>
            </li>
          </form>
        {:else}
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        {/if}
      </ul>
    </div>
  </div>
</nav>

<div class="flex flex-col w-full h-full items-center p-4">
  <slot />
</div>
