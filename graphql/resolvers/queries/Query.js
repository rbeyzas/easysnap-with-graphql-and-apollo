const Query = {
  user: (parent, args) => {
    return {
      name: 'beyza',
      surname: 'sarıkaya',
    };
  },
};
const Query = require('./queries/Query');

module.exports = {
  Query,
};
