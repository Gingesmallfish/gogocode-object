window.onload = function(){
    const loadText = document.querySelector('.loading-text')
    const bg = document.querySelector('.bg')
    let load = 0
    let timer = setInterval(blurring,30)
    function blurring (){
        load++
        if(load > 99)
            clearInterval(timer)
        loadText.innerText = `${load}%`
        loadText.style.opacity = scale(load,1)
        bg.style.filter =  `blur(${scale(load,30)}px)`
    }
    const scale = (num,min)=>(100-num)/100*min

}