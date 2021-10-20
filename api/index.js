module.exports = (req, res) => {
    console.log(req)
    console.log('asdf')
    res.json({
      body: 'asdddddfsdf path',
      query: req.query,
        env: process.env,
      cookies: req.cookies,
    })
  }
