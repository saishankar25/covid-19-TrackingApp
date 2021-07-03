var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://disease.sh/v3/covid-19/countries?sort=active", requestOptions)
  .then((response) => response.json())
  .then((result) => appendData(result))
  .catch((error) => console.log("error", error));

var table = document.getElementById("table");

function appendData(data) {
  var num = parseInt(1);
    table.innerHTML = ""
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

function sort(type) {
    if (type == 1) {
      fetch(
        "https://disease.sh/v3/covid-19/countries?sort=active",
        requestOptions
      )
        .then((response1) => response1.json())
        .then((result1) => appendData(result1))
            .catch((error) => console.log("error", error));
        
    }
    if (type == 2) {
        fetch(
            "https://disease.sh/v3/covid-19/countries?sort=recovered",
            requestOptions
        )
            .then((response1) => response1.json())
            .then((result1) => appendData(result1))
            .catch((error) => console.log("error", error));
    }
    if (type == 3) {
      fetch(
        "https://disease.sh/v3/covid-19/countries?sort=deaths",
        requestOptions
      )
        .then((response1) => response1.json())
        .then((result1) => appendData(result1))
        .catch((error) => console.log("error", error));
    }
    if (type == 4) {
      fetch(
        "https://disease.sh/v3/covid-19/countries?sort=cases",
        requestOptions
      )
        .then((response1) => response1.json())
        .then((result1) => appendData(result1))
        .catch((error) => console.log("error", error));
    }
}
