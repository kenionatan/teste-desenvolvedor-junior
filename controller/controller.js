const repo = require('./rules')

exports.index = async (req, res, next) =>{
   res.render('index' , {charList: await repo.charList()})
};
