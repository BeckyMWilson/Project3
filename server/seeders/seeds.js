const faker = require('faker');

const db = require('../config/connection');
const { User, Jargon, Comment } = require('../models');

db.once('open', async () => {
  await Comment.deleteMany({});
  await Jargon.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);



  // create Jargon
  let createdJargons = [];
  for (let i = 0; i < 100; i += 1) {
    const jargonDef= faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const jargonBody = jargonDef.length;

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdJargon = await Jargon.create({ jargonBody, jargonDef, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { submissions: createdJargon._id } }
    );

    createdJargons.push(createdJargon);
  }

  // create comments
  for (let i = 0; i < 100; i += 1) {
    const commentBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomJargonIndex = Math.floor(Math.random() * createdJargons.length);
    const { _id: jargonId } = createdJargons[randomJargonIndex];

 /*    await Jargon.updateOne(
      { _id: thoughtId },
      { $push: { comments: { commentBody, username } } },
      { runValidators: true }
    ); */

    const comment = await Comment.create({ commentBody, username })
    
    await Jargon.findByIdAndUpdate(
      { _id: jargonId },
      { $push: { comments: comment._id } },
      { new: true }
    );

    await User.findByIdAndUpdate(
      { _id: userId },
      { $push: { comments: comment._id } },
      { new: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
