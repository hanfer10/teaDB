const { db, Tea, User } = require('./backend/db');

const teas = [{
  name: "Raspberry Rose",
  flavorProfile: "Raspberry, rose, chocolate, hibiscus and orange peel",
  rating: 7,
  imageUrl: "https://cdn.shopify.com/s/files/1/0045/8548/8472/products/753_1024x1024@2x.jpg?v=1549808857",
  seller: "Happy Mug",
  link: "https://happymugcoffee.com/products/rose-raspberry-china"
},
{
  name: "Earl Grey",
  flavorProfile: "China Black tea base with bergamot flavor",
  seller: "Upton Tea Imports",
  link: "https://www.uptontea.com/earl-grey-tea/earl-grey-loose-leaf-black-tea/p/V00001/"
}];

const users = [{
  username: 'admin@email.com',
  password: 'abc',
  role: 'admin',
},
{
  username: 'user@email.com',
  password: 'abc',
  role: 'user',
}];

const seed = async () => {
  try {
    await db.sync({force: true});
    await Promise.all(teas.map(tea => {
      return Tea.create(tea);
    }));
    await Promise.all(users.map(user => {
      return User.create(user);
    }));
  } catch (error){
    console.log(red(error));
  }
}

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log(('Seeding Success!'));
      db.close;
    })
    .catch((error) => {
      console.log((error))
    })
}
