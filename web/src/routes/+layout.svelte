<script>
  import "../app.pcss";

  export let data;
</script>

<nav class="navbar bg-base-300 border-b">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">mise</a>
  </div>
  <div class="flex-none">
    <details class="dropdown dropdown-end">
      <summary class="m-1 btn">=</summary>
      <ul
        class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32"
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
    </details>
  </div>
</nav>

<div class="flex flex-col w-full h-full items-center p-4">
  <slot />
</div>
