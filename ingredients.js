const ingredients = ['eggs', 'milk', 'flour', 'sugar', 'baking soda', 'baking powder', 'chocolate chips', 'bananas'];

//write a while loop that prints out the contents of ingredients:

let i = 0;
while (i++) {
  console.log(ingredients[i]);
}

//write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// write and loop (while/for) that prints out the contents of the ingredients (backwards):

let i = ingredient.length - 1;
while (i--) {
  console.log(ingredients[i]);
}

/*
for (let i = ingredient.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
*/