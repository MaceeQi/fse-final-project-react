import {createReview, updateReview, deleteReview, findAllReviews,
    findReviewById, findAllReviewsForRestaurant, findAllReviewsByCritic}
    from "../services/reviews-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";

describe('can create review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    };
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    };
    let newCritic;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('createReview', async () => {
        newCritic = await createUser(testCritic)
        const newReview = await createReview(newCritic._id, testReview.restaurant, testReview);
        createdReviews.push(newReview._id);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(testReview.restaurant);
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
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    const testUpdate = {
        review: "actually it's pretty good"
    }
    let newCritic;
    let createdReviews = [];
    beforeAll( async () => {
        await deleteUsersByUsername(testCritic.username)
    })
    afterAll( () => {
        for (let each of createdReviews) {
            deleteReview(each)
        }
        return deleteUsersByUsername(newCritic.username)
    })

    test('updateReview', async () => {
        newCritic = await createUser(testCritic);
        const newReview = await createReview(newCritic._id, testReview.restaurant, testReview);
        createdReviews.push(newReview._id);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(testReview.restaurant);
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
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let createdReviews = [];
    beforeAll(() => {
        return deleteUsersByUsername(testCritic.username)
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('deleteReview', async () => {
        newCritic = await createUser(testCritic)
        const newReview = await createReview(newCritic._id, testReview.restaurant, testReview);
        createdReviews.push(newReview._id);
        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(testReview.restaurant);
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
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newReview;
    let createdReviews = [];
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        newReview = await createReview(newCritic._id, testReview.restaurant, testReview);
        createdReviews.push(newReview._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('findReviewById', async () => {
        const getReview = await findReviewById(newReview._id)
        expect(getReview.review).toEqual(testReview.review);
        expect(getReview.restaurant).toEqual(testReview.restaurant);
        expect(getReview.critic._id).toEqual(newCritic._id);
    })
});


describe('can retrieve all reviews with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    const testReview2 = {
        review: "this place is great!",
        restaurant: "638a2a4b636f1c1d249378b4"
    }

    const testCritic2 = {
        username: "boringreviewer",
        password: "reviews123owo",
        email: "restaurant@observers.com",
        type: "CRITIC"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    let createdReviews = [];
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        const newReview1 = await createReview(newCritic._id, testReview.restaurant, testReview);
        const newReview2 = await createReview(newCritic._id, testReview2.restaurant, testReview2);
        createdReviews.push(newReview1._id);
        createdReviews.push(newReview2._id);

        newCritic2 = await createUser(testCritic2);
        const newReview3 = await createReview(newCritic2._id, testReview3.restaurant, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }

        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newCritic2.username)
    })

    test('findAllReviews', async () => {
        const reviews = await findAllReviews();
        expect(reviews.length).toEqual(3);
    })
});


describe('can retrieve all reviews for a restaurant with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    const testReview2 = {
        review: "this place is great!",
        restaurant: "638a2a4b636f1c1d249378b4"
    }

    const testCritic2 = {
        username: "boringreviewer",
        password: "reviews123owo",
        email: "restaurant@observers.com",
        type: "CRITIC"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    let createdReviews = [];
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        const newReview1 = await createReview(newCritic._id, testReview.restaurant, testReview);
        const newReview2 = await createReview(newCritic._id, testReview2.restaurant, testReview2);
        createdReviews.push(newReview1._id);
        createdReviews.push(newReview2._id);

        newCritic2 = await createUser(testCritic2);
        const newReview3 = await createReview(newCritic2._id, testReview3.restaurant, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }

        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newCritic2.username)
    })

    test('findAllReviewsForRestaurant', async () => {
        const reviews = await findAllReviewsForRestaurant(testReview.restaurant);
        expect(reviews.length).toEqual(2);
        const reviews2 = await findAllReviewsForRestaurant(testReview2.restaurant);
        expect(reviews2.length).toEqual(1);
    })
});


describe('can retrieve all reviews by a critic with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com",
        type: "CRITIC"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    const testReview2 = {
        review: "this place is great!",
        restaurant: "638a2a4b636f1c1d249378b4"
    }

    const testCritic2 = {
        username: "boringreviewer",
        password: "reviews123owo",
        email: "restaurant@observers.com",
        type: "CRITIC"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    let createdReviews = [];
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        const newReview1 = await createReview(newCritic._id, testReview.restaurant, testReview);
        const newReview2 = await createReview(newCritic._id, testReview2.restaurant, testReview2);
        createdReviews.push(newReview1._id);
        createdReviews.push(newReview2._id);

        newCritic2 = await createUser(testCritic2);
        const newReview3 = await createReview(newCritic2._id, testReview3.restaurant, testReview3);
        createdReviews.push(newReview3._id);
    })
    afterAll(async () => {
        for (let each of createdReviews) {
            await deleteReview(each)
        }

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