// JavaScript for interactivity

document.querySelector('.view-list').addEventListener('click', () => {
    document.querySelector('.file-list').style.flexDirection = 'column';
    document.querySelectorAll('.file-item').forEach(item => {
        item.style.width = '100%';
        item.style.marginRight = '0';
    });
});

document.querySelector('.view-grid').addEventListener('click', () => {
    document.querySelector('.file-list').style.flexDirection = 'row';
    document.querySelector('.file-list').style.flexWrap = 'wrap';
    document.querySelectorAll('.file-item').forEach(item => {
        item.style.width = 'calc(50% - 10px)';
        item.style.marginRight = '10px';
    });
});
