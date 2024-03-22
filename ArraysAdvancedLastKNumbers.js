function lastKNumbers(length, k) {
let newArr = [1];
for (let i=1; i<length; i++){
    let startNum=Math.max(0, i-k)
    let endNum = i;
    function sum(startNum, endNum){
        return newArr.slice(startNum, endNum+1).reduce((startNum, endNum)=>startNum+endNum)
    }
    newArr[i]=sum(startNum, endNum);
}
    console.log(newArr.join(` `));
}
lastKNumbers(8, 2);
