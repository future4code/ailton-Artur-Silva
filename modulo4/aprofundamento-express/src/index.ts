import express, { response } from "express";
import cors from "cors"
import { afazeres, Afazeres } from "./data";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/retornaAfazeres", (request, response) => {
    const verdadeiroFalso = afazeres.filter((afazer)=>{
      if(afazer.completed === true){
        return afazer
      }
    })
    response.send(verdadeiroFalso)
    })
 

    app.post("/adicionTarefa/:nomeTitulo", (request, response) => {
        const nomeTitulo = request.params.nomeTitulo
        const inforTarefa = request.body
    
        const acharTarefa: Afazeres[] = afazeres.filter((afazer) => {
            return afazer.title.includes(nomeTitulo)
        })
    console.log(acharTarefa)
        acharTarefa[0].title.push(inforTarefa)
    
        response.status(201).send({Mensagem:"Musica Adicionada com sucesso"})
    })


    app.delete("/apagarPlaylist/:id", (request, response) => {
        const id = request.params.id
    
        const deleteAfazeres: Afazeres[] = afazeres.filter((afazeres) => {
            return afazeres.id !== id
        })
    
        response.send(deleteAfazeres)
    })
    





app.listen(3003,() => {
 
console.log('Server is running in http://localhost')
});