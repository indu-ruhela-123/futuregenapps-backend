import express from "express";
import { createContact, getContacts, deleteContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", createContact);  // create new contact
router.get("/", getContacts);     // get all contacts
router.delete("/:id", deleteContact); // delete contact by id

export default router;
