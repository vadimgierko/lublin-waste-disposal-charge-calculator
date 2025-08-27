# Kalkulator wysokości opłaty za odpady komunalne w Lublinie

---

## 1. Ogólne informacje o aplikacji

Aplikacja została stworzona do użytku wewnętrznego dla pracowników Urzędu Miasta Lublin.  

Jej celem jest **sprawne wyliczanie opłat za odpady komunalne w zabudowie wielorodzinnej**, obecnie wyłącznie dla:  
- właścicieli nieruchomości, którzy indywidualnie złożyli deklaracje (np. w prywatnych kamienicach bez zarządcy),  
- najemców lokali komunalnych.  

Podstawą prawną działania kalkulatora jest <a href="https://bip.lublin.eu/rada-miasta-lublin/uchwaly-rm-lublin/ix-kadencja-rady-miasta-lublin-2024-2029/sesja-nr-xi-w-dniu-29-05-2025/uchwala-nr-351xi2025-rady-miasta-lublin-z-dnia-29-maja-2025-r-w-sprawie-wyboru-metody-ustalenia-oplaty-za-gospodarowanie-odpadami-komunalnymi-oraz-ustalenia-stawki-tej-oplaty,56,28904,2.html" target="_blank">Uchwała nr 351/XI/2025 Rady Miasta Lublin z dnia 29 maja 2025 r. w sprawie wyboru metody ustalenia opłaty za gospodarowanie odpadami komunalnymi oraz ustalenia stawki tej opłaty</a>.

---

## 2. Widoki

### 2.1. Widok formularza

<img
  src="https://kalkulator-stawki-za-odpady-lublin.vercel.app/img/zrzut-widoku-formularza-rozliczenie.jpg"
  alt="zrzut widoku formularza rozliczenia kalkulatora stawki za odpady w Lublinie"
  width="100%"
  class="border shadow"
/>

Po uruchomieniu aplikacji użytkownik widzi formularz zawierający:

- **checkboxy**:
  - **"Jest rozliczenie wody?"**
     - domyślnie zaznaczony wyświetla pole formularza do wpisania wartości rozliczenia wody w m3
     - niezaznaczony wyświetla pole formularza do wpisania liczby osób
       <img
        src="https://kalkulator-stawki-za-odpady-lublin.vercel.app/img/zrzut-widoku-formularza-osoby.jpg"
        alt="zrzut widoku formularza liczby osób kalkulatora stawki za odpady w Lublinie"
        width="100%"
        class="border shadow"
      />
  - **"Rodzina wielodzietna?"**
- **pole formularza**:  
  - do wpisania zużycia wody (*jeśli zaznaczono checkbox rozliczenia wody*),  
  - do wpisania liczby mieszkańców (*jeśli odznaczono checkbox rozliczenia wody*),  
- **przycisk „Oblicz”**, który przekierowuje do widoku automatycznie wypełnionej deklaracji.

### 2.2. Widok deklaracji

<img
  src="https://kalkulator-stawki-za-odpady-lublin.vercel.app/img/zrzut-widoku-deklaracji.jpg"
  alt="zrzut widoku deklaracji kalkulatora stawki za odpady w Lublinie"
  width="100%"
  class="border shadow"
/>

Po kliknięciu „Oblicz” użytkownik przechodzi do widoku deklaracji, w którym znajdują się:

- nieaktywne („zamrożone”) **checkboxy** dot. rozliczenia i rodziny wielodzietnej,  
- **deklaracja** z automatycznie uzupełnionymi wartościami w odpowiednich polach (do przepisania do papierowej deklaracji),  
- **przycisk „Nowe rozliczenie”**, który resetuje dane i przywraca widok formularza.

<img
  src="https://kalkulator-stawki-za-odpady-lublin.vercel.app/img/zrzut-widoku-deklaracji-przycisk.jpg"
  alt="zrzut widoku deklaracji z przyciskiem kalkulatora stawki za odpady w Lublinie"
  width="100%"
  class="border shadow"
/>

---

## 3. Funkcjonalności

### 3.1. Automatyczne zaokrąglenia

Kalkulator stosuje automatyczne zaokrąglenia zgodnie z wytycznymi Kierownika Referatu ds. deklaracji o wysokości opłaty za odpady komunalne (mail z dnia 05.08.2025 r.):

