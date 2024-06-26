let guestList = ["Umer","Mubeen","Huzaifa","Areeb"]
let dontCome = guestList[0];
console.log(dontCome,"don't want to come");
guestList.splice(0,0,"Rayyan")
guestList.forEach(oneGuest => console.log(`hello ${oneGuest}, Would you like to dinner with me? `));