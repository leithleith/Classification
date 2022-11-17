if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};


var complexite = [];
var connaissances = [];
var autonomie = [];
var contribution = [];
var encadrementcooperation = [];
var communication = [];

complexite[0] = " Réalisation de tâches simples et répétitives, signalement des anomalies ";
complexite[1] = " Réalisation de tâches simples et diverses, identification des anomalies en apportant les premiers éléments de compréhension ";
complexite[2] = " Réalisation d’activités similaires, identification des anomalies, mise en oeuvre de modes opératoires répertoriés ";
complexite[3] = " Réalisation d’activités diversifiées, appréciation et traitement de difficultés variées, mise en oeuvre de modes opératoires répertoriés à adapter ";
complexite[4] = " Réalisation d’activités avec choix et mise en oeuvre de méthodes/outils répertoriés, réalisation de diagnostics destinés à anticiper/résoudre les difficultés ";
complexite[5] = " Analyses destinées à définir et mettre en oeuvre des processus nécessitant la mobilisation de méthodes ou de techniques diversifiées ";
complexite[6] = " Analyses et études nécessitant la combinaison d’un ensemble de techniques ou une spécialisation dans l’une d’elles ";
complexite[7] = " Elaboration de processus majeurs dans un ou plusieurs domaines professionnels ";
complexite[8] = " Elaboration de systèmes/modèles couvrant plusieurs domaines professionnels ou une expertise avancée dans l’un d’eux ";
complexite[9] = " Conception de programmes/projets/ stratégies visant à anticiper des évolutions de l’environnement pour l’ensemble de l’organisation ";
connaissances[0] = " L’emploi nécessite des connaissances minimales ";
connaissances[1] = " L’emploi nécessite des connaissances élémentaires ";
connaissances[2] = " L’emploi nécessite des connaissances professionnelles essentiellement pratiques ";
connaissances[3] = " L’emploi nécessite des connaissances professionnelles théoriques et pratiques ";
connaissances[4] = " L’emploi nécessite des connaissances générales dans une partie d’une discipline ";
connaissances[5] = " L’emploi nécessite des connaissances approfondies dans une partie d’une discipline ";
connaissances[6] = " L’emploi nécessite des connaissances approfondies dans une discipline ou des connaissances générales dans plusieurs disciplines ";
connaissances[7] = " L’emploi nécessite des connaissances spécialisées dans une discipline ou des connaissances approfondies dans plusieurs disciplines ";
connaissances[8] = " L’emploi nécessite des connaissances hautement spécialisées dans une discipline ";
connaissances[9] = " L’emploi nécessite la création de connaissances qui font référence ";
autonomie[0] = " L’emploi requiert d’exécuter des tâches simples prédéfinies sous contrôle permanent ";
autonomie[1] = " L’emploi requiert d’appliquer des solutions identifiées sous contrôle fréquent ";
autonomie[2] = " L’emploi requiert de sélectionner des solutions identifiées sous contrôle fréquent ";
autonomie[3] = " L’emploi requiert d’adapter des solutions identifiées sous contrôle ponctuel ";
autonomie[4] = " L’emploi requiert de modifier des solutions partiellement identifiées avec validation à l’initiative d’un tiers ";
autonomie[5] = " L’emploi requiert de déterminer des solutions, d’optimiser des méthodes et moyens avec validation à l’initiative d’un tiers ";
autonomie[6] = " L’emploi requiert de déterminer des méthodes/procédés/ moyens avec validation sur demande ";
autonomie[7] = " L’emploi requiert de déterminer des orientations et l’adaptation des moyens alloués avec validation par les résultats ";
autonomie[8] = " L’emploi requiert de définir des orientations liées à l’organisation générale avec optimisation des moyens et validation par les résultats ";
autonomie[9] = " L’emploi nécessite de définir des orientations stratégiques et les moyens associés avec validation par les résultats ";
contribution[0] = " L’emploi a un effet circonscrit à ses activités ";
contribution[1] = " L’emploi a un effet sur des emplois de nature identique ou similaire ";
contribution[2] = " L’emploi a un effet sur des emplois de nature différente au sein de l’équipe de travail ";
contribution[3] = " L’emploi implique des actions déterminantes produisant des effets sur différentes équipes de travail ";
contribution[4] = " L’emploi implique des décisions dont les effets se produisent sur un service ou un département ";
contribution[5] = " L’emploi engage la transformation et la performance d’un service ou d’un département ";
contribution[6] = " L’emploi engage la performance d’un sous-ensemble de l’organisation/entité économique ";
contribution[7] = " L’emploi engage le développement d’un sous-ensemble de l’organisation/entité économique ";
contribution[8] = " L’emploi engage la performance à long terme de l’organisation/entité économique ";
contribution[9] = " L’emploi engage la pérennité de l’organisation/entité économique ";
encadrementcooperation[0] = " Coopération ponctuelle ";
encadrementcooperation[1] = " Partage d’expériences/ connaissances et/ou coopération régulière ";
encadrementcooperation[2] = " Appui technique/organisationnel individuel ";
encadrementcooperation[3] = " Appui technique/organisationnel collectif ou transmission individuelle de savoirs et de pratiques ";
encadrementcooperation[4] = " Animation/répartition/appui/ supervision/coordination des activités ou transmission collective de savoirs et de pratiques ";
encadrementcooperation[5] = " Encadrement hiérarchique d’une équipe de travail incluant l’appréciation individuelle et/ou coordination d’activités diversifiées ";
encadrementcooperation[6] = " Encadrement hiérarchique d’équipes de travail et/ou coordination d’un sous-ensemble de ressources/moyens ";
encadrementcooperation[7] = " Encadrement hiérarchique d’encadrants hiérarchiques et/ou coordination d’un ensemble de ressources/ moyens ";
encadrementcooperation[8] = " Direction/coordination sur un sous-ensemble de l’organisation ";
encadrementcooperation[9] = " Direction/coordination de la totalité de l’organisation ";
communication[0] = " L’emploi nécessite la compréhension des consignes et des échanges simples ";
communication[1] = " L’emploi nécessite questionnement, dialogue et reformulation avec des interlocuteurs de l’environnement immédiat ";
communication[2] = " L’emploi nécessite l’ajustement des réponses en fonction des interlocuteurs ";
communication[3] = " L’emploi nécessite communication démonstrative, argumentation ";
communication[4] = " L’emploi nécessite de parvenir à des constats/ décisions partagés/concertés avec des interlocuteurs à impliquer ";
communication[5] = " L’emploi nécessite coopération et partenariat avec des représentants d’autres entités ";
communication[6] = " L’emploi nécessite la recherche de l’adhésion/du compromis dans un contexte d’intérêts différents/divergents avec enjeux significatifs ";
communication[7] = " L’emploi nécessite négociations et représentation avec des acteurs majeurs et diversifiés ";
communication[8] = " L’emploi nécessite négociations complexes et représentation en lien avec les enjeux stratégiques ";
communication[9] = " L’emploi nécessite la mobilisation d’acteurs décisionnaires clés ";

