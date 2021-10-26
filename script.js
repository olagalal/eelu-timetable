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
              <div class="group">Section: ${element.group}</div>
              <div class="type">${element.type}</div>
              ${(!element.week) ? `<div class="type">${element.place}</div>` : `<div class="type">${element.place}, ${element.week}</div>`}
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

  if (by == "Level") {
    if (select2 == "Level 1") {
      $(".two").delay(500).fadeOut("fast");
      $(".three").delay(500).fadeOut("fast");
      $(".four").delay(500).fadeOut("fast");

      if (groupLevel1 == "1") {
        $('.one[group="old"]').delay(500).fadeOut("fast");
        $('.one[group="1"]').show();
        $('.one[group="2"]').delay(500).fadeOut("fast");
        $('.one[group="3"]').delay(500).fadeOut("fast");
        $('.one[group="4"]').delay(500).fadeOut("fast");
        $('.one[group="5"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1"]').show();
        $('.one[group="1,2"]').show();
        $('.one[group="3,4"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1,2"]').show();
        $('.one[group="3,4,5"]').delay(500).fadeOut("fast");
      } else if (groupLevel1 == "2") {
        $('.one[group="old"]').delay(500).fadeOut("fast");
        $('.one[group="1"]').delay(500).fadeOut("fast");
        $('.one[group="2"]').show();
        $('.one[group="3"]').delay(500).fadeOut("fast");
        $('.one[group="4"]').delay(500).fadeOut("fast");
        $('.one[group="5"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1"]').delay(500).fadeOut("fast");
        $('.one[group="1,2"]').show();
        $('.one[group="3,4"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1,2"]').show();
        $('.one[group="3,4,5"]').delay(500).fadeOut("fast");
      } else if (groupLevel1 == "3") {
        $('.one[group="old"]').delay(500).fadeOut("fast");
        $('.one[group="1"]').delay(500).fadeOut("fast");
        $('.one[group="2"]').delay(500).fadeOut("fast");
        $('.one[group="3"]').show();
        $('.one[group="4"]').delay(500).fadeOut("fast");
        $('.one[group="5"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1"]').delay(500).fadeOut("fast");
        $('.one[group="1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4"]').show();
        
        $('.one[group="old,1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4,5"]').show();
      } else if (groupLevel1 == "4") {
        $('.one[group="old"]').delay(500).fadeOut("fast");
        $('.one[group="1"]').delay(500).fadeOut("fast");
        $('.one[group="2"]').delay(500).fadeOut("fast");
        $('.one[group="3"]').delay(500).fadeOut("fast");
        $('.one[group="4"]').show();
        $('.one[group="5"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1"]').delay(500).fadeOut("fast");
        $('.one[group="1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4"]').show();
        
        $('.one[group="old,1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4,5"]').show();
      } else if (groupLevel1 == "5") {
        $('.one[group="old"]').delay(500).fadeOut("fast");
        $('.one[group="1"]').delay(500).fadeOut("fast");
        $('.one[group="2"]').delay(500).fadeOut("fast");
        $('.one[group="3"]').delay(500).fadeOut("fast");
        $('.one[group="4"]').delay(500).fadeOut("fast");
        $('.one[group="5"]').show();
        
        $('.one[group="old,1"]').delay(500).fadeOut("fast");
        $('.one[group="1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4,5"]').show();
      } else if (groupLevel1 == "old") {
        $('.one[group="old"]').show();
        $('.one[group="1"]').delay(500).fadeOut("fast");
        $('.one[group="2"]').delay(500).fadeOut("fast");
        $('.one[group="3"]').delay(500).fadeOut("fast");
        $('.one[group="4"]').delay(500).fadeOut("fast");
        $('.one[group="5"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1"]').show();
        $('.one[group="1,2"]').delay(500).fadeOut("fast");
        $('.one[group="3,4"]').delay(500).fadeOut("fast");
        
        $('.one[group="old,1,2"]').show();
        $('.one[group="3,4,5"]').delay(500).fadeOut("fast");
      } else if (groupLevel1 == "NA") {
        $('.one[group="old"]').show();
        $('.one[group="1"]').show();
        $('.one[group="2"]').show();
        $('.one[group="3"]').show();
        $('.one[group="4"]').show();
        $('.one[group="5"]').show();
        
        $('.one[group="old,1"]').show();
        $('.one[group="1,2"]').show();
        $('.one[group="3,4"]').show();
        
        $('.one[group="old,1,2"]').show();
        $('.one[group="3,4,5"]').show();
      }
    } else if (select2 == "Level 2") {
      $(".one").delay(500).fadeOut("fast");
      $(".three").delay(500).fadeOut("fast");
      $(".four").delay(500).fadeOut("fast");

      if (groupLevel2 == "1") {
        $('.two[group="1,3"]').show();

        $('.two[group="1"]').show();
        $('.two[group="2"]').delay(500).fadeOut("fast");
        $('.two[group="3"]').delay(500).fadeOut("fast");
      } else if (groupLevel2 == "2") {
        $('.two[group="1,3"]').delay(500).fadeOut("fast");

        $('.two[group="1"]').delay(500).fadeOut("fast");
        $('.two[group="2"]').show();
        $('.two[group="3"]').delay(500).fadeOut("fast");
      } else if (groupLevel2 == "3") {
        $('.two[group="1,3"]').show();

        $('.two[group="1"]').delay(500).fadeOut("fast");
        $('.two[group="2"]').delay(500).fadeOut("fast");
        $('.two[group="3"]').show();
      } else if (groupLevel2 == "NA") {
        $('.one[group="1,3"]').show();

        $('.two[group="1"]').show();
        $('.two[group="2"]').show();
        $('.two[group="3"]').show();
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
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "A. Hefny") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').show();
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "M. Fares") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').show();
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "A. Elgezawy") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').show();
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "S. Nour") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').show();
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "A. Samy") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').show();
      $('.event[ta=""]').delay(500).fadeOut("fast");
    } else if (select2 == "NA") {
      $('.event[ta="O. Galal"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Hefny"]').delay(500).fadeOut("fast");
      $('.event[ta="M. Fares"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Elgezawy"]').delay(500).fadeOut("fast");
      $('.event[ta="S. Nour"]').delay(500).fadeOut("fast");
      $('.event[ta="A. Samy"]').delay(500).fadeOut("fast");
      $('.event[ta=""]').show();
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
