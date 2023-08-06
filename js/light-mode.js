// Light Mode

document.querySelector('.light-btn').addEventListener('click', () => {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('light');
  
    const btnToggleText = document.getElementById('light-btn');
    // const moonIcon = document.getElementById('fa-moon');
  
    if (bodyElement.classList.contains('light')) {
      localStorage.setItem('lightMode', 'enabled');
  
    //   btnToggleText.innerText = 'Light Mode';
      
    
    } else {
      localStorage.setItem('lightMode', 'disabled');
     
    //   btnToggleText.innerText = 'Light Mode';
    //   moonIcon.style.color = 'hsl(200, 15%, 8%)';
     
    }
  });
  
  if (localStorage.getItem('lightMode') == 'enabled') {
    document.body.classList.toggle('light');
  }

