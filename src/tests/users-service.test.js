import {
  createUser, deleteUser,
  deleteUsersByUsername, findAllUsers,
  findUserById, findUsersByType, updateUser
} from "../services/users-service";

describe('createUser', () => {
  // sample users to insert (3 types)
  const ash = {
    username: 'ash',
    password: 'a123',
    email: 'ash@pokemon.com',
    type: 'AVERAGE'
  };

  const buzz = {
    username: 'buzz',
    password: 'b123',
    email: 'buzz@lightyear.com',
    type: 'BUSINESS'
  }

  const clifford = {
    username: 'clifford',
    password: 'c123',
    email: 'clifford@bigreddog.com',
    type: 'CRITIC'
  }

  // setup test before running test
  beforeAll(async () => {
    // remove any/all users to make sure we create it in the test
    await deleteUsersByUsername(ash.username);
    await deleteUsersByUsername(buzz.username);
    await deleteUsersByUsername(clifford.username);
  })

  // clean up after test runs
  afterAll(async () => {
    // remove any data we created
    await deleteUsersByUsername(ash.username);
    await deleteUsersByUsername(buzz.username);
    await deleteUsersByUsername(clifford.username);
  })

  test('can insert new AVERAGE user with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(ash);

    // verify inserted user's properties match parameter user
    expect(newUser.username).toEqual(ash.username);
    expect(newUser.password).toEqual(ash.password);
    expect(newUser.email).toEqual(ash.email);
    expect(newUser.type).toEqual(ash.type)
  });

  test('can insert new BUSINESS user with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(buzz);

    // verify inserted user's properties match parameter user
    expect(newUser.username).toEqual(buzz.username);
    expect(newUser.password).toEqual(buzz.password);
    expect(newUser.email).toEqual(buzz.email);
    expect(newUser.type).toEqual(buzz.type)
  });

  test('can insert new CRITIC user with REST API', async () => {
    // insert new user in the database
    const newUser = await createUser(clifford);

    // verify inserted user's properties match parameter user
    expect(newUser.username).toEqual(clifford.username);
    expect(newUser.password).toEqual(clifford.password);
    expect(newUser.email).toEqual(clifford.email);
    expect(newUser.type).toEqual(clifford.type)
  });
});

