import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const text = document.querySelector('.section-title h1');

const init = async () => {
    const followers = await fetchFollowers();
    displayFollowers(paginate(followers)[4]);
    const page = paginate(followers)
    text.textContent = 'pagination';
}

window.addEventListener('load', init)