// Create snowflakes
const snowfallContainer = document.getElementById('snowfall');
for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.top = `${Math.random() * 100}vh`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.width = `${Math.random() * 5}px`;
  snowflake.style.height = `${Math.random() * 5}px`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`;
  snowfallContainer.appendChild(snowflake);
  function showTree() {
    document.getElementById('tree').style.display = 'block';
    document.getElementById('message').style.display = 'block';
    document.getElementById('clickButton').style.display = 'none';
  }
}
                                                                           