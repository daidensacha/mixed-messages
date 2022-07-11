function getRandomInt(num) {
  return Math.floor(Math.random() * num.length);
}

const meals = {
  breakfast: ['yoghurt with fruit', 'toast with butter and choice of jam', 'porridge', 'croisant with jam', 'English breakfast', 'bacon and eggs', 'fasting with fresh water'],
  lunch: ['ham and salad sandwich', 'meat pie', 'bbq steak and sausages', 'thai noodles', 'chicken salad', 'fresh fruit', 'garden salad with feta cheese'],
  dinner: ['lasagna', 'roast pork with vegetables', 'pizza', 'cheese and crackers', 'chicken nachos', 'veal schnitzel with salad', 'pesto pasta']
};

const randomMenu = {
  breakfast: '',
  lunch: '',
  dinner: ''
};
const menuLotto = obj => {

  for (let meal in obj) {

    let randomNum = getRandomInt(meals[meal]);

    if (meal === 'breakfast') {

      randomMenu.breakfast = `Breakfast today is <span class="meal">${meals.breakfast[randomNum]}</span>.`;
      document.getElementById('breakfast').innerHTML = randomMenu.breakfast;
    } else if (meal === 'lunch') {
      randomMenu.lunch = `For lunch <span class="meal">${meals.lunch[randomNum]}</span> will be served.`;
      document.getElementById('lunch').innerHTML = randomMenu.lunch;

    } else if (meal === 'dinner') {
      randomMenu.dinner = `For dinner, <span class="meal">${meals.dinner[randomNum]}</span> is on the menu.`;
      document.getElementById('dinner').innerHTML = randomMenu.dinner;
    }
  }

  return randomMenu;
};

menuLotto(meals);

document.getElementById('refresh-menu').addEventListener('click', () => menuLotto(meals));