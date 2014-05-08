var loged = false; // controle de log do usuário

$("#box").hide(); // esconde o chat
$(".chat-friend-list").hide();

//$(".chat-box").css("right","700px");

signIn(); // Loga
//signOut(); // Desloga
openListFriend();
randomFriends();

//Mostra o chat
$(".friend-chat").click(function(){
    $("#box").show();
});

//Gera os amigos da lista de amigos
function randomFriends(){    
    for(var i = 0; i < 5; i++){
        var id = i;
        
        var txt = '<a href="#" class="list-group-item friend-chat" data-userid="'+id+'">Mario da burrinha <span class="fa icon fa-user pull-right color-green"></span></a>';    
         $('.friend-list-group').append(txt);
    }
    
}

//Abre a lista de amigos se o usuário estiver logado (loged = true)
function openListFriend(){
    if(loged === true){
        $(".chat-friend-list").show();
    }
}

//contrala o envio das mensagens do chat
function message()
{
    document.getElementById("chatScreen").innerHTML += "<br>" +  document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
}

//Loga
function signIn(){
    //Deve-se usar as APIs para executar esta função
    loged = true;
}

//Desloga
function signOut(){
    //Deve-se usar as APIs para executar esta função
    loged = false;
}

//Controle do enter do chat
function buttonEnterPressed(){
    if (event.keyCode == 13) {
        this.message();
        return false;
    }else if(event.keyCode == 27){
        $("#box").hide();
    }
}
