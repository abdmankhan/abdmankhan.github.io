
const buyModal = document.getElementById('buyModal');
const rentModal = document.getElementById('rentModal');


const buyBtn = document.getElementById('buyBtn');
const rentBtn = document.getElementById('rentBtn');
const wishlistBtn = document.getElementById('wishlistBtn');

const closeBuyModal = buyModal.getElementsByClassName('close')[0];
const closeRentModal = rentModal.getElementsByClassName('close')[0];

buyBtn.onclick = function() {
  buyModal.style.display = 'block';
};

rentBtn.onclick = function() {
  rentModal.style.display = 'block';
};


closeBuyModal.onclick = function() {
  buyModal.style.display = 'none';
};

closeRentModal.onclick = function() {
  rentModal.style.display = 'none';
};
//if user click outside 
window.onclick = function(event) {
  if (event.target == buyModal) {
    buyModal.style.display = 'none';
  }
  if (event.target == rentModal) {
    rentModal.style.display = 'none';
  }
};

// Additional functionality for buy and rent confirm buttons
document.getElementById('buyConfirmBtn').onclick = function() {
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  alert(`You chose to pay via ${paymentMethod}`);
  buyModal.style.display = 'none';
};

document.getElementById('rentConfirmBtn').onclick = function() {
  alert('Movie rented successfully. Payment completed online.');
  rentModal.style.display = 'none';
};



function hideme(){
    document.getElementById("hidemee").style.display = "none";
    document.getElementById("subbtn").style.display = "none";
}