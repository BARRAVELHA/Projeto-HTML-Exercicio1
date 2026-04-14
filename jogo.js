let vidamaxima = 100;
        let vida = vidamaxima;
        let danoporespada = 30;
        
        vida -= danoporespada;
        
        if (vida > 0) {
            console.log("Vida restante: " + vida + ". O personagem ainda está vivo");
        } else {
            console.log("Vida restante: " + vida + ". O personagem foi derrotado");
        }
