if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
};
function opentab(evt, tabname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.className += " active";
  }
function verification() {
    if (parseInt(document.getElementById("complexite").value) != 0 && parseInt(document.getElementById("connaissances").value) != 0 && parseInt(document.getElementById("autonomie").value) != 0 && parseInt(document.getElementById("contribution").value) != 0 && parseInt(document.getElementById("encadrementcooperation").value) != 0 && parseInt(document.getElementById("communication").value) != 0)
    {
        var vecteur = [];
        vecteur.push(parseInt(document.getElementById("complexite").value));
        vecteur.push(parseInt(document.getElementById("connaissances").value));
        vecteur.push(parseInt(document.getElementById("autonomie").value));
        vecteur.push(parseInt(document.getElementById("contribution").value));
        vecteur.push(parseInt(document.getElementById("encadrementcooperation").value));
        vecteur.push(parseInt(document.getElementById("communication").value));
        calcul(vecteur);
    }
    else {
        alert("Tous les critères n'ont pas été renseignés !");
    }
}
function calcul(vecteur)
{
    var resultat = 0;
    for (i = 0; i < vecteur.length; i++)
    {
        resultat += parseInt(vecteur[i]);
    }
    document.getElementById('cotation').innerHTML =  resultat;
    var classe;
    var groupe;
    var salairemin;
    switch(resultat)
    {
        case 60:
        classe = 18;
        groupe = "I";
        salairemin = 68000;
        break;
        case 59:
        classe = 18;
        groupe = "I";
        salairemin = 68000;
        break;
        case 58:
        classe = 18;
        groupe = "I";
        salairemin = 68000;
        break;
        case 57:
        classe = 17;
        groupe = "I";
        salairemin = 59300;
        break;
        case 56:
        classe = 17;
        groupe = "I";
        salairemin = 59300;
        break;
        case 55:
        classe = 17;
        groupe = "I";
        salairemin = 59300;
        break;
        case 54:
        classe = 16;
        groupe = "H";
        salairemin = 52000;
        break;
        case 53:
        classe = 16;
        groupe = "H";
        salairemin = 52000;
        break;
        case 52:
        classe = 16;
        groupe = "H";
        salairemin = 52000;
        break;
        case 51:
        classe = 15;
        groupe = "H";
        salairemin = 47000;
        break;
        case 50:
        classe = 15;
        groupe = "H";
        salairemin = 47000;
        break;
        case 49:
        classe = 15;
        groupe = "H";
        salairemin = 47000;
        break;
        case 48:
        classe = 14;
        groupe = "G";
        salairemin = 43900;
        break;
        case 47:
        classe = 14;
        groupe = "G";
        salairemin = 43900;
        break;
        case 46:
        classe = 14;
        groupe = "G";
        salairemin = 43900;
        break;
        case 45:
        classe = 13;
        groupe = "G";
        salairemin = 40000;
        break;
        case 44:
        classe = 13;
        groupe = "G";
        salairemin = 40000;
        break;
        case 43:
        classe = 13;
        groupe = "G";
        salairemin = 40000;
        break;
        case 42:
        classe = 12;
        groupe = "F";
        salairemin = 36700;
        break;
        case 41:
        classe = 12;
        groupe = "F";
        salairemin = 36700;
        break;
        case 40:
        classe = 12;
        groupe = "F";
        salairemin = 36700;
        break;
        case 39:
        classe = 11;
        groupe = "F";
        salairemin = 34900;
        break;
        case 38:
        classe = 11;
        groupe = "F";
        salairemin = 34900;
        break;
        case 37:
        classe = 11;
        groupe = "F";
        salairemin = 34900;
        break;
        case 36:
        classe = 10;
        groupe = "E";
        salairemin = 33700;
        break;
        case 35:
        classe = 10;
        groupe = "E";
        salairemin = 33700;
        break;
        case 34:
        classe = 10;
        groupe = "E";
        salairemin = 33700;
        break;
        case 33:
        classe = 9;
        groupe = "E";
        salairemin = 30500;
        break;
        case 32:
        classe = 9;
        groupe = "E";
        salairemin = 30500;
        break;
        case 31:
        classe = 9;
        groupe = "E";
        salairemin = 30500;
        break;
        case 30:
        classe = 8;
        groupe = "D";
        salairemin = 28450;
        break;
        case 29:
        classe = 8;
        groupe = "D";
        salairemin = 28450;
        break;
        case 28:
        classe = 8;
        groupe = "D";
        salairemin = 28450;
        break;
        case 27:
        classe = 7;
        groupe = "D";
        salairemin = 26400;
        break;
        case 26:
        classe = 7;
        groupe = "D";
        salairemin = 26400;
        break;
        case 25:
        classe = 7;
        groupe = "D";
        salairemin = 26400;
        break;
        case 24:
        classe = 6;
        groupe = "C";
        salairemin = 25550;
        break;
        case 23:
        classe = 6;
        groupe = "C";
        salairemin = 25550;
        break;
        case 22:
        classe = 6;
        groupe = "C";
        salairemin = 25550;
        break;
        case 21:
        classe = 5;
        groupe = "C";
        salairemin = 24250;
        break;
        case 20:
        classe = 5;
        groupe = "C";
        salairemin = 24250;
        break;
        case 19:
        classe = 5;
        groupe = "C";
        salairemin = 24250;
        break;
        case 18:
        classe = 4;
        groupe = "B";
        salairemin = 23400;
        break;
        case 17:
        classe = 4;
        groupe = "B";
        salairemin = 23400;
        break;
        case 16:
        classe = 4;
        groupe = "B";
        salairemin = 23400;
        break;
        case 15:
        classe = 3;
        groupe = "B";
        salairemin = 22450;
        break;
        case 14:
        classe = 3;
        groupe = "B";
        salairemin = 22450;
        break;
        case 13:
        classe = 3;
        groupe = "B";
        salairemin = 22450;
        break;
        case 12:
        classe = 2;
        groupe = "A";
        salairemin = 21850;
        break;
        case 11:
        classe = 2;
        groupe = "A";
        salairemin = 21850;
        break;
        case 10:
        classe = 2;
        groupe = "A";
        salairemin = 21850;
        break;
        case 9:
        classe = 1;
        groupe = "A";
        salairemin = 21700;
        break;
        case 8:
        classe = 1;
        groupe = "A";
        salairemin = 21700;
        break;
        case 7:
        classe = 1;
        groupe = "A";
        salairemin = 21700;
        break;
        case 6:
        classe = 1;
        groupe = "A";
        salairemin = 21700;
        break;
        default:
        classe = "Erreur";
        groupe = "Erreur";
        salairemin = "Erreur";
    }
    document.getElementById('classe').innerHTML = classe;
    document.getElementById('groupe').innerHTML = groupe;
    document.getElementById('salairemin').innerHTML = salairemin;
    document.getElementById('labelprime').innerHTML = "Prime d'ancienneté";
    document.getElementById('prime').innerHTML = "";
    if (resultat > 36)
    {
        document.getElementById("statut").innerHTML = 'Cadre';
        document.getElementById("prime").innerHTML = 'Pas de prime (Cadre)';
    }
    else if (resultat > 21 && resultat < 37)
    {
        document.getElementById("statut").innerHTML = 'Non Cadre<br/>mais<br/>ex Article 36 :<br/>passage Cadre ?';
        affichageprime();
    }
    else
    {
        document.getElementById("statut").innerHTML = 'Non Cadre';
        affichageprime();
    }
    var connaissances = vecteur[1];
    switch (connaissances)
    {
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
        r: [vecteur[0], vecteur[1], vecteur[2], vecteur[3], vecteur[4], vecteur[5], vecteur[0]],
        theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication', 'complexité'],
        fill: 'toself',
        hoverinfo: 'skip'
    }]
    layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [1, 10],
                ticks: '',
                showline: false,
                showticklabels: false,
                layer: 'below traces',
                fixedrange: true
            }
        },
        showlegend: false,
        title: {
            text: 'Cotation ' + resultat + ' - Groupe ' +  groupe + ' - Classe ' + classe
        },
        autosize: true,
        font: {
            color: '#cdcccc'
        },
        paper_bgcolor: '#1e1e1e'
    }
    config = {
        staticPlot: true,
        responsive: true
    }
    Plotly.newPlot("radar", data, layout, config);
    document.getElementById("matable").style.visibility = 'visible';
    document.getElementById("fileToLoad").value = null;
}
function saveTextAsFile() {
    var verification = parseInt(document.getElementById("complexite").value) * parseInt(document.getElementById("connaissances").value) * parseInt(document.getElementById("autonomie").value) * parseInt(document.getElementById("contribution").value) * parseInt(document.getElementById("encadrementcooperation").value) * parseInt(document.getElementById("communication").value);
    if (verification != 0)
    {
        var textToSave = document.getElementById("complexite").value + ';' + document.getElementById("connaissances").value + ';' + document.getElementById("autonomie").value + ';' + document.getElementById("contribution").value + ';' + document.getElementById("encadrementcooperation").value + ';' + document.getElementById("communication").value;
        var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
        var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
        var fileNameToSaveAs = "classification_" + Date.now() + ".csv";
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "T&eacute;l&eacute;charger le fichier " + fileNameToSaveAs;
        downloadLink.href = textToSaveAsURL;
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }
    else {
        alert("Tous les critères n'ont pas été renseignés !");
    }
}
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
function readFile()
{
    document.getElementById("complexite").selectedIndex = 0;
    document.getElementById("connaissances").selectedIndex = 0;
    document.getElementById("autonomie").selectedIndex = 0;
    document.getElementById("contribution").selectedIndex = 0;
    document.getElementById("encadrementcooperation").selectedIndex = 0;
    document.getElementById("communication").selectedIndex = 0;
    var file = document.getElementById("fileToLoad").files;
    if (file.length > 0)
    {
        var fileReader = new FileReader();
        fileReader.readAsText(file[0]);
        fileReader.onload = function() {
            var lignes = fileReader.result.split("\n");
            var ligne = lignes[0].split(";");
            var verification = 1;
            for (var n = 0; n < ligne.length; n++)
            {
                verification *= ligne[n];
            }
            if (verification != 0)
            {
                var vecteur = [];
                vecteur.push(parseInt(ligne[0]));
                vecteur.push(parseInt(ligne[1]));
                vecteur.push(parseInt(ligne[2]));
                vecteur.push(parseInt(ligne[3]));
                vecteur.push(parseInt(ligne[4]));
                vecteur.push(parseInt(ligne[5]));
                calcul(vecteur);
            }
            else {
                document.getElementById("fileToLoad").value = null;
            }
        }; 
        fileReader.onerror = function() {
            document.getElementById("fileToLoad").value = null;
        };
    }     
}
function readFiles()
{
    document.getElementById("matable").style.visibility = 'collapse';
    document.getElementById('classe').innerHTML = "";
    document.getElementById('groupe').innerHTML = "";
    document.getElementById('salairemin').innerHTML = "";
    document.getElementById("complexite").selectedIndex = 0;
    document.getElementById("connaissances").selectedIndex = 0;
    document.getElementById("autonomie").selectedIndex = 0;
    document.getElementById("contribution").selectedIndex = 0;
    document.getElementById("encadrementcooperation").selectedIndex = 0;
    document.getElementById("communication").selectedIndex = 0;
    const files = document.getElementById("filesToLoad").files;
    var data = [];
    var layout = {
            polar: {
                radialaxis: {
                    visible: true,
                    range: [1, 10],
                    ticks: '',
                    showline: false,
                    showticklabels: false,
                    layer: 'below traces',
                    fixedrange: true
                }
            },
            showlegend: false,
            autosize: true,
            font: {
                color: '#cdcccc'
            },
            paper_bgcolor: '#1e1e1e',
    }
    var config = {
            displayModeBar: true,
            responsive: true,
            displaylogo: false,
            locale: 'fr',
            modeBarButtonsToAdd: [
                {
                  name: 'Passer en plein écran',
                  icon: Plotly.Icons.zoombox,
                  click: function(gd) {
                    pleinecran();
                  }}],
            modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoom2d'],
            scrollZoom: false,
            toImageButtonOptions: {
                filename: 'Classification-analyse-groupe-' + Date.now(),
                height: 800,
                width: 800
            }
    }
    var n = 1;
    var tcomplexite = [];
    var tconnaissances = [];
    var tautonomie = [];
    var tcontribution = [];
    var tenccoop = [];
    var tcommunication = [];
    var tcotation = [];
    Object.keys(files).forEach(i => {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
            var lignes = reader.result.split("\n");
            var ligne = lignes[0].split(";");
            tcomplexite.push(parseInt(ligne[0]));
            tconnaissances.push(parseInt(ligne[1]));
            tautonomie.push(parseInt(ligne[2]));
            tcontribution.push(parseInt(ligne[3]));
            tenccoop.push(parseInt(ligne[4]));
            tcommunication.push(parseInt(ligne[5]));
            tcotation.push(parseInt(ligne[0]) + parseInt(ligne[1]) + parseInt(ligne[2]) + parseInt(ligne[3]) + parseInt(ligne[4]) + parseInt(ligne[5]));
            data.push({
                type: 'scatterpolar',
                r: [parseInt(ligne[0]),parseInt(ligne[1]),parseInt(ligne[2]),parseInt(ligne[3]),parseInt(ligne[4]),parseInt(ligne[5]),parseInt(ligne[0])],
                theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication', 'complexité'],
                fill: 'none',
                hoverinfo: 'name',
                name: file.name.substring(15, file.name.length-4)
            });            
            if (n === (files.length))
            {
                Plotly.purge("radar");
                tcomplexite.sort(function(a, b) {return a - b;});
                document.getElementById("mincomplexite").innerHTML = tcomplexite[0];
                document.getElementById("maxcomplexite").innerHTML = tcomplexite[tcomplexite.length-1];
                document.getElementById("medcomplexite").innerHTML = mediane(tcomplexite);
                document.getElementById("moycomplexite").innerHTML = Math.round(tcomplexite.reduce((a, b) => a + b, 0) / tcomplexite.length);
                tconnaissances.sort(function(a, b) {return a - b;});
                document.getElementById("minconnaissances").innerHTML = tconnaissances[0];
                document.getElementById("maxconnaissances").innerHTML = tconnaissances[tconnaissances.length-1];
                document.getElementById("medconnaissances").innerHTML = mediane(tconnaissances);
                document.getElementById("moyconnaissances").innerHTML = Math.round(tconnaissances.reduce((a, b) => a + b, 0) / tconnaissances.length);
                tautonomie.sort(function(a, b) {return a - b;});
                document.getElementById("minautonomie").innerHTML = tautonomie[0];
                document.getElementById("maxautonomie").innerHTML = tautonomie[tautonomie.length-1];
                document.getElementById("medautonomie").innerHTML = mediane(tautonomie);
                document.getElementById("moyautonomie").innerHTML = Math.round(tautonomie.reduce((a, b) => a + b, 0) / tautonomie.length);
                tcontribution.sort(function(a, b) {return a - b;});
                document.getElementById("mincontribution").innerHTML = tcontribution[0];
                document.getElementById("maxcontribution").innerHTML = tcontribution[tcontribution.length-1];
                document.getElementById("medcontribution").innerHTML = mediane(tcontribution);
                document.getElementById("moycontribution").innerHTML = Math.round(tcontribution.reduce((a, b) => a + b, 0) / tcontribution.length);
                tenccoop.sort(function(a, b) {return a - b;});
                document.getElementById("minenccoop").innerHTML = tenccoop[0];
                document.getElementById("maxenccoop").innerHTML = tenccoop[tenccoop.length-1];
                document.getElementById("medenccoop").innerHTML = mediane(tenccoop);
                document.getElementById("moyenccoop").innerHTML = Math.round(tenccoop.reduce((a, b) => a + b, 0) / tenccoop.length);
                tcommunication.sort(function(a, b) {return a - b;});
                document.getElementById("mincommunication").innerHTML = tcommunication[0];
                document.getElementById("maxcommunication").innerHTML = tcommunication[tcommunication.length-1];
                document.getElementById("medcommunication").innerHTML = mediane(tcommunication);
                document.getElementById("moycommunication").innerHTML = Math.round(tcommunication.reduce((a, b) => a + b, 0) / tcommunication.length);
                tcotation.sort(function(a, b) {return a - b;});
                document.getElementById("mincotation").innerHTML = tcotation[0];
                document.getElementById("maxcotation").innerHTML = tcotation[tcotation.length-1];
                document.getElementById("medcotation").innerHTML = mediane(tcotation);
                document.getElementById("moycotation").innerHTML = Math.round(tcotation.reduce((a, b) => a + b, 0) / tcotation.length);
                Plotly.newPlot("radar", data, layout, config);
                document.getElementById("filesToLoad").value = null;
                document.getElementById("Statistiques").style.visibility = 'visible';
            }
            n++;
        }
        reader.readAsText(file);
    })
}
function mediane(arr) {
    var middleIndex = arr.length / 2;
    if (arr.length % 2 !== 0)
    {
        return arr[Math.floor(middleIndex)];
    }
    else
    {
        return Math.round((arr[middleIndex - 1] + arr[middleIndex]) / 2);
    }
}
function pleinecran()
{
    document.getElementById("radar").requestFullscreen();
    document.addEventListener("fullscreenchange", function(event) {
        if (document.fullscreenElement === null) {            
            Plotly.relayout('radar', {width: 600, height: 600});
            Plotly.relayout('radar', {autosize: true});
        }
      });
}
function calcultaux(classe)
{
    switch(classe)
    {
        case "1":
            return "1,45";
        case "2":
            return "1,6";
        case "3":
            return "1,75";
        case "4":
            return "1,95";
        case "5":
            return "2,2";
        case "6":
            return "2,45";
        case "7":
            return "2,6";
        case "8":
            return "2,9";
        case "9":
            return "3,3";
        case "10":
            return "3,8";
        default:
            return "N/A";
    }
}
function affichageprime()
{
    document.getElementById("labelprime").innerHTML = "Prime d'ancienneté<br/><select name=\"territoire\" id=\"territoire\" onchange=\"calculpoint();\"><option value=\"\">Sélectionner votre territoire ou secteur</option><option value=\"5,00€\">Sidérurgie</option><option value=\"4,80€\">01-Ain</option><option value=\"5,45€\">02-Aisne</option><option value=\"5,19€\">03-Allier</option><option value=\"5,28€\">04-Alpes de Haute-Provence</option><option value=\"5,25€\">05-Hautes-Alpes</option><option value=\"4,90€\">06-Alpes Maritimes</option><option value=\"5,27€\">07-Ardèche</option><option value=\"5,04€\">08-Ardennes</option><option value=\"5,02€\">09-Ariège</option><option value=\"4,94€\">10-Aube</option><option value=\"5,17€\">11-Aude</option><option value=\"5,02€\">11-Aude (Carcassonne-Narbonne)</option><option value=\"5,02€\">12-Aveyron</option><option value=\"5,28€\">13-Bouches du Rhône</option><option value=\"5,35€\">14-Calvados</option><option value=\"5,50€\">16-Charente</option><option value=\"5,76€\">17-Charente Maritime</option><option value=\"5,88€\">18-Cher</option><option value=\"5,60€\">19-Corrèze</option><option value=\"5,32€\">21-Côte d'Or</option><option value=\"4,85€\">22-Côtes d'Armor</option><option value=\"5,60€\">23-Creuse</option><option value=\"5,20€\">24-Dordogne</option><option value=\"5,00€\">25-Doubs</option><option value=\"5,27€\">26-Drôme</option><option value=\"5,76€\">27-Eure</option><option value=\"5,65€\">28-Eure et Loir</option><option value=\"5,10€\">29-Finistère</option><option value=\"5,27€\">30-Gard</option><option value=\"5,02€\">31-Haute-Garonne</option><option value=\"5,02€\">32-Gers</option><option value=\"5,50€\">33-Gironde</option><option value=\"5,17€\">34-Hérault</option><option value=\"4,78€\">37-Ille et Vilaine</option><option value=\"6,10€\">36-Indre</option><option value=\"5,90€\">37-Indre et Loire</option><option value=\"5,25€\">38-Isère</option><option value=\"4,90€\">39-Jura</option><option value=\"5,50€\">40-Landes</option><option value=\"6,18€\">41-Loir et Cher</option><option value=\"5,20€\">42-Loire</option><option value=\"5,20€\">43-Haute-Loire (Arrondissement d'Yssingeaux)</option><option value=\"6,23€\">44-Loire-Atlantique</option><option value=\"5,90€\">45-Loiret</option><option value=\"5,02€\">46-Lot</option><option value=\"5,65€\">47-Lot et Garonne</option><option value=\"5,27€\">48-Lozère</option><option value=\"5,65€\">49-Maine et Loire</option><option value=\"5,40€\">50-Manche</option><option value=\"5,17€\">51-Marne</option><option value=\"5,27€\">52-Haute-Marne</option><option value=\"5,30€\">53-Mayenne</option><option value=\"5,30€\">54-Meurthe et Moselle</option><option value=\"5,27€\">55-Meuse</option><option value=\"4,78€\">56-Morbihan</option><option value=\"5,20€\">57-Moselle</option><option value=\"5,17€\">58-Nièvre</option><option value=\"5,15€\">59-Nord (Dunkerque)</option><option value=\"4,37€\">59-Nord (Flandres-Lille-Douai)</option><option value=\"4,63€\">59-Nord (Maubeuge)</option><option value=\"4,46€\">59-Nord (Valenciennes-Cambrai)</option><option value=\"5,36€\">60-Oise</option><option value=\"5,35€\">61-Orne</option><option value=\"4,37€\">62-Pas-de-Calais</option><option value=\"5,19€\">63-Puy-de-Dôme (général)</option><option value=\"5,19€\">63-Puy-de-Dôme (Thiers)</option><option value=\"5,60€\">64-Pyrénées-Atlantiques et Seignanx</option><option value=\"5,65€\">65-Hautes-Pyrénées</option><option value=\"5,17€\">66-Pyrénées-Orientales</option><option value=\"5,65€\">67-Bas-Rhin</option><option value=\"4,91€\">68-Haut-Rhin</option><option value=\"4,20€\">69-Rhône</option><option value=\"4,90€\">70-Haute Saône</option><option value=\"5,62€\">71-Saône et Loire</option><option value=\"5,48€\">72-Sarthe</option><option value=\"5,40€\">73-Savoie</option><option value=\"5,22€\">74-Haute-Savoie</option><option value=\"5,20€\">75-Paris</option><option value=\"5,85€\">76-Seine-Maritime (Le Havre)</option><option value=\"5,79€\">76-Seine-Maritime (Rouen et Dieppe)</option><option value=\"5,20€\">77-Seine-et-Marne</option><option value=\"5,20€\">78-Yvelines</option><option value=\"5,61€\">79-Deux-Sèvres</option><option value=\"5,60€\">80-Somme</option><option value=\"6,05€\">80-Somme (Vimeu)</option><option value=\"5,02€\">81-Tarn</option><option value=\"5,02€\">82-Tarn-et-Garonne</option><option value=\"4,90€\">83-Var</option><option value=\"4,90€\">84-Vaucluse</option><option value=\"5,50€\">85-Vendée</option><option value=\"5,55€\">86-Vienne</option><option value=\"5,60€\">87-Haute-Vienne</option><option value=\"5,03€\">88-Vosges</option><option value=\"5,17€\">89-Yonne</option><option value=\"4,90€\">90-Territoire de Belfort et arrondissement de Montbéliard</option><option value=\"5,20€\">91-Essonne</option><option value=\"5,20€\">92-Hauts-de-Seine</option><option value=\"5,20€\">93-Seine-St-Denis</option><option value=\"5,20€\">94-Val-de-Marne</option><option value=\"5,20€\">95-Val-d'Oise</option></select>";
}
function calculpoint()
{
    document.getElementById('prime').innerHTML = "ancienneté (max : 15 ans)<br/>* " + calcultaux(document.getElementById('classe').innerHTML) + "<br/>* " + document.getElementById('territoire').value;
}