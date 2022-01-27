const Used = [""];

document.getElementById('btn').addEventListener("click", function(){
    if (Used.includes(document.getElementById('wrd').value) == false){
        Used.push(document.getElementById('wrd').value)
        document.getElementById('op').innerText = document.getElementById('wrd').value;
    }
    else{
        document.getElementById('op').innerText = "You've already Used this Word!"}
    ;
});