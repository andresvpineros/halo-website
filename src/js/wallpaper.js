const wallpapers = [
    {
        id: 'https://compass-ssl.xbox.com/assets/97/60/97608bfb-1ec1-495d-8ba9-fc0a31c28b07.jpg?n=115115115115_Gallery_6_1350x759.jpg'
    },
    {
        id: 'https://compass-ssl.xbox.com/assets/bb/8c/bb8ca57e-2f95-4be9-851f-0fd061c6fd72.jpg?n=115115115115_Gallery_8_1350x759.jpg'
    },    
    {
        id: 'https://compass-ssl.xbox.com/assets/6f/b1/6fb1a77e-154e-4314-b7a8-da4527bbf857.jpg?n=115115115115_Gallery_9_1350x759.jpg'
    },    
    {
        id: 'https://compass-ssl.xbox.com/assets/1e/ef/1eef45f9-5d47-468d-9718-18b8f2b071e5.jpg?n=115115115115_Gallery_1_1350x759.jpg'
    },    
    {
        id: 'https://compass-ssl.xbox.com/assets/8f/de/8fded2fd-41f2-4fb2-8402-f2e726edf2a0.jpg?n=115115115115_Gallery_2_1350x759.jpg'
    },   
];

const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const wallpapersContainer = document.querySelector('#wallpaper-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
const itemWalp = document.querySelector('.item a'); 
let current = 0;

bNext.addEventListener('click', (e) => {
    let change = current;
    current = current + 1 < wallpapers.length ? current + 1 : current;
    if(current !== change){
        renderCurrentWallpaper(wallpapers[current].id);
    }
});

bPrev.addEventListener('click', (e) => {
    let change = current;
    current = current - 1 > 0 ? current - 1 : current;
    
    if(current !== change){
        renderCurrentWallpaper(wallpapers[current].id);
    }
});

const renderCurrentWallpaper = (id) => {
    currentContainer.innerHTML = `
    <picture>
        <source srcset="${id}" media="(min-width:0)"> 
        <img src="${id}" alt="" width="100%">
    </picture>
    `;
}

const renderWallpaper = () => {
    const html = wallpapers.map((wallp, index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="${wallp.id}" width="320px" height="180px"/>
            </a>
        </div>`
    })

    wallpapersContainer.innerHTML = html.join('');
    console.log(document.querySelector('.item a'));
    document.querySelector('.item a').forEach((item) => {
        console.log(item);
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = +item.getAttribute('data-id');
            console.log(id);
            current = id;
            renderCurrentWallpaper(wallpapers[current].id);
        });
    });
}

renderCurrentWallpaper(wallpapers[current].id);
renderWallpaper();