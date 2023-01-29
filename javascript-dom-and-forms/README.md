

W tym zadaniu przećiwczymy dodawanie elementów do drzewa DOM, odczytywanie ich zawartości i właściwości, aktualizowanie elementów ich oraz usuwanie. Wykorzystamy też obsługę zdarzeń (eventy).

## Zadanie nr 1 - Interakcja ze stroną

---

0.  Stwórzcie plik HTML na bazie pliku HTML dołączonego do tego projektu (w folderze '03-dom').
    Dodatkowo stwórzcie pusty plik JS i dodajcie go do tego HTMLa. Skrypt dodajcie w znaczniku body.
    Upewnijcie się, że skrypt został poprawnie podpięty - dodajcie 'console.log('DOM API') i odpalcie plik HTML. Stosowny komunikat powinien się pojawić w konsoli.

Przykład dodania kodu JS do HTML:

```
...
<body>
   <script src="jakisTamPlik.js"></script>
</body>
...
```

#### <<< tutaj kod >>>

---

1. Dodajcie w HTMLu za znacznikiem 'script' znacznik 'h1' z atrybutem ID o wartości 'header'. W pliku JS spróbujcie złapać dodany znacznik za pomocą funkcji 'document.getElementById' podając jako argument ID dodane do znacznika 'h1'. Zapiszcie go w stałej (const) o nazwie 'header' i wykonajcie 'console.log(header)'. Zerknijcie co się wydarzy w konsoli. Następnie również wykorzystując 'console.log' wyświetlcie aktualną zawartość tego elementu.

Spoiler: nie wydarzyło się nic (wyświetli się 'null') - ważna lekcja - taki kod nie zadziała z tego względu, że kod jest wykonywany od góry do dołu, dlatego najpierw wykona się zawartość skryptu a dopiero potem zostanie dodany znacznik 'h1' do drzewa DOM. Kolejność dodania skryptu do pliku HTML MA ZNACZENIE.

Jednym z rozwiązań (również najprostszym) jest przeniesienie skryptu na sam dół (ale nadal w body), pod wszelki kod HTML jaki powstanie.
Przenieście skrypt na sam dół i sprawdźcie, czy tym razem console.log(header) wskazał coś innego niż 'null'.

#### <<< tutaj kod >>>

---

2. Gdy wszystko już mamy skonfigurowane poprawnie - dodajmy style dla naszego nagłówka. Dodajcie plik css (np. styles.css) i podepnijcie go do HTMLa. Skopiujcie zawartość pliku css dołączonego do tego zadania.
   W kodzie JS wykorzystując stworzony obiekt 'header' i jego właściwość 'classList' dodajcie zdefiniowamą wcześniej klasę 'header'.
   Sprawdzcie, czy Wasz nagłówek zmienił kolor.

#### <<< tutaj kod >>>

---

3. Zmieńmy tekst zawarty w nagłówku, utrudnijmy trochę sprawę i wykorzystajmy do tego JS (no bo po co zmienić w HTMLu, byłoby to zbyt oczywiste). Za pomocą właściwości 'innerText' ustawmy 'Jestem nagłówkiem' jako aktualną treść naszego znacznika 'h1'.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

4. Dodajmy do HTMLa listę numerowaną z 4 elementami. Wykorzystajmy do tego JS. Aby dodać kod musimy znaleźć element 'bazowy' w którego środek 'wciśniemy' listę wraz z jej elementami - takim elementem bazowym może być 'body'.
   Stwórz tablicę 'listItems' składającą się z 4 elementów - kolejnych liter alfabetu zaczynająć od 'a'. Następnie korzystająć z funkcji 'createElement' stwórz listę 'ol'. Wykorzystując funkcję 'forEach' dodaj wszystkie cztery elementy z tablicy do listy 'ol' tworząc za każdym razem element 'li' i umieszczając w nim treść odpowiadającą zawartości tego elementu (czyli dla elementu o indeksie 0 będzie to 'a', potem 'b' itd...). Do dodania do listy elementów 'li' wykorzystaj funkcję 'append'. Pamiętaj o 'wciśnięciu' gotowej listy do drzewa DOM.

#### <<< tutaj kod >>>

---

5. Wykorzystując querySelectorAll złapcie wszystkie elementy 'li' i korzystając z pętli forEach dodajcie elementom klasę 'listItem'

#### <<< tutaj kod >>>

---

6. Podczas pracy z DOM możemy również usuwać zarówno atrybuty jak i całe elementy. Zacznijmy od usunięcia z elementu 'h1' klasy 'header', którą dodaliśmy w kroku drugim. Wykorzystajcie właściwość 'classList' (tak jak w kroku 2) ale tym razem z funkcją 'remove'.

#### <<< tutaj kod >>>

