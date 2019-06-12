const fs = require('fs');

exports.charList = async () => {
    var charList = [];
    const jsonData = JSON.parse(fs.readFileSync("./characters.json", "utf8"));

    for (let i = 0; i < jsonData.length; i++) {
        const character = {
            name: "",
            status: "",
            gender: "",
            image: "",
            s1: 0,
            s2: 0,
            s3: 0,
            qty: 0
        }

        if (jsonData[i].status === "Alive") {
            character.name = jsonData[i].name;
            character.status = "Vivo";
            character.location = jsonData[i].location;

            if(jsonData[i].gender === "Male"){
                character.gender = "Masculino";
            }else if (jsonData[i].gender === "Female"){
                character.gender = "Feminino";
            }else{
                character.gender = "Desconhecido";
            }

            character.qty = jsonData[i].episode.length;
            character.image = jsonData[i].image;

            for (let j = 0; j < jsonData[i].episode.length; j++) {
                const url = jsonData[i].episode[j].split("/");
                const episodenumber = url[url.length - 1];

                if (episodenumber < 12) { 
                    character.s1 += 1; 
                }else if (episodenumber > 11 && episodenumber < 22) { 
                    character.s2 += 1 
                }else{
                    character.s3 += 1;
                }
            }
            
            charList.push(character);
        }
    }
    
    charList.sort(function (a, b) {
        if (a.qty == b.qty) {
            return a.name.localeCompare(b.name);
        }
        return b.qty - a.qty;
    })
    return charList;
}