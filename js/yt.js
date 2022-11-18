import { previewInfo } from "./videoInfo.js";
const videoGrid = document.querySelector('.video-grid');




for (let i = 0; i < previewInfo.title.length; i++) {
    loadPreview(
        previewInfo.thumbnailSrc[i],
        previewInfo.videoTime[i],
        previewInfo.pfpSrc[i],
        previewInfo.title[i],
        previewInfo.creator[i],
        previewInfo.stats[i]
    );
}    

console.log(
    previewInfo.thumbnailSrc.length,
        previewInfo.videoTime.length,
        previewInfo.pfpSrc.length,
        previewInfo.title.length,
        previewInfo.creator.length,
        previewInfo.stats.length
)
    
    
function loadPreview(thumbnailSrc,vidTime,pfpSrc,title,creator,viewsAndDate) {
    const elements = createElements();
    setClasses(elements);
    elements.thumbnail.src = thumbnailSrc;
    elements.time.innerHTML = vidTime;
    elements.pfp.src = pfpSrc;
    elements.vidTitle.innerHTML = title;
    elements.vidCreator.innerHTML = creator;
    elements.stats.innerHTML = viewsAndDate;
    append(elements);
}

function setClasses(elements) {
    elements.preview.className = 'preview';
    elements.thumbnailRow.className = 'thumbnail-row';
    elements.thumbnail.className = 'thumbnail';
    elements.time.className = 'video-time';
    elements.infoGrid.className = 'info-grid';
    elements.pfpCont.className = 'channel-pfp';
    elements.pfp.className = 'profile-pic';
    elements.vidInfo.className = 'videp-info';
    elements.vidTitle.className = 'title';
    elements.vidCreator.className = 'creator';
    elements.stats.className = 'stats';
}

function createElements() {
    const preview = document.createElement('div');
    const thumbnailRow = document.createElement('div');
    const thumbnail = document.createElement('img');
    const time = document.createElement('div');
    const infoGrid = document.createElement('div');
    const pfpCont = document.createElement('div');
    const pfp = document.createElement('img');
    const vidInfo = document.createElement('div');
    const vidTitle = document.createElement('p');
    const stats = document.createElement('p');
    const vidCreator = document.createElement('p');
    return {preview,thumbnailRow,thumbnail,time,infoGrid,pfpCont,pfp,vidInfo,vidTitle,stats,vidCreator}
}


function append(elements) {
    elements.thumbnailRow.appendChild(elements.thumbnail);
    elements.thumbnailRow.appendChild(elements.time);
    elements.pfpCont.appendChild(elements.pfp);
    elements.vidInfo.appendChild(elements.vidTitle);
    elements.vidInfo.appendChild(elements.vidCreator);
    elements.vidInfo.appendChild(elements.stats);
    elements.infoGrid.appendChild(elements.pfpCont);
    elements.infoGrid.appendChild(elements.vidInfo);
    elements.preview.appendChild(elements.thumbnailRow);
    elements.preview.appendChild(elements.infoGrid);
    videoGrid.appendChild(elements.preview);
}


