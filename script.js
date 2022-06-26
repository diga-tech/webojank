$(document).ready(function () {
  $(".foryou").click(function () {
    $("a.kartu1").remove();
  });
  $(".itsme").click(function () {
    $("a.square-3-card").remove();
  });

  $(".toyou").click(function () {
    $("a.square-5-card").remove();
  });

  $(".support").click(function () {
    $("a.square-2-card").remove();
  });

  $(".itsyou").click(function () {
    $("a.square-4-card").remove();
  });
});
