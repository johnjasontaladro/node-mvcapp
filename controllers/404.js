var template = require('../views/template-main');

exports.get = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write(
    template.build('404 - Page not found', 'Oh noes, it\'s a 404', '<p>This is not the page you are looking for, try a different url.</p>'), 'utf-8'
  );
  res.end();
};