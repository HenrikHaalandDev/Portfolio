// 
document.addEventListener('DOMContentLoaded', function () {
  const dot1 = document.getElementById('nav-dot1');
  const dot2 = document.getElementById('nav-dot2');
  const dot3 = document.getElementById('nav-dot3');
  const dot4 = document.getElementById('nav-dot4');
  const dot5 = document.getElementById('nav-dot5');
  const button = document.getElementById('nav-item');



  const scrollRanges = [
    { start: 0, end: 104 },
    { start: 104, end: 204 },
    { start: 204, end: 304 },
    { start: 304, end: 404 },
    { start: 404, end: 504 }
  ];

  function setDotVisibility(dot, visible) {
    dot.style.opacity = visible ? '1' : '0';
  }

  function updateDot(dot, range) {
    // Get how far down the page you've scrolled.
    const scrollPosition = window.scrollY;

    // Check if the scroll is within the range where the dot should be active.
    if (scrollPosition >= range.start && scrollPosition <= range.end) {
      // Find out how much of the range has been scrolled through as a percentage.
      const scrollPercentage = (scrollPosition - range.start) / (range.end - range.start);

      // Calculate where the dot starts moving from, at 10% of the nav-item's height.
      const startTop = button.offsetHeight * 0.1;

      // Calculate where the dot stops moving, at 75% of the nav-item's height.
      const endTop = button.offsetHeight * 0.75;

      // Find out the total distance the dot can move inside the nav-item.
      const rangeDist = endTop - startTop;

      // Work out the dot's exact position based on how much of the range has been scrolled.
      const dotTop = startTop + scrollPercentage * rangeDist;

      // Move the dot to its new position.
      dot.style.top = dotTop + 'px';

      // Show the dot because it's in the active scroll range.
      setDotVisibility(dot, true);
    } else {
      // Hide the dot because it's not in the active scroll range.
      setDotVisibility(dot, false);
    }
  }

  function updateDotPositions() {
    updateDot(dot1, scrollRanges[0]);
    updateDot(dot2, scrollRanges[1]);
    updateDot(dot3, scrollRanges[2]);
    updateDot(dot4, scrollRanges[3]);
    updateDot(dot5, scrollRanges[4]);
  }

  window.addEventListener('scroll', updateDotPositions);
  updateDotPositions(); // Initial position update for all dots
});


