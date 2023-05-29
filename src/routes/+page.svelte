<h1>Welcome to SvelteKit</h1>
<script lang="ts">
    import { get, type Readable } from 'svelte/store';
    import { state } from '../state'
    
    import List from '../pages/List.svelte'
  
  
    function addStudent() {
    
      const newStudent = {
      id: $state.students.length + 1,
      name: 'Baker',
      score: '8900'
    };
  
    // Update the store with the new student
    state.update(students => {
      students.push(newStudent);
      return students;
    });
  }
    
  
      function callback(arg0: any) {
          throw new Error('Function not implemented.');
      }
  </script>
  
  <h2><strong>Reading the state</strong></h2>
  <pre>State without get: {JSON.stringify(state)}</pre>
  <pre>State with get: {JSON.stringify(get(state))}</pre>
  
  <hr />
  <h2><strong>Updating the state</strong></h2>
  
  <button on:click={addStudent}>
    Add
  </button>
  
  <ul>
    {#each $state.students as student}
      <li>#{student.id}: {student.name}</li>
    {/each}
  </ul>
  
  
  <List />