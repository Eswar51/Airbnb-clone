const properties = [
    { id: 1, location: 'Chennai, Tamil Nadu', price: 1500, amenities: ['Wi-Fi', 'Kitchen'], booked: false, saved: false },
    { id: 2, location: 'Coimbatore, Tamil Nadu', price: 3000, amenities: ['Parking', 'Garden'], booked: false, saved: false },
    { id: 3, location: 'Madurai, Tamil Nadu', price: 1200, amenities: ['Swimming Pool', 'Fitness Center'], booked: false, saved: false },
    { id: 4, location: 'Hyderabad, Telangana', price: 2000, amenities: ['Balcony', 'City View'], booked: false, saved: false },
    { id: 5, location: 'Warangal, Telangana', price: 9000, amenities: ['Parking', 'Gym'], booked: false, saved: false },
    { id: 6, location: 'Trichy, Tamil Nadu', price: 1800, amenities: ['Wi-Fi', 'Mountain View'], booked: false, saved: false },
    { id: 7, location: 'Tiruppur, Tamil Nadu', price: 1300, amenities: ['Free Breakfast', 'Swimming Pool'], booked: false, saved: false },
    { id: 8, location: 'Nellore, Andhra Pradesh', price: 1600, amenities: ['Parking', 'Kitchen'], booked: false, saved: false },
    { id: 9, location: 'Karimnagar, Telangana', price: 1100, amenities: ['Garden', 'Playground'], booked: false, saved: false },
    { id: 10, location: 'Salem, Tamil Nadu', price: 1000, amenities: ['Fitness Center', 'Spa'], booked: false, saved: false },
    { id: 11, location: 'Vellore, Tamil Nadu', price: 1750, amenities: ['Wi-Fi', 'Parking'], booked: false, saved: false },
    { id: 12, location: 'Kanchipuram, Tamil Nadu', price: 8000, amenities: ['Kitchen', 'Gym'], booked: false, saved: false },
    { id: 13, location: 'Erode, Tamil Nadu', price: 5500, amenities: ['Balcony', 'City View'], booked: false, saved: false },
    { id: 14, location: 'Secunderabad, Telangana', price: 1200, amenities: ['Free Breakfast', 'Swimming Pool'], booked: false, saved: false },
    { id: 15, location: 'Nizamabad, Telangana', price: 1700, amenities: ['Garden', 'Playground'], booked: false, saved: false },
    { id: 16, location: 'Hosur, Tamil Nadu', price: 1300, amenities: ['Fitness Center', 'Spa'], booked: false, saved: false },
    { id: 17, location: 'Tirunelveli, Tamil Nadu', price: 1100, amenities: ['Wi-Fi', 'Kitchen'], booked: false, saved: false },
    { id: 18, location: 'Kakinada, Andhra Pradesh', price: 2000, amenities: ['Balcony', 'City View'], booked: false, saved: false },
    { id: 19, location: 'Rajahmundry, Andhra Pradesh', price: 1900, amenities: ['Parking', 'Gym'], booked: false, saved: false },
    { id: 20, location: 'Khammam, Telangana', price: 6000, amenities: ['Free Breakfast', 'Swimming Pool'], booked: false, saved: false },
];

displayProperties(properties);

function displayProperties(propertyList) {
    const propertyListContainer = document.getElementById('property-list');
    propertyListContainer.innerHTML = '';

    propertyList.forEach(property => {
        const propertyElement = document.createElement('div');
        propertyElement.classList.add('property');
        propertyElement.innerHTML = `
		 <img src="https://via.placeholder.com/150" alt="Property Image">
            <h3>${property.location}</h3>
            <p>Price: ₹${property.price}</p>
            <p>Amenities: ${property.amenities.join(', ')}</p>
            <button onclick="bookProperty(${property.id})" ${property.booked ? 'disabled' : ''}>${property.booked ? 'Booked' : 'Book Now'}</button>
            <button onclick="saveProperty(${property.id})" ${property.booked || property.saved ? 'disabled' : ''}>Save</button>
        `;

        propertyListContainer.appendChild(propertyElement);
    });
}

function applyFilters() {
    const locationFilter = document.getElementById('location').value.toLowerCase();
    const priceFilterElement = document.getElementById('price');
    const priceFilter = priceFilterElement.value;

    const priceValueElement = document.getElementById('price-value');
    priceValueElement.textContent = `${priceFilter}`;

    const filteredProperties = properties.filter(property => {
        const locationMatch = property.location.toLowerCase().includes(locationFilter);
        const priceMatch = property.price <= priceFilter;

        return locationMatch && priceMatch;
    });

    displayProperties(filteredProperties);
}

function bookProperty(propertyId) {
    const property = properties.find(property => property.id === propertyId);

    if (property) {
        if (!property.booked) {
            property.booked = true;
            alert(`Property at ${property.location} booked successfully!`);
        } else {
            alert(`Property at ${property.location} is already booked.`);
        }

        displayProperties(properties);
    }
}

function saveProperty(propertyId) {
    const property = properties.find(property => property.id === propertyId);

    if (property) {
        if (!property.saved) {
            property.saved = true;
            alert(`Property at ${property.location} saved successfully!`);
        } else {
            alert(`Property at ${property.location} is already saved.`);
        }

        displayProperties(properties);
    }
}
