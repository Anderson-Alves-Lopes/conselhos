

fetch('https://api.adviceslip.com/advice', {method: 'GET'})

.then(response => response.json())
.then(function(json){
   
    let container = document.querySelector('.container');
   
    container.innerHTML = `
      <div class="box-conselho">
         <h2>${json.slip.advice}</h2>

      </div>
    `;
   
    
});