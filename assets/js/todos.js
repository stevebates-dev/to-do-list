
function deleteButtonSetup () {
  //remove the current li if trash button pressed, 
  $("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut( 200, function () {
      $(this).remove();
    });
    e.stopPropagation();
  });
}

deleteButtonSetup ();


$("#todo-list").on("click", "li", function () {
  $(this).toggleClass("strike");
});

$(".fa-plus").click( function () {
  //hide/show new to-do input
  $("#new-todo").fadeToggle();
});

$("#new-todo").keypress(function(e){
    //if enter is pressed in text input
    if(e.keyCode === 13)
    {
        var trashButtonStr = '<span><i class="fa fa-trash-o fa-lg"></i></span>';
        var str = $(this).val();
        $("#todo-list").append('<li>' + trashButtonStr + 
        str + '</li>');
        $(this).val('');
        deleteButtonSetup ();
    }
});
