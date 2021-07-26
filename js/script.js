// FUNCTION DECLARATION

const goPrintIcon = (arr, targetElement) => {
    let totalElements = "";

    let printIcon = arr.forEach((icon, index) => {

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
        totalElements += icon;
        return targetElement.innerHTML = totalElements;
    });
}

// STAMPARE CON CICLO FOR EACH SU ARRAY ICONS LE CARTE IN HTML

let iconElement = document.getElementById("icon");

goPrintIcon(icons, iconElement);


// Prendo la select in HTML

const selectElement = document.getElementById("filter-form");

// STAMPA SELECT DA JS

// Creo array con valori di options validi 

const uniqueTypes = [];

const iconsValues = icons.forEach((icon) => {
    if (!uniqueTypes.includes(icon.type)) {
        uniqueTypes.push(icon.type);
    }
});

console.log(uniqueTypes);


// STAMPO IN HTML LA SELECT FORMATA DAI VALORI DELLA PROPRIETA' TYPE INTERNA ALL'ARRAY DI OGGETTI "ICONS"

let optionsRendered = '<option selected value="all">Tutti</option>';

const renderFormFilter = uniqueTypes.forEach((option) => {
    optionsRendered +=
        `
        <option value="${option}">${option}</option>        
        `
    console.log(optionsRendered);
    selectElement.innerHTML = optionsRendered;
});

// FILTER LOGICS  



// AGGIUNTO EVENT LISTENER AL CAMBIO SELECT

selectElement.addEventListener("change", () => {
    let selectValue = selectElement.value;
    // Se filtro "all" --> stampo tutte le icone in HTML
    if (selectValue === "all") {
        goPrintIcon(icons, iconElement);
    }
    // Mi creo array con metodo filter per filtrare solo dati validi 
    const filteredIcons = icons.filter((icon) => {
        if (selectValue === icon.type) {
            return true;
        }
        return false;
    });
    // Stampo l'array filtrato
    goPrintIcon(filteredIcons, iconElement);

});


// INPUT & BUTTON FILTER

/* 
let inputElement = document.getElementById("search-id");
let buttonForm = document.getElementById("button");


buttonForm.addEventListener("click", () => {
    let inputValue = inputElement.value.toLowerCase();

    // FILTER LOGIC FOR NAME PROPERTY

    const filteredIconsFromName = icons.filter((icon) => {
        if (icon.name.includes(inputValue)) {
            return true;
        }
        return false;
    });
    console.table(filteredIconsFromName);
    goPrintIcon(filteredIconsFromName, iconElement);
});

 */


// REAL TIME FILTER

let inputElement = document.getElementById("search-id");

inputElement.addEventListener("keyup", () => {
    let inputValue = inputElement.value.toLowerCase();

    // FILTER LOGIC FOR NAME PROPERTY

    const filteredIconsFromName = icons.filter((icon) => {
        if (icon.name.includes(inputValue)) {
            return true;
        }
        return false;
    });
    console.table(filteredIconsFromName);
    goPrintIcon(filteredIconsFromName, iconElement);
});