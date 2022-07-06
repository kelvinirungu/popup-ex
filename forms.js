 document.getElementById("dynamic-card").innerHTML = ` 
 <div class="card-header">
 <h2>Iron Man Toy</h2>
</div>
<div class="card-body">
 <img src="./iron-man-card.png" alt="iron-man" class="card-img" />
 <div class="desc-items">
   <p class="card-desc">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
     ullam eos. Inventore esse, a voluptate error rem beatae consectetur!
   </p>
   <button class="btn more-btn">More Details</button>
 </div>
</div>`
document.getElementById("dynamic-popup").innerHTML = `
<div class="popup">
        <div class="popup-header">
          <h2 class="popup-title">Iron Man Toy</h2>
          <button class="btn close-btn" id="close-btn">&times</button>
        </div>
        <div class="popup-body">
          <img src="./iron-man-toy.png" alt="iron-man-toy" class="popup-img" />
          <div class="popup-desc">
            <p class="desc-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              expedita ipsum eos ex itaque aperiam cum eligendi dolores?
              Nesciunt dignissimos temporibus doloribus exercitationem! Officiis
              architecto repudiandae iste modi doloribus officia.
            </p>
            <div class="popup-btns">
              <button class="btn cart-btn">
                Add to cart <i class="fa-solid fa-cart-arrow-down"></i>
              </button>
              <button class="btn buy-btn">
                Buy <i class="fa-solid fa-credit-card"></i>
              </button>
            </div>
          </div>
        </div>
      </div>`
  