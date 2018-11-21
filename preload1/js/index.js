(function ($) {

  function PreLoad (imgs, options) {
    this.imgs = (typeof imgs === 'string') ? [imgs] : imgs
    this.options = $.extend({}, PreLoad.DEFAULT, options)
    this._init()
  }
  PreLoad.DEFAULT = {
    each: null,
    all: null
  }
  PreLoad.prototype._init = function () {
    var imgs = this.imgs,
        options = this.options,
        count = 0,
        len = imgs.length;
    $.each(imgs, function (i, src) {
      if (typeof src !== 'string') return;

      var imgObj = new Image()
      $(imgObj).on('load error', function () {
        options.each && options.each(count)

        if (count >= len -1) {
          options.all && options.all()
        }
        count++
      })
      imgObj.src = src
    })
  }

  $.extend({
    preload: function (imgs, options) {
      new PreLoad(imgs, options)
    }
  })

})(jQuery)