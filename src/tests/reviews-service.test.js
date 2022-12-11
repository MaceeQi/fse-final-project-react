import {createReview, updateReview, deleteReview, findAllReviews,
    findReviewById, findAllReviewsForRestaurant, findAllReviewsByCritic}
    from "../services/reviews-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";
import {createRestaurant, deleteRestaurant} from "../services/restaurants-service";

describe('can create review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    };
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    };
    let newCritic;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
        await deleteUsersByUsername(testOwner.username);
        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        testReview.restaurant = newRestaurant._id
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newOwner.username)
        await deleteRestaurant(newRestaurant._id)
    })

    test('createReview', async () => {
        const newReview = await createReview(newCritic._id, newRestaurant._id, testReview);
        createdReviews.push(newReview._id);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(newRestaurant._id);
        expect(newReview.critic).toEqual(newCritic._id);
    })
});


describe('can update review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    const testUpdate = {
        review: "actually it's pretty good"
    }
    let newCritic;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
        await deleteUsersByUsername(testOwner.username);

        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        testReview.restaurant = newRestaurant._id
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newOwner.username)
        await deleteRestaurant(newRestaurant._id)
    })

    test('updateReview', async () => {
        const newReview = await createReview(newCritic._id, newRestaurant._id, testReview);
        createdReviews.push(newReview._id);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(newRestaurant._id);
        expect(newReview.critic).toEqual(newCritic._id);

        await updateReview(newReview._id, testUpdate);
        const updatedReview = await findReviewById(newReview._id)
        expect(updatedReview.review).toEqual(testUpdate.review);
    })
});


describe('can delete review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    let newCritic;
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
        await deleteUsersByUsername(testOwner.username);

        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        testReview.restaurant = newRestaurant._id
    })
    afterAll(async () => {
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newOwner.username)
        await deleteRestaurant(newRestaurant._id)
    })

    test('deleteReview', async () => {
        const newReview = await createReview(newCritic._id, newRestaurant._id, testReview);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(newRestaurant._id);
        expect(newReview.critic).toEqual(newCritic._id);

        const status = await deleteReview(newReview._id);
        expect(status.deletedCount).toEqual(1);
    })
});


describe('can retrieve review by id with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    let newCritic;
    let newReview;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
        await deleteUsersByUsername(testOwner.username);

        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);
        
        testReview.restaurant = newRestaurant._id
        newReview = await createReview(newCritic._id, newRestaurant._id, testReview);
        createdReviews.push(newReview._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newOwner.username)
        await deleteRestaurant(newRestaurant._id)
    })

    test('findReviewById', async () => {
        const getReview = await findReviewById(newReview._id)
        expect(getReview.review).toEqual(testReview.review);
        expect(getReview.restaurant).toEqual(newRestaurant._id);
        expect(getReview.critic._id).toEqual(newCritic._id);
    })
});


describe('can retrieve all reviews for a restaurant with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testOwner2 = {
        username: "restauranttest",
        password: "restauranttest",
        email: "restauranttest@team6.com",
        type: "BUSINESS"
    }
    let newOwner2;
    const testRestaurant2 = {
        name: "restauranttest",
        // ownedBy: newOwner.id,
        handle: "restauranttest",
        cuisine: "eastern",
        price: "high!",
        address: "SEA",
        phone: "987654321"
    }
    let newRestaurant2;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    let newReview;
    const testReview2 = {
        review: "this place is great!",
        // restaurant: newRestaurant2._id
    }
    let newReview2;
    const testReview3 = {
        review: "no comment",
        // restaurant: newRestaurant2._id
    }
    let newReview3;
    let newCritic;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
        await deleteUsersByUsername(testOwner.username);
        await deleteUsersByUsername(testOwner2.username);

        newCritic = await createUser(testCritic);
        
        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        testReview.restaurant = newRestaurant._id
        newReview = await createReview(newCritic._id, newRestaurant._id, testReview);
        createdReviews.push(newReview._id);

        newOwner2 = await createUser(testOwner2);
        testRestaurant2.ownedBy = newOwner2._id
        newRestaurant2 = await createRestaurant(testRestaurant2);
        
        newReview2 = await createReview(newCritic._id, newRestaurant2._id, testReview2);
        createdReviews.push(newReview2._id);

        newReview3 = await createReview(newCritic._id, newRestaurant2._id, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newOwner.username)
        await deleteUsersByUsername(newOwner2.username)
        await deleteRestaurant(newRestaurant._id)
        await deleteRestaurant(newRestaurant2._id)
    })

    test('findAllReviewsForRestaurant', async () => {
        const reviews = await findAllReviewsForRestaurant(newRestaurant._id);
        expect(reviews.length).toEqual(1);
        const reviews2 = await findAllReviewsForRestaurant(newRestaurant2._id);
        expect(reviews2.length).toEqual(2);
    })
});


