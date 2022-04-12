// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  let locInFeet = Math.abs(pickupLocation - 42) * 264;
  return locInFeet;
}

function distanceTravelledInFeet(start, destination) {
  let dist = Math.abs(destination - start) * 264;
  return dist;
}

function calculatesFarePrice(start, destination) {
  let fareDist = distanceTravelledInFeet(start, destination);
  let price = 0;
  const fixPrice = 2500;
  if (fareDist <= 400) {
    price = 0;
    return price;
  } else if (fareDist <= 2000) {
    price = ((fareDist - 400) * 2) / 100;
    return price;
  } else if (fareDist <= 2500) {
    price = fixPrice / 100;
    return price;
  } else {
    return "cannot travel that far";
  }
}
