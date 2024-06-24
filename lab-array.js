////////////How to Create an Array in JavaScript////////////
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

///// or you can use array()
// let nobleGases = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');

// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

///////////Array Indexing///////////////////
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[0]; // 'He'
// nobleGases[1]; // 'Ne'
// nobleGases[2]; // 'Ar'
// nobleGases[3]; // 'Kr'
// nobleGases[4]; // 'Xn'
// nobleGases[5]; // undefined

/////JavaScript arrays are not fixed in size; see this example. 
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[5] = 'Rn';
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

////////////How to Use the length Property///////////
////nobleGases.length; 

////////////Multidimensional Arrays//////////////////
// let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
// console.log(elements[0]);  [['H', 'Li', 'Na'], ['Be', 'Mg']]

// console.log(elements[0][0]);  ['H', 'Li', 'Na']

// console.log(elements[0][0][0]);  'H'

////////////Sparse Arrays///////////////////
// let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']
// // Increasing the length property
// firstGroup.length = 11;
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

// // Assigning an element to an index greater than the length
// firstGroup[15] = 'Fr';
// console.log(firstGroup);
// // ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']

//////////////How to Compare Arrays in JavaScript///////////
// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = ['flour', 'water', 'yeast', 'salt'];

// dough1 === dough2; // false

//////// if this comparison evaluate to true 
// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = dough1;

// dough1 === dough2; // true

//////for loop and some conditional statements: if the two arrays are equal.
// const compareArr = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     } 
//     for (let i = 0; i < arr1.length; i++) {
//     	if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true
// };

/////////////The Spread Operator vs the Rest Parameter////////////////////

////////How to Use the Spread Operator
// let alkali = ['Li', 'Na', 'K'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// // Merging two arrays with the spread operator
// let metals = [...alkali, ...alkEarth];
// console.log(metals); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// // Copying an array with the spread operator
// let metalsCopy = [...metals];
// console.log(metalsCopy); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

// //How to Use the Rest Parameter
// function f1(first, second, third, ...others) {
// 	console.log(first);
//     console.log(second);
//     console.log(third);
//     console.log(others);
// };

// f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); 

//////Examples with the args arrays
// function f2(...args) {
// 	console.log(args);
//     // you can use an iterative method on the args array
// };

// f2('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn');


///////////////Destructuring Assignment////////////

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// let [firstRow, secondRow,,FourthRow] = nobleGases;
// console.log(firstRow); // 'He'
// console.log(secondRow); // 'Ne'
// console.log(FourthRow); // 'Kr'
// // 'Ar' is skipped because of the additional comma

////////////Common Array Methods in JS////////////////////
///////How to Add and Remove Elements from an Array
////How to Use the push() Method
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[5] = 'Rn';
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

////anothe example of push
// Syntax
// array.push(element1, /* … ,*/ elementN)

/////element will be added at the end of the array,
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases.push('Rn'); // 6

// // push() returns the length of the modified array
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
/////let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases.push('Rn'); // 6
// // push() returns the length of the modified array
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

//////multiple elements with push(), indicating their values separated by a comma:
// let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// halogens.push('Br', 'I', 'At'); // 5
// // push() returns the length of the modified array
// console.log(halogens); // ['F', 'Cl', 'Br', 'I', 'At']

////////How to Use the unshift() Method
// Syntax
// array.unshift(element1, /* … ,*/ elementN)
////example
// let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// halogens.unshift('Br', 'I', 'At'); // 5
// // unshift() returns the length of the modified array
// console.log(halogens); // ['Br', 'I', 'At', 'F', 'Cl']

////let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// halogens.unshift('Br', 'I', 'At'); // 5
// // unshift() returns the length of the modified array
// console.log(halogens); // ['Br', 'I', 'At', 'F', 'Cl']

///////////////How to Use the pop() Method:remove the last element of an array, It removes only the last element and returns it.// Syntax
// array.pop()
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.pop(); // 'Rn'
// // pop() returns the removed element
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

/////How to Use the shift() Method: Syntax array.shift() and here's an example:
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.shift(); // 'He'
// // shift() returns the removed element
// console.log(nobleGases); // ['Ne', 'Ar', 'Kr', 'Xn', 'Rn']

