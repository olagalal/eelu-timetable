$("#groupsLevel1").hide();
$("#groupsLevel2").hide();

let $options = $("#select2").find("option");

$("#select1")
  .on("change", function () {
    $("#select2").html($options.filter('[value="' + this.value + '"]'));
  })
  .trigger("change");

$("#select2").change(function () {
  if ($("#select2 option:selected").text() == "Level 1") {
    $("#groupsLevel1").show();
    $("#groupsLevel2").hide();
  } else if ($("#select2 option:selected").text() == "Level 2") {
    $("#groupsLevel1").hide();
    $("#groupsLevel2").show();
  } else {
    $("#groupsLevel1").hide();
    $("#groupsLevel2").hide();
  }
});

$(document).ready(function () {
  $.getJSON("timetable.json", function (data) {
    timetable = data.timetable;
    timetable.forEach((element) => {
      day = element.day;
      time = parseInt(element.time) - 6;

      let el = `<div class="event ${element.level}" group="${element.group}" ta="${element.ta}">
              <div class="name">${element.name}</div>
              <div class="room">${element.room}</div>
              <div class="group">Group: ${element.group}</div>
              <div class="type">${element.type}, ${element.week}</div>
              <div class="ta">${element.ta}</div>
          </div>`;

      $("#" + day + ">:nth-child(" + time + ")").append(el);
    });
  }).fail(function () {
    console.log("An error has occurred.");
  });
});

document.querySelector("#filter").addEventListener("click", () => {
  let by = $("#select1 option:selected").text();
  let select2 = $("#select2 option:selected").text();
  let groupLevel1 = $("#groupsLevel1 option:selected").val();
  let groupLevel2 = $("#groupsLevel2 option:selected").val();

  console.log(groupLevel1)

  if (by == "Level") {
    if (select2 == "Level 1") {
      $(".two").delay(500).fadeOut("fast");
      $(".three").delay(500).fadeOut("fast");
      $(".four").delay(500).fadeOut("fast");

      if (groupLevel1 == ("a") || groupLevel1 == ("b")) {
        $('.one[group="C,D"]').delay(500).fadeOut("fast");
        $('.one[group="A,B"]').show();
      } else if (groupLevel1 == ("c") || groupLevel1 == ("d")) {
        $('.one[group="A,B"]').delay(500).fadeOut("fast");
        $('.one[group="C,D"]').show();
      } else if (groupLevel1 == "NA"){
        console.log("Hi")
        $('.one[group="A,B"]').show();
        $('.one[group="C,D"]').show();
      }
    } else if (select2 == "Level 2") {
      $(".one").delay(500).fadeOut("fast");
      $(".three").delay(500).fadeOut("fast");
      $(".four").delay(500).fadeOut("fast");
      $('.two').show();

      if (groupLevel2 == ("a") || groupLevel2 == ("b")) {
        $('.two[group="C,D"]').delay(500).fadeOut("fast");
        $('.two[group="A,B"]').show();
      } else if (groupLevel2 == ("c") || groupLevel2 == ("d")) {
        $('.two[group="A,B"]').delay(500).fadeOut("fast");
        $('.two[group="C,D"]').show();
      } else if (groupLevel2 == "NA"){
        $('.two[group="A,B"]').show();
        $('.two[group="C,D"]').show();
      }
    } else if (select2 == "Level 3") {
      $(".one").delay(500).fadeOut("fast");
      $(".two").delay(500).fadeOut("fast");
      $(".three").show();
      $(".four").delay(500).fadeOut("fast");
    } else if (select2 == "Level 4") {
      $(".one").delay(500).fadeOut("fast");
      $(".two").delay(500).fadeOut("fast");
      $(".three").delay(500).fadeOut("fast");
      $(".four").show();
    }
  } else if (by == "TA") {
    if (select2 == "O. Galal") {
      $('.event[ta="O. Galal"]').show();
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
    } else if (select2 == "A. Hefny") {
        $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Hefny"]').show();
        $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
        $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      } else if (select2 == "M. Fares") {
        $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
        $('.event[ta="M. Fares"]').show();
        $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
        $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      } else if (select2 == "A. Elgezawy") {
        $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
        $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Elgezawy"]').show();
        $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      } else if (select2 == "S. Nour") {
        $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
        $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
        $('.event[ta="S. Nour"]').show();
        $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      } else if (select2 == "A. Samy") {
        $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
        $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
        $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
        $('.event[ta="A. Samy"]').show();
      }
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  $("select").val("");
  $(".one").show();
  $(".two").show();
  $(".three").show();
  $(".four").show();
});
