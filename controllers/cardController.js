const { Card } = require("../models/Card");

//get all due cards
const getDueCards = async (req, res) => {
  const cards = await Card.find({ due: true });
  res.json({ cards });
};

//get all cards
const getCards = async (req, res) => {
  const cards = await Card.find({});
  res.json({ cards });
};

//create a card
const createCard = async (req, res) => {
  const card = await Card.create(req.body);
  res.json({ card });
};

//get a card
const getCard = async (req, res) => {
  const cardId = req.params.id;
  const card = await Card.findOne({
    _id: cardId,
  });
  res.json({ card });
};

//edit a card
const updateCard = async (req, res) => {
  const cardId = req.params.id;

  const card = await Card.findOneAndUpdate(
    { _id: cardId },
    { $set: req.body },
    { new: true, runValidators: true }
  );

  res.json({ card });
};

//delete a card
const deleteCard = async (req, res) => {
  const cardId = req.params.id;

  const card = await Card.findByIdAndRemove({
    _id: cardId,
  });
  res.send();
};

//review a card
const reviewCard = async (req, res) => {
  const cardId = req.params.id;
  const { correct } = req.body;

  const card = await Card.findOne({ _id: cardId });
  const updatedCard = { ...card };

  if (correct) {
    if (card.level < 9) updatedCard.level++;
  }

  updatedCard.reviewCount++;
  updatedCard.due = false;

  const currentDate = new Date();
  const intervals = require("../data/intervals").intervals;
  const interval = intervals[card.level - 1];
  updatedCard.nextReview = new Date(currentDate.getTime() + interval);
};
