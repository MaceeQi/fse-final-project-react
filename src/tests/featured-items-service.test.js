import {
    createFeaturedItem, deleteFeaturedItem, findAllFeaturedItems, findFeaturedItemsByRestaurant, findFeaturedItemById
} from "../services/featured-item-service";
import {createRestaurant, deleteRestaurant} from "../services/restaurants-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";

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

describe('can create featured items with REST API', () => {
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
        // remove featured items for restaurant
        const item = await findFeaturedItemsByRestaurant(createdRestaurant._id);
        for (let each of item) {
            await deleteFeaturedItem(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('create featured item', async () => {
        // insert new item by restaurant in the database
        const itemData = {
            food: 'food',
            price: 'price',
            popular: true,
            restaurant: createdRestaurant._id
        };
        const newItem = await createFeaturedItem(itemData);

        // verify inserted item's properties match expected
        expect(newItem.food).toEqual('food');
        expect(newItem.price).toEqual('price');
        expect(newItem.popular).toEqual(true);
        expect(newItem.restaurant).toEqual(createdRestaurant._id);
    })
});

describe('can delete featured items by id with REST API', () => {
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
        // remove items for restaurant
        const items = await findFeaturedItemsByRestaurant(createdRestaurant._id);
        for (let each of items) {
            await deleteFeaturedItem(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('delete featured item', async () => {
        // insert new item by restaurant in the database
        const itemData = {
            food: 'food',
            price: 'price',
            popular: true,
            restaurant: createdRestaurant._id
        };
        const newItem = await createFeaturedItem(itemData);

        // verify inserted item's properties match expected
        expect(newItem.food).toEqual('food');
        expect(newItem.price).toEqual('price');
        expect(newItem.popular).toEqual(true);
        expect(newItem.restaurant).toEqual(createdRestaurant._id);

        // delete the item from the database
        const status = await deleteFeaturedItem(newItem._id);
        // expect one item to be deleted
        expect(status.deletedCount).toEqual(1);
    })
});

describe('can find all featured items with REST API', () => {
    let createdUser;
    let createdRestaurant;
    let createdItems = [];

    // setup data before test
    beforeAll(async () => {
        // insert user
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        const sampleItems = [
            {
                food: 'food1',
                price: 'price1',
                popular: true,
                restaurant: createdRestaurant._id
            },
            {
                food: 'food2',
                price: 'price2',
                popular: true,
                restaurant: createdRestaurant._id
            },
            {
                food: 'food3',
                price: 'price3',
                popular: true,
                restaurant: createdRestaurant._id
            },
        ]
        for (let each of sampleItems) {
            const newItem = await createFeaturedItem(each);
            createdItems.push(newItem);
        }
    })

    afterAll(async () => {
        // remove items for restaurant
        const items = await findAllFeaturedItems(createdRestaurant._id);
        for (let each of items) {
            await deleteFeaturedItem(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    });


    test('find all featured items', async () => {

        // retrieve all restaurants from the database
        const allItems = await findAllFeaturedItems();

        // there should be a min number of featured items
        expect(allItems.length).toBeGreaterThanOrEqual(createdItems.length);

        // check each item we inserted
        const itemsWeInserted = allItems.filter(
            item => item.restaurant === createdRestaurant._id
        );

        // compare the actual items in database with the ones we sent
        itemsWeInserted.forEach(item => {
            const itemBody = createdItems.find(each => each.food === item.food);
            expect(item.food).toEqual(itemBody.food);
            expect(item.price).toEqual(itemBody.price);
            expect(item.photo).toEqual(itemBody.photo);
            expect(item.popular).toEqual(itemBody.popular);
            expect(item.restaurant).toEqual(itemBody.restaurant);
        });
    })
});

describe('can find featured items by restaurant with REST API', () => {
    let createdUser;
    let createdRestaurant;
    let createdItems = [];

    // setup data before test
    beforeAll(async () => {
        // insert user
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        const sampleItems = [
            {
                food: 'food1',
                price: 'price1',
                popular: true,
                restaurant: createdRestaurant._id
            },
            {
                food: 'food2',
                price: 'price2',
                popular: true,
                restaurant: createdRestaurant._id
            },
            {
                food: 'food3',
                price: 'price3',
                popular: true,
                restaurant: createdRestaurant._id
            },
        ]
        for (let each of sampleItems) {
            const newItem = await createFeaturedItem(each);
            createdItems.push(newItem);
        }
    })

    afterAll(async () => {
        // remove items for restaurant
        const items = await findAllFeaturedItems(createdRestaurant._id);
        for (let each of items) {
            await deleteFeaturedItem(each._id)
        }
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    });

    test('find featured items by restaurant', async () => {
        // find items by restaurant
        const itemsWeInserted = await findFeaturedItemsByRestaurant(createdRestaurant._id);

        // verify same number of items
        expect(itemsWeInserted.length).toEqual(createdItems.length);

        // verify inserted items are items for specified restaurant
        itemsWeInserted.forEach(item => {
            expect(item.restaurant).toEqual(createdRestaurant._id);
        })
    })
});

describe('can find items by id with REST API', () => {
    // sample item
    let createdRestaurant;
    let createdUser;
    let sampleItem;
    let createdItem;
    // setup test before running test
    beforeAll(async () => {
        // create sample user to create restaurant
        createdUser = await createUser(testUser);
        createdRestaurant = await createRestaurant({...sampleRestaurant, ownedBy: createdUser._id});
        sampleItem = {
            food: 'food',
            price: 'price',
            popular: true,
            restaurant: createdRestaurant._id
        };
        createdItem = await createFeaturedItem(sampleItem);
    })

    // clean up after test runs
    afterAll(async () => {
        // remove created item
        await deleteFeaturedItem(createdItem._id)
        
        // remove restaurant we created
        await deleteRestaurant(createdRestaurant._id)

        // remove sample user we created
        await deleteUsersByUsername(createdUser.username)
    })

    test('find featured items by id', async () => {
        // find items by id
        const insertedItem = await findFeaturedItemById(createdItem._id);

        // verify inserted item is equal to specified item
        expect(insertedItem.food).toEqual(createdItem.food);
        expect(insertedItem._id).toEqual(createdItem._id);
        expect(insertedItem.price).toEqual(createdItem.price);
        expect(insertedItem.photo).toEqual(createdItem.photo);
        expect(insertedItem.popular).toEqual(createdItem.popular);
        expect(insertedItem.restaurant).toEqual(createdItem.restaurant);
    })
});