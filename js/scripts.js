$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });


  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("img#cat").click(function() {
    $("ul#user").prepend("<li>meow</li>");
    $("ul#webpage").prepend("<li>bork</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

    $("img#dog").click(function() {
    $("ul#user").prepend("<li>meow</li>");
    $("ul#webpage").prepend("<li>bork</li>");
    $("ul#webpage").after("<img src='img/dog2.jpeg'>");
    $("ul#webpage").siblings("img").first().click(function() {
      $(this).remove();
    });
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});