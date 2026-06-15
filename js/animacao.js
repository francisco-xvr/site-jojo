const modal = document.getElementById("videoModal");
const video = document.getElementById("youtubeVideo");

document.getElementById("abrirTrailer").addEventListener("click", () => {
    video.src = "https://www.youtube.com/embed/RBCEcNfSxCE?autoplay=1";
    modal.style.display = "block";
});

function fecharVideo() {
    video.src = "";
    modal.style.display = "none";
}

document.getElementById("fechar").addEventListener("click", fecharVideo);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        fecharVideo();
    }
});