var H = require("hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"Home\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"Home-logo\">");t.b("\n" + i);t.b(t.rp("<logo0",c,p,"    "));t.b("  </div>");t.b("\n");t.b("\n" + i);if(t.s(t.f("isLoggedIn",c,p,1),c,p,0,87,167,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"Home-welcome\">");t.b("\n" + i);t.b("      Welcome back, @");t.b(t.v(t.f("username",c,p,0)));t.b(".");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("  <div class=\"Home-actions\">");t.b("\n");t.b("\n" + i);if(t.s(t.f("isLoggedIn",c,p,1),c,p,0,231,378,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button class=\"HomeAction HomeAction-openProject\">Open Project</button>");t.b("\n" + i);t.b("    <button class=\"HomeAction HomeAction-login\">My Account</button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("isNotLoggedIn",c,p,1),c,p,0,415,481,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <button class=\"HomeAction HomeAction-login\">Login</button>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {"<logo0":{name:"logo", partials: {}, subs: {  }}}, subs: {  }});return T; }();