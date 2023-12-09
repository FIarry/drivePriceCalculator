let distance = document.getElementById("distance")
let price = document.getElementById("price")
let usage = document.getElementById("usage")
let cost = document.getElementById("cost")
let btn = document.getElementById("button")

btn.addEventListener('click', function() {
    let finalCost = (distance.value/100)*usage.value*price.value
    cost.value = finalCost
})
