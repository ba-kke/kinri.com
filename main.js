'use strict';

{
    
    const button = document.getElementById("button");

    button.addEventListener("click", function(e) {
 
        e.preventDefault();
     
        const FirstMoney = document.getElementById("FirstMoney").value;
        const TumitateMoney = document.getElementById("TumitateMoney").value;
        const year = document.getElementById("year").value;
        const nenri = document.getElementById("nenri").value;
        
        let keisankekka = FirstMoney * 10000;
        let TumitateRuikei = FirstMoney * 10000;
        let i = 0;
        while(i < year) {
            TumitateRuikei = TumitateRuikei + (TumitateMoney * 12 * 10000);
            keisankekka = (keisankekka + (TumitateMoney * 12 * 10000)) * (1 + (nenri / 100));
            i++;
        }
        keisankekka = keisankekka / 10000;
        TumitateRuikei = TumitateRuikei / 10000;

        const kekka = document.getElementById("kekka");
        kekka.value = keisankekka;
        const ruikei = document.getElementById("ruikei");
        ruikei.value = TumitateRuikei;
    });
}