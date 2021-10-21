let input = document.querySelector("[name='input-form']");

let select = document.querySelector("[name='select-form']")

let textarea = document.querySelector("[name = 'textarea-form']");

let option1 = document.querySelectorAll("select option")[0];

let option2 = document.querySelectorAll("select option")[1];

document.querySelector("[name = 'btn-click']").addEventListener("click", function(e) {
    e.preventDefault();
    let value1 = input.value;
    let value2 = select.value;
    let value3 = textarea.value;
    if (value1 == "" || value2 == "" || value2 == 0 || value3 == "") {
        console.log("Deyer(ler) bosdur!");
        return;
    }
    console.log(value1);
    console.log(value2);
    console.log(value3);
    input.value = "";
    select.value = 0;
    textarea.value = "";
})