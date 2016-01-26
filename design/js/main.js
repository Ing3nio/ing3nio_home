// ==== Main JS ====


// Big Video :)
$(function() {
  var myVid = new $.BigVideo({useFlashForFirefox:false});
    
  myVid.init();
  myVid.show('video/movieTest.mp4', {altSource:'media/river.ogv', ambient: true});
});