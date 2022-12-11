import {
    createUpdate, deleteUpdate, findAllUpdates, findUpdatesByRestaurant, findUpdateById
} from "../services/restaurant-updates-service";
import {createRestaurant, deleteRestaurant} from "../services/restaurants-service";
import {createUser, deleteUser, deleteUsersByUsername} from "../services/users-service";

// sample user to create tuit
const testUser = {
    username: 'userID',
    password: 'userPW',
    type: 'BUSINESS',
    email: 'test@jest.com'
};

// sample restaurant
const sampleRestaurant = {
    name: "testRestaurant",
    handle: "business",
    cuisine: "cuisine",
    price: "price",
    address: "address",
    phone: "phone"
};

describe('can create updates with REST API', () => {
    let createdUser;
    let createdRestaurant;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        createdUser = await createUser(testUser);
        // create sample restaurant
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
    })

    // clean up after test runs
    afterAll(async () => {
        // remove updates for restaurant
        const updates = await findUpdatesByRestaurant(createdRestaurant._id);
        for (let each of updates) {
            await deleteUpdate(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('create update', async () => {
        // insert new update by restaurant in the database
        const newUpdate = await createUpdate({update: "update test!", updatedBy: createdRestaurant._id});

        // verify inserted update's properties match expected
        expect(newUpdate.update).toEqual("update test!");
        expect(newUpdate.updatedBy).toEqual(createdRestaurant._id);
    })
});

describe('can delete update by id with REST API', () => {
    let createdUser;
    let createdRestaurant;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        createdUser = await createUser(testUser);
        // create sample restaurant
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
    })

    // clean up after test runs
    afterAll(async () => {
        // remove updates for restaurant
        const updates = await findUpdatesByRestaurant(createdRestaurant._id);
        for (let each of updates) {
            await deleteUpdate(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('delete update', async () => {
        // insert new update by restaurant in the database
        const newUpdate = await createUpdate({update: "update test!", updatedBy: createdRestaurant._id});

        // verify inserted update's properties match expected
        expect(newUpdate.update).toEqual("update test!");
        expect(newUpdate.updatedBy).toEqual(createdRestaurant._id);

        // delete the update from the database
        const status = await deleteUpdate(newUpdate._id);
        // expect one update to be deleted
        expect(status.deletedCount).toEqual(1);
    })
});

describe('can find all updates with REST API', () => {
    let createdUser;
    let createdRestaurant;
    let createdUpdates = [];

    // setup data before test
    beforeAll(async () => {
        // insert user
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        const sampleUpdates = [
            {update: "update1",
            updatedBy: createdRestaurant._id},
            {update: "update2",
            updatedBy: createdRestaurant._id},
            {update: "update3",
            updatedBy: createdRestaurant._id},
        ]
        for (let each of sampleUpdates) {
            const newUpdate = await createUpdate(each);
            createdUpdates.push(newUpdate);
        }
    })

    afterAll(async () => {
        // remove updates for restaurant
        const updates = await findUpdatesByRestaurant(createdRestaurant._id);
        for (let each of updates) {
            await deleteUpdate(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    });


    test('find all updates', async () => {

        // retrieve all restaurants from the database
        const allUpdates = await findAllUpdates();

        // there should be a min number of updates
        expect(allUpdates.length).toBeGreaterThanOrEqual(createdUpdates.length);

        // check each update we inserted
        const updatesWeInserted = allUpdates.filter(
            update => update.updatedBy === createdRestaurant._id
        );

        // compare the actual updates in database with the ones we sent
        updatesWeInserted.forEach(update => {
            const updateBody = createdUpdates.find(each => each.update === update.update);
            expect(update.update).toEqual(updateBody.update);
            expect(update.updatedBy).toEqual(updateBody.updatedBy);
        });
    })
});

describe('can find updates by restaurant with REST API', () => {
    // sample update
    let createdRestaurant;
    let createdUser;
    let createdUpdates;

    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        createdUpdates = [
            {update: "update1",
            updatedBy: createdRestaurant._id},
            {update: "update2",
            updatedBy: createdRestaurant._id},
            {update: "update3",
            updatedBy: createdRestaurant._id},
        ]
        for (let each of createdUpdates) {
            await createUpdate(each)
        }
    })

    // clean up after test runs
    afterAll(async () => {
        // remove updates for restaurant
        const updates = await findUpdatesByRestaurant(createdRestaurant._id);
        for (let each of updates) {
            await deleteUpdate(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('find updates by restaurant', async () => {
        // find updates by restaurant
        const updatesWeInserted = await findUpdatesByRestaurant(createdRestaurant._id);

        // verify same number of updates
        expect(updatesWeInserted.length).toBeGreaterThanOrEqual(createdUpdates.length);

        // verify inserted updates are updates for specified restaurant
        updatesWeInserted.forEach(update => {
            expect(update.updatedBy).toEqual(createdRestaurant._id);
        })
    })
});

describe('can find updates by id with REST API', () => {
    // sample update
    let createdRestaurant;
    let createdUser;
    let sampleUpdate;
    let createdUpdate;
    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        sampleUpdate = {update: "update1", updatedBy: createdRestaurant._id};
        createdUpdate = await createUpdate(sampleUpdate);
        console.log(createdRestaurant);
        console.log(createdUpdate);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove created update
        await deleteUpdate(createdUpdate._id)
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('find updates by id', async () => {
        // find updates by id
        console.log(createdUpdate._id);
        const insertedUpdate = await findUpdateById(createdUpdate._id);

        // verify inserted update is equal to specified update
        expect(insertedUpdate.update).toEqual(createdUpdate.update);
        expect(insertedUpdate._id).toEqual(createdUpdate._id);
    })
});