const getPagination = (req) => {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    return { limit, offset };
  };
  
  module.exports = { getPagination };
  