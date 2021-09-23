const main = () => {
  const $container = $(".container").addClass("hide show");
  const $table = $("<table>").addClass("table hide show");
  $container.append($table);
  const $h3 = $("h3")
    .addClass("playerName hide")
    .css("color", "red")
    .attr("id", "h3title");

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Creating board
  ///////////////////////////////////////////////////////////////////////////////////////
  //Create tr and td
  for (let row = 1; row < 7; row++) {
    const $tr = $("<tr>")
      .addClass("tr")
      .attr("id", "tr" + row);
    $table.append($tr);
    for (let col = 1; col < 8; col++) {
      const $td = $("<td>")
        .addClass("td empty")
        .addClass("column" + col)
        // .text(col)
        .attr("data-col", col)
        .attr("data-row", row);
      $tr.append($td);
    }
  }
  for (let row = 1; row < 2; row++) {
    const $tr = $("<tr>").addClass("tr");
    $table.append($tr);
    for (let col = 1; col < 8; col++) {
      const $td = $("<td>").addClass("td base taken");
      $tr.append($td);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Functions for how to win the game
  ///////////////////////////////////////////////////////////////////////////////////////
  const $td = $(".td");
  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO horizontal function
  ///////////////////////////////////////////////////////////////////////////////////////
  const $horizontalWin = () => {
    //for loop the 7 columns
    //console.log($td);
    //console.log($td.hasClass("column1"));
    const $tableRow = $(".tr");
    //console.log($column1);
    for (let row = 0; row < $tableRow.length; row++) {
      //console.log($tableRow[row]);
      for (let col = 0; col < 4; col++) {
        const firstHorizontal = $tableRow[row].children[col];
        //console.log("First", firstHorizontal); //count from cell 1-4
        const secondHorizontal = $tableRow[row].children[col + 1];
        // console.log("Second", secondHorizontal); //count from cell 2-5
        const thirdHorizontal = $tableRow[row].children[col + 2];
        // console.log(thirdHorizontal); //count from cell 3-6
        const forthHorizontal = $tableRow[row].children[col + 3];
        // console.log(forthHorizontal); //count from cell 4-7
        if (
          $(firstHorizontal).hasClass("red") &&
          $(secondHorizontal).hasClass("red") &&
          $(thirdHorizontal).hasClass("red") &&
          $(forthHorizontal).hasClass("red")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        } else if (
          $(firstHorizontal).hasClass("yellow") &&
          $(secondHorizontal).hasClass("yellow") &&
          $(thirdHorizontal).hasClass("yellow") &&
          $(forthHorizontal).hasClass("yellow")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        }
      }
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO vertical function
  ///////////////////////////////////////////////////////////////////////////////////////
  const $verticalWin = () => {
    const $tableRow = $(".tr");
    for (let column = 0; column < $tableRow.length; column++) {
      //console.log("first", $("td")[column]);
      const first = $("td")[column];
      //console.log("second", $("td")[column+7]);
      //console.log("third", $("td")[column+14]);
      //console.log("forth", $("td")[column+21]);
      //console.log("fifth", $("td")[column+28]);
      //console.log("sixth", $("td")[column+35]);
      for (let row = 0; row < 4; row++) {
        //console.log(($("tr")[row]).children[column]);
        const firstVertical = $("tr")[row].children[column];
        //console.log(($("tr")[row+1]).children[column]);
        const secondVertical = $("tr")[row + 1].children[column];
        //console.log(($("tr")[row+2]).children[column]);
        const thirdVertical = $("tr")[row + 2].children[column];
        //console.log(($("tr")[row+3]).children[column]);
        const forthVertical = $("tr")[row + 3].children[column];
        if (
          $(firstVertical).hasClass("red") &&
          $(secondVertical).hasClass("red") &&
          $(thirdVertical).hasClass("red") &&
          $(forthVertical).hasClass("red")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        } else if (
          $(firstVertical).hasClass("yellow") &&
          $(secondVertical).hasClass("yellow") &&
          $(thirdVertical).hasClass("yellow") &&
          $(forthVertical).hasClass("yellow")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        }
      }
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO diagonal function (\)
  ///////////////////////////////////////////////////////////////////////////////////////
  const $backDiagonalWin = () => {
    const $tableRow = $(".tr");
    for (let column = 0; column < 7; column++) {
      //console.log("first", $("td")[column]);
      const first = $("td")[column];
      //console.log("second", $("td")[column+7]);
      //console.log("third", $("td")[column+14]);
      //console.log("forth", $("td")[column+21]);
      //console.log("fifth", $("td")[column+28]);
      //console.log("sixth", $("td")[column+35]);
      for (let row = 0; row < 4; row++) {
        //console.log(($("tr")[row]).children[column]);
        const firstDiagonal = $("tr")[row].children[column];
        //console.log(($("tr")[row+1]).children[column+1]);
        const secondDiagonal = $("tr")[row + 1].children[column + 1];
        //console.log(($("tr")[row+2]).children[column+2]);
        const thirdDiagonal = $("tr")[row + 2].children[column + 2];
        //console.log(($("tr")[row+3]).children[column+3]);
        const forthDiagonal = $("tr")[row + 3].children[column + 3];
        if (
          $(firstDiagonal).hasClass("red") &&
          $(secondDiagonal).hasClass("red") &&
          $(thirdDiagonal).hasClass("red") &&
          $(forthDiagonal).hasClass("red")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        } else if (
          $(firstDiagonal).hasClass("yellow") &&
          $(secondDiagonal).hasClass("yellow") &&
          $(thirdDiagonal).hasClass("yellow") &&
          $(forthDiagonal).hasClass("yellow")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        }
      }
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO diagonal function (/)
  ///////////////////////////////////////////////////////////////////////////////////////
  const $forwardDiagonalWin = () => {
    const $tableRow = $(".tr");
    for (let column = 0; column < 7; column++) {
      //console.log("first", $("td")[column]);
      const first = $("td")[column];
      //console.log("second", $("td")[column+7]);
      //console.log("third", $("td")[column+14]);
      //console.log("forth", $("td")[column+21]);
      //console.log("fifth", $("td")[column+28]);
      //console.log("sixth", $("td")[column+35]);
      for (let row = 0; row < 4; row++) {
        //console.log(($("tr")[row]).children[column]);
        const firstDiagonal = $("tr")[row].children[column];
        //console.log(($("tr")[row+1]).children[column-1]);
        const secondDiagonal = $("tr")[row + 1].children[column - 1];
        //console.log(($("tr")[row+2]).children[column-2]);
        const thirdDiagonal = $("tr")[row + 2].children[column - 2];
        //console.log(($("tr")[row+3]).children[column-3]);
        const forthDiagonal = $("tr")[row + 3].children[column - 3];
        if (
          $(firstDiagonal).hasClass("red") &&
          $(secondDiagonal).hasClass("red") &&
          $(thirdDiagonal).hasClass("red") &&
          $(forthDiagonal).hasClass("red")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        } else if (
          $(firstDiagonal).hasClass("yellow") &&
          $(secondDiagonal).hasClass("yellow") &&
          $(thirdDiagonal).hasClass("yellow") &&
          $(forthDiagonal).hasClass("yellow")
        ) {
          createModal(`PLAYER ${player} WON!`);
          $("h3").remove();
        }
      }
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Fuction to swap player turn
  ///////////////////////////////////////////////////////////////////////////////////////
  let player = "1";
  $h3.text(`PLAYER ${player}`);

  //if/else statements to alternate between player 1 and 2
  for (let i = 0; i < $td.length; i++) {
    //console.log($td[i]);
    const $cellId = $($td[i]).attr("id", "td" + i);
    //console.log($cellId);

    $cellId.on("click", () => {
      console.log(player);
      console.log("clicked", $cellId);

      if (
        player === "1" &&
        $cellId.hasClass("empty") &&
        $($td[i + 7]).hasClass("base")
      ) {
        $cellId.removeClass("empty").addClass("red base");

        if (
          $horizontalWin() === true ||
          $verticalWin() === true ||
          $backDiagonalWin() === true ||
          $forwardDiagonalWin() === true
        ) {
        } else {
          player = "2";
          $h3.text(`PLAYER ${player}`).css("color", "yellow");
        }
      } else if (
        player === "2" &&
        $cellId.hasClass("empty") &&
        $($td[i + 7]).hasClass("base")
      ) {
        $cellId.removeClass("empty").addClass("yellow base");
        if (
          $horizontalWin() === true ||
          $verticalWin() === true ||
          $backDiagonalWin() === true ||
          $forwardDiagonalWin() === true
        ) {
        } else {
          player = "1";
          $h3.text(`PLAYER ${player}`).css("color", "red");
        }
      } else {
        createModal("PLEASE SELECT A VALID SLOT");
      }
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Creating a modal
  ///////////////////////////////////////////////////////////////////////////////////////
  const createModal = (phrase) => {
    // Get the modal
    const modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    const $paragraph = $("<p>").text(phrase);
    $(".modal-content").append($paragraph);
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
      $paragraph.remove();
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        $paragraph.remove();
      }
    };
  };

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Start button
  ///////////////////////////////////////////////////////////////////////////////////////
  const createStartButton = (text) => {
    const div = $("<div>").addClass("col-lg-3 col-md-4 col-sm-4");
    const menuButton = $("<button>")
      .addClass("btn btn-design5 hideButton showButton")
      .attr("id", "startButton")
      .text(text);
    $("#forButtons").append(menuButton);
    $("body").append(div);
  };
  createStartButton("START GAME");

  $("#startButton").on("click", () => {
    $($container).removeClass("hide");
    $($table).removeClass("hide");
    $("#reset").removeClass("hide");
    $("#h3title").removeClass("hide");
    $("#list").removeClass("hide");
    $("#instructButton").addClass("hide");
    $("#startButton").addClass("hide");
    $("#continueButton").addClass("hide");
    location.reload();
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Continue button
  ///////////////////////////////////////////////////////////////////////////////////////
  const createContinueButton = (text) => {
    const div = $("<div>").addClass("col-lg-3 col-md-4 col-sm-4");
    const menuButton = $("<button>")
      .addClass("btn btn-design5 hideButton showButton")
      .attr("id", "continueButton")
      .text(text);
    $("#forButtons").append(menuButton);
    $("body").append(div);
  };
  createContinueButton("CONTINUE GAME");

  $("#continueButton").on("click", () => {
    if ($(".td").hasClass("red") || $(".td").hasClass("yellow")) {
      $($container).removeClass("hide");
      $($table).removeClass("hide");
      $("#reset").removeClass("hide");
      $("#h3title").removeClass("hide");
      $("#list").removeClass("hide");
      $("#instructButton").addClass("hide");
      $("#startButton").addClass("hide");
      $("#continueButton").addClass("hide");
    } else {
      return createModal("NO AVAILABLE GAMES TO CONTINUE");
    }
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Instructions button
  ///////////////////////////////////////////////////////////////////////////////////////
  const createInstructButton = (text) => {
    const div = $("<div>").addClass("col-lg-3 col-md-4 col-sm-4");
    const menuButton = $("<button>")
      .addClass("btn btn-design5 hideButton showButton")
      .attr("id", "instructButton")
      .text(text);
    $("#forButtons").append(menuButton);
    $("body").append(div);
  };
  createInstructButton("HOW TO PLAY");

  $("#instructButton").on("click", () => {
    createModal(
      "Connect four discs in a row to win! (Either horizontally / vertically / diagonally)"
    );
  });

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Return button
  ///////////////////////////////////////////////////////////////////////////////////////
  const createReturnButton = () => {
    const div = $("<div>").addClass("col-lg-3 col-md-4 col-sm-4");
    const menuButton = $("<button>")
      .addClass("btn btn-design5 hide")
      .attr("id", "returnButton")
      .text("RETURN TO FRONT PAGE");
    $(div).append(menuButton);
    $("#first").append(div);
  };
  createReturnButton();

  const returnMainPage = () => {
    $("#returnButton").on("click", () => {
      $($container).addClass("hide");
      $($table).addClass("hide");
      $("#reset").addClass("hide");
      $("#h3title").addClass("hide");
      $("#instructButton").removeClass("hide");
      $("#startButton").removeClass("hide");
      $("#continueButton").removeClass("hide");
      $("#list").addClass("hide");
    });
  };
  returnMainPage();

  ///////////////////////////////////////////////////////////////////////////////////////
  //TODO: Reset button
  ///////////////////////////////////////////////////////////////////////////////////////
  const createResetButton = () => {
    const div = $("<div>").addClass("col-lg-3 col-md-4 col-sm-4");
    const menuButton = $("<button>")
      .addClass("btn btn-design5 hide")
      .attr("id", "reset")
      .text("RESET GAME");
    $(div).append(menuButton);
    $("#second").append(div);
  };
  createResetButton();

  // const resetButton = $("<button>").attr("id", "reset").text("Reset Game").addClass("hide show");
  // $(".container").append(resetButton);
  const restart = () => {
    $("#reset").on("click", () => {
      location.reload();
    });
    $($container).removeClass("hide");
    $($table).removeClass("hide");
    $("#reset").removeClass("hide");
    $("#h3title").removeClass("hide");
    $("#continueButton").addClass("hide");
    $("#instructButton").addClass("hide");
    $("#startButton").addClass("hide");
  };
  restart();
  
};
$(main);
