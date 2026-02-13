const Cuisiner = function (nom) {
    let platsPrepares = 0;


    const preparePlat = () => {
        platsPrepares++;
        console.log("PLat en cours...");
    }

    const afficherBilan = () => {
        console.log(`${nom} a préparé ${platsPrepares} plats`)
    }

    return {
        nom: nom,
        preparePlat: preparePlat,
        afficherBilan: afficherBilan
    };
}

const monChef = Cuisiner("Mael");

monChef.preparePlat();
monChef.afficherBilan();
