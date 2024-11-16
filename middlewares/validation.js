const validateSearchInput = (req, res, next) => {
    const search = req.query.search;
    if (search && !/^[a-zA-Z0-9\s]+$/.test(search)) {
      return res.status(400).json({ message: "Invalid search query" });
    }
    next();
  };
  
  module.exports = { validateSearchInput };
  