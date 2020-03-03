function Pizza(name,size,crust,topping,total) {
    this.name=name;
    this.size=size;
    this.topping=topping;
    this.crust=crust;
    this.total=total;
}
Pizza.prototype.fullPizza=function(){
    return this.name + this.size +this.topping + this.crust
    alert()
}
var orderedPizza=new Pizza("iraniani pizza","medium","sausage")
debugger
var pizza_size={
    "Small":500,
    "Medium":750,
    "Large":1000,
    "Mega":1200
}
var pizza_crust={
    "Thin": 100,
    "Thick":200,
    "Gluten-Free":300
}
var pizza_topping={
    "pepparoni":50,
    "mushrooms":55,
    "onions":60,
    "olives":65,
    "sausages":70
}



var total, finalTotal;


function sizeSelector(){
    var psize = parseInt(document.getElementById('list').value);
    var pcrust = parseInt(document.getElementById('list1').value);
    var topping = parseInt(document.getElementById('list2').value);
    var pizza_flavour = document.getElementById('list3').value;
    var pizzaSizes = ["Small","Medium","Large","Mega"];
    var crust1 = ["Thin","Thick","GlutenFree"];
    var toppings =["pepparoni","mushrooms","onions","olives","sausages"];
    var total = psize + pcrust +topping;
    var sizeName, p_crust, topping1;
    if(psize==500){
        sizeName = pizzaSizes[0];
    }else if(psize==800){
        sizeName = pizzaSizes[1];
        alert(sizeName);
    }else if(psize==1000){
        sizeName = pizzaSizes[2];
        alert(sizeName);
    }else if(psize==1200){
         sizeName = pizzaSizes[3];
    }
    if(pcrust==100){
        p_crust = crust1[0];
    }else if(pcrust==200){
        p_crust = crust1[1];
    }else if(pcrust==300){
        p_crust = crust1[2];
    }
    if(topping==50){
        topping1 = toppings[0];
    }else if(topping==55){
        topping1 = toppings[1];
    }else if(topping==60){
        topping1 = toppings[2];
    }
    else if(topping==65){
        topping1 = toppings[3];
    }
    else if(topping==70){
        topping1 = toppings[4];
    }
    
    var delivery = confirm("Do you want your Pizza delivered to you?");
    if(delivery){
        total=total+150;
        var location = prompt("Please enter your location");
        alert("Your pizza choice"  + pizza_flavour+" "+"of size"+" "+sizeName+" "+ "with a "+p_crust+" "+ crust and with "+topping1+"will be delivered to "+location + " at Ksh 150.Total cost is "+total);
        }
    }

// function confirmDelivery(){
        //     var delivery = confirm("Do you want your Pizza delivered to you?");
        //     if(delivery){
        //         finalTotal=total+150;
        //         var location = prompt("Please enter your location");
        //         alert("Your pizza choice" + sizeName+"of size +sizeName+  with a +p_crust+ and with +topping1+will be delivered to "+location + " at Ksh 150.Total cost is "+finalTotal);
        //     }
        // }
// $(document).ready(function() {
//     $("#button").click(function(event) {
//         event.preventDefault();
//         psize = parseInt($("#list").val());
//         var pcrust = parseInt($("#list1").val());
//         var topping = parseInt($("#list2").val());
//         var PizzaType = parseInt($("#list3").val());
//         total = psize+pcrust+topping;

        // var pizza_type =$("list").
        // var p_crust =
        // var topping1 =

        // alert(`total cost is ${total} .`);

       aroni



        // function confirmDelivery(){
        //     var delivery = confirm("Do you want your Pizza delivered to you?");
        //     if(delivery){
        //         finalTotal=total+150;
        //         var location = prompt("Please enter your location");
        //         alert("Your pizza choice" + sizeName+"of size +sizeName+  with a +p_crust+ and with +topping1+will be delivered to "+location + " at Ksh 150.Total cost is "+finalTotal);
        //     }
        // }
    // document.getElementById("output").innerHTML = "The total cost for your order is: "+total+" Thank you for shopping with us.";
    


      
    //   $("tbody").append("<tr>"+"<td>"+p_type+"</td>"+"<td>"+p_crust+"</td>"+"<td>" +Topping+ "</td>"+"<td>" + total +"</td>" +"<td>"+Ttopping+ "</td>" +"<td>" +price +"</td>"+"</tr>");

    // //   Pizza_size.prototype.Total_Price = function() {
    //     // return psize + pcrust+ topping;
    //     var orderedPizza=new Pizza("psize","pcrust","topping");
    //     debugger
    //    ("#output").text(orderedPizza.fullPizza());






//     });
//     function confirmDelivery(){
//         var delivery = confirm("Do you want your Pizza delivered to you?");
//         if(delivery){
//             total=total+150;
//             var location = prompt("Please enter your location");
//             alert("Your pizza will be delivered to "+location + " at Ksh 150." );
//         }
//         document.getElementById("output").innerHTML = "The total cost for your order is: "+total+" Thank you for shopping with us.";
//     }
//     function appendTotal(){
//         confirmDelivery();
//         $(".items > tbody:last").last().append('<tr>' + 
//         '<td>'+ 'Your total is:'+
//         '</td>'+
//         '<td>'+
//         total+
//         '</td>'+
//         '</tr>')
//         $("#checkout").attr("disabled", true);
//         $("#large").attr("disabled", true);
        
        
//     }
//     sizeSelector();
// });


    //   var total = new Contact(inputtedFirstName, inputtedLastName);
  
    //   $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
    //   $("input#new-first-name").val("");
    //   $("input#new-last-name").val("");
    // });
