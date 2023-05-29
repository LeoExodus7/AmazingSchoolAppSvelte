<script>
    import { state } from '../state'
    import { sort } from '../utils'
  
    // TODO - pass the correct value to sortedStudents
    // and update the #each loop with the variable
    let sortedStudents = '???';
  
    const toggle = (id) => {
      $state.students = $state.students.map(student => {
        if (student.id === id) {
          student.toggled = !student.toggled;
        }
  
        return student;
      });
    }
  </script>
  
  <table class="w-full">
    <thead class="bg-light text-left text-grey">
      <tr>
        <th></th>
        <th>Student</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Score</th>
        <th>Age</th>
        <th>Registration Date</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
      {#each $state.students as student}
        <tr class={student.toggled ? 'bg-accent/10' : ''}>
          <td>
            <input
              type="checkbox"
              checked={student.toggled}
              on:click={() => toggle(student.id)}
            />
          </td>
          <td>{student.name}</td>
          <td>{student.phone}</td>
          <td>
            <a href={`mailto:${student.email}`} class="text-primary underline">
              {student.email}
            </a>
          </td>
          <td>{student.score}</td>
          <td>{student.age}</td>
          <td>{student.registered}</td>
          <td>{student.isActive ? '✅' : '❌'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  <style>
    th,
    td {
      @apply py-2 px-5 border border-grey;
    }
  
    th:first-child,
    td:first-child {
      @apply border-l-0;
    }
  
    th:last-child,
    td:last-child {
      @apply border-r-0;
    }
  </style>
  