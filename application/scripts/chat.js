var loged = false; // controle de log do usuário

$("#box").hide(); // esconde o chat
$(".chat-friend").hide();

$(".friend-chat").click(function(){
    $("#box").show();
});

signIn(); // Loga
//signOut(); // Desloga
openListFriend();

function openListFriend(){
    if(loged === true){
        $(".chat-friend").show();
    }
}

function message()
{
    document.getElementById("chatScreen").innerHTML += "<br>" +  document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
}

function signIn(){
    //Deve-se usar as APIs para executar esta função
    loged = true;
}

function signOut(){
    //Deve-se usar as APIs para executar esta função
    loged = false;
}


function buttonEnterPressed(){
    if (event.keyCode == 13) {
        this.message();
        return false;
    }else if(event.keyCode == 27){
        $("#box").hide();
    }
}