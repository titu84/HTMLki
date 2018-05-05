
//zadanie 1
// let info = document.querySelector('#info')
// document.addEventListener('mouseover', (e)=>{
//     info.innerHTML = e.clientX+','+ e.clientY
//     console.log(e)
// })
// document.addEventListener('mousemove', (e)=>{
//     info.innerHTML = e.clientX+','+ e.clientY  
// })
//zadanie 2
// function inform(e){
//     info.innerHTML = e.type +', '+ e.timeStamp  
//     console.log(e.type +', '+ e.timeStamp)
// }
// document.addEventListener('click', (e)=>{
//     inform(e)
// })
// document.addEventListener('dbclick', (e)=>{
//     inform(e)
// })
// document.addEventListener('wheel', (e)=>{
//     inform(e) 
// })
// document.addEventListener('mousedown', (e)=>{
//     inform(e) 
// })
// document.addEventListener('mouseup', (e)=>{
//     inform(e)  
// })

//zadanie 3
let dragged

document.addEventListener('dragstart', (e)=>{
    dragged = e.target 
},false)
document.addEventListener('dragover', (e)=>{
    e.preventDefault()
},false)
document.addEventListener('drop', (e) =>{
    e.preventDefault()
     if (e.target.className == 'area'){
        dragged.parentNode.removeChild(dragged)
        let left = e.layerX - 10
        let top = e.layerY - 10
        dragged.style.left = left + 'px'
        dragged.style.top = top + 'px'
        e.target.appendChild(dragged)    
     }
},false)