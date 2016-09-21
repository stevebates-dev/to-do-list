var listItemSetup = (function (){

  return {
    init : function () {
      //hide last new danger button
      $(".btn-danger").last().hide();

      //set parent li to height of child trash button
      $("li").last().css("height", $(".btn-danger").outerHeight());

      //add strikethrough on li click
      $("li").last().click(function () {
        $(this).toggleClass("strike");
      });

      //show trash button on li hover, hide on hover remove
      $("li").last().hover(function () {
        $(this).children("a").show();
        $(this).css("padding", "0px");
      }, 
      function () {
        $(this).children("a").hide();
        $(this).css("padding", "5px");
      });

      //remove the current li if trash button pressed, 
      $(".btn-danger").last().on("click", function (e) {
        $(this).parent().remove();
        e.stopPropagation();
      });

    }
  };
})();

var plusButtonHandler = (function () {

  var trashButtonStr = '<a class="btn btn-danger" display="none" href="#"><i class="fa fa-trash-o fa-lg"></i></a>';

  return {
    init : function  () {

      $("#plus-button").click( function () {
        //hide/show new to-do input
        $("#new-todo").toggle();
      });

      $("#new-todo").keypress(function(e){
          //if enter is pressed in text input
          if(e.keyCode == 13)
          {
              $("#todo-list").append('<li class="list-group-item">' + trashButtonStr + 
                '<span id="to-do-span">' + $(this).val() + '</span></li>');
              $(this).val('');
              listItemSetup.init();
          }
      });
    }
  };
})();


plusButtonHandler.init();
