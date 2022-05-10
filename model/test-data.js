var thelist = function() {
  var objJson = {
    "GroupName": "D",
    "count": 4,
    "teams": [
      { "country": "USA" },
      { "country": "UK" },
      { "country": "Philippines" },
      { "country": "Ukraine" },
  ]
  };

  return objJson;
};

exports.teamlist = thelist();