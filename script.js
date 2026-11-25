const button = document.getElementById("loadBtn");
const result = document.getElementById("result");

button.addEventListener("click", async () => {
    result.textContent = "Завантаження...";
    button.disabled = true;

    try {
        const response = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
            { cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error("Помилка запиту");
        }

        const data = await response.json();

        result.textContent = data.text;

    } catch (error) {
        result.textContent = "Не вдалося отримати факт";
    } finally {
        button.disabled = false;
    }
});