---

7. Usuńmy teraz cały element - wystarczy odnieść się do stworzonego w kroku 1 const'a 'header' i jego funkcji 'remove'.

#### <<< tutaj kod >>>

---

8. Dodajcie funkcję 'toggleBackgroundColor' która będzie modyfikować tło elementu 'body. Jeśli ten element nie ma ustawionego w stylach 'background-color' to doda mu 'background-color' o wartości '#123123' a jeśli ma - to usunie go. Dodajcie przycisk do DOM (w JS oczywiście) i dodajcie mu eventListener odpowiedzialny za kliknięcie. Niech przycisk ma treść 'KLIKNIJ MNIE'.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

## Zadanie nr 2 - Licznik

Stwórz licznik kliknięć, który będzie składał się z 2 przycisków ('+' i '-') oraz tekstu, który będzie wskazywał aktualną liczbę. Kliknięcie na '+' zwiększa liczbe o 1, kliknięcie na '-' zmniejsza liczbę o 1.

Do stworzenia przycisków, tekstu i zarządzania kliknięciami wykorzustujemy JSa. Umiejscowienie elementów: przycisk '+' po lewej stronie, w środku liczba, po prawej stronie przycisk '-'.

Style do odpowiedniego ułożenia elementów dodaj również za pomocą JSa.

## Zadanie nr 3 - TODO app

Napisz aplikację do śledzenia zadań (lista TODO). Aplikacja powinna być podzielona na moduły odpowiedziałne za poszczególne fragmenty logiki.

Aplikacja powinna działać w następujący sposób:

1. Użytkownik wpisuje treść zadania i dodaje zadanie do listy po kliknięciu na przycisk - tutaj wymagana walidacja - jeśli pole tekstowe jest puste - dodajemy czerwoną wiadomość, że należy to uzupełnić. Po uzupełnieniu i ponownym kliknięciu na przycisk jeśli tym razem jest ok - wiadomość z błędem znika i zadanie się dodaje. Zadanie powinno być obiektem z 2 właściwościami - 'value' będącym treścią oraz 'id' będący unikatowym identyfikatorem danego zadania - do jego stworzenia posłużcie się funkcją 'Math.random()'. To 'id' powinno być również dodane jako atrybut 'id' dla danego zadania (widoczne w DOM).

2. Zadanie pojawia się na liście PO 2 SEKUNDACH.

3. Po 2 sekundach zadanie pojawia się na liście i dodatkowo jest zapisywane w kolekcji trzymanej w LocalStorage - nazwa klucza - dowolna.

4. Logika odpowiedzialna za LocalStorage - zapisywanie, odczytywanie i usuwanie danych powinna być wydzielona do osobnego modułu zawierającego 3 funkcje do obsługi tych zadań.

5. Kliknięcie na element listy powinno spowodować usunięcie elementu, również po 2 sekundach i również z LocalStorage.

### Zadanie

---

1. Przygotujcie funkcję realizującą dodawanie zadań. Funkcja ta powinna nasłuchiwać na event 'submit' formularza (czyli dodajemy referencję do elementu DOM i podpinamy eventListener).
   Najlepiej podzielić takie duże zadanie na malutkie kroki i je stopniowo wdrażać w życie. Każdy krok powinien być osobą funkcją zrealizowaną w taki sposób, aby każda funkcja była odpowiedzialna za jedno zadanie, np osobna funkcja do walidacji, osobna funkcja do dodania elementów do DOM.
   Tutaj przygotujcie sobie sam szablon funkcji - za pomocą komentarzy stwórzcie logiczną całość i spróbujcie wyodrębnić poszczególne funkcje. Zadania trzymajcie w stanie jako tablicę.

#### <<< tutaj kod >>>

---

2. Po stworzeniu takiej fikcyjnej struktury następnym krokiem będzie wdrożenie poszczególnych funkcjonalności. Polecam zacząć od funkcji walidującej zawartość inputa, następnie funkcję na dodawanie wiadomości z błędem itd - im mniejsze funkcje tym czytelniej i prościej o wszelkie modyfikacje. Później dodanie zadania do listy zadań i aktualizacja DOM.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

3. Po stworzeniu bazowej funkcjonalności przechodzimy do stworzenia modułu odpowiedzialnego za pracę z LocalStorage. Jak wspomniałem wyżej - moduł ten powinien zawierać 3 funkcje - odpowiedzialną za dodawanie, usuwanie i pobieranie informacji. Stwórzcie moduł i zepnijcie funkcjonalność dodawania zadań z modułem LocalStorage. Pamietajcie o dodaniu event listenera na załadowanie się DOM po którym powinny z LocalStorage być wczytane dodane zadania (document.addEventListener("DOMContentLoaded",callback))

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---
