// Definir un conjunto de síntomas (puedes ampliar esto según tus necesidades)
const symptoms = [
    { description: "Debilidad bilateral progresiva rápida de las piernas y/o brazos", typical: true },
    { description: "Dolor severo y difuso", typical: false },
    // Agrega más síntomas
];

// Función para generar el juego de síntomas
function generateSymptomGame() {
    const gameContainer = document.getElementById("symptom-game");

    // Mostrar cada síntoma como una opción
    symptoms.forEach((symptom, index) => {
        const symptomOption = document.createElement("div");
        symptomOption.innerHTML = `
            <p>${index + 1}. ${symptom.description}</p>
            <label>
                <input type="radio" name="symptom-${index}" value="typical"> Típico
            </label>
            <label>
                <input type="radio" name="symptom-${index}" value="atypical"> Atípico
            </label>
        `;
        gameContainer.appendChild(symptomOption);
    });
}

// Función para verificar las respuestas del usuario
function checkSymptoms() {
    const userResponses = [];

    // Recopilar las respuestas del usuario
    symptoms.forEach((symptom, index) => {
        const selectedValue = document.querySelector(`input[name="symptom-${index}"]:checked`);
        userResponses.push({
            description: symptom.description,
            userAnswer: selectedValue ? selectedValue.value : null,
        });
    });

    // Puedes agregar lógica para verificar las respuestas y proporcionar retroalimentación
    console.log(userResponses);
}

// Generar el juego al cargar la página
window.onload = generateSymptomGame;
