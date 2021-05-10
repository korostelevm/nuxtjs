module.exports = (req, res) => {
  console.log('sadf')
    res.json({
      body: 'asdf',
      query: req.query,
      cookies: req.cookies,
    })
  }