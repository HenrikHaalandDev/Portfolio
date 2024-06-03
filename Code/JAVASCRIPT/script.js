function scrolldown() {
    var targetPosition = document.querySelector('.midsite').offsetTop;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

document.getElementById('stopvideo').addEventListener('click', function() {
    var video = document.getElementById('background-video');
    if (video.paused) {
      video.play();
      this.textContent = 'Pause Video';
    } else {
      video.pause();
      this.textContent = 'Play Video';
    }
  });

  window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('root');
    loader.style.display = 'none';
    content.style.display = 'block';
});

window.addEventListener('load', function() {
  // Set timeout to hide the loader after 10 seconds
  setTimeout(function() {
      var loader = document.getElementById('loader');
      var content = document.getElementById('content');
      loader.style.display = 'none';
      content.style.display = 'block';
  }, 10000); // 10000 milliseconds = 10 seconds
});

