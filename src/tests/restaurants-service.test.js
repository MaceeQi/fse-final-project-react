import {
    createRestaurant, deleteRestaurant,
    deleteRestaurantByOwner, findAllRestaurants,
    findRestaurantById, findRestaurantsByName, updateRestaurant,
} from "../services/restaurants-service";
import {createUser, deleteUser, deleteUsersByUsername} from "../services/users-service";
import {createTuit, deleteTuit, findTuitById, findTuitByUser} from "../services/tuits-service";

// sample user to create restaurant
const testRest = {
    username: 'testRestService',
    password: 'rest123',
    type: 'BUSINESS',
    email: 'testRestService@aliens.com'
};

// sample tuit
const sampleRestaurant = {
    name: "sampleRestaurantForTesting",
    handle: "business",
    cuisine: "cuisine",
    price: "price",
    address: "address",
    phone: "phone"
};


describe('can find all restaurants with REST API', () => {
    // sample users we'll insert to then retrieve
    const users = [
        {
            username: "testRest1",
            password: "testRest1",
            email: "testRest1@mail.com",
            type: "BUSINESS"
        },
        {
            username: "testRest2",
            password: "testRest2",
            email: "testRest2@mail.com",
            type: "BUSINESS"
        },
        {
            username: "testRest3",
            password: "testRest3",
            email: "testRest3@mail.com",
            type: "BUSINESS"
        }
    ];
    let createdUsers = [];
    let createdRestaurants = [];

    // setup data before test
    beforeAll(async () => {
        // insert several known users
        for (let user of users) {
            const newUser = await createUser(user);
            createdUsers.push(newUser);
        }
        for (let each of createdUsers) {
            const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: each._id});
            createdRestaurants.push(newRestaurant);
        }
    });

    afterAll(async () => {
        // delete the users we inserted
        for (let i = 0; i < 3; i++) {
            await deleteRestaurantByOwner(createdUsers[i]._id);
        }
        for (let i = 0; i < 3; i++) {
            await deleteUser(createdUsers[i]._id);
        }
    });


    test('find all restaurants', async () => {

        // retrieve all restaurants from the database
        const allRestaurants = await findAllRestaurants();

        // there should be a min number of restaurants
        expect(allRestaurants.length).toBeGreaterThanOrEqual(createdRestaurants.length);

        // check each restaurant we inserted
        const restaurantsWeInserted = allRestaurants.filter(
            restaurant => createdRestaurants.indexOf(restaurant.ownedBy) >= 0
        );

        // compare the actual restaurants in database with the ones we sent
        restaurantsWeInserted.forEach(restaurant => {
            const restaurantBody = createdRestaurants.find(each => each === restaurant.ownedBy);
            expect(restaurant.name).toEqual(restaurantBody.name);
            expect(restaurant.ownedBy).toEqual(restaurantBody.ownedBy);
        });
    })
});


describe('can find restaurant by id with REST API', () => {
    let sampleUser;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        sampleUser = await createUser(testRest);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove tuits created by sample user
        await deleteRestaurantByOwner(sampleUser._id);

        // remove sample user we created
        await deleteUsersByUsername(sampleUser.username)
    })

    test('find restaurant by id', async () => {
        // insert new restaurant by sample user in the database
        const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: sampleUser._id});

        // verify inserted restaurant's properties match expected
        expect(newRestaurant.name).toEqual(sampleRestaurant.name);
        expect(newRestaurant.ownedBy).toEqual(sampleUser._id);

        // retrieve the restaurant from the database by its primary key
        const existingRestaurant = await findRestaurantById(newRestaurant._id);

        // verify retrieved tuit matches parameter tuit
        expect(existingRestaurant.name).toEqual(newRestaurant.name);
        expect(existingRestaurant.ownedBy).toEqual(newRestaurant.ownedBy);
    })
});


