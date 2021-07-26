// STAMPARE CON CICLO FOR EACH SU ARRAY ICONS LE CARTE IN HTML

let iconElement = document.getElementById("icon");

let totalIcons = "";
let printIcon = icons.forEach((icon, index) => {

    // Gestione OFFSET
    let hasOffset = "";
    if (index % 5 === 0) {
        hasOffset = "offset-md-1";
    }
    icon =
        `
    <div class="col col-sm-4 col-md-2 ${hasOffset}">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.prefix}${icon.name} fa-3x ${icon.type}"></i>
                <h6 class="py-2 text-center">${icon.name}</h6>
            </div>
        </div>
    </div>
    `
    totalIcons += icon;
    iconElement.innerHTML = totalIcons;
});




