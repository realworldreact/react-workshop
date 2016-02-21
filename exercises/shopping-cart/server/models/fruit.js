import _ from 'lodash';

const types = {
  banana: 2.5,
  strawberry: 5,
  mango: 3.3,
  apple: 0.50
};

module.exports = function(Fruit) {

  Object.keys(types).forEach(type => {
    Fruit[type] = Math.floor(Math.random() * 10) + 3;
    Fruit[`get${_.capitalize(type)}`] = function() {
      if (Fruit[type] <= 0) {
        return Promise.reject(`No more fruit of ${type} in stock`);
      }
      Fruit[type] = Fruit[type] - 1;
      return Promise.resolve({
        type,
        price: types[type],
        leftInStock: Fruit[type]
      });
    };

    Fruit.remoteMethod(
      `get${_.capitalize(type)}`,
      {
        returns: { arg: 'data', type: 'object' },
        http: {
          verb: 'GET'
        }
      }
    );
  });
};
