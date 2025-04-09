
function calculer() {
    let loyer = parseFloat(document.getElementById('loyer').value);
    let taxes_muni = parseFloat(document.getElementById('taxes_muni').value);
    let taxes_sco = parseFloat(document.getElementById('taxes_sco').value);

    let prix_plat = parseFloat(document.getElementById('prix_plat').value);
    let clients_jour = parseFloat(document.getElementById('clients_jour').value);
    let revenus_resto = prix_plat * clients_jour * 30;

    let prix_b2c = parseFloat(document.getElementById('prix_b2c').value);
    let prix_b2i = parseFloat(document.getElementById('prix_b2i').value);
    let pots_jour = parseFloat(document.getElementById('pots_jour').value);
    let revenus_sauce = (prix_b2c * pots_jour * 20 + prix_b2i * pots_jour * 10);

    let revenus_total = revenus_resto + revenus_sauce;
    let depenses = loyer + taxes_muni + taxes_sco;

    document.getElementById('revenus').textContent = "Revenus mensuels : " + revenus_total.toFixed(2) + " $";
    document.getElementById('depenses').textContent = "Dépenses mensuelles : " + depenses.toFixed(2) + " $";
    document.getElementById('profit').textContent = "Profit mensuel : " + (revenus_total - depenses).toFixed(2) + " $";
}
