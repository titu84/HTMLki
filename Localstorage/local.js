function grab(what){
    return document.querySelector(what)
}
function getJsonFromLocalStorage(key) {    
     return JSON.parse(localStorage.getItem(key)) 
}
function setObjectToLocalStorage(key, obj){
    localStorage.setItem(key, JSON.stringify(obj))
}
function setValueToLocalStorage(key, val){
    localStorage.setItem(key, val)
}
grab('#add').addEventListener('click',()=>{
   
    setValueToLocalStorage('a',true)
    setValueToLocalStorage('b',false)
    console.log(getJsonFromLocalStorage('a'))
    console.log(getJsonFromLocalStorage('b'))
});
grab('#get').addEventListener('click', ()=>{
    grab('#tu').innerHTML = getJsonFromLocalStorage('b');
})