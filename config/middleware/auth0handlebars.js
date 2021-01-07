// This helps with how Handlebars interacts with auth0
// Thanks Chris - Elma

module.exports = function (req, res, next) {
  // grab reference of render
  var _render = res.render;
  // override logic
  res.render = function (view, options, fn) {
      // this line also gives all the user data
      console.log(req.user);
      _render.call(this, view, { ...options, locals: { user: req.user } }, fn);
  }
  next();
}