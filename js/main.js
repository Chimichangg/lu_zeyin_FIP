(() => {
    
    let slider = document.querySelector('.mslider'),
        arrowRight = document.querySelector('.a-right'),
        arrowLeft = document.querySelector('.a-left'),
        caseIll = document.querySelector('#caseIll'),
        palletIll = document.querySelector('#palletIll'),
        caseText = document.querySelector('#caseText'),
        palletText = document.querySelector('#palletText'),
        selectorClassic = document.querySelector('#sl-txt-classic'),
        selectorEnergy = document.querySelector('#sl-txt-energy'),
        selectorZero = document.querySelector('#sl-txt-zero'),
        prdStck = document.querySelector('#moving-stck')
        ;


   
    function moveRight () {
        if (slider.style.right = `0vw`) {
        slider.style.right = `90vw`
        } else if (slider.style.right = `90vw`) {
        slider.style.right = `180vw`
        } else if (slider.style.right = `180vw`) {
        return
        }
    }


    function showCase () {
        caseText.classList.add('thick-bottom');
        palletText.classList.remove('thick-bottom');
        caseIll.classList.remove('hidden');
        palletIll.classList.add('hidden');
    }

    function showPallet () {
        palletText.classList.add('thick-bottom');
        caseText.classList.remove('thick-bottom');
        caseIll.classList.add('hidden');
        palletIll.classList.remove('hidden');

    }

    function moveSlider () {
        let moveTotal = 90 * this.dataset.offset;
        prdStck.style.bottom = `${moveTotal}vh`;

    }




    arrowRight.addEventListener('click',moveRight);
    caseText.addEventListener('click',showCase);
    palletText.addEventListener('click',showPallet);
    selectorClassic.addEventListener('click', moveSlider);
    selectorEnergy.addEventListener('click', moveSlider);
    selectorZero.addEventListener('click', moveSlider);

})();