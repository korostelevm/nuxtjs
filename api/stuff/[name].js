var a = {}

module.exports = (req, res) => {
  console.log(req.query)
  if(!a[req.query.name]){
    a[req.query.name]= new Date()
  }

  console.log('sadf')
    res.json({
      body: a,
      query: req.query,
      cookies: req.cookies,
    })
  }