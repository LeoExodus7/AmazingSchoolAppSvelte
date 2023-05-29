
import { writable, type Writable } from 'svelte/store';

interface student {
  id:string,
  name: string,
  age: number,
  major: string,
  phone:string,
  email:string,
  score:number,
  registration_Date:string,
  active:string
}

const defaultStudents: {students: student[]} = {
  students: [
    { 
      id:'999',
      name: 'max', 
      age: 25, 
      major: 'Computer Science', 
      phone: '9098301022',
      email: 'abacus@gmail.com', 
      score: 12000,
      registration_Date:'10/13/2022',
      active: 'active'
    }
  ]
};

const defaultSortOptions = {
  sortOrder: 'asc',
};

const defaultFilterOptions = {
  name: '',
  score: '',
  email: '',
  age: '',
  registration_Date: '',
  status: '',
};

const defaultBrowser = {
    userAgent: '',
    screenWidth: 0,
    screenHeight: 0
}

const initialState  = {
    students: [{
      id:'800',
      name: 'John',
      age: 25,
      major: 'Computer Science',
      phone: '9098301022',
      email: 'abacus@gmail.com',
      score: 12000,
      registration_Date: '10/13/2022',
      active: 'active'
    }],

     sortOptions:{
          sortOrder:'asc',
     },
     filterOptions: {
          name: '',
          score: '',
          email: '',
          age: '',
          registration_Date: '',
          status: '',
   },
     browser: {
        userAgent: '',
        screenWidth: 0,
        screenHeight: 0
      }
  
}

// Store for info messages
export const infoStore = writable('');

// Store for error messages
export const errorStore = writable('');

// Store for success messages
export const successStore = writable('');

//get item state into local state. if there is no current state then use the state initializer
const localState = window.localStorage.getItem('state');

if (!localState) {
  window.localStorage.setItem('state', JSON.stringify(initialState));
}
//once state is set via local storage then assign this to variable appState. if localstate has values then parse it and return it as Json other wise use intialState.


const appState = localState ? JSON.parse(localState) : initialState;


// Store for sorting Options
export const sortOptions = writable<{
  sortOrder: string;
}>(initialState.sortOptions || defaultSortOptions);

// Store for students
export const students = writable<student[]>(initialState?.students || defaultStudents.students);
// export const students = writable<{
//   students:[object],
// }>(initialState.students || defaultStudents);

// Store for filter Choices
export const filterOptions = writable<{
  name: string;
  score: string;
  email: string;
  age: string;
  registration_Date: string;
  status: string;
}>(initialState.filterOptions || defaultFilterOptions);

// Store for browser information
export const browser = writable<{
  userAgent: string;
  screenWidth: number;
  screenHeight: number;
}>(initialState.browser || defaultBrowser);

export const state = writable(appState);

// Subscribe to stores and save state to local storage
[state].forEach((store) => {
  store.subscribe((value: state) => {
    const serializedState = JSON.stringify(value);
    window.localStorage.setItem('state', serializedState);
  });
});

// Define state interface
export interface state {
  students: Writable<typeof students>;
  sortOptions: Writable<typeof sortOptions>;
  filterOptions: Writable<typeof filterOptions>;
  browser: Writable<typeof browser>;
}

// export default state;

// Update function to update state
// export const update = (callback: (state: state) => Partial<state>) => {
//   const updatedState = callback(state);
//   Object.keys(updatedState).forEach((key) => {
//     (state as any)[key].set(updatedState[key]);
//   });
//   localStorage.setItem('state', JSON.stringify(state));
// };




// import { get, writable } from 'svelte/store';



// const defaultSortOptions ={
//     sortOrder:'asc'

//   }
// const defaultStudents = {
//    students: []
//   }
// const defaultFilterOptions = {
//   name: '',
//   score: '',
//   email: '',
//   age: '',
//   registration_Date:'',
//   status:'',

// }
// export function loadStateFromLocalStorage(){
//     const localState = localStorage.getItem('state');
// return localState ? JSON.parse(localState) : {};
// }

// // declare initial state 
// export const initialState = loadStateFromLocalStorage();


// // Store for info messages
// export const infoStore = writable('');
// // Store for error messages
// export const errorStore = writable('');
// // Store for success messages
// export const successStore = writable('');
// // Store for sorting Options
// export const sortOptions = writable({
//   sortOrder: ''
// });
// // Store for students
// export const students = writable([])
// // Store for filter Choices
// export const filterOptions = writable({
//   name: '',
//   score: '',
//   email: '',
//   age: '',
//   registration_Date:'',
//   status:'',
// });
// export const browser = writable({
//   userAgent: '',
//   screenWidth: 0,
//   screenHeight: 0
// });


// //define a type for filter options
// interface state: {
//   students: writable<never[]>;
//   sortOptions: writable<{
//       sortOrder: string;
//   }>;
//   filterOptions: writable<{
//       name: string;
//       score: string;
//       email: string;
//       age: string;
//       registration_Date: string;
//       status: string;
//   }>;
//   browser: writable<unknown>;
// }

// export type filter ={
//   name: string,
//   score: string,
//   email: string,
//   age: number,
//   registration_Date:string,
//   status:string,

// }


// //Initialize stores with initial state from local
// sortOptions.set(initialState.sortOptions || defaultSortOptions);
// students.set(initialState.students || defaultStudents);
// filterOptions.set(initialState.filterOptions || defaultFilterOptions);
// browser.set(initialState.browser || {});

// export const update = (callback: { (state: any): any; (arg0: any): any; }) => 
// {
// const updatedState = callback(get(state));

// state.update(() => updatedState);
// localStorage.setItem('state', JSON.stringify(updatedState));
// }


// let state: state = {
//   students: [],
//   sortOptions: [],
//   filterOptions: [],
//   browser: ''
// };
// //   students: students;
// //   sortOptions: [];
// //   filterOptions: [];
// //   browser: [];
// // };
// // Subscribe to stores and save state to local storage
//  [students, sortOptions, filterOptions, browser].forEach((store) => {
//   store.subscribe((value) => {
//     const state = {
//       students: students,
//       sortOptions: sortOptions,
//       filterOptions: filterOptions,
//       browser: browser
//     };
//     localStorage.setItem('state', JSON.stringify(state));
   
//   });

// });
// export { state };




// // export const update = callback => {
// //   const updatedState = callback(get(state));

// //   state.update(() => updatedState);
// //   localStorage.setItem('state', JSON.stringify(updatedState));
// // }