describe('can create restaurants with REST API', () => {
    let sampleUser;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        sampleUser = await createUser(testRest);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove restaurants created by sample user
        await deleteRestaurantByOwner(sampleUser._id);

        // remove sample user we created
        await deleteUsersByUsername(sampleUser.username)
    })

    test('create restaurant', async () => {
        // insert new restaurant by sample user in the database
        const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: sampleUser._id});

        // verify inserted restaurant's properties match expected
        expect(newRestaurant.name).toEqual(sampleRestaurant.name);
        expect(newRestaurant.ownedBy).toEqual(sampleUser._id);
    })
});


describe('can update restaurant with REST API', () => {
    let sampleUser;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        sampleUser = await createUser(testRest);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove tuits created by sample user
        await deleteRestaurantByOwner(sampleUser._id);

        // remove sample user we created
        await deleteUsersByUsername(sampleUser.username)
    })

    test('update restaurant', async () => {
        // insert new restaurant by sample user in the database
        const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: sampleUser._id});

        // verify inserted restaurant's properties match expected
        expect(newRestaurant.name).toEqual(sampleRestaurant.name);
        expect(newRestaurant.ownedBy).toEqual(sampleUser._id);

        // update the restaurant in the database
        await updateRestaurant({...newRestaurant,
                                     handle: "testRestaurant",
                                     cuisine: "testRestaurant",
                                     price: "$$",
                                     address: "new address",
                                     phone: "111-111-1111",
                                     wednesday: "11:00 am - 10:00 pm"
                                 });

        const updatedRestaurant = await findRestaurantById(newRestaurant._id);

        // verify retrieved restaurant matches updated restaurant
        expect(updatedRestaurant.name).toEqual(newRestaurant.name);
        expect(updatedRestaurant.ownedBy).toEqual(newRestaurant.ownedBy);
        expect(updatedRestaurant.handle).toEqual("testRestaurant");
        expect(updatedRestaurant.cuisine).toEqual("testRestaurant");
        expect(updatedRestaurant.price).toEqual("$$");
        expect(updatedRestaurant.address).toEqual("new address");
        expect(updatedRestaurant.phone).toEqual("111-111-1111");
        expect(updatedRestaurant.wednesday).toEqual("11:00 am - 10:00 pm");
    })
});

describe('can delete restaurant by id with REST API', () => {
    let sampleUser;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        sampleUser = await createUser(testRest);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove tuits created by sample user
        await deleteRestaurantByOwner(sampleUser._id);

        // remove sample user we created
        await deleteUsersByUsername(sampleUser.username)
    })

    test('delete restaurant', async () => {
        // insert new restaurant by sample user in the database
        const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: sampleUser._id});

        // verify inserted restaurant's properties match expected
        expect(newRestaurant.name).toEqual(sampleRestaurant.name);
        expect(newRestaurant.ownedBy).toEqual(sampleUser._id);

        // delete the restaurant from the database
        await deleteRestaurant(newRestaurant._id);

        const deletedRestaurant = await findRestaurantById(newRestaurant._id);

        // verify the restaurant was deleted
        expect(deletedRestaurant).toEqual(null);
    })
});

describe('can find restaurant by its name with REST API', () => {
    let sampleUser;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        sampleUser = await createUser(testRest);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove tuits created by sample user
        await deleteRestaurantByOwner(sampleUser._id);

        // remove sample user we created
        await deleteUsersByUsername(sampleUser.username)
    })

    test('find restaurant by its name', async () => {
        // insert new restaurant by sample user in the database
        const newRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: sampleUser._id});

        // verify inserted restaurant's properties match expected
        expect(newRestaurant.name).toEqual(sampleRestaurant.name);
        expect(newRestaurant.ownedBy).toEqual(sampleUser._id);

        // find the restaurant by its name from the database
        const restaurants = await findRestaurantsByName(newRestaurant.name);

        // verify retrieved restaurant matches new restaurant
        expect(restaurants[0].name).toEqual(newRestaurant.name);
    })
});