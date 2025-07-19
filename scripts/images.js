const url = "https://github.com/NGC-3628/instructions.github.io/blob/main/images/imges.JSON";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelector('div.images');
    getInstructionDetails().then(details => displayDetails(details));
});


