import { cats } from './cat-data.js';
import { renderCat } from './utils.js';
import { hiking } from './hiking-data.js';
import { renderHikes } from './utils.js';
import { summer } from './summer-data.js';
import { renderSummer } from './utils.js';

const catListEl = document.getElementById('cats');

for (let cat of cats) {
    const catDiv = renderCat(cat);
    catListEl.append(catDiv);
}

const hikesListEl = document.getElementById('hiking');

for (let hikes of hiking) {
    const hikingDiv = renderHikes(hikes);
    hikesListEl.append(hikingDiv);
}

const summerEventsListEl = document.getElementById('summer');

for (let summerEvents of summer) {
    const summerDiv = renderSummer(summerEvents);
    summerEventsListEl.append(summerDiv);
}