import { RequestHelper } from './apiConnector';

import image from '../sources/img/dishEx.jpg';

class service {
  constructor() {
    this.requestHelper = new RequestHelper();
  }

  getMeals = (categoryName, success, failed) => {
    //return this.requestHelper.getWithAjax('AuthTest/AuthorizedUser', success, failed);
    return getMeals(categoryName, success, failed);
  };

}

function getMeals(categoryName, success) {
  let meals = [];
  for (let i = 0; i < 20; i++) {
    let meal = {
      Id: i,
      Name: categoryName + ' блюдо №1',
      Description: 'Вкусно, честно',
      ImageUrl: image,
      Calories: '563',
      Configurations: [
        {
          Size: '12см',
          Weight: '350г',
          Price: '5',
          Id: 'confid' + 1
        },
        {
          Size: '18см',
          Weight: '500г',
          Price: '8',
          Id: 'confid' + 2
        },
        {
          Size: '20см',
          Weight: '650г',
          Price: '10',
          Id: 'confid' + 3
        },
      ]
    };
    meals.push(meal);
  }
  success(meals);
}

export default new service();