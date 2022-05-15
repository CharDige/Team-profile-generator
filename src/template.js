// Create Manager card using template literals
const createManagerCard = (manager) => {
    return `
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${manager.role}
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
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${engineer.role}
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
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">
                                ${intern.role}
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


module.exports = Template;