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
  const { correct } = req.body;

  if (correct) {
    //increase level
  }

  //increase review count
  //update due to be false
  //update next review
};