describe('can retrieve all reviews by a critic with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    const testReview2 = {
        review: "this place is great!",
        // restaurant: newRestaurant._id
    }

    const testCritic2 = {
        username: "boringreviewer",
        password: "reviews123owo",
        email: "restaurant@observers.com",
        type: "CRITIC"
    }
    const testReview3 = {
        review: "no comment",
        // restaurant: newRestaurant._id
    }
    let newCritic;
    let newCritic2;
    let createdReviews = [];
    beforeAll(async () => {
        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        const newReview1 = await createReview(newCritic._id, newRestaurant._id, testReview);
        const newReview2 = await createReview(newCritic._id, newRestaurant._id, testReview2);
        createdReviews.push(newReview1._id);
        createdReviews.push(newReview2._id);

        newCritic2 = await createUser(testCritic2);
        const newReview3 = await createReview(newCritic2._id, newRestaurant._id, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteRestaurant(newRestaurant._id)
        await deleteUsersByUsername(newOwner.username)
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newCritic2.username)
    })

    test('findAllReviewsByCritic', async () => {
        const reviews = await findAllReviewsByCritic(newCritic._id);
        expect(reviews.length).toEqual(2);
        const reviews2 = await findAllReviewsByCritic(newCritic2._id);
        expect(reviews2.length).toEqual(1);
    })
});


describe('can retrieve all reviews with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testOwner = {
        username: "testauraunt",
        password: "testauraunt",
        email: "testauraunt@fse.com",
        type: "BUSINESS"
    }
    let newOwner;
    const testRestaurant = {
        name: "testaurant",
        // ownedBy: newOwner.id,
        handle: "testaurant",
        cuisine: "western",
        price: "free!",
        address: "USA",
        phone: "123456789"
    }
    let newRestaurant;
    const testOwner2 = {
        username: "restauranttest",
        password: "restauranttest",
        email: "restauranttest@team6.com",
        type: "BUSINESS"
    }
    let newOwner2;
    const testRestaurant2 = {
        name: "restauranttest",
        // ownedBy: newOwner.id,
        handle: "restauranttest",
        cuisine: "eastern",
        price: "high!",
        address: "SEA",
        phone: "987654321"
    }
    let newRestaurant2;
    const testReview = {
        review: "this place sucks!",
        // restaurant: newRestaurant._id
    }
    const testReview2 = {
        review: "this place is great!",
        // restaurant: newRestaurant2._id
    }

    const testCritic2 = {
        username: "boringreviewer",
        password: "reviews123owo",
        email: "restaurant@observers.com",
        type: "CRITIC"
    }
    const testReview3 = {
        review: "no comment",
        // restaurant: newRestaurant2._id
    }
    let newCritic;
    let newCritic2;
    let createdReviews = [];
    let currentReviewsLength;
    beforeAll(async () => {
        const currentReviews = await findAllReviews();
        currentReviewsLength = currentReviews.length;

        newCritic = await createUser(testCritic);

        newOwner = await createUser(testOwner);
        testRestaurant.ownedBy = newOwner._id
        newRestaurant = await createRestaurant(testRestaurant);

        const newReview1 = await createReview(newCritic._id, newRestaurant._id, testReview);
        createdReviews.push(newReview1._id);

        newOwner2 = await createUser(testOwner2);
        testRestaurant2.ownedBy = newOwner2._id
        newRestaurant2 = await createRestaurant(testRestaurant2);

        const newReview2 = await createReview(newCritic._id, newRestaurant2._id, testReview2);
        createdReviews.push(newReview2._id);

        newCritic2 = await createUser(testCritic2);
        const newReview3 = await createReview(newCritic2._id, newRestaurant._id, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteRestaurant(newRestaurant._id)
        await deleteRestaurant(newRestaurant2._id)
        await deleteUsersByUsername(newOwner.username)
        await deleteUsersByUsername(newOwner2.username)
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newCritic2.username)
    })

    test('findAllReviews', async () => {
        const reviews = await findAllReviews();
        expect(reviews.length).toEqual(currentReviewsLength + 3);
    })
});