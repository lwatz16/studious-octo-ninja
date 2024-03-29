/*
"Fix your code before the garden dies!" is a 8 kyu coding problem found on Codewars.
Instructions can be found here --> https://www.codewars.com/kata/57158fb92ad763bb180004e7/

--------------------------------------------------------------
Description:

You have an award-winning garden and every day the plants need exactly 40mm of water. 
You created a great piece of JavaScript to calculate the amount of water your plants 
will need when you have taken into consideration the amount of rain water that is forecast 
for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

--------------------------------------------------------------
*/

// ---------- Solution A ----------
const rainAmount = (rainAmount) => {
  if (rainAmount < 40) {
    return `You need to give your plant ${40 - rainAmount}mm of water`;
  }
  return 'Your plant has had more than enough water for today!';
};
