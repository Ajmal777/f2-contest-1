/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {

  const resultantArr = arr.map( (obj) =>{
    if(obj.profession === 'developer'){
      console.log(obj.name);
      return obj.name;
    }
    else return;
  }) ;
  // console.log(resultantArr);   //uncomment the line to print the array of employee names with profession 'developer'
}

function PrintDeveloperbyForEach() {

  arr.forEach( (obj) => {
    if(obj.profession === 'developer')
      console.log(obj.name); 
  }) ;

}

function addData() {

  const newData = { id: 4, name: "susan", age: "20", profession: "intern" } ;
  arr.push(newData);

  console.log(arr);         //console logging the entire array after updating it with a new entry

  // console.log(arr[arr.length-1].name);     //console logging only the newly pushed object

}

function removeAdmin() {

  // Using filter, and updating the original array by filtering out all admin objects

  arr = arr.filter( (obj) =>{
    if(obj.profession !== 'admin')
      return obj;
  }); 


  //Using for in loop with delete keyword to delete all admin objects at ith index of the array

  // for(const i in arr){
  //   if(arr[i].profession === 'admin'){
  //     delete arr[i];
  //   }
  // }

  console.log(arr);

}

function concatenateArray() {

  const newDataArray = [
    { id: 5, name: "peanut", age: "21", profession: "intern" },
    { id: 6, name: "cashewnut", age: "27", profession: "HR" },
    { id: 7, name: "coconut", age: "45", profession: "CEO" },
  ];

  const newArray =  arr.concat(newDataArray);   //concatenating the original array with newDataArray and storing it in a newArray

  // arr = arr.concat(newDataArray);      //cocatenating and updating the original array by new concatenated values;

  console.log(newArray);

}
