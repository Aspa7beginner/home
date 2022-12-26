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