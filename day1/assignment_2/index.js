let arr = [[1,2,3],[4,5,6],[7,8,9]]

function display(){

}

function calculation(arr){
    let temp = 0;
    temp = arr[0][0] 
    arr[0][0] = arr[1][0]
    arr[1][0] = arr[2][0]
    arr[2][0] = arr[2][1]
    arr[2][1] = arr[2][2]
    arr[2][2] = arr[1][2]
    arr[1][2] = arr[0][2]
    arr[0][2] = arr[0][1]
    arr[0][1] = temp
    return arr;

}

async function getShift(){

    let arr_ans = await calculation(arr);
    document.getElementById("b-1").innerText = String(arr_ans[0][0])
    document.getElementById("b-1").innerText = arr_ans[0][0]
    document.getElementById("b-2").innerText = arr_ans[0][1]
    document.getElementById("b-3").innerText = arr_ans[0][2]
    document.getElementById("b-4").innerText = arr_ans[1][0]
    document.getElementById("b-6").innerText = arr_ans[1][2]
    document.getElementById("b-7").innerText = arr_ans[2][0]
    document.getElementById("b-8").innerText = arr_ans[2][1]
    document.getElementById("b-9").innerText = arr_ans[2][2]
}