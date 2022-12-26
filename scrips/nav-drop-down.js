document.addEventListener("mouseover", ev => {
    const isDropdownButton = ev.target.matches("[data-dropdown-button]");
    // if this is not a dropdown or if it is in the dropdown then do nothing
    // if there it is in the dropdown it means that the closest parent it has (its container) is not null
    if (!isDropdownButton && ev.target.closest("[data-dropdown]") != null) return;


    let currentDropdown;
    if (isDropdownButton){
        // dropdown is active select it and make it active
        currentDropdown = ev.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown=>{
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    });

});

document.addEventListener("click", ev => {

    const isMoreInfoButton = ev.target.matches("[category-description-data-button]");
    if (!isMoreInfoButton) return;

    let currentCategoryDescription;
    if (isMoreInfoButton) {
        currentCategoryDescription = ev.target.closest("[category-data]").querySelector(".app-category-description");
        currentCategoryDescription.classList.toggle('open');
        
        // supose nodeA = ev.target, nodeB = currentCategoryDescription
        let parrentA = ev.target.parentNode;
        //let siblingA = ev.target.nextSibling === currentCategoryDescription ? ev.target : ev.target.nextSibling;
        let siblingA;
        if(ev.target.nextSibling !== currentCategoryDescription) {
            siblingA = ev.target.nextSibling;
        } 
        // move nodeA to before nodeB
        currentCategoryDescription.parentNode.insertBefore(ev.target, currentCategoryDescription);
        // move nodeB to before the sibling of nodeA 
        parrentA.insertBefore(currentCategoryDescription, siblingA);
        ev.target.textContent = currentCategoryDescription.classList.contains("open") ? "less..." : "more...";
    
    }

        
    document.querySelectorAll('.app-category-description open').forEach(dropdown=>{
        if (dropdown === currentCategoryDescription) return;
        console.log(dropdown);
        dropdown.classList.remove('open');
    });



})