var requestOptions = {
  method: "GET",
  redirect: "follow",
};



    fetch("https://disease.sh/v3/covid-19/countries?sort=active", requestOptions)
        .then((response) => response.json())
        .then((result) => appendData(result))
        .catch((error) => console.log("error", error));

var table = document.getElementById("table")

function sortTable(type) {
    if (type == 1) {
        fetch(
          "https://disease.sh/v3/covid-19/countries?sort=active",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => appendData(result))
          .catch((error) => console.log("error", error));
    }
    if (type == 2) {
        fetch(
          "https://disease.sh/v3/covid-19/countries?sort=recovered",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => appendData(result))
          .catch((error) => console.log("error", error));
    }
}
function appendData(data) {
  var num = parseInt(1);

  for (var i = 0; i < data.length; i++) {
    table.innerHTML +=
      "<tr>" +
      "<th>" +
      num +
      "</th>" +
      "<td>" +
      data[i]["country"] +
      "</td>" +
      "<td>" +
      data[i]["active"] +
      "</td>" +
      "<td>" +
      data[i]["recovered"] +
      "</td>" +
      "<td>" +
      data[i]["deaths"] +
      "</td>" +
      "<td>" +
      data[i]["cases"] +
      "</td>" +
      "</tr>";
    num++;
  }
}
