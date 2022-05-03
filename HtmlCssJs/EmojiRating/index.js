const stars = document.querySelectorAll('.fa-star')

let ind=0

stars.forEach((s, i) => {
    s.addEventListener('click',()=>{
        if(i>ind){
            upToThisStar(i)
            ind = i
        }
        else{
            upToThisStar2(i)
            ind = i
        }

        const faces = document.querySelectorAll('.face')
        faces.forEach(e =>{
            e.style.transform = `translate(${-1.1*i}em)`
            console.log(e)
        })
    })
})

function upToThisStar(n){
    for(i=0;i<=n;i++){
        stars[i].classList.add('active')
    }
}

function upToThisStar2(ix){
    for(i=ix+1;i<=ind;i++){
        stars[i].classList.remove('active')
    }
}
