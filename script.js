
function majNomEntreprise() {
    const nom = document.getElementById('nom_entreprise').value || "Votre entreprise";
    document.getElementById('titre_revenus').textContent = "Revenus - " + nom;
    document.getElementById('titre_depenses').textContent = "Dépenses - " + nom;
    document.getElementById('titre_resultats').textContent = "Résultats financiers - " + nom;
}
window.onload = majNomEntreprise;
