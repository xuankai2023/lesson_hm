function grtPhoneNum(arr){
    let format="(xxx)xxx-xxxx"
    for (let i=0;i<arr.length;i++){
        format=format.replace('',arr[i])
    }
 return format
}

console.log(getPhoneNum([1,2,3,4,5,6,7,8,9,0]))