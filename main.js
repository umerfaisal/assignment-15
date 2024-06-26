var guestList = ["Umer", "Mubeen", "Huzaifa", "Areeb"];
var dontCome = guestList[0];
console.log(dontCome, "don't want to come");
guestList.splice(0, 0, "Rayyan");
guestList.forEach(function (oneGuest) { return console.log("hello ".concat(oneGuest, ", Would you like to dinner with me? ")); });
