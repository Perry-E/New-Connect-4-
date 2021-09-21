const main = () => {
  const $container = $(".container");
  const $table = $("<table>").addClass("table");
  $container.append($table);

  //Create tr and td
  for (let i = 1; i < 7; i++) {
    const $tr = $("<tr>").addClass("tr");
    $table.append($tr);
    for (let j = 1; j < 8; j++) {
      const $td = $("<td>")
        .addClass("td empty")
        .addClass("column" + j)
        .text(j);
      $tr.append($td);
    }
  }

  //TODO: Fuction to swap player turn
  //function to switch players
  //   const switchPlayer = (currentPlayer) => {
  //     if (currentPlayer === "p1") {
  //       player = "p2";
  //     } else {
  //       player = "p1";
  //     }
  //   };

  let player = "p1";

  //if/else statements to alternate between player 1 and 2
  const $td = $(".td");
  for (let i = 0; i < $td.length; i++) {
    //console.log($td[i]);
    const $cellId = $($td[i]).attr("id", "td" + i);
    console.log($cellId);
    $cellId.on("click", () => {
      console.log(player);
      console.log("clicked", $cellId);
      if (player === "p1") {
        $cellId.removeClass("empty").addClass("red");
        player = "p2";
      } else {
        $cellId.removeClass("empty").addClass("yellow");
        player = "p1";
      }
    });
  }

  //   const $td = $(".td");
  //   for (let i = 0; i < $td.length; i++) {
  //     //console.log($td[i]);
  //     const $cellId = $($td[i]).attr("id", "td" + i);
  //     console.log($cellId);
  //     if (player === "p1") {
  //       $cellId.on("click", () => {
  //         console.log(player);
  //         console.log("clicked", $cellId);
  //         $cellId.removeClass("empty").addClass("red");
  //       });
  //       player = "p2";
  //     } else {
  //       $cellId.on("click", () => {
  //         console.log(player);
  //         console.log("clicked", $cellId);
  //         $cellId.removeClass("empty").addClass("yellow");
  //       });
  //       player = "p1";
  //     }
  //   }

  //   if (player === "p1") {
  //     const $td = $(".td");
  //     for (let i = 0; i < $td.length; i++) {
  //       //console.log($td[i]);
  //       const $cellId = $($td[i]).attr("id", "td" + i);
  //       //console.log($cellId);

  //       $cellId.on("click", () => {
  //         console.log("clicked", $cellId);
  //         $cellId.removeClass("empty").addClass("red");
  //         console.log(player);
  //       });
  //     }
  //     switchPlayer("p1");
  //   } else {
  //     const $td = $(".td");
  //     for (let i = 0; i < $td.length; i++) {
  //       //console.log($td[i]);
  //       const $cellId = $($td[i]).attr("id", "td" + i);
  //       //console.log($cellId);

  //       $cellId.on("click", () => {
  //         console.log("clicked", $cellId);
  //         $cellId.removeClass("empty").addClass("yellow");
  //         console.log("Does it ever reach p2");
  //       });
  //     }
  //     switchPlayer("p2");
  //   }

  //TODO: Functions for how to win the game
  //Function to check if colors match
  const colorCheck = (one, two, three, four) => {
    if (one == two && two == three && three == four && one != "white") {
      return true;
    }
  };
  //vertical function
  const $verticalWin = () => {
    for (let column = 1; column < 8; column++) {
      //column < 3 because only a max of three answers possible in a column
      for (let column = 0; column < 3; column++) {}
    }
  };

  //horizontal function

  //diagonal function
};

$(main);
