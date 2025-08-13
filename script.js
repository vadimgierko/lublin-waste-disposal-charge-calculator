const TOGGLE_THEME_BUTTON = document.getElementById("themeToggle");

let currentTheme = "light"

function getTheme() {
    currentTheme = document.documentElement.getAttribute("data-bs-theme");
}

function setToggleButtonValue() {
    getTheme();

    TOGGLE_THEME_BUTTON.innerHTML = currentTheme === "light"
        ? `<i class="bi bi-moon-fill"></i>`
        : `<i class="bi bi-brightness-high-fill"></i>`

    TOGGLE_THEME_BUTTON.title = currentTheme === "light"
        ? "przełącz na tryb ciemny"
        : "przełącz na tryb jasny"
}

setToggleButtonValue();

function toggleTheme() {
    getTheme();

    document.documentElement.setAttribute(
        "data-bs-theme",
        currentTheme === "dark" ? "light" : "dark"
    );

    setToggleButtonValue();
}

function obliczZuzycieWody(zuzycie) {
    if (typeof zuzycie !== "number" || isNaN(zuzycie)) {
        throw new Error("Argument musi być liczbą");
    }
    const miesieczneZuzycie = Number((zuzycie / 6).toFixed(2));
    const oplataZaSmieci = Number((miesieczneZuzycie * 13.20).toFixed(2));
    return {
        zuzycie,
        miesieczneZuzycie,
        oplataZaSmieci
    };
}

function oblicz(event) {
    event.preventDefault()

    const inputEl = document.getElementById("zuzycieInput");
    let wartosc = inputEl.value.trim();

    if (!wartosc) {
        alert("Podaj liczbę!");
        return;
    }

    // Zamień przecinek na kropkę
    wartosc = wartosc.replace(",", ".");

    // Sprawdź, czy wpisano tylko cyfry i opcjonalnie kropkę
    if (!/^\d+(\.\d+)?$/.test(wartosc)) {
        alert("Podaj poprawną liczbę!");
        return;
    }

    // Konwersja na liczbę
    const liczba = parseFloat(wartosc);

    if (isNaN(liczba)) {
        alert("Podana wartość nie jest poprawną liczbą!");
        return;
    }

    try {
        const wynik = obliczZuzycieWody(liczba);
        document.getElementById("wyniki").innerHTML = `
        <p class="text-end">Zużycie wody za 6 miesięcy (poz. 27): <strong>${wynik.zuzycie} m³</strong></p>

        <table class="table table-striped table-bordered table-sm">
            <tr>
                <td colspan="2">Średniomiesięczne zużycie wody tj. ilość z poz. 27 podzielona przez 6 (z dokładnością do dwóch miejsc po przecinku)</td>
                <td colspan="2">Stawka opłaty określona odrębną uchwałą Rady Miasta Lublin</td>
                <td>Miesięczna wysokość opłaty</td>
            </tr>
            <tr>
                <td class="d-flex justify-content-between">
                    <span><small class="text-start">28.</small></span>
                    <span><strong>${wynik.miesieczneZuzycie}</strong></span>
                    <span>m³</span>
                </td>
                <td>x</td>
                <td class="d-flex justify-content-between">
                    <span><small>29.</small></span>
                    <span><strong>13,20</strong></span>
                    <span>zł/m3</span>
                </td>
                <td>=</td>
                <td class="d-flex justify-content-between">
                    <span><small>30.</small></span>
                    <span><strong>${wynik.oplataZaSmieci}</strong></span>
                    <span>zł</span>
                </td>
            </tr>
        </table>
        `;
        // reset input:
        inputEl.value = ""
    } catch (err) {
        alert(err.message);
    }
}