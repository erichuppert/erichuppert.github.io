$(document).ready(function(){
  $('.circle').click(function(){
    var target = $(this);
    var parentContainer = target.closest(".question-wrap");
    parentContainer.find(".circle").removeClass("selected");
    var value = parseInt(target.text());
    parentContainer.find("input").val(value);
    parentContainer.find(".check").removeClass("hide");
    target.addClass("selected");
    if (allComplete()) {
      showScore();
    }
  })

  function allComplete(){
    var countSelected = $('.circle.selected').length;
    var totalCount = $('.question-wrap').length;
    return totalCount == countSelected;
  }

  function showScore() {
    var score = 0;
    $("input").each(function(){
      score += parseInt(this.value);
    })
    $("#number").text(score);
    $('.result').removeClass('hide');
  }
})
