
/*
 * GET home page.
 */

var data = {
  "entries": [
    {
      "title": "Chicken Noms",
      "picture":"/images/shawarma.jpeg",
      "notes": "fake notes",
      "recipe": "fake recipe",
      "category": "cat1#cat2#cat3",
      "datecreated": "11/4/2013"
    },
    {
      "title": "Chicken Noms2",
      "picture":"/images/shawarma.jpeg2",
      "notes": "fake notes2",
      "recipe": "fake recipe2",
      "category": "cat1#cat2#cat32",
      "datecreated": "11/4/20132"
    }
  ]
};

exports.index = function(req, res){
  res.render('index', {entries: data.entries});
};

