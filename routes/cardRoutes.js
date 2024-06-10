const express = require("express");
const router = express.Router();

const {
  reviewCard,
  getCards,
  createCard,
  getCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

router.route("/").get(getCards).post(createCard);
router.route("/:id").get(getCard).delete(deleteCard).patch(updateCard);
router.route("/:id/review").patch(reviewCard);

module.exports = router;
