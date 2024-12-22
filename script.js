document.getElementById('check-button').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const resultMessage = document.getElementById('result-message');
  
    // Get the value of the input field
    const inputValue = inputField.value.trim().toLowerCase();
  
    // Check the input value
    if (inputValue === 'kanishka' || inputValue === 'kani') {
      resultMessage.textContent = '🫠';
    } else {
      resultMessage.textContent = 'who you';
      resultMessage.style.color = 'red';
    }
  
    // Clear the input field
    inputField.value = '';
  });
  