module.exports = (req, res) => {
    res.json({
      body: 'root path',
      query: req.query,
      cookies: req.cookies,
    })
  }