<script lang="ts">
    import type { PageData, ActionData } from './$types';
    // export let data;

</script>


  <div>
    <h1>Send Magic Link</h1>
    <form method="POST" action="?/login">
      <input type="email" id="username" name="username" required />
      <button type="submit">Send Magic Link</button>
    </form>

    <!-- <form method="POST" action="?/create">
        <input type="email" id="username" name="username" required />
        <button type="submit">Send Magic Link</button>
      </form> -->

  </div>