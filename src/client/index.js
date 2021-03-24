import { handleSubmit } from './js/formHandler'

// Import style sheets
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        handleSubmit();
    });
})