export function renderCat(cat) {
    const div = document.createElement('div');
    div.classList.add('cat');

    const h1 = document.createElement('h1');
    h1.textContent = cat.name;

    const img = document.createElement('img');
    img.src = cat.image;

    const p = document.createElement('p');
    p.textContent = `${cat.name} is ${cat.age} year(s) old and likes ${cat.likes}`;

    div.append(h1, img, p);
    return div;
}

export function renderHikes(hikes) {
    const div = document.createElement('div');
    div.classList.add('hiking-spots');

    const h1 = document.createElement('h1');
    h1.textContent = hikes.hike;

    const img = document.createElement('img');
    img.src = hikes.image;

    const p = document.createElement('p');
    p.textContent = `${hikes.hike} is located near ${hikes.location} and is best known for ${hikes.knownFor}`;

    div.append(h1, img, p);
    return div;
}
