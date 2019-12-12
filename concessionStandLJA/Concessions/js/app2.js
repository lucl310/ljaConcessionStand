var pizza = 4.00
var chips = 1.00
var burger = 3.50
var patty = 3.50
var bento = 5.00
var parfait = 3.00
var scone = 2.00
var cookie = 1.00
var sub = 5.00
var drinkSpecial = 2.00
var orderCost = 0

function addPizza() {
	orderCost = orderCost + pizza
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addChips(){
	orderCost = orderCost + chips
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addBurger() {
	orderCost = orderCost + burger
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addBento() {
	orderCost = orderCost + bento
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addParfait() {
	orderCost = orderCost + parfait
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addScone() {
	orderCost = orderCost + scone
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addCookie() {
	orderCost = orderCost + cookie
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addSub(){
	orderCost = orderCost + sub
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function addDrinkSpecial() {
	orderCost = orderCost + drinkSpecial
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}
function clearOrder() {
	orderCost = 0
	console.log("$" + orderCost)
	document.getElementById('finalCost').innerHTML = "$" + orderCost
}