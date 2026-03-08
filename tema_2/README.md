1. Ce este o resursa in aplicatia „Campus Info Hub”?
O resursa este pur si simplu un loc sau un serviciu din campus pe care il descriem in fisierul JSON. 
Fiecare resursa are un nume, un tip (de exemplu: studiu, mancare, evenimente), o locatie, un program si cateva etichete care ne ajuta la filtrare. 
Practic, resursele sunt informatiile pe care aplicatia le afiseaza dinamic pe pagina principala.

2. Exemplu de URI si explicatia lui:
Un exemplu este: pages/library.html#schedule
- pages/ - folderul in care se afla pagina
- library.html - fisierul HTML pe care il deschidem
- #schedule - un fragment care duce direct la sectiunea cu id="schedule" din pagina
Acest URI ii spune browserului sa deschida pagina bibliotecii si sa sara direct la program.

3. Parti statice si dinamice in aplicatie:
Partile statice sunt paginile HTML obisnuite: index.html, library.html, cafeteria.html si events.html. 
Acestea nu se schimba singure. 
Partile dinamice sunt cele generate prin JavaScript, cum ar fi lista de resurse incarcata din JSON, filtrarea resurselor si afisarea tag-urilor. Acestea se actualizeaza automat in functie de datele din fisierul JSON.

4. Aplicatia este document-centric sau interactiva? De ce?
Aplicatia este o combinatie intre cele doua. 
Este document-centrica pentru ca are pagini statice traditionale, fiecare cu propriul continut. 
Dar este si interactiva, deoarece foloseste JavaScript pentru a incarca si afisa date in mod dinamic, pentru a filtra resurse si pentru a genera elemente noi in pagina. 
In final, este o aplicatie hibrida: are structura unui site clasic, dar si comportament interactiv.