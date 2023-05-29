<script lang="ts">
	import ModeSwitcher from './ModeSwitcher.svelte';
	import Tailwindcss from './Tailwindcss.svelte';
	import { get, type Readable } from 'svelte/store';
    import { state } from './state';
  	import List from './pages/List.svelte'
    

  function addStudent() {
  
    const newStudent = {
      id:'777',
      name: 'weebly',
      age: 25,
      major: 'Computer Science',
      phone: '9098301022',
      email: 'abacus@gmail.com',
      score: 800,
      registration_Date: '10/13/2022',
      active: 'active'
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
<style>
</style>
<Tailwindcss />
<ModeSwitcher />

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