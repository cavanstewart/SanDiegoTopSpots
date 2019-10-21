$(document).ready(function() {
  // write your code here
  $.getJSON("data.json", function(data) {
    for (i = 0; i < data.length; i++) {
      $("#sd-table").append(
        "<tr>" +
          "<td>" + data[i]["name"] + "</td>" +
          "<td>" + data[i]["description"] + "</td>" +
          "<td>" + "<button href=\"" + "https://www.google.com/maps?q=" + data[i]["location"][0] + "," + data[i]["location"][1] + "\"" + " class=\"loc-button\">Open in Google Maps</button>" + "</td>" +
        "</tr>"
      );
    }
  });
});
