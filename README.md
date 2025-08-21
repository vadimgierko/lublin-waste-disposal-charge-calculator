# Kalkulator wysokości opłaty za odpady komunalne w Lublinie

---

## 1. Ogólne informacje o aplikacji

Aplikacja została stworzona do użytku wewnętrznego przez pracowników Urzędu Miasta Lublin  
(*na razie dotyczy pracowników Biura Obsługi Mieszkańców*).  

Jej celem jest **sprawne wyliczanie opłat za odpady komunalne w zabudowie wielorodzinnej**, obecnie wyłącznie dla:  
- właścicieli nieruchomości, którzy indywidualnie złożyli deklaracje (np. w prywatnych kamienicach bez zarządcy),  
- najemców lokali komunalnych.  

Podstawą prawną działania kalkulatora jest <a href="https://bip.lublin.eu/rada-miasta-lublin/uchwaly-rm-lublin/ix-kadencja-rady-miasta-lublin-2024-2029/sesja-nr-xi-w-dniu-29-05-2025/uchwala-nr-351xi2025-rady-miasta-lublin-z-dnia-29-maja-2025-r-w-sprawie-wyboru-metody-ustalenia-oplaty-za-gospodarowanie-odpadami-komunalnymi-oraz-ustalenia-stawki-tej-oplaty,56,28904,2.html" target="_blank">Uchwała nr 351/XI/2025 Rady Miasta Lublin z dnia 29 maja 2025 r. w sprawie wyboru metody ustalenia opłaty za gospodarowanie odpadami komunalnymi oraz ustalenia stawki tej opłaty</a>.

---

## 2. Zastrzeżenie

- Aplikacja jest **nieoficjalna**, a korzystanie z niej **dobrowolne**.  
- Autor dołożył wszelkich starań, aby zapewnić poprawność obliczeń i interfejsu użytkownika, ale **nie ponosi odpowiedzialności za ewentualne błędy**, aczkolwiek zobowiązuje się do ich niezwłocznego naprawienia po wykryciu.
- Zaleca się **sporadyczne manualne sprawdzanie wyników** i zgłaszanie wszelkich nieprawidłowości autorowi.  
- Autor podkreśla, że **sam regularnie korzysta z aplikacji** do wyliczania opłat, co w jego opinii stanowi podstawę do zaufania jej wynikom.  

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

### 3.3. Automatyczne zaokrąglenia

Kalkulator stosuje automatyczne zaokrąglenia zgodnie z wytycznymi Kierownika Referatu ds. deklaracji o wysokości opłaty za odpady komunalne (mail z dnia 05.08.2025 r.):

*W poz. 27 deklaracji wpisujemy dokładnie  m³, które podane są w powiadomieniu o rozliczeniu wody (nawet jeśli jest więcej niż 2 miejsca po przecinku). W pozostałych rubrykach z dokładnością do 2 miejsc po przecinku, zaokrąglamy zgodnie z zasadami ogólnymi tj. jeśli trzecia cyfra to 0, 1, 2, 3 lub 4, zaokrąglamy w dół (poprzednią cyfrę pozostawiamy bez zmian). Jeśli ta cyfra to 5, 6, 7, 8 lub 9, zaokrąglamy w górę (poprzednią cyfrę zwiększamy o 1).*

### 3.4. Automatyczne obliczenia - wystarczy przepisać do deklaracji w formie papierowej

Aplikacja automatycznie wylicza i uzupełnia wszystkie niezbędne pozycje w deklaracji, w tym także:
- zniżkę dla rodzin wielodzietnych,
- przekroczenie limitu 7,8% przeciętnego miesięcznego dochodu rozporządzanego na 1 osobę ogółem za gospodarstwo domowe (stanem na 2025 r. wynosi on 247.03 zł).

### 3.5. Wbudowana weryfikacja wartości wpisanych w polach formularza

Pola formularza posiadają wbudowaną weryfikację wartości wpisanych w polach formularza, w związku z czym:
- ignorują ("ucinają") spacje przed i po wpisanej wartości,
- akceptują i jednakowo traktują zarówno kropkę, jak i przecinek w liczbach ułamkowych, w związku z czym można używać tych symboli zamiennie,
- wyświetlają komunikat błędu w przypadku:
  - wpisania innych symboli, niż liczby, kropka i przecinek,
  - pozostawienia pola formularza dot. wartości rozliczenia pustym.