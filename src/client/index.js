import { handleSubmit } from './js/formHandler'

// Import style sheets
import './styles/_base.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'
import './styles/_resets.scss'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault();
        handleSubmit();
    });
})
