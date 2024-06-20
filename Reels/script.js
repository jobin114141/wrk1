const videos = [
    { src: '1.mp4', song: 'Song 1', description: 'This is the first video description.' },
    { src: '2.mp4', song: 'Song 2', description: 'This is the second video description.' },
    { src: '3.mp4', song: 'Song 3', description: 'This is the third video description.' },
    { src: '4.mp4', song: 'Song 4', description: 'This is the fourth video description.' },
    { src: '5.mp4', song: 'Song 5', description: 'This is the fifth video description.' },
    { src: '6.mp4', song: 'Song 6', description: 'This is the sixth video description.' },
    { src: '7.mp4', song: 'Song 7', description: 'This is the seventh video description.' },
    { src: '8.mp4', song: 'Song 8', description: 'This is the eighth video description.' },
];

const appVideos = document.getElementById('app__videos');

videos.forEach((video, index) => {
    const videoElement = document.createElement('div');
    videoElement.className = 'video';
    videoElement.innerHTML = `
                <!-- header starts -->
                <div class="videoHeader">
                    <span class="material-icons"></span>
                      <img src="icon1.png" alt="Reels Header Image" style="width: 100px; height: auto;">
                    <span class="material-icons"></span>
                </div>
                <!-- header ends -->

                <video class="video__player" src="${video.src}" autoplay muted loop></video>

                <!-- footer starts -->
                <div class="videoFooter">
                    <!-- <div class="videoFooter__text">
                        <img class="user__avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                        <h3>Somanath Goudar • <button>Follow</button></h3>
                    </div>  -->

                    <div class="videoFooter__ticker">
                        <span class="material-icons"> music_note </span>
                        <marquee>${video.song}</marquee>
                    </div>
                    <div class="videoFooter__description">
                        <p>${video.description}</p>
                    </div>
                </div>
                <!-- footer ends -->
            `;
    appVideos.appendChild(videoElement);
});
