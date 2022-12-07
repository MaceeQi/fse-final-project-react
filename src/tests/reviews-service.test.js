import {createReview, updateReview, deleteReview, findAllReviews,
    findReviewById, findAllReviewsForRestaurant, findAllReviewsByCritic}
    from "../services/reviews-service";
import {createUser, deleteUsersByUsername} from "../services/users-service";

describe('can create review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('createReview', async () => {
        const newReview = await createReview(newCritic.id, testReview.restaurant, testReview);

        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(testReview.restaurant);
        expect(newReview.critic).toEqual(newCritic._id);
    })
});


describe('can update review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    const testUpdate = {
        review: "actually it's pretty good"
    }
    let newCritic;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('updateReview', async () => {
        const newReview = await createReview(newCritic.id, testReview.restaurant, testReview);

        expect(newReview.review).toEqual(testReview.review);
        expect(newReview.restaurant).toEqual(testReview.restaurant);
        expect(newReview.critic).toEqual(newCritic._id);

        await updateReview(newReview, testUpdate);
        expect(newReview.review).toEqual(testUpdate.review);
    })
});


describe('can delete review with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('deleteReview', async () => {
        const newReview = await createReview(newCritic.id, testReview.restaurant, testReview);

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
        email: "restaurant@critics.com"
    }
    const testReview = {
        review: "this place sucks!",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newReview;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        newReview = await createReview(newCritic.id, testReview.restaurant, testReview);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        await deleteUsersByUsername(newCritic.username)
    })

    test('createReview', async () => {
        const getReview = await findReviewById(newReview._id)
        expect(getReview.review).toEqual(testReview.review);
        expect(getReview.restaurant).toEqual(testReview.restaurant);
        expect(getReview.critic).toEqual(newCritic._id);
    })
});


describe('can retrieve all reviews with REST API', () => {
    const testCritic = {
        username: "harshreviewer",
        password: "reviews123uwu",
        email: "restaurant@critics.com"
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
        email: "restaurant@observers.com"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        await createReview(newCritic.id, testReview.restaurant, testReview);
        await createReview(newCritic.id, testReview2.restaurant, testReview2);

        newCritic2 = await createUser(testCritic2);
        await createReview(newCritic2.id, testReview3.restaurant, testReview3);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        const reviews2 = await findAllReviewsByCritic(newCritic2.id);
        for (let each of reviews2) {
            await deleteReview(each._id)
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
        email: "restaurant@critics.com"
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
        email: "restaurant@observers.com"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        await createReview(newCritic.id, testReview.restaurant, testReview);
        await createReview(newCritic.id, testReview2.restaurant, testReview2);

        newCritic2 = await createUser(testCritic2);
        await createReview(newCritic2.id, testReview3.restaurant, testReview3);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        const reviews2 = await findAllReviewsByCritic(newCritic2.id);
        for (let each of reviews2) {
            await deleteReview(each._id)
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
        email: "restaurant@critics.com"
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
        email: "restaurant@observers.com"
    }
    const testReview3 = {
        review: "no comment",
        restaurant: "637c182a59bca90266c414a6"
    }
    let newCritic;
    let newCritic2;
    beforeAll(async () => {
        newCritic = await createUser(testCritic);
        await createReview(newCritic.id, testReview.restaurant, testReview);
        await createReview(newCritic.id, testReview2.restaurant, testReview2);

        newCritic2 = await createUser(testCritic2);
        await createReview(newCritic2.id, testReview3.restaurant, testReview3);
    })
    afterAll(async () => {
        const reviews = await findAllReviewsByCritic(newCritic.id);
        for (let each of reviews) {
            await deleteReview(each._id)
        }
        const reviews2 = await findAllReviewsByCritic(newCritic2.id);
        for (let each of reviews2) {
            await deleteReview(each._id)
        }
        await deleteUsersByUsername(newCritic.username)
        await deleteUsersByUsername(newCritic2.username)
    })

    test('findAllReviewsForRestaurant', async () => {
        const reviews = await findAllReviewsByCritic(newCritic._id);
        expect(reviews.length).toEqual(2);
        const reviews2 = await findAllReviewsForRestaurant(newCritic2._id);
        expect(reviews2.length).toEqual(1);
    })
});