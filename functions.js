function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
  let numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  let change = startingAmount % costPerBottle;
  return change;
}

console.log("Hello Master, here is your " + getMilk(5, 1.5) + " change.");
