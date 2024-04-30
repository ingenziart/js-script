function getMilk(money){
    console.log("moveRight");
    console.log("staightForwnd");
    console.log("turnLeft");
    var bottlesOfMilk =Math.floor(money/1.5);
    console.log("buy"+bottlesOfMilk+"of getMilk")
    console.log("moveRight");
    console.log("staightForwnd");
    console.log("turnLeft");
    return money%1.5
 }
  var change=getMilk(4)
  console.log(change)