var a = null

module.exports = (req, res) => {
  console.log(req)
  if(!a){
    a = {
      state: req.query,
      ts: new Date()
    }
  }
  console.log('sadf')
    res.json({
      body: a,
      query: req.query,
      cookies: req.cookies,
    })
  }