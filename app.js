const main = () => {
  const $container = $(".container");
  const $table = $("<table>").addClass("table");
  $container.append($table);

  //Create tr and td
  for (let row = 1; row < 7; row++) {
    const $tr = $("<tr>").addClass("tr");
    $table.append($tr);
    for (let col = 1; col < 8; col++) {
      const $td = $("<td>")
        .addClass("td empty")
        .addClass("column" + col)
        .text(col)
        .attr('data-col', col)
        .attr('data-row', row);
      $tr.append($td);
    }
  }
  for (let row = 1; row < 2; row++) {
    const $tr = $("<tr>").addClass("tr");
    $table.append($tr);
    for (let col = 1; col < 8; col++) {
      const $td = $("<td>").addClass("td base taken")
      $tr.append($td);
    }
  }

  //TODO: Functions for how to win the game
  const $td = $(".td");
  //Function to check if colors match
  //   const colorCheck = (one, two, three, four) => {
  //     return one === two && two === three && three === four && one !== ".empty";
  //   };
  //////////////////////////////////////////////////////////////////
  //horizontal function
  //   const $horizontalWin = () => {
  //     //for loop the 7 columns
  //     //console.log($td);
  //     //console.log($td.hasClass("column1"));
  //     const $tableRow = $(".tr");
  //     //console.log($column1);
  //     for (let row = 0; row < $tableRow.length; row++) {
  //       //console.log($tableRow[row]);
  //       for (let col = 0; col < 4; col++) {
  //         if (
  //           colorCheck(
  //             $tableRow[row].children[col],
  //             $tableRow[row].children[col + 1],
  //             $tableRow[row].children[col + 2],
  //             $tableRow[row].children[col + 3]
  //           )
  //         ) {
  //           return true;
  //         }
  //       }
  //     }
  //   }; $horizontalWin();

  ////////////////////////////////////////////////////////////////////
  //horizontal function
  const $horizontalWin = () => {
    //for loop the 7 columns
    //console.log($td);
    //console.log($td.hasClass("column1"));
    const $tableRow = $(".tr");
    //console.log($column1);
    for (let row = 0; row < $tableRow.length; row++) {
      //console.log($tableRow[row]);
      for (let col = 0; col < 4; col++) {
        console.log($tableRow[row].children[col]); //count from 1-4
        const firstHorizontal = $tableRow[row].children[col];
        //console.log($tableRow[row].children[col+1]) //count from 2-5
        const secondHorizontal = $tableRow[row].children[col + 1];
        //console.log($tableRow[row].children[col+2]) //count from 3-6
        const thirdHorizontal = $tableRow[row].children[col + 2];
        //console.log($tableRow[row].children[col+3]) //count from 4-7
        const forthHorizontal = $tableRow[row].children[col + 3];
        if ($(firstHorizontal).hasClass("red")) {
          return alert("Player 1 wins!");
        } else if ($(secondHorizontal).hasClass("red")) {
          return alert("Player 1 wins!");
        } else if ($(thirdHorizontal).hasClass("red")) {
          return alert("Player 1 wins!");
        } else if ($(forthHorizontal).hasClass("red")) {
          return alert("Player 1 wins!");
        }
      }
    }
  };
  //TODO if .column1 === .2 === .3 === .4????

  /////////////////////////////////////////////////
  //horizontal function

  //diagonal function

  //TODO: Fuction to swap player turn
  //////////////////////////////////////////
  let player = "p1";

  //if/else statements to alternate between player 1 and 2
  for (let i = 0; i < $td.length; i++) {
    //console.log($td[i]);
    const $cellId = $($td[i]).attr("id", "td" + i);
    console.log($cellId);
    $cellId.on("click", () => {
      console.log(player);
      console.log("clicked", $cellId);
      if (player === "p1" && $cellId.hasClass("empty") && $($td[i+7]).hasClass("base")) {
        $cellId.removeClass("empty").addClass("red base");
        player = "p2";
      } else if (player === "p2" && $cellId.hasClass("empty") && $($td[i+7]).hasClass("base")) {
        $cellId.removeClass("empty").addClass("yellow base");
        player = "p1";
      } else {
          alert("Please select a valid slot");
      }
    }); 
  }
  


//   let player = "p1";
//   const $tableRow = $(".tr");
//   //if/else statements to alternate between player 1 and 2
//   for (let i = 0; i < $tableRow.length; i++) {
//     //console.log($td[i]);
//     const $cellId = $($td[i]).attr("id", "td" + i);
//     //console.log($cellId);
//     $cellId.on("click", () => {
//       console.log(player);
//       console.log("clicked", $cellId);
//       for (let row = $tableRow.length; row > -1; row--) {
//         console.log($tableRow[row]);
//           if (player === "p1" && $cellId.hasClass("empty")) {
//             $cellId.removeClass("empty").addClass("red");
//             player = "p2";
//         } else if (player === "p2" && $cellId.hasClass("empty")) {
//             $cellId.removeClass("empty").addClass("yellow");
//             player = "p1";
//         }
//       }
//     });

//   }
  
  ///////////////////////////////////////////////
  //TODO
  //   function changeColor(event){
  //       // Get clicked column index
  //       const $tableRow = $(".tr");
  //       let column = event.target.cellIndex;
  //       let row = [];

  //       for (i = 5; i > -1; i--){
  //           if ($tableRow[i].children[column].style.backgroundColor == 'white'){
  //               row.push($tableRow[i].children[column]);
  //               if (player === "p1"){
  //                   row[0].style.backgroundColor = 'red';
  //                   return player = "p2";
  //                 }
  //             }else if (player === "p2"){
  //                 row[0].style.backgroundColor = 'yellow';
  //                 return player = "p1";
  //             }

  //         }
  //     }

  //     Array.prototype.forEach.call($td, (cell) => {
  //         $(cell).on("click", changeColor);
  //         cell.style.backgroundColor = "white";
  //     });

  //TODO

  // const $td = $(".td");
  // for (let i = 0; i < $td.length; i++) {
  //   //console.log($td[i]);
  //   const $cellId = $($td[i]).attr("id", "td" + i);
  //   console.log($cellId);
  //   if (player === "p1") {
  //     $cellId.on("click", () => {
  //       console.log(player);
  //       console.log("clicked", $cellId);
  //       $cellId.removeClass("empty").addClass("red");
  //     });
  //     player = "p2";
  //   } else {
  //     $cellId.on("click", () => {
  //       console.log(player);
  //       console.log("clicked", $cellId);
  //       $cellId.removeClass("empty").addClass("yellow");
  //     });
  //     player = "p1";
  //   }
  // }

  // if (player === "p1") {
  //   const $td = $(".td");
  //   for (let i = 0; i < $td.length; i++) {
  //     //console.log($td[i]);
  //     const $cellId = $($td[i]).attr("id", "td" + i);
  //     //console.log($cellId);

  //     $cellId.on("click", () => {
  //       console.log("clicked", $cellId);
  //       $cellId.removeClass("empty").addClass("red");
  //       console.log(player);
  //     });
  //   }
  //   switchPlayer("p1");
  // } else {
  //   const $td = $(".td");
  //   for (let i = 0; i < $td.length; i++) {
  //     //console.log($td[i]);
  //     const $cellId = $($td[i]).attr("id", "td" + i);
  //     //console.log($cellId);

  //     $cellId.on("click", () => {
  //       console.log("clicked", $cellId);
  //       $cellId.removeClass("empty").addClass("yellow");
  //       console.log("Does it ever reach p2");
  //     });
  //   }
  //   switchPlayer("p2");
  // }
};

$(main);
