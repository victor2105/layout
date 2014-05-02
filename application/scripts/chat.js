
  var x = "#box";
  $(x).hide();

  $(".friend-chat").click(function(){
    $("#box").show();
  });

  function message()
  {
    document.getElementById("chatScreen").innerHTML += "<br>" +  document.getElementById("textarea").value;
    document.getElementById("textarea").value = "";
    document.getElementById("chatScreen").scrollTop = document.getElementById("chatScreen").scrollHeight;
  }

  function buttonEnterPressed(){
    if (event.keyCode == 13) {
      this.message();
      return false;
    }else if(event.keyCode == 27){
      $(x).hide();
    }
  }