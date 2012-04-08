require.config({
  paths: {
    cs: "lib/cs",
    text: "lib/text",
    use: "lib/use",
    jquery: "lib/jquery-1.7.2.min",
    jquery_mobile: "lib/jquery.mobile-1.0.1.min",
    modernizr: "lib/modernizr-2.0.6.min",
    underscore: "lib/underscore-min",
    backbone: "lib/backbone-min"
  },
  use: {
    underscore: {
      attach: "_"
    },
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },
    backbone_localStorage: {
      deps: ["use!backbone"]
    },
    modernizr: {
      attach: "modernizr"
    }
  }
});

require(["jquery", "cs!app/Steepr"], function ($, Steepr) {
  $(function () { new Steepr() })
});
