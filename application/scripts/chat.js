var loged = false; // controle de log do usuário
var chatOpened = 0; // Número de chats abertos
var dist = 300;

//$("#box1").hide(); // esconde o chat
$(".chat-friend-list").hide();

//$(".chat-box").css("right","700px");

signIn(); // Loga
//signOut(); // Desloga
openListFriend();
//randomFriends();

//Mostra o chat
$(".friend-chat").click(function(){
    addNewChat();
    $("#box1").show();
});



//Gera os amigos da lista de amigos
function randomFriends(){    
    for(var i = 0; i < 5; i++){
        var id = i;

        var txt = '<a href="#" class="list-group-item friend-chat" data-userid="'+id+'">Mario da burrinha <span class="fa icon fa-user pull-right color-green"></span></a>';    
        $('.friend-list-group').append(txt);
    }
}

//adiciona uma nova tela de chat
function addNewChat(){
    chatOpened++;
    var dist = chatOpened*320;
    var txtchat = '<div id="box'+ chatOpened +'" class="chat-box" style="right:'+dist+'px;">'+
        '<input type="checkbox" />'+
        '<label data-expanded="Close Chatbox" data-collapsed="Open Chatbox"></label>'+
        '<div class="chat-box-content">'+
        '<div id="chatScreen" class="well well-lg chat-screen" >'+
        '</div>'+
        '<div class="form-group">'+
        '<label class="control-label">Input addons</label>'+
        '<div class="input-group chat-imput" style="width: 100%;">'+
        '<input id="textarea" type="text" class="form-control">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';

    $('#listchat').html($('#listchat').html() + txtchat);
    //append(txtchat);
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
    var text = "";
    myurl = 'http://localhost:1337/messages/sendMessage?username1=emerson&username2=jean&msg='+ document.getElementById("textarea").value ;
    $.get(myurl,function(data, status){
        //console.log(data);
        
       for(var i=0; i < data.length;i++){
           console.log(data[i]);
            text += data[i] + "<br>";
       }
       document.getElementById("chatScreen").innerHTML += text;
       document.getElementById("textarea").value = "";
       document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
    });
    
    /* var request = require('request');
    request('http://localhost:1337/messages/sendMessage?username1=emerson&username2=admin&msg=asdf', function (error, response, body) {
        if (!error && response.statusCode == 200) { 

            console.log(body);

        } else {
            return res.send(404, 'recurso não encontrado');
        }
    });*/
    
    
    
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
$("#box1").keydown(function(){
    if (event.keyCode === 13) {
        message();
    }else if(event.keyCode === 27){
        $(this).hide();
    }
});
