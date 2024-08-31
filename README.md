<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AquaLabs - Aquarium Services in San Francisco</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>

<body class="bg-white text-gray-800">
    <!-- Navbar -->
    <nav class="bg-white fixed w-full shadow-md z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="#home" class="text-2xl font-bold text-teal-500">AquaLabs</a>
                </div>
                <div class="hidden md:flex space-x-4">
                    <a href="#home" class="nav-link">Home</a>
                    <a href="#about" class="nav-link">About Us</a>
                    <a href="#services" class="nav-link">Services</a>
                    <a href="#portfolio" class="nav-link">Portfolio</a>
                    <a href="#contact" class="nav-link">Contact</a>
                    <a href="order.html" class="nav-link">Place Order</a> <!-- Updated link for Place Order -->
                    <a href="#terms" class="nav-link">Terms</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="home-section bg-cover bg-center text-white text-center" style="background-image: url('AquaLabs Uday.jpg'); background-size: cover; background-position: center; height: 70vh;"> <!-- Adjusted height to 70vh -->
        <div class="container mx-auto h-full flex flex-col justify-center items-center">
            <h1 class="text-4xl md:text-6xl font-bold">Enhance Your Space with AquaLabs</h1>
            <p class="mt-4 text-lg md:text-2xl">Hassle-Free Aquarium Service—No Upfront Costs, Free Installation</p>
            <a href="#contact" class="mt-6 inline-block px-8 py-4 bg-teal-500 text-white font-semibold rounded shadow-md hover:bg-teal-600">Get a Free Consultation</a>
        </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0 flex justify-center"> <!-- Centering the headshot image -->
                    <img src="headshot.png" alt="Founder Headshot" class="rounded-full w-64 h-64 object-cover object-center"> <!-- Centered on face -->
                </div>
                <div class="md:w-1/2 md:pl-10">
                    <h2 class="text-3xl font-bold mb-4">About AquaLabs</h2>
                    <p class="text-lg mb-4">At AquaLabs, we specialize in bringing the beauty of aquariums and paludariums into homes and businesses throughout San Francisco. With a focus on Japanese aesthetic principles and Zen gardening traditions, we create stunning aquatic displays that enhance any environment.</p>
                    <p class="text-lg">Founded by [Your Name], AquaLabs is committed to providing hassle-free, beautiful aquarium installations and maintenance services without any upfront costs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Our Services</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="service-card">
                    <h3 class="text-xl font-semibold mb-2">Free Installation</h3>
                    <p>We handle the entire installation process at no cost to you. Our experts ensure a perfect setup for your space.</p>
                </div>
                <div class="service-card">
                    <h3 class="text-xl font-semibold mb-2">Maintenance Services</h3>
                    <p>Our team provides regular maintenance to keep your aquarium looking its best, including cleaning, feeding, and health monitoring.</p>
                </div>
                <div class="service-card">
                    <h3 class="text-xl font-semibold mb-2">Flexible Designs</h3>
                    <p>Choose from a variety of tank setups to suit your business or home. Our designs evolve with your needs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Our Portfolio</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Portfolio Images -->
                <div class="portfolio-item">
                    <img src="AquaLabs double tank.jpg" alt="Double Tank Design" class="rounded shadow-md">
                </div>
                <div class="portfolio-item">
                    <img src="AquaLabs triple tank.jpg" alt="Triple Tank Design" class="rounded shadow-md">
                </div>
                <div class="portfolio-item">
                    <img src="AquaLabs Yip.jpg" alt="Yip Tank Design" class="rounded shadow-md">
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Contact Us</h2>
            <p class="text-center mb-4">Phone: (650) 278-8903</p> <!-- Updated with phone number -->
            <form id="contactForm" class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-semibold">Name</label>
                    <input type="text" id="name" class="form-input mt-1 block w-full" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-semibold">Email</label>
                    <input type="email" id="email" class="form-input mt-1 block w-full" placeholder="Enter your email">
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-semibold">Phone</label>
                    <input type="tel" id="phone" class="form-input mt-1 block w-full">
                </div>
                <div class="mb-4">
                    <label for="tankType" class="block text-sm font-semibold">Tank Type</label>
                    <select id="tankType" class="form-select mt-1 block w-full">
                        <option>Home</option>
                        <option>Business</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="size" class="block text-sm font-semibold">Tank Size (gallons)</label>
                    <input type="number" id="size" class="form-input mt-1 block w-full">
                </div>
                <div class="mb-4">
                    <label for="message" class="block text-sm font-semibold">Design Notes</label>
                    <textarea id="message" rows="4" class="form-textarea mt-1 block w-full"></textarea>
                </div>
                <button type="submit" class="w-full px-8 py-3 bg-teal-500 text-white font-semibold rounded shadow-md hover:bg-teal-600">Submit</button>
            </form>
        </div>
    </section>

    <!-- Terms Section -->
    <section id="terms" class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Service Agreement</h2>
            <p class="text-center">For more details, please download our <a href="Independent Contarctor Service Agreement (1).pdf" class="text-teal-500 underline">Service Agreement PDF</a>.</p>
        </div>
    </section>

    <script src="scripts.js"></script>
</body>

</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AquaLabs - Place Order</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-white text-gray-800">
    <!-- Navbar -->
    <nav class="bg-white fixed w-full shadow-md z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="index.html" class="text-2xl font-bold text-teal-500">AquaLabs</a>
                </div>
                <div class="hidden md:flex space-x-4">
                    <a href="index.html#home" class="nav-link">Home</a>
                    <a href="index.html#about" class="nav-link">About Us</a>
                    <a href="index.html#services" class="nav-link">Services</a>
                    <a href="index.html#portfolio" class="nav-link">Portfolio</a>
                    <a href="index.html#contact" class="nav-link">Contact</a>
                    <a href="order.html" class="nav-link">Place Order</a> <!-- Active link -->
                    <a href="index.html#terms" class="nav-link">Terms</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Order and Consultation Form -->
    <section id="order" class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Place an Order or Request a Consultation</h2>
            <form id="orderForm" class="max-w-lg mx-auto">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-semibold">Name</label>
                    <input type="text" id="name" class="form-input mt-1 block w-full" required>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-semibold">Email</label>
                    <input type="email" id="email" class="form-input mt-1 block w-full" placeholder="Enter your email">
                </div>
                <!-- Other fields for order details -->
                <button type="submit" class="w-full px-8 py-3 bg-teal-500 text-white font-semibold rounded shadow-md hover:bg-teal-600">Submit Request</button>
            </form>

            <!-- Link to Service Contract -->
            <div class="mt-10 text-center">
                <a href="https://docs.google.com/document/d/1WtUKNSP573QLO-ya1CqiN05-IMCLDoQqlc-mMg5p8dU/edit" class="text-teal-500 underline text-lg" target="_blank">View Service Contract</a>
            </div>
        </div>
    </section>
</body>

</html>
