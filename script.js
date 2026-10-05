let currentRole = "Manager";


function login() {

    currentRole =
        document.getElementById("role").value;

    document.getElementById("loginPage").style.display =
        "none";

    document.getElementById("app").style.display =
        "block";

    document.getElementById("userRole").innerText =
        currentRole;

}


function logout() {

    document.getElementById("app").style.display =
        "none";

    document.getElementById("loginPage").style.display =
        "flex";

}


function openPage(pageName) {

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    document.getElementById(pageName)
        .classList.add("active");


    const titles = {

        dashboard: "Dashboard",
        inventory: "Inventory",
        scanner: "QR Scanner",
        risk: "Risk Center",
        recommendations: "AI Recommendations",
        warehouses: "Warehouses",
        notifications: "Notifications",
        audit: "Audit Trail",
        simulator: "What-If Simulator",
        assistant: "AI Assistant"

    };


    document.getElementById("pageTitle")
        .innerText = titles[pageName];

}


function scanProduct() {

    document.getElementById("scanResult").innerHTML = `

        <div class="ai-box" style="margin-top:20px">

            <h3>✅ QR Code Detected</h3>

            <br>

            <h2>Premium Rice 5kg</h2>

            <p>Product ID: RICE-001</p>

            <p>Warehouse: A</p>

            <p>Previous Stock: 100 units</p>

            <br>

            <label>
                Stock OUT Quantity
            </label>

            <input
                type="number"
                id="stockOut"
                value="55"
                min="1"
            >

            <button
                class="primary"
                onclick="updateStock()">

                Confirm Stock Update

            </button>

        </div>

    `;

}


function updateStock() {

    let quantity =
        Number(document.getElementById("stockOut").value);

    let newStock =
        100 - quantity;

    document.getElementById("riceStock")
        .innerText = newStock;


    document.getElementById("scanResult").innerHTML = `

        <div
            class="recommendation-large"
            style="margin-top:20px">

            <h3>
                ✅ Inventory Updated
            </h3>

            <br>

            <p>
                Premium Rice 5kg
            </p>

            <p>
                Stock:
                <strong>100 → ${newStock}</strong>
            </p>

            <p>
                Updated by:
                <strong>${currentRole}</strong>
            </p>

            <br>

            <div class="recommend">

                🤖 <strong>SRS AI detected a critical risk.</strong>

                <br><br>

                Stockout Probability:
                <strong class="danger-text">
                    91%
                </strong>

                <br><br>

                Revenue at Risk:
                <strong>
                    ₹42,000
                </strong>

                <br><br>

                Recommendation:
                Transfer 100 units + Order 250 units.

            </div>

        </div>

    `;

}


function approveAction() {

    alert(
        "✅ Recommendation Approved\n\n" +

        "Transfer: 100 units\n" +

        "Purchase: 250 units\n\n" +

        "Action recorded in Audit Trail."
    );

}


function simulate() {

    const demand =
        Number(
            document.getElementById("demandSlider").value
        );


    document.getElementById("demandValue")
        .innerText = demand + "%";


    let probability =
        Math.min(
            99,
            60 + demand
        );


    document.getElementById("probability")
        .innerText = probability + "%";


    document.getElementById("requiredStock")
        .innerText =
        (70 + demand) + " units";

}


function ask(type) {

    const answer =
        document.getElementById("answer");


    if(type === "critical") {

        answer.innerText =
            "Premium Rice 5kg is the most critical product with a 91% stockout probability and ₹42,000 revenue at risk.";

    }


    if(type === "money") {

        answer.innerText =
            "Current potential revenue at risk is ₹42,000. SRS also identifies approximately ₹85,000 in potential inventory savings.";

    }


    if(type === "warehouse") {

        answer.innerText =
            "Warehouse A has excess inventory while Warehouse B has high demand. SRS recommends transferring 100 units from A to B.";

    }


    if(type === "reorder") {

        answer.innerText =
            "SRS recommends transferring 100 units and ordering 250 units of Premium Rice from the most reliable supplier.";

    }

}


function customAsk() {

    const question =
        document.getElementById("question")
        .value
        .toLowerCase();


    if(question.includes("critical")) {

        ask("critical");

    }

    else if(
        question.includes("money") ||
        question.includes("risk")
    ) {

        ask("money");

    }

    else if(
        question.includes("warehouse")
    ) {

        ask("warehouse");

    }

    else if(
        question.includes("order") ||
        question.includes("reorder")
    ) {

        ask("reorder");

    }

    else {

        document.getElementById("answer")
            .innerText =
            "Try asking: Which products are critical? How much money is at risk? Compare warehouses. What should I reorder?";

    }

}