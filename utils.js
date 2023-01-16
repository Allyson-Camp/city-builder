export function renderSlogan(slogan) {
    const newElement = document.createElement('p');
    newElement.classList.add('slogan');
    newElement.textContent = slogan;

    return newElement;
}