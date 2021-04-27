require('dotenv').config()

const { models, sequelize } = require('./models');

sequelize.sync().then(async () => {
  // // Write your Model queries here

  // // Create a record
//   await models.Bookmarks.create(
//     {
//       url: 'wwww.twitter.com',
//     }
//   )
  // // Find a record
  // const cats = await models.Cat.findAll({
  //   where: {
  //     owner: 'Ed'
  //   }
  // })
  // // Log results
  // console.log(cats)
  // const cat = cats[0]
  // // Log the object properties that represent fields
  // console.log(cat.name)
  // // ----
  // // TO DO
  // // ----
  // // Update a record
  // // Delete a record
});