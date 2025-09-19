// script.js

// UTILITY FUNCTIONS
// Format price to Philippine Peso
function formatPrice(price) {
    return 'P' + price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Generate star HTML for ratings
function getStarsHtml(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star"></i>';
    if (hasHalfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) starsHtml += '<i class="far fa-star"></i>';
    return starsHtml;
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('a');
    card.href = `product-detail.html?id=${product.id}`;
    card.className = 'product-card';

    const starsHtml = getStarsHtml(product.rating || 0);
    const reviewsText = `(${product.rating || 'N/A'}/5) - ${product.reviews_count || 0} reviews`;

    card.innerHTML = `
        <div class="product-card-image">
            <img src="${product.image}" alt="${product.name}">
            <i class="fas fa-heart favorite-icon"></i>
        </div>
        <div class="product-card-body">
            <h3 class="product-card-title">${product.name}</h3>
            <div class="product-card-price">${formatPrice(product.price)}</div>
            <div class="product-card-rating">
                <span class="stars">${starsHtml}</span>
                <span>${reviewsText}</span>
            </div>
        </div>
        <div class="product-card-overlay">
            <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;

    const addToCartButton = card.querySelector('.add-to-cart-btn');
    addToCartButton?.addEventListener('click', (event) => {
        alert("Successfully added to your cart!");
        event.preventDefault();
        event.stopPropagation();
        addToCart(addToCartButton.dataset.productId);
    });

    return card;
}

// PRODUCT DATA AND DISPLAY
const products = [
    {
        "id": "clothing-006",
        "name": "PetSafe Happy Ride Car Seat",
        "price": 3299.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P39.png",
        "description": "The PetSafe Happy Ride Deluxe Booster Seat provides a safe and comfortable ride for your small dog. This elevated booster seat lifts your pet up to see out the window, reducing motion sickness and anxiety.",
        "rating": 4.6,
        "reviews_count": 450
    },
    {
        "id": "health-007",
        "name": "Pet-Pourri Odor Freshener Pet Wipes",
        "price": 300.00,
        "category": "Health & Grooming",
        "image": "images/products/P25.png",
        "description": "Pet-Pourri Odor Freshener Pet Wipes are a quick and easy way to clean and refresh your pet between baths. Infused with natural essential oils, these wipes neutralize odors on contact, leaving your pet smelling fresh and clean.",
        "rating": 4.3,
        "reviews_count": 480
    },
    {
        "id": "bowls-004",
        "name": "Frisco Stainless Steel Bowl",
        "price": 410.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P31.png",
        "description": "The Frisco Stainless Steel Bowl is a classic, durable, and hygienic choice for your pet's food and water. Made from high-quality stainless steel, it's rust-resistant, easy to clean, and naturally resists bacteria buildup.",
        "rating": 4.6,
        "reviews_count": 400
    },
    {
        "id": "health-009",
        "name": "Petkin Toothwipes",
        "price": 320.00,
        "category": "Health & Grooming",
        "image": "images/products/P27.png",
        "description": "Petkin Dental Toothwipes provide a convenient and effective way to maintain your pet's oral hygiene. These pre-moistened wipes are formulated with baking soda to help clean teeth, remove plaque, and freshen breath. Simply wipe your pet's teeth and gums daily to reduce tartar buildup and prevent gum disease.",
        "rating": 4.0,
        "reviews_count": 280
    },
    {
        "id": "toys-004",
        "name": "Chuckit! Ultra Ball",
        "price": 530.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P4.png",
        "description": "The Chuckit! Ultra Ball is the ultimate fetch toy for dogs! This durable, high-bounce ball is designed to withstand tough play, making it perfect for active dogs. The unique texture allows for easy gripping and throwing, and its buoyant design means it floats in water, making it ideal for lakeside or beach play.",
        "rating": 4.9,
        "reviews_count": 1500
    },
    {
        "id": "toys-002",
        "name": "Outward Hound Hide-A-Squirrel",
        "price": 899.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P2.png",
        "description": "The Outward Hound Hide-A-Squirrel Puzzle Plush Dog Toy is an easy way to get your pup's tail wagging! Just stuff the squeaky squirrels into the soft tree trunk and watch your dog sniff them out. Dogs love to bury their noses in the Hide-A-Squirrel toy to dig out the squeaky squirrels.",
        "rating": 4.8,
        "reviews_count": 980
    },
    {
        "id": "tech-005",
        "name": "iFetch Mini Ball Launcher",
        "price": 6200.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P47.png",
        "description": "The iFetch Mini Automatic Ball Launcher is perfect for small dogs who love to play fetch! This compact device launches mini tennis balls (1.5 inches) 10, 20, or 30 feet, allowing for endless hours of indoor or outdoor play. It's easy to operate and can be used with AC power or batteries, offering flexibility.",
        "rating": 4.6,
        "reviews_count": 800
    },
    {
        "id": "tech-007",
        "name": "SureFlap Microchip Cat Door",
        "price": 6850.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P49.png",
        "description": "The SureFlap Microchip Cat Door provides a secure and convenient way for your cat to access the outdoors while keeping unwanted animals out. It reads your cat's existing microchip as a unique electronic key, allowing only your cat entry.",
        "rating": 4.7,
        "reviews_count": 400
    },
    {
        "id": "treats-005",
        "name": "PureBites Freeze-Dried Liver",
        "price": 720.00,
        "category": "Treats & Chews",
        "image": "images/products/P15.png",
        "description": "PureBites Freeze-Dried Liver treats are made with just one ingredient: 100% pure & natural human grade liver. These high-protein, low-calorie treats are perfect for dogs with allergies or dietary sensitivities, as they are grain-free and gluten-free.",
        "rating": 4.8,
        "reviews_count": 950
    },
    {
        "id": "health-001",
        "name": "Furminator De-Shedding Tool",
        "price": 1299.00,
        "category": "Health & Grooming",
        "image": "images/products/P19.png",
        "description": "The FURminator deShedding Tool for dogs reduces shedding up to 90%. This tool reaches through the topcoat to safely and easily remove loose undercoat hair without damaging the topcoat or cutting the skin. It features a FURejector® button to release collected hair with ease.",
        "rating": 4.7,
        "reviews_count": 1100
    },
    {
        "id": "toys-005",
        "name": "Yeowww! Catnip Banana",
        "price": 395.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P5.png",
        "description": "The Yeowww! Catnip Banana is a favorite among felines! This fun, banana-shaped toy is filled with 100% organic catnip, grown without pesticides or chemicals, ensuring a pure and potent experience for your cat.",
        "rating": 4.7,
        "reviews_count": 800
    },
    {
        "id": "treats-003",
        "name": "Dreamies Tuna Cat Treats",
        "price": 190.00,
        "category": "Treats & Chews",
        "image": "images/products/P13.png",
        "description": "Dreamies Tuna Cat Treats are irresistibly crunchy on the outside and soft on the inside, with a delicious tuna flavor that cats can't get enough of! Each treat contains vitamins and minerals, making them a healthy and tasty snack for your feline friend.",
        "rating": 4.6,
        "reviews_count": 1100
    },
    {
        "id": "clothing-007",
        "name": "Duuclume Dog Paw Boot Leggings",
        "price": 1199.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P40.png",
        "description": "Duuclume Dog Paw Boot Leggings offer comprehensive protection for your dog's paws and lower legs. These innovative leggings cover the entire leg, preventing snow, ice, mud, and burrs from clinging to fur and protecting sensitive paws from harsh surfaces.",
        "rating": 4.2,
        "reviews_count": 200
    },
    {
        "id": "tech-008",
        "name": "Litter-Robot 4 Self-Cleaning Litter Box",
        "price": 34990.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P50.png",
        "description": "The Litter-Robot 4 is a state-of-the-art self-cleaning litter box designed to make cat ownership easier and cleaner. It automatically sifts waste after each use, depositing it into a sealed drawer below, virtually eliminating odor and scooping.",
        "rating": 4.9,
        "reviews_count": 700
    },
    {
        "id": "health-004",
        "name": "Vet's Best Ear Relief Wash",
        "price": 470.00,
        "category": "Health & Grooming",
        "image": "images/products/P22.png",
        "description": "Vet's Best Ear Relief Wash provides fast, effective relief for itchy, irritated ears. Formulated with natural ingredients like tea tree oil, chamomile, and aloe vera, it helps soothe discomfort and remove excess wax, debris, and odor.",
        "rating": 4.4,
        "reviews_count": 600
    },
    {
        "id": "clothing-005",
        "name": "Paws Aboard Dog Lite Jacket",
        "price": 1500.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P38.png",
        "description": "The Paws Aboard Dog Lite Jacket is a comfortable and secure life vest designed to keep your dog safe around water. Made with highly buoyant foam and a quick-drying mesh underbelly, it provides excellent flotation without overheating.",
        "rating": 4.8,
        "reviews_count": 700
    },
    {
        "id": "bowls-003",
        "name": "Neater Feeder Deluxe",
        "price": 1699.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P30.png",
        "description": "A deluxe feeder for pets that combines style and practicality. Designed to keep your pet's feeding area clean and mess-free, it features a raised design to promote better posture and digestion while minimizing spills.",
        "rating": 4.7,
        "reviews_count": 550
    },
    {
        "id": "tech-001",
        "name": "PetCube Cam Pet Monitor",
        "price": 4200.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P43.png",
        "description": "Petcube Cam is a smart pet camera that allows you to check on your pets and home from anywhere. It features 1080p HD video, 8x digital zoom, night vision, and two-way audio, so you can see, hear, and speak to your pets.",
        "rating": 4.5,
        "reviews_count": 900
    },
    {
        "id": "toys-001",
        "name": "KONG Classic Dog Toy",
        "price": 499.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P1.png",
        "description": "The KONG Classic is the gold standard of dog toys and has become the staple for dogs around the world for over forty years. Offering enrichment by helping satisfy instinctual needs of dogs, the KONG Classic's unique natural red rubber formula is ultra-durable with an erratic bounce that is ideal for dogs that like to chew while also fulfilling a dog's need to play.",
        "rating": 4.5,
        "reviews_count": 1250
    },
    {
        "id": "tech-011",
        "name": "PetSafe Treat & Train Dispenser",
        "price": 3899.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P53.png",
        "description": "The PetSafe Treat & Train Remote Reward Dog Trainer is an innovative tool for teaching your dog good behavior. This system allows you to remotely reward your dog with treats and a unique sound, helping to shape positive actions even from a distance.",
        "rating": 4.3,
        "reviews_count": 250
    },
    {
        "id": "bowls-006",
        "name": "LumoLeaf No-Spill Bowl",
        "price": 880.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P33.png",
        "description": "The LumoLeaf No-Spill Dog Water Bowl is designed to eliminate messy spills and splashes, keeping your floors dry. Its unique floating disk mechanism allows only a controlled amount of water to surface, preventing large gulps and reducing drooling and splashing.",
        "rating": 4.5,
        "reviews_count": 300
    },
    {
        "id": "tech-009",
        "name": "PETKIT Smart Odor Eliminator",
        "price": 2200.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P51.png",
        "description": "The PETKIT Smart Odor Eliminator is a smart device designed to effectively remove odors in pet areas. Using intelligent detection and purified air technology, it automatically releases natural, non-toxic odor-absorbing mist when motion is detected.",
        "rating": 4.5,
        "reviews_count": 300
    },
    {
        "id": "health-003",
        "name": "Seresto Flea Collar",
        "price": 1980.00,
        "category": "Health & Grooming",
        "image": "images/products/P21.png",
        "description": "The Seresto Flea and Tick Collar provides long-lasting protection against fleas and ticks for up to 8 months. This innovative collar releases its active ingredients in low, controlled doses, ensuring continuous and effective prevention.",
        "rating": 4.8,
        "reviews_count": 1300
    },
    {
        "id": "bowls-005",
        "name": "Comsun Collapsible Bowl",
        "price": 299.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P32.png",
        "description": "The Comsun Collapsible Travel Bowl is perfect for pet owners on the go! Made from food-grade silicone, this portable bowl is safe for both food and water. It easily collapses flat for compact storage in your bag, backpack, or car, and features a carabiner clip for attachment.",
        "rating": 4.8,
        "reviews_count": 650
    },
    {
        "id": "health-008",
        "name": "Pawise Pet Nail Clippers",
        "price": 800.00,
        "category": "Health & Grooming",
        "image": "images/products/P26.png",
        "description": "Pawise Pet Nail Clippers are designed for safe and easy nail trimming for dogs and cats. Featuring sharp, stainless steel blades, they provide a clean, precise cut without splintering or crushing the nail.",
        "rating": 4.2,
        "reviews_count": 350
    },
    {
        "id": "treats-001",
        "name": "Greenies Dental Treats",
        "price": 399.00,
        "category": "Treats & Chews",
        "image": "images/products/P11.png",
        "description": "Greenies Dental Treats are veterinarian recommended for daily oral health care in dogs. Their unique chewy texture helps clean teeth down to the gumline to fight plaque and tartar buildup and freshen breath. Made with natural ingredients plus vitamins, minerals, and other nutrients, these treats are delicious and digestible.",
        "rating": 4.7,
        "reviews_count": 1800
    },
    {
        "id": "bowls-001",
        "name": "iPettie Pet Water Fountain",
        "price": 1499.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P28.png",
        "description": "The iPettie Pet Water Fountain provides a continuous supply of fresh, filtered water for your pets. The flowing water encourages pets to drink more, promoting hydration and kidney health. It features a multi-filtration system that removes impurities, hair, and odors, ensuring clean and great-tasting water.",
        "rating": 4.6,
        "reviews_count": 720
    },
    {
        "id": "clothing-001",
        "name": "Frisco Reversible Dog Jacket",
        "price": 920.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P34.png",
        "description": "The Frisco Reversible Dog Jacket offers versatility and warmth for your furry friend! This stylish jacket can be worn on both sides, providing two different looks in one. Made from soft, comfortable, and durable materials, it keeps your dog cozy during cooler weather. The easy-to-use snap closures make it simple to put on and take off, ensuring a snug and secure fit.",
        "rating": 4.4,
        "reviews_count": 450
    },
    {
        "id": "clothing-008",
        "name": "Doggles ILS Protective Eyewear",
        "price": 400.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P41.png",
        "description": "Doggles ILS (Interchangeable Lens System) Protective Eyewear for dogs offers superior eye protection from UV rays, wind, dust, and debris. Ideal for active dogs who enjoy car rides, motorcycle rides, or outdoor adventures, these goggles feature anti-fog and shatterproof lenses. The adjustable head and chin straps ensure a comfortable and secure fit for various breeds.",
        "rating": 4.0,
        "reviews_count": 150
    },
    {
        "id": "clothing-004",
        "name": "Pet Krewe Sesame Street Hoodie",
        "price": 1340.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P37.png",
        "description": "The Pet Krewe Sesame Street Elmo Dog & Cat Costume Hoodie brings fun and iconic style to your pet's wardrobe! Officially licensed, this adorable hoodie features Elmo's signature red fur and googly eyes, transforming your furry friend into everyone's favorite Muppet.",
        "rating": 4.5,
        "reviews_count": 280
    },
    {
        "id": "tech-004",
        "name": "PetSafe Smart Door",
        "price": 4750.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P46.png",
        "description": "The PetSafe SmartDoor is an innovative pet door that offers secure, selective access for your pets using a special SmartKey. It only allows entry to pets wearing the compatible SmartKey on their collar, preventing strays, wildlife, or unwanted animals from entering your home.",
        "rating": 4.1,
        "reviews_count": 350
    },
    {
        "id": "toys-009",
        "name": "Frisco Cat Tunnel with Crinkle Sound",
        "price": 699.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P9.png",
        "description": "The Frisco Cat Tunnel with Crinkle Sound provides endless fun and exercise for your feline friend! This collapsible tunnel features a crinkly material that cats love, enticing them to explore, chase, and play. Its spacious interior allows cats to dart through, hide, and pounce, satisfying their natural instincts.",
        "rating": 4.4,
        "reviews_count": 550
    },
    {
        "id": "toys-003",
        "name": "ZippyPaws Donutz Plush Squeaky Toy",
        "price": 299.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P3.png",
        "description": "ZippyPaws Donutz are plush dog toys that look like delicious donuts! Each Donutz toy includes 2 exclusive ZippyPaws round squeakers that are super durable and perfect for hours of squeaking fun. With no stuffing, these toys are extra safe for dogs and won't create a mess.",
        "rating": 4.2,
        "reviews_count": 750
    },
    {
        "id": "health-006",
        "name": "Burt's Bees Dog Paw and Nose Balm",
        "price": 265.00,
        "category": "Health & Grooming",
        "image": "images/products/P24.png",
        "description": "Burt's Bees Dog Paw & Nose Balm is a soothing natural remedy for dry, cracked paws and noses. Made with ingredients like rosemary, olive oil, and beeswax, it moisturizes and protects your pet's sensitive areas from harsh elements. This balm is pH balanced specifically for dogs and free from fragrances, sulfates, and harsh chemicals, ensuring it's gentle and safe.",
        "rating": 4.7,
        "reviews_count": 700
    },
    {
        "id": "clothing-003",
        "name": "Frisco Cozy Plush Fleece PJs",
        "price": 1100.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P36.png",
        "description": "Frisco Cozy Plush Fleece PJs are the perfect way to keep your dog warm and comfortable, especially on chilly nights or for older pets. Made from super soft and plush fleece fabric, these pajamas provide full-body coverage for extra warmth. The elastic leg openings and stretchy material ensure a comfortable fit that doesn't restrict movement.",
        "rating": 4.7,
        "reviews_count": 600
    },
    {
        "id": "toys-006",
        "name": "Snuggle Puppy Behavioral Aid Toy",
        "price": 1650.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P6.png",
        "description": "The Snuggle Puppy Behavioral Aid Toy is designed to provide comfort and reduce anxiety in pets. This innovative toy features a 'real-feel' pulsing heartbeat and a heat pack, mimicking the warmth and intimacy of a mother dog or littermates. It's perfect for new puppies transitioning to their new homes, anxious dogs, or those experiencing separation anxiety.",
        "rating": 4.6,
        "reviews_count": 650
    },
    {
        "id": "tech-003",
        "name": "Whistle Health Tracker",
        "price": 1980.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P45.png",
        "description": "The Whistle Health Tracker is a smart device that tracks your pet's activity, sleep, and scratching/licking patterns. It provides valuable insights into their overall health and behavior, helping you detect potential health issues early. The tracker easily attaches to your pet's collar and syncs with the Whistle app, where you can view daily reports and set goals.",
        "rating": 4.3,
        "reviews_count": 600
    },
    {
        "id": "treats-004",
        "name": "Milk-Bone Biscuits",
        "price": 420.00,
        "category": "Treats & Chews",
        "image": "images/products/P14.png",
        "description": "Milk-Bone Original Dog Biscuits are a classic, wholesome treat that dogs have loved for generations. Fortified with 12 vitamins and minerals, these crunchy biscuits help clean teeth and freshen breath as your dog chews. Their satisfying crunch helps reduce tartar buildup, contributing to overall dental health.",
        "rating": 4.5,
        "reviews_count": 1300
    },
    {
        "id": "health-005",
        "name": "Earthbath All Natural Pet Shampoo",
        "price": 1665.00,
        "category": "Health & Grooming",
        "image": "images/products/P23.png",
        "description": "Earthbath All Natural Pet Shampoo is a gentle and effective cleaning solution for keeping your pet clean and their coat healthy. Made with natural, biodegradable ingredients, this soap-free shampoo is safe for pets over 6 weeks old. It cleans thoroughly, removes excess oil, and leaves the coat soft, shiny, and smelling fresh. Free from sulfates, parabens, and artificial dyes, it's ideal for pets with sensitive skin or allergies.",
        "rating": 4.6,
        "reviews_count": 850
    },
    {
        "id": "toys-007",
        "name": "Trixie Dog Activity Flip Board",
        "price": 710.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P7.png",
        "description": "The Trixie Dog Activity Flip Board is an interactive puzzle game that challenges your dog's intelligence and problem-solving skills. Dogs learn to open various compartments using different techniques (lifting, flipping, sliding) to reveal hidden treats. This game stimulates your dog mentally, reduces boredom, and helps prevent destructive behaviors.",
        "rating": 4.3,
        "reviews_count": 420
    },
    {
        "id": "tech-006",
        "name": "Cheerble Wicked Ball",
        "price": 2350.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P48.png",
        "description": "The Cheerble Wicked Ball is an interactive pet toy that provides automatic, stimulating play for cats and small dogs. This smart ball moves, bounces, and lights up on its own, enticing pets to chase, bat, and pounce. With three interaction modes (gentle, normal, active), it adapts to your pet's play style.",
        "rating": 4.4,
        "reviews_count": 550
    },
    {
        "id": "tech-002",
        "name": "Furbo Dog Camera",
        "price": 5990.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P44.png",
        "description": "The Furbo Dog Camera is an interactive pet camera that lets you see, talk to, and even toss treats to your dog remotely. It features 1080p HD video with night vision, two-way audio, and a barking alert that notifies you when your dog barks.",
        "rating": 4.7,
        "reviews_count": 1200
    },
    {
        "id": "toys-008",
        "name": "Nylabone Power Chew DuraChew",
        "price": 590.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P8.png",
        "description": "The Nylabone Power Chew DuraChew is designed for extreme chewers! Made from tough, durable nylon, this chew toy satisfies your dog's natural urge to chew while helping to clean teeth and control plaque and tartar buildup. Its textured surface provides a stimulating chewing experience that keeps dogs engaged and happy.",
        "rating": 4.7,
        "reviews_count": 910
    },
    {
        "id": "treats-008",
        "name": "Temptations Classic Cat Treats",
        "price": 149.00,
        "category": "Treats & Chews",
        "image": "images/products/P18.png",
        "description": "Temptations Classic Cat Treats are crunchy on the outside and soft on the inside, offering an irresistibly texture and flavor combination that cats crave. With a delicious chicken flavor, these treats are perfect for rewarding your feline friend during playtime or as a special indulgence.",
        "rating": 4.8,
        "reviews_count": 1600
    },
    {
        "id": "toys-010",
        "name": "Snuffle Mat for Dogs - Puzzle Feeding Pad",
        "price": 549.00,
        "category": "Toys & Enrichment",
        "image": "images/products/P10.png",
        "description": "The Snuffle Mat for Dogs is an engaging puzzle feeding pad designed to stimulate your dog's mind and slow down their eating. Simply hide kibble or treats among the fabric strips, and let your dog use their natural foraging skills to sniff them out.",
        "rating": 4.6,
        "reviews_count": 600
    },
    {
        "id": "clothing-009",
        "name": "Pawz Dog Boots-Waterproof & Reusable",
        "price": 699.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P42.png",
        "description": "Pawz Dog Boots are natural rubber dog boots designed for maximum protection and comfort without compromising paw feel. These disposable, reusable, and waterproof boots are perfect for protecting paws from hot pavement, ice, salt, chemicals, snow, and rough terrain.",
        "rating": 4.5,
        "reviews_count": 500
    },
    {
        "id": "treats-002",
        "name": "Churu Lickable Cat Treats",
        "price": 249.00,
        "category": "Treats & Chews",
        "image": "images/products/P12.png",
        "description": "Inaba Churu Lickable Cat Treats are a creamy, delicious, and interactive treat that cats adore! Made with real, high-quality ingredients like wild tuna or farm-raised chicken, these pureed treats are rich in moisture, essential for feline hydration.",
        "rating": 4.9,
        "reviews_count": 2500
    },
    {
        "id": "bowls-002",
        "name": "Outward Hound Fun Feeder Bowl",
        "price": 1265.00,
        "category": "Bowls & Feeders",
        "image": "images/products/P29.png",
        "description": "The Outward Hound Fun Feeder Slo-Bowl is designed to slow down your dog's eating pace, which can aid in digestion, prevent bloating, and reduce discomfort. The unique maze-like design of the bowl forces your dog to eat around obstacles, extending mealtime up to 10 times longer.",
        "rating": 4.5,
        "reviews_count": 980
    },
    {
        "id": "health-002",
        "name": "TropiClean Pet Shampoo",
        "price": 620.00,
        "category": "Health & Grooming",
        "image": "images/products/P20.png",
        "description": "TropiClean Hypo-Allergenic Pet Shampoo is a gentle and effective cleaning solution for pets with sensitive skin. Made with naturally derived ingredients, it is tear-free and fragrance-free, ensuring a soothing bath experience without irritation.",
        "rating": 4.5,
        "reviews_count": 700
    },
    {
        "id": "treats-006",
        "name": "SmartBones Chicken Chews",
        "price": 520.00,
        "category": "Treats & Chews",
        "image": "images/products/P16.png",
        "description": "SmartBones Chicken Chews are a delicious and healthy alternative to rawhide. Made with real chicken and wholesome vegetables, these chews are 99% digestible and enriched with vitamins and minerals. Their unique texture helps reduce tartar buildup and freshen breath, contributing to good dental hygiene.",
        "rating": 4.4,
        "reviews_count": 800
    },
    {
        "id": "tech-010",
        "name": "Petcube Bites 2 Lite Treat Dispenser",
        "price": 7900.00,
        "category": "Pet Tech & Gadgets",
        "image": "images/products/P52.png",
        "description": "The Petcube Bites 2 Lite Treat Dispenser is an interactive pet camera that allows you to remotely monitor, play with, and reward your pets. It features 1080p HD video, night vision, two-way audio, and a wide-angle lens. The highlight is its treat-tossing mechanism, allowing you to launch treats to your pet from your smartphone.",
        "rating": 4.6,
        "reviews_count": 450
    },
    {
        "id": "treats-007",
        "name": "Pedigree Adult Dry Dog Food",
        "price": 1200.00,
        "category": "Treats & Chews",
        "image": "images/products/P17.png",
        "description": "Pedigree Adult Dry Dog Food provides 100% complete and balanced nutrition for adult dogs. Formulated with a special blend of vitamins, minerals, and essential fatty acids, it supports healthy skin and a shiny coat. The crunchy kibble helps clean teeth and reduce plaque buildup.",
        "rating": 4.3,
        "reviews_count": 1050
    },
    {
        "id": "clothing-002",
        "name": "Pet Life Reflective Raincoat",
        "price": 1150.00,
        "category": "Clothing & Lifestyle",
        "image": "images/products/P35.png",
        "description": "The Pet Life Reflective Windbreaker and Raincoat provides excellent protection and visibility for your dog during walks. Made from waterproof and windproof polyester, it keeps your pet dry and comfortable in inclement weather. The vibrant color and reflective striping enhance visibility in low-light conditions, increasing safety during evening strolls.",
        "rating": 4.6,
        "reviews_count": 380
    }
];

// Add flags for special sections (indices updated after removing duplicates)
// Paw Picks
products[0].pawPicks = true;  // PetSafe Happy Ride Car Seat (was 18)
products[9].pawPicks = true;  // Furminator De-Shedding Tool (was 9)
products[13].pawPicks = true; // Litter-Robot 4 Self-Cleaning Litter Box (was 13)
products[15].pawPicks = true; // Paws Aboard Dog Lite Jacket (was 21)
products[16].pawPicks = true; // Neater Feeder Deluxe (was 15)
products[17].pawPicks = true; // PetCube Cam Pet Monitor (was 19)
products[21].pawPicks = true; // PETKIT Smart Odor Eliminator (was 26)
products[26].pawPicks = true; // iPettie Pet Water Fountain (was 16)

// Sniff of the Day
products[3].sniffOfTheDay = true;  // Petkin Toothwipes (was 23)
products[11].sniffOfTheDay = true; // Dreamies Tuna Cat Treats (was 17)
products[19].sniffOfTheDay = true; // PetSafe Treat & Train Dispenser (was 11)
products[22].sniffOfTheDay = true; // Seresto Flea Collar (was 25)

// Customer Favorites
products[1].customerFavorites = true;  // Pet-Pourri Odor Freshener Pet Wipes (was 20)
products[2].customerFavorites = true;  // Frisco Stainless Steel Bowl (was 2)
products[25].customerFavorites = true; // Greenies Dental Treats (was 28)
products[29].customerFavorites = true; // Doggles ILS Protective Eyewear (was 1)

// Function to display products in a grid
function displayProducts(productsToDisplay, targetGridElement) {
    if (!targetGridElement) {
        console.warn("Target grid element not found.");
        return;
    }

    targetGridElement.innerHTML = '';
    if (productsToDisplay.length === 0) {
        targetGridElement.innerHTML = '<p>No products found in this category.</p>';
        return;
    }
    productsToDisplay.forEach(product => {
        targetGridElement.appendChild(createProductCard(product));
    });
}

// Filter and display products by category
function filterAndDisplayCategory(categoryName) {
    const filteredProducts = categoryName === 'All' 
        ? products 
        : products.filter(product => product.category === categoryName);
    const allProductsGrid = document.getElementById('allProductsGrid');
    displayProducts(filteredProducts, allProductsGrid);
}

// Load homepage sections
function loadHomepageSections() {
    const pawPicksGrid = document.getElementById('pawPicksGrid');
    if (pawPicksGrid) {
        const pawPicks = products.filter(product => product.pawPicks === true).slice(0, 8);
        displayProducts(pawPicks, pawPicksGrid);
        console.log('Successfully loaded Paw Picks.');
    }

    const sniffDayGrid = document.getElementById('sniffOfTheDayGrid');
    if (sniffDayGrid) {
        const sniffOfTheDay = products.filter(product => product.sniffOfTheDay === true).slice(0, 4);
        displayProducts(sniffOfTheDay, sniffDayGrid);
        console.log('Successfully loaded Sniff of the Day.');
    }

    const customerFavoritesGrid = document.getElementById('customerFavoritesGrid');
    if (customerFavoritesGrid) {
        const customerFavorites = products.filter(product => product.customerFavorites === true).slice(0, 4);
        displayProducts(customerFavorites, customerFavoritesGrid);
        console.log('Successfully loaded Customer Favorites.');
    }
}

// CART MANAGEMENT
let promoApplied = false; // Flag for promo code application

function getCart() {
    const cart = localStorage.getItem('gotchewCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('gotchewCart', JSON.stringify(cart));
    updateCartDisplay();
    if (window.location.pathname.includes('checkout.html')) {
        displayCheckoutCartItems();
    }
}

function addToCart(productId, quantity = 1) {
    let cart = getCart();
    const productToAdd = products.find(p => p.id === productId);

    if (!productToAdd) {
        console.error('Product not found:', productId);
        alert('Error: Product not found.');
        return;
    }

    const existingItemIndex = cart.findIndex(item => item.id === productId);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += quantity;
    } else {
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: productToAdd.price,
            image: productToAdd.image,
            qty: quantity
        });
    }

    saveCart(cart);
    alert(`${quantity} of "${productToAdd.name}" added to cart!`);
    console.log('Cart updated:', cart);
}

function updateCartItemQuantity(productId, newQuantity) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        newQuantity = parseInt(newQuantity);
        if (newQuantity > 0) {
            cart[itemIndex].qty = newQuantity;
        } else {
            cart.splice(itemIndex, 1);
        }
        saveCart(cart);
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartContent = document.getElementById('cartContent');
    let cart = getCart();

    if (!cartItemsContainer) {
        console.warn("Cart items container not found.");
        return;
    }

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
    } else {
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        if (cartContent) cartContent.style.display = 'flex';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.dataset.productId = item.id;
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                </div>
                <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity-selector">
                        <button class="decrease-qty" data-product-id="${item.id}">-</button>
                        <input type="number" value="${item.qty}" min="1" class="item-qty" data-product-id="${item.id}">
                        <button class="increase-qty" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-btn" data-product-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
    calculateCartTotals();
}

function updateCartDisplay() {
    const cartContent = document.getElementById('cartContent');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cart = getCart();

    if (cart.length === 0) {
        if (cartContent) cartContent.style.display = 'none';
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
        return;
    }

    if (cartContent) cartContent.style.display = 'flex';
    if (emptyCartMessage) emptyCartMessage.style.display = 'none';

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.dataset.productId = item.id;
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                </div>
                <div class="cart-item-price">${formatPrice(itemTotal)}</div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity-selector">
                        <button class="decrease-qty" data-product-id="${item.id}">-</button>
                        <input type="number" value="${item.qty}" min="1" class="item-qty" data-product-id="${item.id}">
                        <button class="increase-qty" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item-btn" data-product-id="${item.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    calculateCartTotals();
}

function calculateCartTotals(isCheckoutPage = false) {
    const cart = getCart();
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.qty);

    let discount = 0;
    const discountPercentage = 10;
    let promoAppliedForCalc = promoApplied;

    if (isCheckoutPage) {
        const checkoutPromoCodeInput = document.getElementById('checkoutPromoCodeInput');
        promoAppliedForCalc = checkoutPromoCodeInput?.value === 'GOTCHEW10';
    }

    const subtotalElemId = isCheckoutPage ? 'checkoutSubtotal' : 'subtotal';
    const discountElemId = isCheckoutPage ? 'checkoutDiscount' : 'discount';
    const discountPercentageElemId = isCheckoutPage ? 'checkoutDiscountPercentage' : 'discountPercentage';
    const deliveryFeeElemId = isCheckoutPage ? 'checkoutDeliveryFee' : 'deliveryFee';
    const totalElemId = isCheckoutPage ? 'checkoutTotal' : 'total';
    const discountRowId = isCheckoutPage ? 'checkoutDiscountRow' : null;

    const discountRow = discountRowId 
        ? document.getElementById(discountRowId) 
        : document.querySelector('.order-summary-row #discount')?.closest('.order-summary-row');

    if (promoAppliedForCalc) {
        discount = subtotal * (discountPercentage / 100);
        document.getElementById(discountPercentageElemId).textContent = discountPercentage;
        document.getElementById(discountElemId).textContent = `-${formatPrice(discount)}`;
        if (discountRow) discountRow.style.display = 'flex';
    } else {
        if (discountRow) discountRow.style.display = 'none';
        document.getElementById(discountPercentageElemId).textContent = '0';
        document.getElementById(discountElemId).textContent = `-P0.00`;
    }

    const deliveryFeeThreshold = 2500;
    const baseDeliveryFee = 0;
    const deliveryFee = subtotal >= deliveryFeeThreshold ? 0 : baseDeliveryFee;
    let total = subtotal - discount + deliveryFee;

    document.getElementById(subtotalElemId).textContent = formatPrice(subtotal);
    document.getElementById(deliveryFeeElemId).textContent = formatPrice(deliveryFee);
    document.getElementById(totalElemId).textContent = formatPrice(total);

    if (!isCheckoutPage) {
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        const cartHeader = document.querySelector('.cart-header');
        const orderSummarySection = document.querySelector('.cart-right.order-summary');

        if (cart.length === 0) {
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            if (cartHeader) cartHeader.textContent = 'YOUR CART IS EMPTY';
            if (orderSummarySection) orderSummarySection.style.display = 'none';
        } else {
            if (emptyCartMessage) emptyCartMessage.style.display = 'none';
            if (cartHeader) cartHeader.textContent = 'YOUR CART';
            if (orderSummarySection) orderSummarySection.style.display = 'block';
        }
    }

    return { subtotal, discount, deliveryFee, total, tax: 0 };
}

// SEARCH AND NAVIGATION
function handleSearch(query, searchResultsContainer) {
    if (!searchResultsContainer) return;
    if (!query.trim()) {
        searchResultsContainer.style.display = 'none';
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );

    searchResultsContainer.innerHTML = '';
    if (filteredProducts.length === 0) {
        searchResultsContainer.innerHTML = '<p style="padding: 10px; color: #555;">No products found.</p>';
        searchResultsContainer.style.display = 'block';
        return;
    }

    filteredProducts.forEach(product => {
        const resultItem = document.createElement('a');
        resultItem.className = 'search-result-item';
        resultItem.href = `product-detail.html?id=${product.id}`;
        resultItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/40x40/cccccc/000000?text=No+Img';">
            <span>${product.name}</span>
            <span class="category">(${product.category})</span>
        `;
        searchResultsContainer.appendChild(resultItem);
    });

    searchResultsContainer.style.display = 'block';
}

