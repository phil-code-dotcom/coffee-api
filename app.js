
const hotCoffeeContainer = document.getElementById('hot-coffee-menu');
const icedCoffeeContainer = document.getElementById('iced-coffee-menu');

// Display menu items
async function hotCoffeeMenuItems() {
    const res = await fetch("https://api.sampleapis.com/coffee/hot")
    const hotCoffee = await res.json()
    // await console.log(hotCoffee)

    hotCoffeeContainer.innerHTML = '';

    hotCoffee.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300';
        itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2 text-coffee-800">${item.title}</h3>
                        <p class="text-coffee-600 text-sm mb-4">${item.description}</p>
                    </div>
                `;
        hotCoffeeContainer.appendChild(itemElement);
    });
}

async function icedCoffeeMenuItems() {
    const res = await fetch("https://api.sampleapis.com/coffee/iced")
    const icedCoffee = await res.json()
    // await console.log(icedCoffee)

    icedCoffeeContainer.innerHTML = '';

    icedCoffee.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300';
        itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-2 text-coffee-800">${item.title}</h3>
                        <p class="text-coffee-600 text-sm mb-4">${item.description}</p>
                    </div>
                `;
        icedCoffeeContainer.appendChild(itemElement);
    });
}

async function displayMenuItems () {
    await hotCoffeeMenuItems();
    await icedCoffeeMenuItems();
}

displayMenuItems()