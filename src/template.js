// Creating the team
const createTeam = (employees) => {
    // Create Manager card using template literals
    const createManagerCard = (manager) => {
        return `
                <!-- Manager card -->
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${manager.getRole()}
                            </h2>
                            <p class="card-text">
                                <i class="bi bi-emoji-sunglasses-fill"></i>
                                ${manager.name}
                            </p>
                        </div>
                        <div class="detail-styling">
                            <ul class="list-group">
                                <li class="list-group-item list-border">
                                    <span class="text-list">ID:</span> ${manager.id}
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">Email:</span> <a href="mailto:${manager.email}">${manager.email}</a>
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">Office number:</span> ${manager.officeNumber}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    // Create Engineer card using template literals
    const createEngineerCard = (engineer) => {
        return `
                <!-- Engineer card -->
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${engineer.getRole()}
                            </h2>
                            <p class="card-text">
                                <i class="bi bi-emoji-laughing-fill"></i>
                                ${engineer.name}
                            </p>
                        </div>
                        <div class="detail-styling">
                            <ul class="list-group">
                                <li class="list-group-item list-border">
                                    <span class="text-list">ID:</span> ${engineer.id}
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">Email:</span> <a href="mailto:${engineer.email}">${engineer.email}</a>
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">GitHub:</span> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    // Create Intern card using template literals
    const createInternCard = (intern) => {
        return `
                <!-- Intern card -->
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${intern.getRole()}
                            </h2>
                            <p class="card-text">
                                <i class="bi bi-emoji-smile-fill"></i>
                                ${intern.name}
                            </p>
                        </div>
                        <div class="detail-styling">
                            <ul class="list-group">
                                <li class="list-group-item list-border">
                                    <span class="text-list">ID:</span> ${intern.id}
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">Email:</span> <a href="mailto:${intern.email}">${intern.email}</a>
                                </li>
                                <li class="list-group-item list-border">
                                    <span class="text-list">School:</span> ${intern.school}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`
    }

    // Empty array to hold each card as they're generated
    const cards = [];

    // Push manager card into cards array
    cards.push(employees
        // Filter for only 'Manager'
        .filter(employee => employee.getRole() === "Manager")
        // Create new array to create manager card with manager details using .map()
        .map(manager => createManagerCard(manager))
    );

    // Push engineer card into cards array
    cards.push(employees
        // Filter for only "Engineer"
        .filter(employee => employee.getRole() === "Engineer")
        // Create new array to create engineer card with engineer deatils using .map()
        .map(engineer => createEngineerCard(engineer))
    );

    // Push intern card into cards array
    cards.push(employees
        // Filter for only "Intern"
        .filter(employee => employee.getRole() === "Intern")
        // Create a new array to create intern card with intern details using .map()
        .map(intern => createInternCard(intern))
    );

    // Return the cards array as a string
    return cards.join("").replace(/,/g, "");
} 



module.exports = (employees) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link to reset.css -->
    <link rel="stylesheet" href="../dist/reset.css">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Raleway:wght@700&display=swap" rel="stylesheet">
    <!-- Link to separate CSS -->
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team profiles</title>
</head>
<body>
    <header class="d-flex justify-content-center bg-gradient">
        <h1 class="text-center">
            Team profiles
        </h1>
    </header>

    <main>
    <!-- Team cards -->
        <div class="container">
            <div class="row">
            ${createTeam(employees)}
            </div>
        </div>
    </main>
    
    <!-- Bootstrap js links -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>`
};