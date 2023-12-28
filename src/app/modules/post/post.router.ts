import express from "express";
import { createPostByUser,getPosts } from './post.controller';
const router = express.Router();

router.post('/new/post',createPostByUser)
router.get('/posts/:loggedInUserId',getPosts)


// router.post('/register-google-user', googleAuthentication, registerByGoogle);
// router.post('/registration-request', registerRequest)
// router.post('/registration-confirm', registerUser)
// router.get('/data', authentication, getUserByToken)
// router.patch('/update', authentication, updateUserByToken);

export default router;