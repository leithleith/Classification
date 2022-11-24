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
                document.getElementById("radar").style.visibility = 'visible';
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
    document.getElementById('classe').innerHTML = "";
    document.getElementById('groupe').innerHTML = "";
    document.getElementById('salairemin').innerHTML = "";
    document.getElementById("matable").style.visibility = 'collapse';
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
    Object.keys(files).forEach(i => {
            const file = files[i];
            document.getElementById("Messages").innerHTML += "<br/>Chargement de : " + file.name;
            const reader = new FileReader();
            reader.onload = (e) => {
            var lignes = reader.result.split("\n");
            var ligne = lignes[0].split(";");
            data.push({
                type: 'scatterpolar',
                r: [parseInt(ligne[0]),parseInt(ligne[1]),parseInt(ligne[2]),parseInt(ligne[3]),parseInt(ligne[4]),parseInt(ligne[5])],
                theta: ['complexité','connaissances','autonomie', 'contribution', 'encadrement/coopération', 'communication'],
                fill: 'toself',
                name: file.name.substring(15, file.name.length-4)
            });
            if (n === (files.length))
            {
                document.getElementById("Messages").innerHTML += "<hr/>";
                Plotly.newPlot("radar", data, layout, config);
                document.getElementById("radar").style.visibility = 'visible';
                document.getElementById("filesToLoad").value = null;
            }
            n++;
        }
        reader.readAsText(file);
    })
}

function pleinecran()
{
    document.getElementById("radar").addEventListener('fullscreenchange', (event) => {
        if (document.fullscreenElement)
        {
            Plotly.relayout("radar", { autosize: true });
        }
        else
        {
            Plotly.relayout("radar", { width: document.getElementById("matable").offsetWidth , height: document.getElementById("matable").offsetHeight });
        }
    });
}