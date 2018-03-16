//code for toggling expansion of humburger
document.addEventListener('DOMContentLoaded', function(){
  console.log("hello world");



//code for hiding/showing dropdown menu
var navigation = document.querySelectorAll('.nav-element');
console.log(navigation);

[...navigation].forEach(function(element){
  element.addEventListener('mouseover', function(event){
    var dropdown = document.querySelector('.dropdown-menu');
    var menuOverlay = document.querySelector('.menu-overlay');
    //console.log(dropdown);
    dropdown.classList.add("visible");
    menuOverlay.classList.add("visible");

    dropdown.addEventListener('mouseleave', function(event){
      dropdown.classList.remove("visible");
      menuOverlay.classList.remove("visible");
    });
  });
});

//code for calculator
var dropdownOptions = document.querySelectorAll('.drop_down_list');

var arrow = document.querySelectorAll('.list_arrow');

var leftSection = document.querySelector('.panel_left')

var chairType = document.querySelector('.panel_left .title');

var chairColor = document.querySelector('.panel_left .color');

var chairMaterial = document.querySelector('.panel_left .pattern');

var transportation = document.querySelector('.panel_left .transport');

var rightSection = document.querySelector('.panel_right');

var chairTypeCost = document.querySelector('.panel_right .title');

var chairColorCost = document.querySelector('.panel_right .color');

var chairMaterialCost = document.querySelector('.panel_right .pattern');

var transportationCost = document.querySelector('.panel_right .transport');

var options = document.querySelectorAll('.list_panel');

var label = document.querySelectorAll('.list_label');

var totalSum = document.querySelector('.sum strong');

totalSum.innerText = 0;

var transportCheckbox = document.querySelector('#transport');

dropdownOptions.forEach(function(element){

//show dropdown on click
//here I have a problem, because I cannot make dropdown appear and dissapear when the arrow is clicked multiple times
  element.querySelector('.list_arrow').addEventListener('click', function(event){
    var options = this.parentElement.querySelector('.list_panel');

      if (options.style.display = "none") {
        options.style.display = "block";

//temporary code to make the dropdown dissapear after mouse leaves its field
        options.addEventListener('mouseleave', function(event){
          if (options.style.display = "block"){
            options.style.display = "none";
          } else {
            options.style.display = "block";
          }
        });
      }

  //change background while hovering over list items in drop_down_list
    var listOptions = options.querySelectorAll('li');

    [...listOptions].forEach(function(element){
      element.addEventListener('mouseover', function(event){
          element.style.color = "#27C7AB";
      });
    });

    [...listOptions].forEach(function(element){
      element.addEventListener('mouseout', function(event){
        element.style.color = "#9E9E9E";
      });
    });

    //select particular list element
    [...listOptions].forEach(function(element){
      element.addEventListener('click', function(event){
        options.parentElement.querySelector('.list_label').innerText = element.innerText;
        options.parentElement.querySelector('.list_label').style.color = 'black';
        options.style.display = 'none';

    //transfer all info from selected options to summary of the order
        if(element.parentElement.parentElement === dropdownOptions[0]){
          chairType.innerText = element.innerText;
          chairTypeCost.innerText = element.dataset.price;
          totalSum.innerText = parseInt(chairTypeCost.innerText);

        } else if (element.parentElement.parentElement === dropdownOptions[1]){
          chairColor.innerText = element.innerText;
          chairColorCost.innerText = element.dataset.price;
          totalSum.innerText = parseInt(chairTypeCost.innerText) + parseInt(chairColorCost.innerText);

        }  else if (element.parentElement.parentElement === dropdownOptions[2]){
          chairMaterial.innerText = element.innerText;
          chairMaterialCost.innerText = element.dataset.price;
          totalSum.innerText = parseInt(chairTypeCost.innerText) + parseInt(chairColorCost.innerText) + parseInt(chairMaterialCost.innerText);
        }


//Another possible solution, the problem is that the totalSum is not updated automatically
  //var typeCost = parseInt(chairTypeCost.innerText);

  //var colorCost =  parseInt(chairColorCost.innerText);

  //var materialCost =  parseInt(chairMaterialCost.innerText);

  //var total = typeCost + colorCost + materialCost;

  //if(total > 0){
  //  totalSum.innerText = total + " EUR";
  //}

    });

  });

}); //closing addEventListener on arrow


}); //closing dropdownOptions forEach
//code to add price of the transportation to the sum
  transportCheckbox.addEventListener('change', function(event){
    if(transportCheckbox.checked){
      transportation.innerText = "Transportation";
      transportationCost.innerText = transportCheckbox.dataset.transportPrice;
      totalSum.innerText =  parseInt(totalSum.innerText) + parseInt(transportCheckbox.dataset.transportPrice) + " EUR";

    } else if (!transportCheckbox.checked){
      transportation.innerText = '';
      transportationCost.innerText = '';
      totalSum.innerText = parseInt(totalSum.innerText) - parseInt(transportCheckbox.dataset.transportPrice) + " EUR";
    }
  });

});//closing DOM
