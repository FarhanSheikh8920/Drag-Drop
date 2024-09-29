document.getElementById("addButton").addEventListener("click", function () {
    let input = document.getElementById("itemInput")
    let newitemtext = input.value
    if (newitemtext.trim() !== "") {
        let newitem = document.createElement('div')
        newitem.className = "list"
        newitem.draggable = true;
        newitem.innerHTML = `${newitemtext}<img src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3430479/three-dots-icon-md.png'>`
        
        document.getElementById("left").appendChild(newitem)
        input.value = ""
        newitem.addEventListener("dragstart", function (e) {
            let selected = e.target;

            document.getElementById("right").addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            document.getElementById("right").addEventListener("drop", function (e) {
               document.getElementById("right").appendChild(selected);
                selected = null;
            });

            document.getElementById("left").addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            document.getElementById("left").addEventListener("drop", function (e) {
                document.getElementById("left").appendChild(selected);
                selected = null;
            });
         
        });
     newitem.addEventListener("click",function(){
        newitem.remove()
     })
     newitem.appendChild(newitem)

    }
})