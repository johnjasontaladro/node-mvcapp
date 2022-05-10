var template = require('../views/template-main');
var test_data = require('../model/test-data');

exports.get = function(req, res) {
  var teamlist = test_data.teamlist;
  var strTeam = "", i = 0;

  for (i = 0; i < teamlist.count; i++) {
    strTeam = strTeam + "<li>" + teamlist.teams[i].country + "</li>";
  }

  strTeam = "<ul>" + strTeam + "</ul>";
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(
    template.build('Test web page on node.js', 'Hello there', '<p>The teams in Group ' + teamlist.GroupName + strTeam + '</p>'), 'utf-8'
  );
  res.end();
};