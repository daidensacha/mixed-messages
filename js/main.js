function getRandomInt(num) {
  return Math.floor(Math.random() * num.length);
}

const menuItems = {
  breakfast: ['yoghurt with fruit', 'toast with butter and choice of jam', 'porridge', 'croisant with jam', 'English breakfast', 'bacon and eggs', 'fasting with fresh water'],
  lunch: ['ham and salad sandwich', 'meat pie', 'bbq steak and sausages', 'thai noodles', 'chicken salad', 'fresh fruit', 'garden salad with feta cheese'],
  dinner: ['lasagna', 'roast pork with vegetables', 'pizza', 'cheese and crsackers', 'chicken nachos', 'veal schnitzel with salad', 'pesto pasta']
}

const randomMenu = {
  breakfast: '',
  lunch: '',
  dinner: ''
}

const menuLotto = obj => {

  for (meal in menuItems) {

    let randomNum = getRandomInt(meal);
    console.log(`array length = ${randomNum}`);

    if (meal === 'breakfast') {
      // console.log(menuItems.breakfast[randomNum])
      console.log(randomNum)
      randomMenu.breakfast = `Breakfast today is <span class="meal">${menuItems.breakfast[randomNum]}</span>.`;
      document.getElementById('breakfast').innerHTML = randomMenu.breakfast;
    } else if (meal === 'lunch') {
      randomMenu.lunch = `For lunch <span class="meal">${menuItems.lunch[randomNum]}</span> will be served.`;
      document.getElementById('lunch').innerHTML = randomMenu.lunch;

    } else if (meal === 'dinner') {
      randomMenu.dinner = `For dinner, <span class="meal">${menuItems.dinner[randomNum]}</span> is on the menu.`;
      document.getElementById('dinner').innerHTML = randomMenu.dinner;
    }
  }

  return randomMenu;
}

menuLotto(menuItems);