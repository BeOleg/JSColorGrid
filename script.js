!(function(window, $){

var colorStore = function(){
  var root = this;
  root.color = null;

  return{
    getColor: function(){
      return root.color;
      console.log(color);
    },
    setColor: function(color){
      root.color = color
    }
  }
}

var cs = new colorStore();

function allowDropping(e) {
    if (e.preventDefault) e.preventDefault();
    return false;
}

function dropFn(el){
  $(el).attr('class', '');
  $(el).addClass(cs.getColor());
}

$(function(){
  /*allow dropzone*/
  $("div.grid ul > li").each( function( index, element ){
      $(this)[0].addEventListener('dragover', allowDropping, false);
      $(this)[0].addEventListener('drop', function(){
        dropFn($(this)[0]);
      }, false);
  });
  /*allow drag for colors*/
  $("ul.colors > li").each(function(){
    $(this).attr("draggable", true)
  });

  $("ul.colors > li").on('mousedown', function(e){
      var colorClass = $(this).attr('class');
      cs.setColor(colorClass);
  })
});


})(window, window.jQuery);
