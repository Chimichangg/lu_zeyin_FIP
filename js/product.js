(() => {
    
    let 
        overlay = document.querySelector('.prd-overlay'),
        nutFact = document.querySelector('#prod-des h4')
        
        ;


   
  

    function showOverlay () {
        /*overlay.style.transform = "translateX(0vw)" ;
        overlay.style.opacity = "1"*/
        overlay.classList.toggle('prd-moving')
    }


    nutFact.addEventListener('click', showOverlay);
})();