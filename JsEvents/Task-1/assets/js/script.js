const buttons = document.querySelectorAll(".btn");
const giftItems = document.querySelectorAll(".gift-item");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let giftItem = document.getElementById(`${btn.dataset.targetId}`);
            giftItems.forEach((e) => {
                e.style.filter = "blur(20px)";
            })
            
            buttons.forEach((b) =>{
                b.style.visibility = "visible";
            })

            btn.style.visibility = "hidden";
            giftItem.style.filter = "none";
    });

});
