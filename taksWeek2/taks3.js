const filters = (start, end, arr) => {
  const sorting = arr.sort((a,b)=>a-b)
  const result = sorting.length >= 5 ? sorting.filter(item=>item >= start && item < end) : 'Jumlah angka dalam dataArray harus lebih dari 5'
  return result
}
console.log(filters(20,2, [2,25,4,14,17,20,8,'a']))
// console.log(filters(4,17, [2,25,4]))