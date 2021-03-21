let id = null;
function Move() {
    let elem = document.getElementById("animation");
    elem.style.left = 800 + "px";
    let pos = 200;
    clearInterval(id);
    id = setInterval(down, 10);




    // бесконечная рекурсия (переписать)
    function down() {
        if (pos === 5700){
            id = setInterval(up, 10);

        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
    function up(){
        if (pos === 200){
            id = setInterval(down, 10);
        } else {
            pos--;
            elem.style.top = pos + 'px';
        }
    }
}

document.addEventListener("DOMContentLoaded", function(){
    Move()
});