function peupler() {
    for (let i = 0 ; i < autonomie.length ; i++) {
        document.getElementById("complexite").innerHTML += '<option value="' + (i+1) + '">' + complexite[i] + '</option>';
        document.getElementById("connaissances").innerHTML += '<option value="' + (i+1) + '">' + connaissances[i] + '</option>';
        document.getElementById("autonomie").innerHTML += '<option value="' + (i+1) + '">' + autonomie[i] + '</option>';
        document.getElementById("contribution").innerHTML += '<option value="' + (i+1) + '">' + contribution[i] + '</option>';
        document.getElementById("encadrementcooperation").innerHTML += '<option value="' + (i+1) + '">' + encadrementcooperation[i] + '</option>';
        document.getElementById("communication").innerHTML += '<option value="' + (i+1) + '">' + communication[i] + '</option>';
    }
}

function calcul() {
    var resultat = parseInt(document.getElementById("complexite").value) + parseInt(document.getElementById("connaissances").value) + parseInt(document.getElementById("autonomie").value) + parseInt(document.getElementById("contribution").value) + parseInt(document.getElementById("encadrementcooperation").value) + parseInt(document.getElementById("communication").value) ;
    document.getElementById('cotation').innerHTML =  resultat;
    switch(resultat) {
        case 60:
        document.getElementById('classe').innerHTML = 18;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 64500;
        break;
        case 59:
        document.getElementById('classe').innerHTML = 18;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 64500;
        break;
        case 58:
        document.getElementById('classe').innerHTML = 18;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 64500;
        break;
        case 57:
        document.getElementById('classe').innerHTML = 17;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 56000;
        break;
        case 56:
        document.getElementById('classe').innerHTML = 17;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 56000;
        break;
        case 55:
        document.getElementById('classe').innerHTML = 17;
        document.getElementById('groupe').innerHTML = "I";
        document.getElementById('salairemin').innerHTML = 56000;
        break;
        case 54:
        document.getElementById('classe').innerHTML = 16;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 49000;
        break;
        case 53:
        document.getElementById('classe').innerHTML = 16;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 49000;
        break;
        case 52:
        document.getElementById('classe').innerHTML = 16;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 49000;
        break;
        case 51:
        document.getElementById('classe').innerHTML = 15;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 44000;
        break;
        case 50:
        document.getElementById('classe').innerHTML = 15;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 44000;
        break;
        case 49:
        document.getElementById('classe').innerHTML = 15;
        document.getElementById('groupe').innerHTML = "H";
        document.getElementById('salairemin').innerHTML = 44000;
        break;
        case 48:
        document.getElementById('classe').innerHTML = 14;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 41000;
        break;
        case 47:
        document.getElementById('classe').innerHTML = 14;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 41000;
        break;
        case 46:
        document.getElementById('classe').innerHTML = 14;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 41000;
        break;
        case 45:
        document.getElementById('classe').innerHTML = 13;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 37400;
        break;
        case 44:
        document.getElementById('classe').innerHTML = 13;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 37400;
        break;
        case 43:
        document.getElementById('classe').innerHTML = 13;
        document.getElementById('groupe').innerHTML = "G";
        document.getElementById('salairemin').innerHTML = 37400;
        break;
        case 42:
        document.getElementById('classe').innerHTML = 12;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 34300;
        break;
        case 41:
        document.getElementById('classe').innerHTML = 12;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 34300;
        break;
        case 40:
        document.getElementById('classe').innerHTML = 12;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 34300;
        break;
        case 39:
        document.getElementById('classe').innerHTML = 11;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 32500;
        break;
        case 38:
        document.getElementById('classe').innerHTML = 11;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 32500;
        break;
        case 37:
        document.getElementById('classe').innerHTML = 11;
        document.getElementById('groupe').innerHTML = "F";
        document.getElementById('salairemin').innerHTML = 32500;
        break;
        case 36:
        document.getElementById('classe').innerHTML = 10;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 31400;
        break;
        case 35:
        document.getElementById('classe').innerHTML = 10;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 31400;
        break;
        case 34:
        document.getElementById('classe').innerHTML = 10;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 31400;
        break;
        case 33:
        document.getElementById('classe').innerHTML = 9;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 28400;
        break;
        case 32:
        document.getElementById('classe').innerHTML = 9;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 28400;
        break;
        case 31:
        document.getElementById('classe').innerHTML = 9;
        document.getElementById('groupe').innerHTML = "E";
        document.getElementById('salairemin').innerHTML = 28400;
        break;
        case 30:
        document.getElementById('classe').innerHTML = 8;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 26400;
        break;
        case 29:
        document.getElementById('classe').innerHTML = 8;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 26400;
        break;
        case 28:
        document.getElementById('classe').innerHTML = 8;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 26400;
        break;
        case 27:
        document.getElementById('classe').innerHTML = 7;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 24400;
        break;
        case 26:
        document.getElementById('classe').innerHTML = 7;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 24400;
        break;
        case 25:
        document.getElementById('classe').innerHTML = 7;
        document.getElementById('groupe').innerHTML = "D";
        document.getElementById('salairemin').innerHTML = 24400;
        break;
        case 24:
        document.getElementById('classe').innerHTML = 6;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 23500;
        break;
        case 23:
        document.getElementById('classe').innerHTML = 6;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 23500;
        break;
        case 22:
        document.getElementById('classe').innerHTML = 6;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 23500;
        break;
        case 21:
        document.getElementById('classe').innerHTML = 5;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 22300;
        break;
        case 20:
        document.getElementById('classe').innerHTML = 5;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 22300;
        break;
        case 19:
        document.getElementById('classe').innerHTML = 5;
        document.getElementById('groupe').innerHTML = "C";
        document.getElementById('salairemin').innerHTML = 22300;
        break;
        case 18:
        document.getElementById('classe').innerHTML = 4;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 21200;
        break;
        case 17:
        document.getElementById('classe').innerHTML = 4;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 21200;
        break;
        case 16:
        document.getElementById('classe').innerHTML = 4;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 21200;
        break;
        case 15:
        document.getElementById('classe').innerHTML = 3;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 20300;
        break;
        case 14:
        document.getElementById('classe').innerHTML = 3;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 20300;
        break;
        case 13:
        document.getElementById('classe').innerHTML = 3;
        document.getElementById('groupe').innerHTML = "B";
        document.getElementById('salairemin').innerHTML = 20300;
        break;
        case 12:
        document.getElementById('classe').innerHTML = 2;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19700;
        break;
        case 11:
        document.getElementById('classe').innerHTML = 2;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19700;
        break;
        case 10:
        document.getElementById('classe').innerHTML = 2;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19700;
        break;
        case 9:
        document.getElementById('classe').innerHTML = 1;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19420;
        break;
        case 8:
        document.getElementById('classe').innerHTML = 1;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19420;
        break;
        case 7:
        document.getElementById('classe').innerHTML = 1;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19420;
        break;
        case 6:
        document.getElementById('classe').innerHTML = 1;
        document.getElementById('groupe').innerHTML = "A";
        document.getElementById('salairemin').innerHTML = 19420;
        break;
        default:
        document.getElementById('classe').innerHTML = "Erreur";
        document.getElementById('groupe').innerHTML = "Erreur";
        document.getElementById('salairemin').innerHTML = "Erreur";
    }
    switch (parseInt(document.getElementById("connaissances").value)) {
        case 1:
            document.getElementById("exconn").innerHTML = 'Sans objet';
            break;
        case 2 :
            document.getElementById("exconn").innerHTML = 'Sans objet';
            break;
        case 3 :
            document.getElementById("exconn").innerHTML = 'CAP, BEP';
            break;
        case 4 :
            document.getElementById("exconn").innerHTML = 'BP, BT, Bac Pro ou Techno';
            break;
        case 5 :
            document.getElementById("exconn").innerHTML = 'BTS, DUT';
            break;
        case 6 :
            document.getElementById("exconn").innerHTML = 'BTS, DUT, Licence';
            break;
        case 7 :
            document.getElementById("exconn").innerHTML = 'Master';
            break;
        case 8 :
            document.getElementById("exconn").innerHTML = 'Master, Doctorat';
            break;
        case 9 :
            document.getElementById("exconn").innerHTML = 'Master, Doctorat';
            break;
        case 10 :
            document.getElementById("exconn").innerHTML = 'Master, Doctorat';
            break;
        default:
            document.getElementById("exconn").innerHTML = 'Erreur';
            break;
    }
    data = [{
        type: 'scatterpolar',
        r: [parseInt(document.getElementById("complexite").value), parseInt(document.getElementById("connaissances").value), parseInt(document.getElementById("autonomie").value), parseInt(document.getElementById("contribution").value), parseInt(document.getElementById("encadrementcooperation").value), parseInt(document.getElementById("communication").value)],
        theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication'],
        fill: 'toself'
    }]
    layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [1, 10],
                ticks: '',
                showline: false,
                showticklabels: false,
                layer: 'below traces'
            }
        },
        showlegend: false,
        title: {
            text: 'Cotation ' + resultat + ' - Groupe ' +  document.getElementById('groupe').innerHTML + ' - Classe ' + document.getElementById('classe').innerHTML
        },
        autosize: true,
        font: {
            color: '#cdcccc'
        },
        paper_bgcolor: '#1e1e1e',
    }
    config = {
        displayModeBar: true,
        responsive: true,
        displaylogo: false,
        locale: 'fr',
        modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoom2d'],
        scrollZoom: false,
        toImageButtonOptions: {
            filename: resultat + document.getElementById('groupe').innerHTML + document.getElementById('classe').innerHTML + '-' + Date.now(),
            height: 800,
            width: 800
        }
    }
    Plotly.newPlot("radar", data, layout, config);
    document.getElementById("calculs").style.visibility = 'visible';
    document.getElementById("radar").style.visibility = 'visible';
}