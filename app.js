BSS = Math.floor(Math.random() * 3);
gebruiker = 3;
winner = 0;
scoreUser = 0;
scorePC = 0;

function Blad(){
    gebruiker = 0;
    document.getElementById('Keuze').src='Blad.png';
    keuzePc();
}

function Steen(){
    gebruiker = 1;
    document.getElementById('Keuze').src='Steen.png';
    keuzePc();
}

function Schaar(){
    gebruiker = 2;
    document.getElementById('Keuze').src='Schaar.png';
    keuzePc();
}

function keuzePc(){
    if (BSS == 0){
        document.getElementById('Keuzepc').src='Blad.png';
    } else if (BSS == 1){
        document.getElementById('Keuzepc').src='Steen.png';
    } else if (BSS == 2){
        document.getElementById('Keuzepc').src='Schaar.png';
    }
    Check();
}

function Check(){
    if (gebruiker == BSS)
    {
        winner = 0;
    }
    else
    {
        if (gebruiker == 0)
        {
            if (BSS == 1) { scoreUser++; winner = 1; } //User wins
            else if (BSS == 2) { scorePC++; winner = 2; } //Computer wins
        }
        else if (gebruiker == 1)
        {
            if (BSS == 0) { scorePC++; winner = 2; }
            else if (BSS == 2) { scoreUser++; winner = 1; }
        }
        else if (gebruiker == 2)
        {
            if (BSS == 0) { scoreUser++; winner = 1; }
            else if (BSS == 1) { scorePC++; winner = 2; }
        }
    }
    document.getElementById("ScoreUser").innerText = scoreUser;
    document.getElementById("ScorePc").innerText = scorePC;
    Lock();
}

function Again()
{
    if (gebruiker == 3){
        alert("Maak eerst een keuze!")
    }
    else{
        BSS = Math.floor(Math.random() * 3);
        gebruiker = 3;
        document.getElementById('Keuze').src='Images/Wit.png';
        document.getElementById('Keuzepc').src='Images/Wit.png';
        Unlock();
    }
}

function Lock(){
    document.getElementById("blaadje").disabled = true;
    document.getElementById("steentje").disabled = true;
    document.getElementById("schaartje").disabled = true;
    document.getElementById("continuer").disabled = false;
}

function Unlock(){
    document.getElementById("blaadje").disabled = false;
    document.getElementById("steentje").disabled = false;
    document.getElementById("schaartje").disabled = false;
    document.getElementById("continuer").disabled = true;
}