/////How to Use the splice() Method:  Syntax array.splice(start, count)
///The first parameter of splice() is the starting index, while the second is the number of items to remove from the array.
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// nobleGases.splice(1, 3); // ['Ne', 'Ar', 'Kr']
/////// splice() returns an array with removed elements
// console.log(nobleGases); // ['He', 'Xn', 'Rn']
///////If you specify additional arguments – after the starting index and the number of elements to remove – those will be inserted in the indicated position. For example:
// let nobleGases = ['He', 'Ne', 'Cl', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Cl', 'Rn']

// nobleGases.splice(2, 1, 'Ar', 'Kr', 'Xn'); // ['Cl']
// // splice() returns an array with removed elements
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
////////If you don't need to remove any elements from the array, you can simply use zero as the second argument.
//////// The elements will be added starting at the specified index, without removing any item:
// let nobleGases = ['He', 'Ne', 'Rn'];
// console.log(nobleGases); // ['He', 'Ne', 'Rn']

// nobleGases.splice(2, 0, 'Ar', 'Kr', 'Xn'); // []
// // splice() returns an array with removed elements
// console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

/////////////////How to Combine Arrays//////////////////////////////
////////How to Combine Arrays: Syntax  array1.concat(array2, /* … ,*/ arrayN)
// let alkali = ['Li', 'Na', 'K'];
// let moreAlkali = ['Rb', 'Cs', 'Fr'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// alkali.concat(moreAlkali);
// // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

// alkali.concat(moreAlkali, alkEarth);
// // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']

////////////let alkali = ['Li', 'Na', 'K'];


//////How to Use the push() Method & the Spread Operator
// let alkali = ['Li', 'Na', 'K'];
// let moreAlkali = ['Rb', 'Cs', 'Fr'];
// let alkEarth = ['Be', 'Mg', 'Ca'];

// alkali.push(...moreAlkali); // 6
// console.log(alkali); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

//////Anotger example
// let metals = [...alkali, ...alkEarth];
// console.log(metals); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']
// console.log(alkali); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

///////How to Convert an Array into a String//////////////////
//////How to Use the toString() & join() Methods: Syntax array.toString()  and Syntax array.join(separator)
// let animals = ['pig', 'dog', 'sheep'];

// animals.toString(); // 'pig,dog,sheep'

// animals.join(', '); // 'pig, dog, sheep'

// animals.join(' '); // 'pig dog sheep'

// animals.join(' * '); // 'pig * dog * sheep'

/////////How to Use the JSON.stringify() Method:  JSON.stringify(array)
// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];

// JSON.stringify(albums);
// //'[{"artist":"Frank Zappa","title":"Apostrophe","year":1974},{"artist":"Frank Zappa","title":"One Size Fits All","year":1975}]'

///////////////////How to Compare Arrays///////////////////////////
/////This is quite fast and easy, but sometimes it can lead to unexpected behavior.
///// For example, when null and undefined values are compared.
// let a = [1, null, 3];
// let b = [1, undefined, 3];

// a[1] === b[1]; // false

// JSON.stringify(a) === JSON.stringify(b); // true

///////////How to Use the every() Method/:  array.every((element, index, array) => {}) ///////////////////////
// const compareEvery = (arr1, arr2) => {
//     return arr1.length === arr2.length &&
//     arr1.every((elem, index) => elem === arr2[index])
// }

////// The AND operator ensures that true is returned only when both conditions are true.

// // Here's the function applied to the arrays from before:

// let a = [1, null, 3];
// let b = [1, undefined, 3];

// compareEvery(a,b); // false


//////////////////How to Copy an Array////////////////////
///////All common operations to copy an array in JavaScript generate a shallow copy 
///////How to Use the slice() Method:  allows you to copy an entire array – or just a portion of it – without mutating it.
// let dough = ['flour', 'water', 'yeast', 'salt'];

// let doughCopy = dough.slice();
// console.log(doughCopy); // ['flour', 'water', 'yeast', 'salt']

//////////////////How to Use the map() Method/: array.map((element, index, array) => {})  //////////////////
// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let mapAlbums = albums.map(element => element);
// console.log(mapAlbums);How to Create a Deep Copy
// // [
// //  {artist: 'Frank Zappa', title: 'Apostrophe'},
// //  {artist: 'Frank Zappa', title: 'One Size Fits All'}
// // ];

