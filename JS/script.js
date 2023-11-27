$(document).ready(function () {
  // Select HTML elements
  const $navbar = $("ul"); // Selecting the navbar
  const $images = $(".box1, .box2, .box3, .box4, .box5, .box6"); // Selecting the images
  const $darkmode = $(".darkmode"); // Selecting the dark mode button
  const $lightmode = $(".sun"); // Selecting the light mode button

  // Function to activate dark mode
  $darkmode.click(function () {
    // Changing colors for dark mode
    $("body").css({ "background-color": "black", color: "#ffffff" });

    // Changing text style on hover for dark mode
    $("li").css({
      "-webkit-text-stroke": "1px grey",
      color: "transparent",
    });

    // Changing hover color for dark mode
    $("li").hover(
      function () {
        $(this).css("color", "white");
      },
      function () {
        $(this).css("color", "transparent");
      }
    );

    $(".sun").show(); // Displaying the light mode button
  });

  // Function to activate light mode
  $lightmode.click(function () {
    // Changing colors for light mode
    $("body").css({ "background-color": "white", color: "black" });
    $(".sun").hide(); // Hiding the light mode button

    // Changing text style on hover for light mode
    $("li").css({
      "-webkit-text-stroke": "1px #000000",
      color: "transparent",
    });

    // Changing hover color for light mode
    $("li").hover(
      function () {
        $(this).css("color", "black");
      },
      function () {
        $(this).css("color", "transparent");
      }
    );
  });

  // Event listeners for each clicked "<li>" element
  $("li").click(function () {
    const index = $(this).index(); // Getting the index of the clicked "<li>" element

    // Specific animations for navbar and images based on the clicked index
    const navbarAnimations = ["0%", "-8%", "-35%", "-60%", "-85%", "-100%"];
    const imagesAnimations = [
      ["5%", "85%", "165%", "245%", "325%", "405%"],
      ["-100%", "5%", "85%", "165%", "245%", "325%"],
      ["-200%", "-100%", "5%", "85%", "165%", "245%"],
      ["-300%", "-200%", "-100%", "5%", "85%", "165%"],
      ["-400%", "-300%", "-200%", "-100%", "5%", "85%"],
      ["-500%", "-400%", "-300%", "-200%", "-100%", "5%"],
    ];

    animateNavbar(navbarAnimations[index]); // Animating the navbar based on the clicked index
    animateImages(imagesAnimations[index]); // Animating the image based on the clicked index
  });

  // Function to animate the navbar
  function animateNavbar(animation) {
    $($navbar).animate({ top: animation }, "slow");
  }

  // Function to animate the images
  function animateImages(animation) {
    $images.each(function (index) {
      $(this).animate({ top: animation[index] }, "slow");
    });
  }
});
