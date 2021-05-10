var a = {}

module.exports = (req, res) => {
  console.log(req.query)

  if(!a[req.query.name]){
    a[req.query.name]= new Date()
  }

  console.log('sadf')
    res.json({
        state:Object.keys(a).length,
        name:req.query.name,
        name_in_state: Object.keys(a).includes(req.query.name)
    })
  }