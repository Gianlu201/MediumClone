# Medium UI Clone

Clone **puramente grafico** della homepage di Medium, realizzato con HTML, CSS e JavaScript. Il progetto è un esercitazione personale per migliorare le abilità nella costruzione di interfacce web e nell'animazione SVG tramite JavaScript.

---

## Sommario
- [Descrizione](#descrizione)  
- [Caratteristiche principali](#caratteristiche-principali)  
- [Tecnologie](#tecnologie)  
- [Struttura del progetto](#struttura-del-progetto)  
- [Esecuzione in locale](#esecuzione-in-locale)  
- [Animazione SVG (nota tecnica)](#animazione-svg-nota-tecnica)  

---

## Descrizione
Questo progetto replica l'aspetto della homepage di Medium a livello **grafico**: layout, tipografia, card degli articoli e header. Non implementa funzionalità di backend (nessuna autenticazione, nessuna pubblicazione reale, nessuna integrazione con API): tutte le risorse (immagini, testi) sono usate in modo statico a scopo dimostrativo.

---

## Caratteristiche principali
- Replica grafica della homepage (hero, lista di articoli, sidebar semplificata).  
- Animazione sullo sfondo realizzata con SVG e controllata via JavaScript.  
- Layout responsive adattato a desktop e mobile.  
- Asset statici: immagini di copertina e icone incluse nella cartella `assets`.  
- Codice semplice e leggibile, pensato come esercizio didattico.

---

## Tecnologie
- **HTML5** — struttura semantica della pagina.  
- **CSS3** — styling responsivo; possibile uso di CSS custom properties.  
- **JavaScript** — animazione SVG e interazioni leggere (es. piccoli trigger al caricamento).  

---

## Struttura del progetto

```
Progetto_S5-L5/
├─ assets/            # immagini, SVG, eventuali CSS/JS aggiuntivi
├─ index.html         # homepage (replica Medium)
├─ README.md          # documentazione (questo file)
└─ (altri file statici)
```

---

## Esecuzione in locale
1. Clona la repository:
```bash
git clone https://github.com/Gianlu201/MediumClone.git
cd MediumClone
```

2. Apri `index.html` nel browser (doppio click) oppure usa un server statico (consigliato per testare eventuali fetch locali):
```bash
npx http-server .   # o usa Live Server di VS Code
```

---

## Animazione SVG (nota tecnica)
L'animazione è realizzata con un file SVG usato come sfondo e pilotato da JavaScript. Pattern comuni per questo tipo di soluzione sono:

- manipolare attributi SVG (es. `transform`, `d`, `opacity`) via `requestAnimationFrame` o tramite librerie leggere;  
- usare classi CSS con transizioni e attivarle dal JS al caricamento della pagina;  
- ottimizzare le animazioni per ridurre paint cost (evitare layout thrashing e trasformare proprietà GPU-accelerate come `transform` e `opacity`).  

---