function redirectToShopWithSearch(query) {
    if (query.trim()) {
        window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
    }
}

function generateBreadcrumbs(product) {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    if (!breadcrumbsContainer) return;

    let breadcrumbsHtml = `
        <a href="homepage.html">Home</a>
        <a href="shop.html">Shop</a>
    `;
    
    if (product?.category) {
        breadcrumbsHtml += `<a href="shop.html?category=${encodeURIComponent(product.category)}">${product.category}</a>`;
    }
    if (product?.name) {
        breadcrumbsHtml += `<span>${product.name}</span>`;
    }

    breadcrumbsContainer.innerHTML = breadcrumbsHtml;
}

// CHECKOUT AND CONFIRMATION
function displayCheckoutCartItems() {
    const cart = getCart();
    const checkoutCartItemsContainer = document.getElementById('checkoutCartItemsContainer');
    const emptyCheckoutCartMessage = document.getElementById('emptyCheckoutCartMessage');
    const checkoutCartContent = document.getElementById('checkoutCartContent');

    if (!checkoutCartItemsContainer || !emptyCheckoutCartMessage || !checkoutCartContent) {
        console.warn("One or more checkout container elements not found.");
        return;
    }

    checkoutCartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        emptyCheckoutCartMessage.style.display = 'block';
        checkoutCartContent.style.display = 'none';
    } else {
        emptyCheckoutCartMessage.style.display = 'none';
        checkoutCartContent.style.display = 'block';
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'checkout-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-info">
                    <h3>${item.name}</h3>
                    <p>Qty: ${item.qty}</p>
                </div>
                <span class="checkout-item-price">${formatPrice(item.price * item.qty)}</span>
            `;
            checkoutCartItemsContainer.appendChild(itemDiv);
        });
    }
    calculateCartTotals(true);
}

// MAIN EVENT LISTENER
document.addEventListener('DOMContentLoaded', () => {
    // --- Search Bar Logic (Global) ---
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResults');
    const clearSearchIcon = document.getElementById('clearSearchIcon');
    const searchTriggerIcon = document.getElementById('searchTriggerIcon');

    if (searchInput && searchResultsContainer && clearSearchIcon && searchTriggerIcon) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value;
            if (query.trim()) {
                clearSearchIcon.style.display = 'inline-block';
                handleSearch(query, searchResultsContainer);
            } else {
                clearSearchIcon.style.display = 'none';
                searchResultsContainer.style.display = 'none';
            }
        });

        clearSearchIcon.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchIcon.style.display = 'none';
            searchResultsContainer.style.display = 'none';
            searchInput.focus();
        });

        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                redirectToShopWithSearch(searchInput.value);
            }
        });

        searchTriggerIcon.addEventListener('click', () => {
            redirectToShopWithSearch(searchInput.value);
        });

        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && 
                !searchResultsContainer.contains(event.target) &&
                !searchTriggerIcon.contains(event.target) &&
                !clearSearchIcon.contains(event.target)) {
                searchResultsContainer.style.display = 'none';
            }
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                handleSearch(searchInput.value, searchResultsContainer);
            }
        });
    }

    // --- HOMEPAGE.HTML Logic ---
    if (window.location.pathname.includes('homepage.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
        loadHomepageSections();
    }
    // --- SHOP.HTML Logic ---
    else if (window.location.pathname.includes('shop.html')) {
        const categoryItems = document.querySelectorAll('.category-item');
        const allProductsHeaderTitle = document.querySelector('.shop-products-section .section-header h2');

        function setActiveCategory(activeCategoryData) {
            categoryItems.forEach(item => {
                if (item.dataset.category === activeCategoryData) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        const urlParams = new URLSearchParams(window.location.search);
        const categoryFromUrl = urlParams.get('category');
        const searchTermFromUrl = urlParams.get('search');

        if (searchTermFromUrl) {
            const filteredBySearch = products.filter(product =>
                product.name.toLowerCase().includes(searchTermFromUrl.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTermFromUrl.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTermFromUrl.toLowerCase())
            );
            displayProducts(filteredBySearch, document.getElementById('allProductsGrid'));
            if (allProductsHeaderTitle) {
                allProductsHeaderTitle.innerHTML = `Search Results for "<span style="color: #FF7F00;">${searchTermFromUrl}</span>"`;
            }
            if (searchInput) {
                searchInput.value = searchTermFromUrl;
                clearSearchIcon.style.display = 'inline-block';
            }
            setActiveCategory(null);
        } else if (categoryFromUrl) {
            filterAndDisplayCategory(categoryFromUrl);
            setActiveCategory(categoryFromUrl);
            if (allProductsHeaderTitle) {
                allProductsHeaderTitle.innerHTML = `All Our Products <span class="subtitle">Explore our complete collection</span>`;
            }
        } else {
            filterAndDisplayCategory('All');
            setActiveCategory('All');
            if (allProductsHeaderTitle) {
                allProductsHeaderTitle.innerHTML = `All Our Products <span class="subtitle">Explore our complete collection</span>`;
            }
        }

        categoryItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const categoryName = item.dataset.category;

                if (item.classList.contains('active')) {
                    filterAndDisplayCategory('All');
                    setActiveCategory('All');
                    history.pushState(null, '', 'shop.html');
                    if (allProductsHeaderTitle) {
                        allProductsHeaderTitle.innerHTML = `All Our Products <span class="subtitle">Explore our complete collection</span>`;
                    }
                } else {
                    filterAndDisplayCategory(categoryName);
                    setActiveCategory(categoryName);
                    history.pushState(null, '', `shop.html?category=${encodeURIComponent(categoryName)}`);
                    if (allProductsHeaderTitle) {
                        allProductsHeaderTitle.innerHTML = `${categoryName} <span class="subtitle">Category</span>`;
                    }
                }
                if (searchInput) {
                    searchInput.value = '';
                    clearSearchIcon.style.display = 'none';
                }
            });
        });

        if (allProductsHeaderTitle) {
            allProductsHeaderTitle.style.cursor = 'pointer';
            allProductsHeaderTitle.addEventListener('click', () => {
                filterAndDisplayCategory('All');
                setActiveCategory('All');
                history.pushState(null, '', 'shop.html');
                allProductsHeaderTitle.innerHTML = `All Our Products <span class="subtitle">Explore our complete collection</span>`;
                if (searchInput) {
                    searchInput.value = '';
                    clearSearchIcon.style.display = 'none';
                }
            });
        }
    }
    // --- PRODUCT-DETAIL.HTML Logic ---
    else if (window.location.pathname.includes('product-detail.html')) {
        const productImage = document.getElementById('productImage');
        const productName = document.getElementById('productName');
        const productPrice = document.getElementById('productPrice');
        const productStars = document.getElementById('productStars');
        const productReviews = document.getElementById('productReviews');
        const productDescription = document.getElementById('productDescription');
        const productQuantityInput = document.getElementById('productQuantity');
        const decreaseQuantityBtn = document.getElementById('decreaseQuantity');
        const increaseQuantityBtn = document.getElementById('increaseQuantity');
        const addToCartBtnSingle = document.getElementById('addToCartBtnSingle');
        const addToFavoritesBtn = document.getElementById('addToFavoritesBtn');

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId) {
            const product = products.find(p => p.id === productId);

            if (product) {
                productImage.src = product.image;
                productImage.alt = product.name;
                productName.textContent = product.name;
                productPrice.textContent = formatPrice(product.price);
                productDescription.textContent = product.description;
                productStars.innerHTML = getStarsHtml(product.rating || 0);
                productReviews.textContent = `(${product.rating || 'N/A'}/5) - ${product.reviews_count || 0} reviews`;

                generateBreadcrumbs(product);

                if (decreaseQuantityBtn && productQuantityInput) {
                    decreaseQuantityBtn.addEventListener('click', () => {
                        let currentQuantity = parseInt(productQuantityInput.value);
                        if (currentQuantity > 1) {
                            productQuantityInput.value = currentQuantity - 1;
                        }
                    });
                }

                if (increaseQuantityBtn && productQuantityInput) {
                    increaseQuantityBtn.addEventListener('click', () => {
                        let currentQuantity = parseInt(productQuantityInput.value);
                        productQuantityInput.value = currentQuantity + 1;
                    });
                }

                if (addToCartBtnSingle && productQuantityInput) {
                    addToCartBtnSingle.addEventListener('click', () => {
                        alert(`"${product.name}" added to your cart!`);
                        const quantity = parseInt(productQuantityInput.value);
                        addToCart(product.id, quantity);
                    });
                }

                if (addToFavoritesBtn) {
                    addToFavoritesBtn.addEventListener('click', () => {
                        alert(`"${product.name}" added to your favorites!`);
                        console.log(`Product "${product.name}" (ID: ${product.id}) added to favorites.`);
                    });
                }
            } else {
                const container = document.querySelector('.product-detail-page-content .product-detail-container');
                if (container) {
                    container.innerHTML = '<h1>Product Not Found</h1><p>The product you are looking for does not exist.</p><p><a href="shop.html">Back to Shop</a></p>';
                    const breadcrumbsContainer = document.getElementById('breadcrumbs');
                    if (breadcrumbsContainer) breadcrumbsContainer.innerHTML = '';
                }
            }
        } else {
            const container = document.querySelector('.product-detail-page-content .product-detail-container');
            if (container) {
                container.innerHTML = '<h1>No Product Selected</h1><p>Please select a product from the <a href="shop.html">shop page</a>.</p>';
                const breadcrumbsContainer = document.getElementById('breadcrumbs');
                if (breadcrumbsContainer) breadcrumbsContainer.innerHTML = '';
            }
        }
    }
    // --- CART.HTML Logic ---
    else if (window.location.pathname.includes('cart.html')) {
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        updateCartDisplay();

        if (cartItemsContainer) {
            if (!cartItemsContainer.dataset.listenersAttached) {
                cartItemsContainer.addEventListener('click', (event) => {
                    const target = event.target;
                    const cartItemDiv = target.closest('.cart-item');

                    if (!cartItemDiv) return;
                    const productId = cartItemDiv.dataset.productId;

                    if (target.classList.contains('decrease-qty')) {
                        const qtyInput = cartItemDiv.querySelector('.item-qty');
                        let currentQty = parseInt(qtyInput.value);
                        if (currentQty > 1) {
                            qtyInput.value = currentQty - 1;
                            updateCartItemQuantity(productId, qtyInput.value);
                        } else {
                            removeFromCart(productId);
                        }
                    } else if (target.classList.contains('increase-qty')) {
                        const qtyInput = cartItemDiv.querySelector('.item-qty');
                        let currentQty = parseInt(qtyInput.value);
                        qtyInput.value = currentQty + 1;
                        updateCartItemQuantity(productId, qtyInput.value);
                    } else if (target.closest('.remove-item-btn')) {
                        removeFromCart(productId);
                    }
                });

                cartItemsContainer.addEventListener('change', (event) => {
                    const target = event.target;
                    const cartItemDiv = target.closest('.cart-item');

                    if (!cartItemDiv || !target.classList.contains('item-qty')) return;

                    const productId = cartItemDiv.dataset.productId;
                    let newQty = parseInt(target.value);
                    if (isNaN(newQty) || newQty < 1) {
                        newQty = 1;
                        target.value = 1;
                    }
                    updateCartItemQuantity(productId, newQty);
                });

                cartItemsContainer.dataset.listenersAttached = 'true';
            }
        }

        const applyPromoCodeBtn = document.getElementById('applyPromoCode');
        const promoCodeInput = document.getElementById('promoCodeInput');
        if (applyPromoCodeBtn && promoCodeInput) {
            applyPromoCodeBtn.addEventListener('click', () => {
                if (promoCodeInput.value === 'GOTCHEW10') {
                    promoApplied = true;
                    alert('Promo code applied successfully!');
                } else {
                    promoApplied = false;
                    alert('Invalid or expired promo code.');
                }
                calculateCartTotals();
            });
        }

        const checkoutBtn = document.querySelector('.checkout-button');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = 'checkout.html';
            });
        }
    }
    // --- CHECKOUT.HTML Logic ---
    else if (window.location.pathname.includes('checkout.html')) {
        const checkoutCartItemsContainer = document.getElementById('checkoutCartItemsContainer');
        const placeOrderBtn = document.getElementById('placeOrderBtn');
        const checkoutPromoCodeInput = document.getElementById('checkoutPromoCodeInput');
        const applyCheckoutPromoCodeBtn = document.getElementById('applyCheckoutPromoCode');
        const checkoutForm = document.getElementById('checkoutForm');

        displayCheckoutCartItems();

        if (applyCheckoutPromoCodeBtn && checkoutPromoCodeInput) {
            applyCheckoutPromoCodeBtn.addEventListener('click', () => {
                if (checkoutPromoCodeInput.value === 'GOTCHEW10') {
                    promoApplied = true;
                    alert('Promo code applied successfully!');
                } else {
                    promoApplied = false;
                    alert('Invalid or expired promo code.');
                }
                calculateCartTotals(true);
            });
        }

        if (placeOrderBtn) {
            placeOrderBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const form = document.getElementById('checkoutForm');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    alert('Please fill in all required billing details.');
                    return;
                }

                const cart = getCart();
                if (cart.length === 0) {
                    alert('Your cart is empty. Please add items before placing an order.');
                    return;
                }

                const confirmOrder = confirm('Are you sure you want to place this order?');
                if (confirmOrder) {
                    const billingDetails = {
                        name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
                        address: `${document.getElementById('streetAddress').value}${document.getElementById('apartment').value ? ', ' + document.getElementById('apartment').value : ''}, ${document.getElementById('townCity').value}, Philippines`,
                        phone: document.getElementById('phoneNumber').value,
                        email: document.getElementById('emailAddress').value
                    };

                    const orderItems = getCart();
                    const orderTotals = calculateCartTotals(true);
                    const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
                    const orderDate = new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
                    const selectedPaymentMethodElement = document.querySelector('input[name="paymentMethod"]:checked');
                    const paymentMethod = selectedPaymentMethodElement ? selectedPaymentMethodElement.value : 'N/A';

                    localStorage.setItem('lastOrderDetails', JSON.stringify({
                        billing: billingDetails,
                        items: orderItems,
                        totals: orderTotals,
                        orderNumber: orderNumber,
                        orderDate: orderDate,
                        paymentMethod: paymentMethod
                    }));

                    localStorage.removeItem('gotchewCart');
                    promoApplied = false;
                    window.location.href = 'confirmation.html';
                }
            });
        }

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Checkout form submitted (data not sent to server).');
            });
        }
    }
    // --- CONFIRMATION.HTML Logic ---
    else if (window.location.pathname.includes('confirmation.html')) {
        const lastOrderDetails = JSON.parse(localStorage.getItem('lastOrderDetails'));

        if (lastOrderDetails) {
            document.getElementById('confirmName').textContent = lastOrderDetails.billing.name;
            document.getElementById('confirmAddress').textContent = lastOrderDetails.billing.address;
            document.getElementById('confirmPhone').textContent = lastOrderDetails.billing.phone;
            document.getElementById('confirmEmail').textContent = lastOrderDetails.billing.email;

            document.getElementById('orderDate').textContent = lastOrderDetails.orderDate;
            document.getElementById('orderNumber').textContent = lastOrderDetails.orderNumber;
            document.getElementById('paymentMethod').textContent = lastOrderDetails.paymentMethod;

            const confirmOrderItemsContainer = document.getElementById('confirmOrderItems');
            confirmOrderItemsContainer.innerHTML = '';
            lastOrderDetails.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'order-summary-item';
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="order-summary-item-details">
                        <h3>${item.name}</h3>
                        <p>Qty: ${item.qty}</p>
                    </div>
                    <span class="order-summary-item-price">${formatPrice(item.price * item.qty)}</span>
                `;
                confirmOrderItemsContainer.appendChild(itemDiv);
            });

            document.getElementById('confirmSubtotal').textContent = formatPrice(lastOrderDetails.totals.subtotal);
            document.getElementById('confirmShipping').textContent = formatPrice(lastOrderDetails.totals.deliveryFee);
            document.getElementById('confirmTax').textContent = formatPrice(lastOrderDetails.totals.tax || 0);
            document.getElementById('confirmOrderTotal').textContent = formatPrice(lastOrderDetails.totals.total);
        } else {
            const confirmationContainer = document.querySelector('.confirmation-container');
            if (confirmationContainer) {
                confirmationContainer.innerHTML = `
                    <div style="text-align: center; width: 100%; padding: 50px;">
                        <h1 style="color: #003366;">No Order Details Found</h1>
                        <p style="color: #555555; font-size: 1.1em;">It looks like you haven't placed an order recently.</p>
                        <p><a href="shop.html" class="track-order-button" style="display: inline-block; margin-top: 20px;">Continue Shopping</a></p>
                    </div>
                `;
            }
        }
    }
});