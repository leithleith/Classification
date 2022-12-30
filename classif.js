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
function calcul() {
    var verification = parseInt(document.getElementById("complexite").value) * parseInt(document.getElementById("connaissances").value) * parseInt(document.getElementById("autonomie").value) * parseInt(document.getElementById("contribution").value) * parseInt(document.getElementById("encadrementcooperation").value) * parseInt(document.getElementById("communication").value);
    if (verification != 0)
    {
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
        if (resultat > 36)
        {
            document.getElementById("statut").innerHTML = 'Cadre';
            document.getElementById("prime").innerHTML = 'Pas de prime (Cadre)';
        }
        else if (resultat > 21 && resultat < 37)
        {
            document.getElementById("statut").innerHTML = 'Non Cadre<br/>mais<br/>ex Article 36 :<br/>passage Cadre ?';
            document.getElementById("prime").innerHTML = document.getElementById('classe').innerHTML + '<br/>* valeur du point<br/>* ancienneté';
        }
        else {
            document.getElementById("statut").innerHTML = 'Non Cadre';
            document.getElementById("prime").innerHTML = document.getElementById('classe').innerHTML + '<br/>* valeur du point<br/>* ancienneté';
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
                text: 'Cotation ' + resultat + ' - Groupe ' +  document.getElementById('groupe').innerHTML + ' - Classe ' + document.getElementById('classe').innerHTML
            },
            autosize: true,
            font: {
                color: '#cdcccc'
            },
            paper_bgcolor: '#1e1e1e'
        }
        config = {
            displayModeBar: true,
            responsive: true,
            displaylogo: false,
            locale: 'fr',
            modeBarButtonsToAdd: [
                {
                  name: 'Passer en plein écran',
                  icon: Plotly.Icons.zoombox,
                  click: function(gd) {
                    document.getElementById("radar").requestFullscreen();
                  }}],
            modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoom2d'],
            scrollZoom: false,
            toImageButtonOptions: {
                filename: resultat + document.getElementById('groupe').innerHTML + document.getElementById('classe').innerHTML + '-' + Date.now(),
                height: 800,
                width: 800
            }
        }
        Plotly.newPlot("radar", data, layout, config);
        document.getElementById("matable").style.visibility = 'visible';
    }
    else {
        alert("Tous les critères n'ont pas été renseignés !");
    }
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
    document.getElementById("Messages").innerHTML = "";
    var file = document.getElementById("fileToLoad").files;
    if (file.length > 0)
    {
        var fileReader = new FileReader();
        fileReader.readAsText(file[0]);
        fileReader.onload = function() {
            document.getElementById("Messages").innerHTML += "<br/>Chargement de : " + file[0].name;
            var lignes = fileReader.result.split("\n");
            var ligne = lignes[0].split(";");
            var verification = 1;
            for (var n = 0; n < ligne.length; n++)
            {
                verification *= ligne[n];
            }
            if (verification != 0)
            {
                var resultat = 0;
                for (var n = 0; n < ligne.length; n++)
                {
                    resultat += parseInt(ligne[n]);
                }
                document.getElementById('cotation').innerHTML =  resultat;
                var classe = 0;
                var groupe = "non défini";
                switch(resultat) {
                    case 60:
                    classe = 18;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 18;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 64500;
                    break;
                    case 59:
                    classe = 18;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 18;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 64500;
                    break;
                    case 58:
                    classe = 18;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 18;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 64500;
                    break;
                    case 57:
                    classe = 17;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 17;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 56000;
                    break;
                    case 56:
                    classe = 17;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 17;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 56000;
                    break;
                    case 55:
                    classe = 17;
                    groupe = "I";
                    document.getElementById('classe').innerHTML = 17;
                    document.getElementById('groupe').innerHTML = "I";
                    document.getElementById('salairemin').innerHTML = 56000;
                    break;
                    case 54:
                    classe = 16;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 16;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 49000;
                    break;
                    case 53:
                    classe = 16;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 16;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 49000;
                    break;
                    case 52:
                    classe = 16;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 16;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 49000;
                    break;
                    case 51:
                    classe = 15;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 15;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 44000;
                    break;
                    case 50:
                    classe = 15;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 15;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 44000;
                    break;
                    case 49:
                    classe = 15;
                    groupe = "H";
                    document.getElementById('classe').innerHTML = 15;
                    document.getElementById('groupe').innerHTML = "H";
                    document.getElementById('salairemin').innerHTML = 44000;
                    break;
                    case 48:
                    classe = 14;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 14;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 41000;
                    break;
                    case 47:
                    classe = 14;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 14;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 41000;
                    break;
                    case 46:
                    classe = 14;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 14;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 41000;
                    break;
                    case 45:
                    classe = 13;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 13;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 37400;
                    break;
                    case 44:
                    classe = 13;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 13;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 37400;
                    break;
                    case 43:
                    classe = 13;
                    groupe = "G";
                    document.getElementById('classe').innerHTML = 13;
                    document.getElementById('groupe').innerHTML = "G";
                    document.getElementById('salairemin').innerHTML = 37400;
                    break;
                    case 42:
                    classe = 12;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 12;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 34300;
                    break;
                    case 41:
                    classe = 12;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 12;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 34300;
                    break;
                    case 40:
                    classe = 12;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 12;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 34300;
                    break;
                    case 39:
                    classe = 11;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 11;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 32500;
                    break;
                    case 38:
                    classe = 11;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 11;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 32500;
                    break;
                    case 37:
                    classe = 11;
                    groupe = "F";
                    document.getElementById('classe').innerHTML = 11;
                    document.getElementById('groupe').innerHTML = "F";
                    document.getElementById('salairemin').innerHTML = 32500;
                    break;
                    case 36:
                    classe = 10;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 10;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 31400;
                    break;
                    case 35:
                    classe = 10;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 10;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 31400;
                    break;
                    case 34:
                    classe = 10;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 10;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 31400;
                    break;
                    case 33:
                    classe = 9;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 9;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 28400;
                    break;
                    case 32:
                    classe = 9;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 9;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 28400;
                    break;
                    case 31:
                    classe = 9;
                    groupe = "E";
                    document.getElementById('classe').innerHTML = 9;
                    document.getElementById('groupe').innerHTML = "E";
                    document.getElementById('salairemin').innerHTML = 28400;
                    break;
                    case 30:
                    classe = 8;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 8;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 26400;
                    break;
                    case 29:
                    classe = 8;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 8;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 26400;
                    break;
                    case 28:
                    classe = 8;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 8;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 26400;
                    break;
                    case 27:
                    classe = 7;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 7;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 24400;
                    break;
                    case 26:
                    classe = 7;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 7;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 24400;
                    break;
                    case 25:
                    classe = 7;
                    groupe = "D";
                    document.getElementById('classe').innerHTML = 7;
                    document.getElementById('groupe').innerHTML = "D";
                    document.getElementById('salairemin').innerHTML = 24400;
                    break;
                    case 24:
                    classe = 6;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 6;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 23500;
                    break;
                    case 23:
                    classe = 6;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 6;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 23500;
                    break;
                    case 22:
                    classe = 6;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 6;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 23500;
                    break;
                    case 21:
                    classe = 5;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 5;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 22300;
                    break;
                    case 20:
                    classe = 5;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 5;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 22300;
                    break;
                    case 19:
                    classe = 5;
                    groupe = "C";
                    document.getElementById('classe').innerHTML = 5;
                    document.getElementById('groupe').innerHTML = "C";
                    document.getElementById('salairemin').innerHTML = 22300;
                    break;
                    case 18:
                    classe = 4;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 4;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 21200;
                    break;
                    case 17:
                    classe = 4;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 4;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 21200;
                    break;
                    case 16:
                    classe = 4;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 4;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 21200;
                    break;
                    case 15:
                    classe = 3;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 3;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 20300;
                    break;
                    case 14:
                    classe = 3;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 3;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 20300;
                    break;
                    case 13:
                    classe = 3;
                    groupe = "B";
                    document.getElementById('classe').innerHTML = 3;
                    document.getElementById('groupe').innerHTML = "B";
                    document.getElementById('salairemin').innerHTML = 20300;
                    break;
                    case 12:
                    classe = 2;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 2;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19700;
                    break;
                    case 11:
                    classe = 2;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 2;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19700;
                    break;
                    case 10:
                    classe = 2;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 2;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19700;
                    break;
                    case 9:
                    classe = 1;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 1;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19420;
                    break;
                    case 8:
                    classe = 1;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 1;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19420;
                    break;
                    case 7:
                    classe = 1;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 1;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19420;
                    break;
                    case 6:
                    classe = 1;
                    groupe = "A";
                    document.getElementById('classe').innerHTML = 1;
                    document.getElementById('groupe').innerHTML = "A";
                    document.getElementById('salairemin').innerHTML = 19420;
                    break;
                    default:
                    classe = "Erreur";
                    groupe = "Erreur";
                    document.getElementById('classe').innerHTML = "Erreur";
                    document.getElementById('groupe').innerHTML = "Erreur";
                    document.getElementById('salairemin').innerHTML = "Erreur";
                }
                if (resultat > 36)
                {
                    document.getElementById("statut").innerHTML = 'Cadre';
                    document.getElementById("prime").innerHTML = 'Pas de prime (Cadre)';
                }
                else if (resultat > 21 && resultat < 37)
                {
                    document.getElementById("statut").innerHTML = 'Non Cadre<br/>mais<br/>ex Article 36 :<br/>passage Cadre ?';
                    document.getElementById("prime").innerHTML = document.getElementById('classe').innerHTML + '<br/>* valeur du point<br/>* ancienneté';
                }
                else {
                    document.getElementById("statut").innerHTML = 'Non Cadre';
                    document.getElementById("prime").innerHTML = document.getElementById('classe').innerHTML + '<br/>* valeur du point<br/>* ancienneté';
                }
                switch (parseInt(ligne[1])) {
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
                    r: [ligne[0],ligne[1],ligne[2],ligne[3],ligne[4],ligne[5]],
                    theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication'],
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
                    paper_bgcolor: '#1e1e1e',
                }
                config = {
                    displayModeBar: true,
                    responsive: true,
                    displaylogo: false,
                    locale: 'fr',
                    modeBarButtonsToAdd: [
                        {
                          name: 'Passer en plein écran',
                          icon: Plotly.Icons.zoombox,
                          click: function(gd) {
                            document.getElementById("radar").requestFullscreen();
                          }}],
                    modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoom2d'],
                    scrollZoom: false,
                    toImageButtonOptions: {
                        filename: resultat + groupe + classe + '-' + Date.now(),
                        height: 800,
                        width: 800
                    }
                }
                document.getElementById("Messages").innerHTML += "<hr/>";
                Plotly.newPlot("radar", data, layout, config);
                document.getElementById("fileToLoad").value = null;
                document.getElementById("matable").style.visibility = 'visible';
            }
            else {
                document.getElementById("Messages").innerHTML += "<br/>Erreur : au moins un critère non renseigné, ou fichier invalide !";
                document.getElementById("fileToLoad").value = null;
            }
        }; 
        fileReader.onerror = function() {
            document.getElementById("Messages").innerHTML += "<br/>Erreur de chargement de : " + file[0].name;
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
    document.getElementById("Messages").innerHTML = "";
    const files = document.getElementById("filesToLoad").files;
    document.getElementById("Messages").innerHTML += "Chargement de : " + files.length + " fichier(s).";
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
                    document.getElementById("radar").requestFullscreen();
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
    Object.keys(files).forEach(i => {
            const file = files[i];
            document.getElementById("Messages").innerHTML += "<br/>Chargement de : " + file.name;
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
            data.push({
                type: 'scatterpolar',
                r: [parseInt(ligne[0]),parseInt(ligne[1]),parseInt(ligne[2]),parseInt(ligne[3]),parseInt(ligne[4]),parseInt(ligne[5])],
                theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication'],
                fill: 'toself',
                hoverinfo: 'skip',
                name: file.name.substring(15, file.name.length-4)
            });            
            if (n === (files.length))
            {
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