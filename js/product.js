(() => {
    
    let 
        overlay = document.querySelector('.prd-overlay'),
        nutFact = document.querySelector('#prod-des h4'),
        prdBeneFirst = document.querySelector('#first-circle'),
        prdBeneSecond = document.querySelector('#second-circle'),
        nutImg = document.querySelector('.prd-overlay img')
    ;

    const prdBenefits = [
        [`A new era for a classic taste`,`Perfect combination of profile`],

        [`Tackling Stress & Tiredness`,`Herbal Infused Caffeinated`],

        [`Proudly Organic and Vegan`,`No compromise in taste`]
    ]
   
  

    function showOverlay () {
        /*overlay.style.transform = "translateX(0vw)" ;
        overlay.style.opacity = "1"*/
        overlay.classList.toggle('prd-moving');

        prdBeneFirst.textContent = prdBenefits[this.dataset.offset][0];
        prdBeneSecond.textContent = prdBenefits[this.dataset.offset][1];
        nutImg.src = `images/nutrition-fact-${this.dataset.offset}.svg`;

    }


    nutFact.addEventListener('click', showOverlay);
})();