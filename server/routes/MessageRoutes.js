import { Router } from "express";
import { addAudioMessage, addImageMessage, addMessage, getInitialContactswithMessages, getMessage } from "../controllers/MessageController.js";
import multer from 'multer'

const router = Router();

const uploadAudio = multer({dest:"upload/recordings/"})
const uploadImage = multer({dest:"upload/images/"})

router.post("/add-message",addMessage)
router.get("/get-messages/:from/:to",getMessage)
router.post("/add-image-message",uploadImage.single("image"),addImageMessage)
router.post("/add-audio-message",uploadAudio.single("audio"),addAudioMessage)
router.get("/get-inital-contacts/:from",getInitialContactswithMessages);

export default router;