*W poz. 27 deklaracji wpisujemy dokładnie  m³, które podane są w powiadomieniu o rozliczeniu wody (nawet jeśli jest więcej niż 2 miejsca po przecinku). W pozostałych rubrykach z dokładnością do 2 miejsc po przecinku, zaokrąglamy zgodnie z zasadami ogólnymi tj. jeśli trzecia cyfra to 0, 1, 2, 3 lub 4, zaokrąglamy w dół (poprzednią cyfrę pozostawiamy bez zmian). Jeśli ta cyfra to 5, 6, 7, 8 lub 9, zaokrąglamy w górę (poprzednią cyfrę zwiększamy o 1).*

### 3.2. Automatyczne obliczenia - wystarczy przepisać do deklaracji w formie papierowej

Aplikacja automatycznie wylicza i uzupełnia wszystkie niezbędne pozycje w deklaracji (w przypadku rozliczenia na podstawie zużycia wody lub ryczałtu), w tym także:
- zniżkę dla rodzin wielodzietnych,
- przekroczenie limitu 7,8% przeciętnego miesięcznego dochodu rozporządzanego na 1 osobę ogółem za gospodarstwo domowe (stanem na 2025 r. wynosi on 247.03 zł).

### 3.3. Wbudowana weryfikacja wartości wpisanych w polach formularza

Pola formularza posiadają wbudowaną weryfikację wartości wpisanych w polach formularza, w związku z czym:
- ignorują ("ucinają") spacje przed i po wpisanej wartości,
- akceptują i jednakowo traktują zarówno kropkę, jak i przecinek w liczbach ułamkowych, w związku z czym można używać tych symboli zamiennie,
- wyświetlają komunikat błędu w przypadku:
  - wpisania innych symboli, niż liczby, kropka i przecinek,
  - pozostawienia pola formularza dot. wartości rozliczenia pustym.

### 3.4. Jasny i ciemny motyw (Dark/light Mode)

W górnym prawym rogu strony znajduje się ikonka słońca/księżyca, po kliknięciu w którą aplikacja jest wyświetlana odpowiednio w jasnym lub ciemnym motywie. Ponadto to ustawienie jest zapisywane w przeglądarce i zostanie nadpisane dopiero po zmianie motywu.

## 4. Technologie użyte do napisania aplikacji

Niniejsza aplikacja została napisana "od podszewki" w technologiach i językach programowania wymienionych w poniższej tabeli:

<table className="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>Frameworki</td>
      <td>
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="35">
        <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" height="35">
        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" height="35">
      </td>
    </tr>
    <tr>
      <td>Języki</td>
      <td>
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height="35">
        <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="35">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" height="35">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" height="35">
        <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" height="35">
      </td>
    </tr>
    <tr>
      <td>Udostępnienie w Internecie</td>
      <td>
        <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="35">
      </td>
    </tr>
  </tbody>
</table>

---

## 5. Zastrzeżenie

### 5.1. Korzystanie z aplikacji

Aplikacja **nie jest oficjalną urzędową aplikacją, tylko oddolną inicjatywą Autora**, a korzystanie z niej jest **dobrowolne**.

### 5.2. Odpowiedzialność i prawdopodobieństwo wystąpienia błędów; zaimplementowane testy automatyczne

Autor dołożył wszelkich starań, aby zapewnić poprawność obliczeń i interfejsu użytkownika, w tym zaimplementował **testy automatyczne** odpowiadające wzorom udostępnionym przez Wydział Ochrony Środowiska UM, a także sprawdzające poprawność zaokrągleń, aczkolwiek **nie ponosi odpowiedzialności za nieprzewidziane ewentualne błędy**.

Niemniej jednak, Autor zobowiązuje się do niezwłocznego naprawienia wszelkich błędów zgłoszonych na pracowniczego maila Autora przez użytkowników aplikacji.

Zaleca się **sporadyczne manualne sprawdzanie wyników** i zgłaszanie wszelkich nieprawidłowości Autorowi.

Autor zachęca również użytkowników aplikacji do **zgłaszania pomysłów lub zapotrzebowania na zmiany** w aplikacji, a także **feedback**u i konstruktywnej krytyki.