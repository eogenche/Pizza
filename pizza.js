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

$(document).ready(function() {
    $("#button").click(function(event) {
      event.preventDefault();
      var psize = parseInt($("#list").val());
      var pcrust = parseInt($("#list1").val());
      var topping = parseInt($("#list2").val());
      var PizzaType = parseInt($("#list3").val());
        var total = psize+pcrust+topping;
      alert("YOU have ordered"+topping+" "+ pcrust+" "+ psize+" which  cost ${total} .");
      var p_size = $("#list").val(); 
      var p_crust = $("#list1").val();
      var toppings = $("#list2").val(); 
      var p_type = $("#list3").val(); 
      
      $("tbody").append("<tr>"+"<td>"+p_type+"</td>"+"<td>"+p_crust+"</td>"+"<td>" +toppings+ "</td>"+"<td>" + total +"</td>" +"<td>"+Ttopping+ "</td>" +"<td>" +price +"</td>"+"</tr>");
      

    //   Pizza_size.prototype.Total_Price = function() {
        // return psize + pcrust+ topping;
        var orderedPizza=new Pizza("psize","pcrust","topping");
        debugger
       ("#output").text(orderedPizza.fullPizza());
    });
    
});


    //   var total = new Contact(inputtedFirstName, inputtedLastName);
  
    //   $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  
    //   $("input#new-first-name").val("");
    //   $("input#new-last-name").val("");
    // });
