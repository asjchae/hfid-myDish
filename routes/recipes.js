var pictures = {
  "urls":["https://lh5.googleusercontent.com/-pwytNUrBiWk/TtD-WzPd1HI/AAAAAAAAADs/q0qcGIN3chM/w800-h800/delicious-food.jpg","http://3.bp.blogspot.com/-l0Lvystqm20/UVAM7SLOCJI/AAAAAAAAACA/pH6qbLTmCbY/s1600/Delicious-food.jpg","http://www.discoveringgoa.com/wp-content/uploads/2008/10/delicious-food1-299x300.gif","https://lh3.googleusercontent.com/-FhjfK2TlFTU/TtD-i19XK9I/AAAAAAAAAEM/ytaxu1FpLNg/w800-h800/delicious-food-collections-part-1-1.jpg","https://lh4.googleusercontent.com/-c0WJKf6lxBg/TtD969C4TJI/AAAAAAAAADM/XHsZZTudEDw/w426-h284/19f5fe2119c008d135f6f0323e068132-Delicious%2BFood.jpg","http://2.bp.blogspot.com/_yKfs8OReFxY/TPGrOREgHKI/AAAAAAAABCc/o7_4aWalNx0/s1600/r1.JPG","https://pbs.twimg.com/profile_images/2848793550/1bdaa77e37ffb4063eb5f6aafbf7775c.jpeg","http://images.all-free-download.com/images/graphicmedium/delicious_food_01_hd_pictures_167553.jpg","http://images.all-free-download.com/images/graphicmedium/delicious_food_02_hd_pictures_167552.jpg","http://us.123rf.com/400wm/400/400/ensiferum/ensiferum0909/ensiferum090900058/5545244-crab-on-the-plate-delicious-food-close-up-view-vector-illustration.jpg","http://i2.wp.com/easytolearnkorean.com/wp-content/uploads/2013/10/911-Expressions-Delicious-Food.jpg?resize=221%2C300","http://images.all-free-download.com/images/graphicmedium/delicious_food_picture_167141.jpg","http://farm1.staticflickr.com/243/514321892_beeaa61c7d_z.jpg","http://www.kobeclassicbeef.com/wp-content/uploads/2013/10/Delicious-Food-Show-Kobe-ClassicBeef.gif","http://i01.i.aliimg.com/photo/v0/295256311/2GB_Delicious_food_usb_flesh_chicken_leg.jpg_250x250.jpg","http://ak6.picdn.net/shutterstock/videos/1788152/preview/stock-footage-delicious-food-is-prepared-on-a-fire-for-picnic.jpg","http://ak8.picdn.net/shutterstock/videos/1788134/preview/stock-footage-delicious-food-is-prepared-on-a-fire-for-picnic.jpg","http://ak4.picdn.net/shutterstock/videos/1788158/preview/stock-footage-delicious-food-is-prepared-on-a-fire-for-picnic.jpg","http://3.bp.blogspot.com/-v5kMrIX0I8o/UmrkD06Nk3I/AAAAAAAAAYw/gYyXuFTaAcY/s1600/dfs-dayofdead.jpg","http://2.bp.blogspot.com/-t4hlKA8l9iI/TeNW8UXbamI/AAAAAAAANNQ/Ahzn7ua-QrQ/s1600/robin-malaysian-food-1a626.jpg","http://ak0.picdn.net/shutterstock/videos/1788143/preview/stock-footage-delicious-food-is-prepared-on-a-fire-for-picnic.jpg","http://images4.flipkey.com/img/photos/451572/341446/large_451572-341446-001-1380656580.jpg","http://mylusciouslife.com/wp-content/uploads/2012/12/Frozen-berry-cocktail-dessert-Delicious-food-and-drink-Luscious-on-Pinterest.jpg","http://www.tradefairdates.com/logos/delicious_food_show_logo_12005.jpg","http://farm6.staticflickr.com/5082/5260510345_31150751e4_z.jpg","http://cetacademicprograms.com/wp-content/uploads/2010/08/delicious-food.jpg","http://1.bp.blogspot.com/_aaji5dlhyz4/TKrC_YF_9vI/AAAAAAAAAbU/Bz00n2FY1iY/s1600/DSC_0061.jpg","http://2.bp.blogspot.com/-ND7MoECqQdA/T2uV4ZM1XmI/AAAAAAAAGaQ/McsbzmD-Rt8/s1600/289.JPG","http://images.all-free-download.com/images/graphicmedium/delicious_food_salad_03_hd_picture_167551.jpg","http://ak0.picdn.net/shutterstock/videos/3212902/preview/stock-footage-choosy-female-common-pheasant-looking-to-delicious-food-around-bush-in-snowy-land-phasianus.jpg","http://images.colourbox.com/thumb_COLOURBOX3226122.jpg","http://1.bp.blogspot.com/-nGi_EOscyt0/TVNjOn_xpnI/AAAAAAAAAAU/ZjCFc9nxU8U/s1600/delicious-indian-food.gif","http://homecookingmemories.com/wp-content/uploads/2011/10/delicious-food-science-caramelization-24-300x225.jpg","http://2.bp.blogspot.com/-9X-VHwzltGg/TqDm69WZYBI/AAAAAAAACAQ/fok_20NYAc4/s1600/Delicious+Food+Show+Toronto+6.jpg","http://media-cache-ak0.pinimg.com/236x/7a/a2/a6/7aa2a637f52cc2a105543e7898f970bd.jpg","http://4.bp.blogspot.com/-Sbda4dvycRA/UaIsAvjcOvI/AAAAAAAAfLg/jWr5WSijkgY/s1600/Etihad_-_first_class.jpg","http://4.bp.blogspot.com/-7VRNps2qm2M/UmrkKKbJwKI/AAAAAAAAAY4/Y5TrRZ8avZc/s1600/dfs-cheese.jpg","http://www.stmarysoca.org/youth/camps/2007/Delicious_Food.jpg","http://ak1.picdn.net/shutterstock/videos/1788164/preview/stock-footage-delicious-food-is-prepared-on-a-fire-for-picnic.jpg","http://img.loveitsomuch.com/uploads/201309/17/cu/cupcakes%20cute%20delicious%20food%20pastel%20pink.-t07214.jpg"]
 }

