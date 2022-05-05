import { cats } from './cat-data';
import { renderCat } from './utils';

const catListEl = document.getElementById('cats');

for (let cat of cats) {
    const catDiv = renderCat(cat);
    catListEl.append(catDiv);
}
