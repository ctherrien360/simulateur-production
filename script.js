
let scenarios = {
    prudent: {},
    realiste: {},
    ambitieux: {}
};
let scenarioActuel = "prudent";

function majNomEntreprise() {
    const nom = document.getElementById("nom_entreprise").value;
    document.title = "Simulation - " + nom;
}

function changerScenario() {
    scenarioActuel = document.getElementById("select_scenario").value;
    alert("Scénario actuel : " + scenarioActuel);
}

function dupliquerScenario() {
    const nouveauNom = prompt("Nom du nouveau scénario :");
    if (nouveauNom) {
        scenarios[nouveauNom] = JSON.parse(JSON.stringify(scenarios[scenarioActuel]));
        const select = document.getElementById("select_scenario");
        const option = document.createElement("option");
        option.value = nouveauNom;
        option.text = "Scénario " + nouveauNom;
        select.add(option);
        select.value = nouveauNom;
        changerScenario();
    }
}

function exporterCSV() {
    const lignes = [
        ["Secteur", "Revenus", "Dépenses", "Profit", "Marge %"],
        ["Restaurant", 4800, 2100, 2700, "56.25%"],
        ["B2C", 2500, 900, 1600, "64.00%"],
        ["B2B", 3000, 1200, 1800, "60.00%"]
    ];
    const contenu = lignes.map(l => l.join(",")).join("\n");
    const blob = new Blob([contenu], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "resultats_simulation.csv";
    a.click();
}

window.onload = majNomEntreprise;
