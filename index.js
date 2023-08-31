
//* ********************************************************
// portfolio Code Section 
// ******************************************************** */

const p_btns = document.querySelector(".p-btns")
const p_btn = document.querySelectorAll(".p-btn")
const p_img_elem = document.querySelectorAll(".img-overlay")

p_btns.addEventListener("click",(e)=>{
    const p_btn_clicked = e.target          //button on which user clicked has been get
    p_btn.forEach(currentBtn => {
        currentBtn.classList.remove("p-btn-active")
    });
    p_btn_clicked.classList.add("p-btn-active")
    // to get the number of data-num 
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(p_btn_clicked)
    console.log(btn_num)
    
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img_elem.forEach(curElem=>{
        curElem.classList.add(`p-image-inactive`)
    })
    
    img_active.forEach((curElem)=>{
        curElem.classList.remove(`p-image-inactive`)
    })
    
    
    // img-overlay
    // p-btn--2
})