describe('deleteUsersByUsername', () => {
  // sample user to delete
  const donald = {
    username: 'donald',
    password: 'd123',
    email: 'donald@duck.com',
    type: 'AVERAGE'
  };

  // setup the tests before verification
  beforeAll(() => {
    // insert the sample user we then try to remove
    return createUser(donald);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(donald.username);
  })

  test('can delete users from REST API by username', async () => {
    // delete a user by their username. Assumes user already exists
    const status = await deleteUsersByUsername(donald.username);

    // verify we deleted at least one user by their username
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

describe('findUserById',  () => {
  // sample user we want to retrieve
  const eevee = {
    username: 'eevee',
    password: 'e123',
    email: 'eevee@pokemon.com',
    type: 'CRITIC'
  };

  // setup before running test
  beforeAll(() => {
    // clean up before the test making sure the user doesn't already exist
    return deleteUsersByUsername(eevee.username)
  });

  // clean up after ourselves
  afterAll(() => {
    // remove any data we inserted
    return deleteUsersByUsername(eevee.username);
  });

  test('can retrieve user from REST API by primary key', async () => {
    // insert the user in the database
    const newUser = await createUser(eevee);

    // verify new user matches the parameter user
    expect(newUser.username).toEqual(eevee.username);
    expect(newUser.password).toEqual(eevee.password);
    expect(newUser.email).toEqual(eevee.email);
    expect(newUser.type).toEqual(eevee.type);

    // retrieve the user from the database by its primary key
    const existingUser = await findUserById(newUser._id);

    // verify retrieved user matches parameter user
    expect(existingUser.username).toEqual(eevee.username);
    expect(existingUser.password).toEqual(eevee.password);
    expect(existingUser.email).toEqual(eevee.email);
    expect(existingUser.type).toEqual(eevee.type)
  });
});


describe('findAllUsers',  () => {
  // sample users we'll insert to then retrieve
  const usernames = [
    "pikachu", "charizard", "snorlax"
  ];

  // setup data before test
  beforeAll(() =>
    // insert several known users
    usernames.map(username =>
      createUser({
        username,
        password: `${username}123`,
        email: `${username}@pokemon.com`,
        type: 'AVERAGE'
      })
    )
  );

  // clean up after ourselves
  afterAll(async () => {
    // delete the users we inserted
    for (let username of usernames) {
      await deleteUsersByUsername(username);
    }
  });

  test('can retrieve all users from REST API', async () => {
    // retrieve all the users
    const users = await findAllUsers();

    // there should be a minimum number of users
    expect(users.length).toBeGreaterThanOrEqual(usernames.length);

    // let's check each user we inserted
    const usersWeInserted = users.filter(
      user => usernames.indexOf(user.username) >= 0);

    // compare the actual users in database with the ones we sent
    usersWeInserted.forEach(user => {
      const username = usernames.find(username => username === user.username);
      expect(user.username).toEqual(username);
      expect(user.password).toEqual(`${username}123`);
      expect(user.email).toEqual(`${username}@pokemon.com`);
      expect(user.type).toEqual('AVERAGE');
    });
  });
});

describe('updateUser', () => {
  // sample user to update
  const ash = {
    username: 'ash',
    password: 'a123',
    email: 'ash@pokemon.com',
    type: 'AVERAGE'
  };

  let newUser;

  // setup the tests before verification
  beforeAll(async () => {
    // insert the sample user we then try to update
    newUser = await createUser(ash);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUser(newUser._id);
  })

  test('can update user from REST API', async () => {
    // update a user. Assumes user already exists
    const status = await updateUser(newUser._id, {
      username: 'ashpokemon',
      password: 'a1234',
      email: 'ashketchum@pokemon.com',
      type: 'CRITIC'
    });

    // verify we updated user
    expect(status.modifiedCount).toBeGreaterThanOrEqual(1);

    // verify properties were updated
    const user = await findUserById(newUser._id);
    expect(user.username).toEqual('ashpokemon');
    expect(user.password).toEqual('a1234');
    expect(user.email).toEqual('ashketchum@pokemon.com');
    expect(user.type).toEqual('CRITIC');
  });
});

describe('deleteUser', () => {
  // sample user to delete
  const ash = {
    username: 'ash',
    password: 'a123',
    email: 'ash@pokemon.com',
    type: 'AVERAGE'
  };

  let newUser;

  // setup the tests before verification
  beforeAll(async () => {
    // insert the sample user we then try to update
    newUser = await createUser(ash);
  });

  // clean up after test runs
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(ash.username);
  })

  test('can delete user by primary key from REST API', async () => {
    // delete a user. Assumes user already exists
    const status = await deleteUser(newUser._id);

    // verify we updated user
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

describe('findUsersByType - average',  () => {
  // sample AVERAGE users we'll insert to then retrieve
  const averages = [
    "abra", "absol", "aggron"
  ];

  // setup data before test
  beforeAll(() =>
      // insert several known AVERAGE users
      averages.map(average =>
          createUser({
             username: average,
             password: `${average}123`,
             email: `${average}@pokemon.com`,
             type: 'AVERAGE'
           })
      )
  );

  // clean up after ourselves
  afterAll(async () => {
    // delete the users we inserted
    for (let user of averages) {
      await deleteUsersByUsername(user);
    }
  });

  test('can retrieve all users of AVERAGE type from REST API', async () => {
    // retrieve all AVERAGE users
    const users = await findUsersByType('AVERAGE');

    // there should be a minimum number of AVERAGE users
    expect(users.length).toBeGreaterThanOrEqual(averages.length);

    // let's check each user we inserted
    const usersWeInserted = users.filter(
        user => averages.indexOf(user.username) >= 0);

    // compare the actual users in database with the ones we sent
    usersWeInserted.forEach(user => {
      const username = averages.find(username => username === user.username);
      expect(user.username).toEqual(username);
      expect(user.password).toEqual(`${username}123`);
      expect(user.email).toEqual(`${username}@pokemon.com`);
      expect(user.type).toEqual('AVERAGE');
    });
  });
});


const businesses = [
  "bagon", "baltoy", "banette"
];

const critics = [
  "cacnea", "cacturne", "calyrex"
];
