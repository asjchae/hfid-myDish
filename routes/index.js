var Entry = require('../models/entry_schema')
    , mongoose = require('mongoose');

/*
 * GET home page.
 */

// var data = {
//   "entries": [
//     {
//       "title": "Chicken Noms",
//       "picture":"/images/shawarma.jpeg",
//       "notes": "fake notes",
//       "recipe": "fake recipe",
//       "category": "cat1#cat2#cat3",
//       "datecreated": "11/4/2013",
//       "id":"1"
//     },
//     {
//       "title": "Chicken Noms2",
//       "picture":"/images/shawarma.jpeg",
//       "notes": "fake notes2",
//       "recipe": "fake recipe2",  
//       "category": "cat1#cat2#cat32",
//       "datecreated": "11/4/20132",
//       "id":"2"
//     }
//   ]
// };

var pictures = {
  "urls":["http://www.health.state.mn.us/divs/eh/fish/images/ist2_2116243salmonmeal.jpg","http://tummytime.onslow.org/tummytime/wp-content/uploads/2012/05/meal.jpg","http://www.gapersblock.com/detour/gfx/08272003_meal.jpg","http://www.jazzybonez.com/images/meals.jpg","http://primeyouth.org/wp-content/uploads/2013/05/meal.gif","http://cdn.sheknows.com/articles/crave/article_meals(1).jpg","http://bradylou.com/wp-content/uploads/2011/03/mindful_meal.jpg","http://www.muscleprodigy.com/content/articles/home/meal-plans-to-get-cut-116.jpg","http://t3-fitness.com/wp-content/uploads/2013/09/122.jpg","http://www.moneysavingmealplanning.com/images/skewers.JPG","http://freshmealplan.com/wp-content/uploads/2011/08/paleo-meal-plan.jpg","http://img4.southernliving.com/i/2005/11/gather-around-table/meal-x.jpg?500:500","http://www.forevernatural.net/images/MP3.jpg","http://www.captainds.com/uploaded/image/large/OnePcKidsMeal1.jpg","http://www.hy-vee.com/webres/Image/CMS/Meal_Solutions/meal_solutions2.jpg","http://www.wired.com/images_blogs/wiredscience/2012/09/mf-fueling-your-bodyb-f.jpg","http://www.powerlineblog.com/admin/ed-assets/2013/02/big-mac-extra-value-meal.jpg","http://www.bicycling.com/sites/default/files/images/go-faster-meal-plan.jpg","http://coloring.thecolor.com/color/images/Passover-Meal.gif","http://2.bp.blogspot.com/-5QE3qK9a0B8/URqJ7CBzcFI/AAAAAAAACk8/u8_D-KqmuLg/s1600/Meal+Plan+57.jpg","http://www.pastaconcepts.ie/images/large-img/Pasta-meal-solution.jpg","http://www.builtlean.com/wp-content/uploads/2012/01/pre-workout-meal-nutrition.jpg","http://www.budgetbytes.com/wp-content/uploads/2011/12/Pineapple-Teriyaki-Meal-above-2.jpg","http://www.azfoodbanks.org/images/uploads/MaptheMealGap_LOGO_4c%20web.jpg","http://meals-to-heal.com/wp-content/themes/twentyeleven/assets/images/meals/meal-13.jpg","http://yummyplants.com/wp-content/uploads/2011/03/5-min-meals-number-3.jpg","http://healingforeatingdisorders.com/wp-content/uploads/2012/05/meal.jpg","http://freshmealplan.com/wp-content/uploads/2011/09/paleo-meal-586x389.jpg","http://www.bettycrocker.com/~/media/Images/Bettys%20Dish/Headers/RealMealDeals_header.jpg","http://2.bp.blogspot.com/-gCfpvn542Qc/Uci1TOuVa2I/AAAAAAAAAmA/ruHzgcyphXA/s1600/Meal+Prep.jpg","http://www.flavorfulfork.com/wp-content/uploads/IMG_0013-2.jpg","http://us.123rf.com/400wm/400/400/tokhiti/tokhiti1103/tokhiti110300001/9057266-stylized-clay-pot-with-meal-isolated-on-a-white-background.jpg","http://bed56888308e93972c04-0dfc23b7b97881dee012a129d9518bae.r34.cf1.rackcdn.com/sites/default/files/imagecache/310_square/Thanksgiving_Meal_Makeover.jpg","http://www.campusdish.com/NR/rdonlyres/E51665B8-1D25-4D4B-A850-582CEA4651FD/0/mealExchangeresize.jpg","http://c3.oliveoiltim.es/wp-content/uploads/2012/11/salmon.jpg","http://4.bp.blogspot.com/-bcqeVsqtlRg/Uagk2FjaEQI/AAAAAAAABD0/LfXgI1jpzfw/s1600/Happy+Meal+2.jpg","http://img2.timeinc.net/health/img/mag/2013/01/intro-meal-400x400.jpg","http://www.kidcuisine.com/images/products/popcorn-chicken-meal-large.jpg","http://thumbs.dreamstime.com/z/hamburger-meal-16069896.jpg","http://www.sundayschoolleader.com/wp-content/uploads/2010/08/meal.jpg"]
 }

// MAIN PAGE: PASS IN ALL ENTRIES
exports.index = function(req, res){
  var allEntries = Entry.find({}).sort('datecreated').exec(function (err, data) {
    if (err) {
      res.send("Could not find all entries");
    } else if (data.length == 0) {
      res.render('index', {entries: []});
    } else {
      entry_compile(data, res, function (res, entrypack) {
        entrypack.reverse();
        res.render('index', {entries: entrypack});
      });
    };
  });
};  

function entry_compile(data, res, callback) {
  var all_entries = [];
  for (var i=0; i<data.length; i++) {
    var temp_entry = Entry.findOne({_id: data[i]._id}).exec(function (err, response) {
      all_entries.push(response);
      if (all_entries.length == data.length) {
        callback(res, all_entries);
      }
    });
  }
};


exports.catselects = function (req, res) {
  console.log("what");
  res.redirect('/');
};

exports.camera = function (req, res) {
  console.log("I AM RUN");
  console.log(req.body);
  console.log("I AM RUN");
  res.render('camera', {picture: req.body});
};


// DELETE ENTRY: PASS IN ID
exports.deleteEntry = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.entries.length) {
    data.entries.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};

