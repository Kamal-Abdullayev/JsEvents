const buttons = document.querySelectorAll(".btn");
const cardContent = document.querySelectorAll(".card-content");

buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
        let content = document.getElementById(`${btn.dataset.targetId}`);
        if(content.style.display === "none"){
            cardContent.forEach((e) => {
                e.style.display = "none";
            })
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    })
})