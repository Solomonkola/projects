const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [" January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const de = new Date();
let day = days[de.getDay()],month = months[de.getMonth()], date = de.getDate()
console.log(month , day, date)
document.getElementById("day").innerText =day+ ", "+month+" "+ date
function newList(a){

}
function todo(b){
    console.log("hello world"+ b)
}
function nav(c){
    if(c==1){
        document.getElementsByClassName("sideBar")[0].style.display ="block"
        document.getElementById("blur").style.display ="block"
    }
    else if (c==0){
        document.getElementsByClassName("sideBar")[0].style.display ="none"
        document.getElementById("blur").style.display ="none"   
    }
}