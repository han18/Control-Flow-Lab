const area = 3.1415 * 5 ** 2;
console.log(area);

// the plants double in size each week
const plants = 20;

// starting with 20 plants Each plant requires a minimum space of 0.8 square meters.
const sqareSpace = 0.8

// area and the space of the plants
const plantSpace = Math.round(area / sqareSpace) ;
console.log(plantSpace);

const plantSqare = Math.round(area / plants) 
console.log(plantSqare)


// the precentage of growth
const eightPer = 0.80
const fiftyPer = 0.50 

// week one
if(plantSqare > eightPer * plants ) {
    console.log("Pruned")
} else if (plantSqare > fiftyPer && plantSqare < eightPer ) {
    console.log("Monitored")
} else if (plantSqare < fiftyPer) {
    console.log("Planted")
} else {
    console.log("Do not plant in the area!")
}

// // week one
// if(plantSpace > eightPer  * plants ) {
//     console.log("Pruned")
// } else if (plantSpace > fiftyPer && plantSpace < eightPer ) {
//     console.log("Monitored")
// } else if (plantSpace < fiftyPer) {
//     console.log("Planted")
// } else {
//     console.log("Do not plant in the area!")
// }