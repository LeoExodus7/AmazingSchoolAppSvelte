<script lang="ts">
    export let student = null;
</script>

<header class="flex justify-between  items-center p-5">
    {#if student}
        Student name (age)
        {:else}
        <a href="public/svelte.svg" class="font-bold text-2xl gap-2">
          <img src="svelte.svg" alt="Svelte logo" />
          Students Dashboard
        </a>
      {/if}
  <div>
    {#if student}
    <div class="flex space-x-4">
        <button>Bulk Delete</button>
        <button>Add Student</button>
      </div>

    {:else}
        <div class="flex space-x-4">
            <button class="py-2 px-4 bg-blue-500 text-white rounded">Export Student</button>
            <button class="py-2 px-4 bg-blue-500 text-white rounded">Duplicate</button>
            <button class="py-2 px-4 bg-blue-500 text-white rounded">Back</button>
          </div>
    {/if}

  </div>
</header>


<style>
    @import 'flowbite/dist/flowbite.min.css'; 
</style>