var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

exports.db_entries = function (req, res) {
  var allEntries = Entry.find({}).exec(function (err, data) {
    if (err) {
      res.send("Could not find all entries");
    } else if (data.length == 0) {
      res.send("No entries");
    } else {
      entry_compile(data, res, function (res, entrypack) {
        res.send(entrypack);
      });
    };
  });
};


exports.db_delete = function (req, res) {
  var deleteAll = Entry.find({}).remove();
  deleteAll.exec();
  res.redirect('/db_entries');
};

function entry_compile(data, res, callback) {
  var all_entries = [];
  for (var i=0; i<data.length; i++) {
    var temp_entry = Entry.findOne({title: data[i].title}).exec(function (err, response) {
      all_entries.push(response);
      if (all_entries.length == data.length) {
        callback(res, all_entries);
      }
    });
  }
};


exports.addEntry = function (req, res) {
	res.render('addEntry');
};

exports.addEntry_post = function(req, res) {

  var date = new Date();
  var newentry = new Entry({title: req.body.title, picture: pictures.urls[Math.floor(Math.random()*pictures.urls.length)], recipe: req.body.recipe,
                              category: req.body.category, notes: req.body.notes, datecreated: date});


  newentry.save(function (err) {  
    if (err) {
      console.log("Problem saving entry.");
      return res.redirect('/addEntry');
    } else {
      return res.redirect('/');
    }
  });
};



exports.viewEntry = function (req, res) {
  var entry_title = req.params.id;
  console.log("DEBUG1"); 
  console.log(req.params.id);
  Entry.findOne({title:entry_title}).exec(function (err, response) {
    if (err) {
      console.log('Could not locate entry.');
    } else {
      console.log("HIERHEREIHEIRHEIH")
      console.log(response);
      res.render('viewEntry', {entry: response});
    }
  });
	// res.render('editEntry',{entry: data.entries[id]});
};


exports.editEntrypost = function (req, res) {//picture is not in req
  var entry_title = req.params.id;
  console.log("editEntryPost");
  console.log(req.body);
  Entry.findOne({title: entry_title}).exec(function (err, response) {
    var date = response.date;
    Entry.findOneAndRemove({title: entry_title}).exec(function (err, responsivo) {
      var newentry = new Entry({title: req.body.title, picture: req.body.picture, recipe: req.body.recipe,
                              category: req.body.category, notes: req.body.notes, date: date});
      console.log(newentry);
      newentry.save(function (err) {
        if (err)
        return res.redirect('/viewEntry', {entry: response});
        else
          return res.redirect('/')
      });
    });
  });
};


// DELETE

exports.deleteEntry = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.entries.length) {
    data.entries.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};