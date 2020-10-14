//new_message
$(document).ready(function () {
  const send = $(".reply__column button");
  send.click(function () {
    const talk = $(".reply__column input[type=text]").val();
    if (talk == "") {
      send.attr("disabled", "flase");
    } else {
      $(".reply__column input[type=text]").val("");
      $(".message-row__content__new").append(
        '<div class="message__info">' +
          '<span class="message__bubble">' +
          talk +
          "</span>" +
          '<span class="message__time">21:27</span>' +
          "</div>"
      );
    }
    return false;
  });
});
