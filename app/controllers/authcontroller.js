var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.menu = function(req,res){
  let profile = req.user;
  console.log('Menu : ',profile)
  res.render('menu',{'profile': profile});
}

exports.dashboard = function(req,res){
  let profile = req.user;
  console.log(profile)
	res.render('dashboard',{'profile':profile}); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}