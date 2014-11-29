function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  return null;
}


$(document).on('deviceready', function () {
    ver = iOSversion();
    if ((ver != null) && ver[0] >= 7) {
        $('body').addClass('iOS');
    }
});