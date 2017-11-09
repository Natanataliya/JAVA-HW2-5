function num(){
    var a;
    var b;
    var c;
    a=document.getElementById('inp1').value;
    b=document.getElementById('inp2').value;
    c=document.getElementById('inp3').value;
    a=parseInt(a);
    b=parseInt(b);
    c=parseInt(c);
    if(a>b){
        alert(a);
    }
    else if(b>c){
        alert(b);
    }
    else if (c>b){
        alert(c);
    }
    else if(a>c){
        alert(a);
    }
    else if(c>a){
        alert(c);
    }
    else{
        alert('');
    }
}