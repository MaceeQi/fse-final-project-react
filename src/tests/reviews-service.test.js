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