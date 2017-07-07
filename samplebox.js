  window.onload = function() {
    function brochureTiles() {
      if ($('.hs_brochure').length <= 0) {
        document.getElementById('PostSubmit').style.display = 'block';
        document.getElementById('brochuretext').style.display = 'none';
        clearInterval(resourceTimer);
      }
    }
    var resourceTimer = window.setInterval(brochureTiles, 200);

    function customSampleTiles() {
      if ($('.hs_your_needs').length <= 0) {
        document.getElementById('AfterSubmit').style.display = 'block';
        document.getElementById('othersample').style.display = 'none';
        clearInterval(customSampleTimer);
      }
    }
    var customSampleTimer = window.setInterval(customSampleTiles, 200);
