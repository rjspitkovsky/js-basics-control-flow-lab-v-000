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

function ternaryCheckCity(city) {
let phrase = (city === 'NYC') ? "Ok, sounds good." : "No go.";
return phrase;
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip) {
    case 'generous':
    response = "Thank you so much."
    break;
    case "not as generous":
    response = "Thank you."
    break;
    default:
    response = 'Bye.'
    break;
  }
  return response;
}
