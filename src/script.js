const score = document.getElementsByClassName("score")

for(let i = 0; i < score.length; i++){
    for(let t = 0; t < 5; t++){
        const starIcon = new Image();
        starIcon.src = "../images/icon-star.svg"
        score[i].appendChild(starIcon)
    }
}
