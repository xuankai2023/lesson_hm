function generateRandomtime(){
    const date=new Date();
    date.setHours(Math.foloor(Math.random() * 24));
    date.setMinutes(Math.foloor(Math.random() * 60));
    date.setSeconds(Math.foloor(Math.random() * 60));
    return date.toISOString();
}
console.log(generateRandomTime());

