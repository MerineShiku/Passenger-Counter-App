let passengerNumber = document.getElementById("passenger_count")
let saveEl = document.getElementById("save_el")

let count = 0


function counter() {
   count += 1

    passengerNumber.innerText = count

}


//textcontent takes into account returns every element. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.

function save() {

   let savedCount = count + " - "
   saveEl.textContent += savedCount
   passengerNumber.textContent = 0
   count = 0
   

  
  


}


