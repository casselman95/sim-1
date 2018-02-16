module.exports = {
  create: (req, res, next) => {
    res.status(200).send(messages);
  },

  get: ( req, res, next ) => {
    res.status(200).send(messages);
  },

  update: ( req, res, next ) => {
    res.status(200).send(messages);
  },

  delete: ( req, res, next ) => {
    res.status(200).send(messages);
  },
}
