var H = require("hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"Git\">");t.b("\n" + i);t.b("  <h1 class=\"block\">Required Software is Missing</h1>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"Git-message\">");t.b("\n" + i);t.b("    <p>Claimspace requires a piece of software called <strong>Git</strong>, which helps");t.b("\n" + i);t.b("      keep your local Claimspace projects in sync with the Claimspace Cloud.</p>");t.b("\n");t.b("\n" + i);t.b("    <p>Most computers now come with Git preinstalled, but it's missing on");t.b("\n" + i);t.b("      yours. Not to worry! Installing Git is easy:</p>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <button class='inline-block btn btn-primary Git-install'>Install Now</button>");t.b("\n" + i);t.b("  <button class='inline-block btn btn Git-help'>Get Help</button>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});return T; }();