
function majNomEntreprise() {
    const nom = document.getElementById('nom_entreprise').value || "Votre entreprise";
    document.getElementById('titre_revenus').textContent = "Revenus - " + nom;
    document.getElementById('titre_depenses').textContent = "Dépenses - " + nom;
    document.getElementById('titre_resultats').textContent = "Résultats financiers - " + nom;
}

function calculer() {
    const prixResto = parseFloat(document.getElementById('prix_resto').value) || 0;
    const qteResto = parseFloat(document.getElementById('qte_resto').value) || 0;
    const prixB2C = parseFloat(document.getElementById('prix_b2c').value) || 0;
    const qteB2C = parseFloat(document.getElementById('qte_b2c').value) || 0;
    const prixB2B = parseFloat(document.getElementById('prix_b2b').value) || 0;
    const qteB2B = parseFloat(document.getElementById('qte_b2b').value) || 0;

    const depFixes = parseFloat(document.getElementById('depenses_fixes').value) || 0;
    const coutVariable = parseFloat(document.getElementById('cout_variable').value) || 0;

    const revenus = (prixResto * qteResto) + (prixB2C * qteB2C) + (prixB2B * qteB2B);
    const totalUnites = qteResto + qteB2C + qteB2B;
    const coutVarTotal = totalUnites * coutVariable;
    const depTotales = depFixes + coutVarTotal;
    const profit = revenus - depTotales;
    const marge = revenus > 0 ? ((profit / revenus) * 100).toFixed(2) + " %" : "N/A";

    document.getElementById('revenus_totaux').textContent = "Revenus mensuels : " + revenus.toFixed(2) + " $";
    document.getElementById('depenses_totales').textContent = "Dépenses mensuelles : " + depTotales.toFixed(2) + " $";
    document.getElementById('profit').textContent = "Profit mensuel : " + profit.toFixed(2) + " $";
    document.getElementById('marge').textContent = "Marge nette : " + marge;
}

window.onload = majNomEntreprise;
