const area = 3.1415 * 5 ** 2;
console.log(area);

// the plants double in size each week
const plants = 20;

// starting with 20 plants Each plant requires a minimum space of 0.8 square meters.
const sqareSpace = 0.8

// area and the space of the plants Max capacity
const plantSpace = Math.round(area / sqareSpace) ;
console.log(plantSpace);


const plantSqare = Math.round(area / plants) 
console.log(plantSqare)


// the precentage of growth
const eightPer = 0.80 * area;
const fiftyPer = 0.50  * area;

// week one
if(plantSqare > eightPer ) {
    console.log("Pruned")
} else if (plantSqare > fiftyPer && plantSqare < eightPer ) {
    console.log("Monitored")
} else if (plantSqare < fiftyPer) {
    console.log("Planted")
} else {
    console.log("Do not plant in the area!")
}

const plantDouble = plantSqare * 2;

// week two
// if(plantSpace > eightPer  ) {
//     console.log("Pruned")
// } else if (plantSpace > fiftyPer && plantSpace < eightPer ) {
//     console.log("Monitored")
// } else if (plantSpace < fiftyPer) {
//     console.log("Planted")
// } else {
//     console.log("Do not plant in the area!")
// }


// week two
let weeks = plants * 2;

if(weeks < eightPer ) {
    console.log("Pruned")
} else if (weeks < eightPer && weeks > fiftyPer  ) {
    console.log("Monitored")
} else if (plantSpace < fiftyPer) {
    console.log("Planted")
} else {
    console.log("Do not plant in the area!")
}

// Part 2: Thinking Bigger

const afterWeeks = 100 * 2** 10;

const requiredArea = afterWeeks * sqareSpace;
const maxArea = requiredArea * sqareSpace ;

console.log(afterWeeks);
console.log(requiredArea)
console.log(maxArea)

if (maxArea > area ) {
    console.log('This are will exceed capacity')
}





