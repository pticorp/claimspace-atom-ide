var H = require("hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"Login\">");t.b("\n" + i);if(t.s(t.f("isLoggedIn",c,p,1),c,p,0,37,213,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"Login-existing text-success\">");t.b("\n" + i);t.b("      You are currently logged in as <strong>@");t.b(t.v(t.f("username",c,p,0)));t.b(".</strong>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <h2 class=\"block\">Update Credentials</h2>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("isNotLoggedIn",c,p,1),c,p,0,250,306,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <h2 class=\"block\">Login to Claimspace Cloud</h2>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("  <div class=\"Login-message\">");t.b("\n" + i);t.b("    <p>Enter the username and password for your <strong>Claimspace.cloud</strong> account:</p>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <input class='input-text native-key-bindings Login-username' type='text' placeholder='Username' tabindex=\"0\">");t.b("\n" + i);t.b("  <input class='input-text native-key-bindings Login-password' type='password' placeholder=\"Password\" tabindex=\"1\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"Login-message\">");t.b("\n" + i);t.b("    <p>Your credentials will be added to your Mac OSX Login <strong>Keychain</strong>.</p>");t.b("\n");t.b("\n" + i);t.b("    <p><strong>Be aware:</strong> after loggging in, you may be prompted by the Mac Keychain program to allow \"Git\"");t.b("\n" + i);t.b("      to access your Keychain. This should be your Keychain (Mac) password. This allows Your");t.b("\n" + i);t.b("      Claimspace credentials to be stored securely on your Mac.</p>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class='block'>");t.b("\n" + i);t.b("    <button class='inline-block btn btn-primary Login-submit' tabindex=\"2\">Login</button>");t.b("\n" + i);t.b("    <button class='inline-block btn Login-cancel' tabindex=\"3\">Cancel</button>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});return T; }();