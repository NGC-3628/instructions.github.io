const url = "https://raw.githubusercontent.com/NGC-3628/instructions.github.io/main/images/images.JSON";

document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector('div.images');
    getInstructionDetails().then(details => displayDetails(details, imagesContainer));
});

async function getInstructionDetails() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Error fetching data:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayDetails(details, container) {
    if (details && details.ilustrative_help) 
    {
        details.ilustrative_help.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const step = document.createElement('h3');
            step.textContent = item.step;

            const img = document.createElement('img');
            img.src = item.url;
            img.alt = "Instructional Image";

            img.onload = function() {
                if (this.naturalWidth > 800) {
                    this.style.width = (this.naturalWidth * 0.8) + 'px';
                }
            };

            const instruction = document.createElement('p');
            instruction.textContent = item.instruction;

            card.appendChild(step);
            card.appendChild(img);
            card.appendChild(instruction);

            container.appendChild(card);
        });
    }
}