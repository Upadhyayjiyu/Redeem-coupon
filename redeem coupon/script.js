const validCoupons = {
  "SALE20": { type: "percent", value: 20 },
  "FLAT10": { type: "flat", value: 10 }
};

function applyCoupon() {
  const subtotal = 100;
  const code = document.getElementById("couponCode").value.trim().toUpperCase();
  let discount = 0;

  if (validCoupons[code]) {
    const coupon = validCoupons[code];
    if (coupon.type === "percent") {
      discount = (coupon.value / 100) * subtotal;
    } else if (coupon.type === "flat") {
      discount = coupon.value;
    }
  } else {
    alert("Invalid coupon code!");
  }

  const total = Math.max(0, subtotal - discount);

  document.getElementById("discount").textContent = discount.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
}
