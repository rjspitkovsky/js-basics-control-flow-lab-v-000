// Write your code in this file!
function scuberGreetingForFeet (feet) {
  let cost
  if (feet <= 400) {
    cost = "This one is on me!"
  }
  else if (feet > 2000 && feet < 2500) {
    cost = "I will gladly take your thirty bucks."
  }
  else if (feet > 2500) {
    cost = "No can do."
  }
  return cost
}

function ternaryCheckCity (city) {
  city = "NYC" ? "Ok, sounds good." : "No go."
}
