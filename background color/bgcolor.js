
// let colorEle = document.getElementById("color")
// colorEle.oninput = function(){
//     console.log(this.value)
    
// }
// colorEle.addEventListener('input', function(){
//     document.body.style.background=this.value
// })


function bgChange(){
    let s = "0123456789abcdef";
    let color ='#'

    for(let i =0;i<6;i++){

        let index = Math.floor(Math.random()*16)

        color = color+s[index]

    }
    document.body.style.background = color
}
setInterval(bgChange,1000)
