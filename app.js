const main = () => {
  const $container = $(".container");
  const $table = $("<table>").addClass("table");
  $container.append($table);
  
  //Create tr and td
  for (let i = 1; i < 7; i++) {
      const $tr = $("<tr>").addClass("tr");
      $table.append($tr);
      for (let j = 1; j < 8; j++) {
          const $td = $("<td>").addClass("td empty").addClass("column" + j).text(j);
          $tr.append($td);
        }
    }
    
    const $td = $(".td");
    ($td).on("click", ()=> {  
        console.log("clicked");
    });
    


};

$(main);