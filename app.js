(function () {

  var startLoadingAnimation = function () {
    var progress_indicator = document.getElementById('progress_indicator');
    progress_indicator.className = "revolve"
  }

  var startAnimation = function (e) {
    console.log("coming here");
    this.className = btn_container.className + "animate";
    window.setTimeout(startLoadingAnimation, 700); //As the earlier transitions take 0.5s
  }
  
  var btn_container = document.getElementById('btn_container');
  btn_container.addEventListener('click', startAnimation)
})();