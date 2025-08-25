/* JavaScript */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Application loaded');

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  });

  window.onerror = function(message, source, lineno, colno, error) {
    console.error(`Error occurred: ${message} at ${source}:${lineno}:${colno}`);
    // Potentially send error details to a logging service
  };
});
