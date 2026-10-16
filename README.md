# [MIDDAGSHÄLPEN]
## Om sidan
Interaktiv websida som visar recept. Låter anvädare söka efter ett par recept och läsa dem.
## Skiss
Länk eller hänvisning till skissfilen i repot.
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?
Min färdiga hemsida stämmer mestadels överens med skissen. Mindre ändringa gjordes främst för att göra koden enklare.
## Funktionalitet
Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?

På webbplatsen kan besökaren titta på en lista med recept, söka efter specifika rätter, filtrera på kategorier, klicka på ett recept för att öppna en detaljvy med instruktioner, samt öppna en mobilmeny på mindre skärmar.
index.html innehåller all grundläggande struktur, knappar, behållare för recept och dolda modal-fönster.
app.js innehåller all JavaScript-logik. Recepten lagras i en array. Funktionen showRecipes skapar upp elementen i DOM-strukturen dynamiskt. Funktionen filterRecipes hanterar sökning och kategorifiltrering. Funktionerna openRecipe och closeRecipe styr visningen av receptens detaljvyer, och klickhändelser hanterar mobilmenyn.

## AI-användning
Exempel 1
Vad bad jag om? Jag bad om hjälp med att skriva en funktion i JavaScript som kunde loopa igenom min recept-array och skapa upp HTML-kort dynamiskt på sidan.
Vad fick jag? Ett kodförslag som använde forEach och document.createElement för att bygga upp korten samt kod för att öppna modal-fönstret vid klick.
Vad gjorde jag med det? Jag studerade koden för att förstå hur den fungerade, anpassade den efter min HTML-struktur och tog bort sådant som kändes för avancerat för att hålla koden enkel.

Exempel 2
Vad bad jag om? Jag bad om hjälp med hur jag kunde göra en sök- och filterfunktion för recepten baserat på både textinmatning och kategoriknappar.
Vad fick jag? Ett förslag på en funktion som använde array-metoden filter tillsammans med sökfältets värde och aktiva klasser på knapparna.
Vad gjorde jag med det? Jag tittade på logiken med filter-metoden, lånade strukturen för hur villkoren sattes upp för sökordet och kategorin, och skrev sedan koden själv i min app.js så att den passade till mina egna ID-namn och klasser i HTML-strukturen.
Vilka beslut tog jag, och varför?
