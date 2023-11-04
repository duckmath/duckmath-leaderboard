function add_new_score(game_text, username_text, score_text, image_path) {

    let main_tag = document.getElementById("main");
    main_tag.innerHTML += `
        <div style = "
            grid-column: 2 / 5;
            margin-top: 70px;
            text-align: center;
            color: white;
            border: 2px white solid;
            border-radius: 10px;
            padding-top: 10px;
            font-family: monospace;
            "> 
            <img src = ${image_path} style = "width: 50px; height: auto; border-radius: 10px;">
            <h2 id = "game">${game_text}</h2>
            <h3 id = "username">${username_text}</h3>
            <h3 id = "score">${score_text}</h3>
        </div>
    `;
}

add_new_score("Game name", "username", "score", "assets/img/duck.png")
add_new_score("Game name", "username", "score", "assets/img/duck.png")
add_new_score("Game name", "username", "score", "assets/img/duck.png")
