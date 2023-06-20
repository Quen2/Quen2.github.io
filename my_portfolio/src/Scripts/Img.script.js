window.addEventListener('load', () => {
        let anim = document.querySelector('.anim');
        
        let height = anim.clientHeight 
        let width  = anim.clientWidth
        
        anim.addEventListener('mousemove', handleMove)
        
        function handleMove (e)
        {
            const xVal = e.layerX
            const yVal = e.layerY
        
            const yRotate = 30 * ((xVal - width /2 ) / width)
            const xRotate = -30 *((yVal - height /2) / height)
        
            const style = `perspective(500px) scale(1.05) rotateX(${xRotate}deg) rotateY(${yRotate}deg)`
        
            anim.style.transform = style
        }
    
        anim.addEventListener('mouseleave' , () => {
            anim.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        })
    
        anim.addEventListener('mousedown', () => {
            anim.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        })
    
        anim.addEventListener('mouseup' ,() => {
            anim.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        })
})