/////////How to Create a Deep :  Copy JSON.stringify()  and return JSON.parse()  ///////////
// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let albumsCopy = JSON.parse(JSON.stringify(albums));
// console.log(albumsCopy);
// // [
// //  {artist: 'Frank Zappa', title: 'Apostrophe'},
// //  {artist: 'Frank Zappa', title: 'One Size Fits All'}
// // ];

//////////////////How to Search Inside an Array/////////////////////////////
//////How to Use the includes() Method:   array.includes(value, startingIndex)
// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

// dMinor.includes('E'); // true
// dMinor.includes('E', 2); // false
// /////////How to Use the indexOf() Method :array.indexOf(value, startingIndex)
// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];

// dMinor.indexOf('E'); // 1
// dMinor.indexOf('E', 2); // -1


////////////////How to Use the find() & findLast() Methods//////////////////////////
// array.find((element, index, array) => {})

// array.findLast((element, index, array) => {})

// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// animals.find(el => el['track'].includes('Pigs'));
// // {no: 1, track: 'Pigs on the Wing (Part One)'}

// animals.findLast(el => el['track'].includes('Pigs'));
// // {no: 5, track: 'Pigs on the Wing (Part Two)'}

// animals.find(el => el['track'].includes('Horses'));
// // undefined

///////////////How to Use the findIndex() & findLastIndex() Methods/////////////////////
// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// animals.findIndex(el => el['track'].includes('Pigs')); // 0

// animals.findLastIndex(el => el['track'].includes('Pigs')); // 4

// animals.findIndex(el => el['track'].includes('Horses')); // -1

//////////////////////How to Check if Array Elements Meet a Condition/////////////////////
/////How to Use the every() & some() Methods
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

// nobleGases.every(el => typeof el == 'string'); // true

// nobleGases.some(el => el == 'Ar'); // true

// nobleGases.some(el => el == 'Rn'); // false

///////////How to Use the filter() Method/////////////////////
// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// animals.filter(el => el['track'].includes('Pigs'));
// // [
// // {no: 1, track: 'Pigs on the Wing (Part One)'},
// // {no: 3, track: 'Pigs (Three Different Ones)'},
// // {no: 5, track: 'Pigs on the Wing (Part Two)'}
// // ]

//////////////How to Sort an Array///////////////////////
//////////How to Use the sort() Method
// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];

// // sorting in ascending order
// nobleGases.sort((a, b) => {
//    return a === b ? 0 : a > b ? 1 : -1; 
// }); 
// // ['Ar', 'He', 'Kr', 'Ne', 'Rn', 'Xn']

// // sorting in descending order
// nobleGases.sort((a, b) => {
//    return a === b ? 0 : a < b ? 1 : -1; 
// });
// // ['Xn', 'Rn', 'Ne', 'Kr', 'He', 'Ar']


////////////////How to Perform an Operation on Every Array Element///////////////////
///////How to Use the map() Method
// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// let tracks = animals.map(el => el['track']);

// console.log(tracks); // ['Pigs on the Wing (Part One)', 'Dogs', 'Pigs (Three Different Ones)', 'Sheep', 'Pigs on the Wing (Part Two)']
// In the example above, we have used map() to create an array populated with the values of the track key of each object in the animals array.

// ///////////How to Use the forEach() Method
// The forEach() method is similar to map(). It executes a function on every array element, but it has no return value. For this reason, a forEach() call can be used only at the end of a chain.

// // Syntax
// array.forEach((element, index, array) => {})
// In the example below, forEach() is used to delete the no property from each array element:

// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// animals.forEach(el => delete el['no']); // it returns undefined

// console.log(animals); 
// [
//   {track: 'Pigs on the Wing (Part One)'},
//   {track: 'Dogs'},
//   {track: 'Pigs (Three Different Ones)'},
//   {track: 'Sheep'},
//   {track: 'Pigs on the Wing (Part Two)'}
// ]


//////////How to Use the reduce() Method

// Syntax
// array.reduce((accumulator, element, index, array) => {}, initialValue)


// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];

// let countPigs = animals.reduce((count, el) => {
// 	return el['track'].includes('Pigs') ? count + 1 : count
// 	}, 0);

// console.log(countPigs); // 3
// In this case, it's important to specify the initial value as zero. Otherwise, the initial value will be the whole {no: 1, track: 'Pigs on the Wing (Part One)'} object, and this will lead to an unexpected result.

