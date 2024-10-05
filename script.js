// Object to store menu data for each day
const menus = {
    panchami: [
        "Bhat", "Masoor dal", "Alu bhaja", "Fulkopi", "Doi katla"
    ],
    sasthi: [
        "Bhat", "Veg Dal", "Jhuri Alu bhaja", "Dhokar Dalna", "Chutney", "Papad"
    ],
    saptami: [
        "Mixed Fried Rice", "Chili Chicken", "Chutney", "Papad"
    ],
    ashtami: [
        "Bhat", "Dal", "Badhakopi", "Vetki Fish"
    ],
    nabami: [
        "Basanti Pulao", "Alur dom", "Beguni", "Chutney", "Papad"
    ],
    dashami: [
        "Bhat", "Dal", "Patal Chingri", "Mutton Curry"
    ]
};

// Function to display the selected menu
function displayMenu(day) {
    const menuList = document.getElementById('menu-list');
    const menuTitle = document.getElementById('menu-title');

    // Clear previous menu
    menuList.innerHTML = "";

    // Set new title based on the selected day
    menuTitle.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)} Menu`;

    // Populate the menu list with items from the selected day
    menus[day].forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });
}

// Add event listeners to the navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the day from the clicked link's href attribute (e.g., #panchami -> panchami)
        const day = this.getAttribute('href').substring(1);

        // Display the corresponding menu
        displayMenu(day);

        // Scroll smoothly to the menu section for better mobile user experience
        document.querySelector('#menu-content').scrollIntoView({ behavior: 'smooth' });
    });
});
