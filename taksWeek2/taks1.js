const flowers = [
    'Melati',
    'Kembang Sepatu',
    'Bugenvil',
    'Anggrek',
    'Teratai',
    'Tulip',
    'Mawar'].map(item => {
        return item.toLowerCase();
    });
const number = [
    1,2,3,4,5,6,7,8,9
]
console.log(number.some(num=>num % 2 === 0))
console.log(flowers.find(i => i == 'melati'))
console.log(flowers.findIndex(i => i == 'mawar'))
console.log(flowers.includes('anggrek'))
console.log(flowers.join('-'))
console.log(number.reduce((total, value) => total + value, 0))
console.log(number.slice(4))
console.log(flowers.splice(2))
console.log(flowers.unshift('kenanga'))
console.log(flowers)
console.log(flowers.concat(number))

// 1. The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// 2. The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// 3. The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// 4. The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 5. The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// 6. The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// 7. The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
// 8. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// 9. The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// 10. The concat() method is used to merge two or more arrays.
