module.exports = (req, res) => {
    console.log(req)
    console.log('asdf')
    res.json({
      body: 'asdddddfsdf path',
      query: req.query,
      cookies: req.cookies,
    })
  }