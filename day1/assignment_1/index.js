// let s = [0,0,0]


// function states(s){
//     if(s[0]==1){
//         alert("inner")
//     }else if(s[1]==1){
//         alert("middle")
//     }else{
//         alert("outer")
//     }
// }

// function refresh(s){
//     s = [0,0,0]
// }

// async function outer(){
//     // alert("hi inside outer circle c3")
//     await refresh(s)
//     s[0] = 0
//     s[1] = 0
//     s[2] = 1
//     console.log("hi inside outer")
//     await states(s)
// }

// async function inner(){
//     // alert("hi inside inner circle c1")
//     await refresh(s)
//     s[0] = 1
//     s[1] = 0
//     s[2] = 0
//     console.log("hi inside inner")
//     await states(s)
// }

// async function middle(){
//     // alert("hi inside middle circle c2")
//     await refresh(s)
//     s[0] = 0
//     s[1] = 1
//     s[2] = 0
//     console.log("hi inside middle")
//     await states(s)

// }

/////////////////////////////////////////////////////////
function outer(){
    alert("inside OUTER - C3 circle")
}

function inner(){
    alert("inside INNER - C1 circle")
}

function middle(){
    alert("inside MIDDLE - C2 circle")
}
/////////////////////////////////////////////////////////


