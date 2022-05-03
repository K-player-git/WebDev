console.log("tictactoe")

let music = new Audio("others/music.mp3")
let tune = new Audio("others/ting.mp3")
let gameover = new Audio("others/gameover.mp3")
let t = "X"
const changeTurn = ()=>{
    return (t ==="X"? "O" : "X")
}

let b = false

const checkWin = ()=>{
    let btext = document.querySelectorAll(".boxtext")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    

    let winner = ""
    wins.forEach(e => {
        if(btext[e[0]].innerText !== "" && (btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[1]].innerText === btext[e[2]].innerText)){
            winner = btext[e[0]].innerText
            document.querySelector(".info").parentElement.innerHTML = "Winner is "+ winner
            b = true


            imgbox = document.querySelector(".imgbox")
            imgbox.children[0].style.width = "100px"
        }
    })    

}

let btn = document.getElementsByClassName("reset")
btn[0].addEventListener('click',() => {
    let btext = document.getElementsByClassName("boxtext")
    Array.from(btext).forEach(e => {
        e.innerText = ""
    })
})

let boxes = document.getElementsByClassName("box")
Array.from(boxes, e => {
    console.log(e)
    e.addEventListener('click',(event)=>{
        tune.play()
        e.childNodes[0].innerText = t
        t = changeTurn()
        checkWin()
        if(!b)
            document.querySelector('.info').innerText = t
    })
})
