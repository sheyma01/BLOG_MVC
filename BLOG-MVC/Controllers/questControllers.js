const express =require('express');
const mysql = require('mysql');
const db = mysql.createConnection({
   user:'root',
   host: 'localhost',
   password: '',
   database: 'pfs2'
});


const create_quest = (req, res)=>{
    const info = req.body;
    
    console.log(info);
    db.query(
        "SELECT question FROM userq WHERE courriel = ?",[info.courriel],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{

                if(result.length!=0){
                 res.send('Vous devez supprimer la question existante pour pouvoir en créer une nouvelle. '); 

                }
                else{
                    db.query("INSERT INTO userq (nom, prenom, courriel, question,reponse) VALUES (?,?,?,?,?)",[info.nom,info.prenom,info.courriel,info.question,info.reponse],
                    (err,result)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.send('Question envoyée MERCI ');    
                        }
                    } )
                    }
            }}
        
    )
}

const select_quest = (req, res)=>{
    db.query("SELECT id,question FROM userq", (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);    
        }
    })
}
const update_quest = (req, res)=>{
    //const id_question = req.body.id;
    const courriel = req.body.courriel;
    const reponse = req.body.reponse;

//    db.query("SELECT courriel FROM userq WHERE courriel = ?",[my_courriel],(err,result)=>{
//        if(err){
//            console.log(err);
//        }
//        else{
//            if(result.length!=0){
//                res.send("vous ne pouvez pas répondre à votre propre question ");
//            }
//            else {
                db.query("UPDATE userq SET reponse = ? WHERE courriel = ? ", [reponse, courriel],(err,result1)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send("réponse envoyé MERCI!");
                    }
                })     
//            }
//       }
//    })

    
}
const select_rep = (req, res)=>{
    const id = req.body.id;
    db.query("SELECT courriel,reponse FROM userq WHERE id = ?",[id],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
} 
const delete_quest = (req,res)=>{
    const id = req.params.id;
    /* db.query("SELECT id FROM userq WHERE id = ?",[id],(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            if(result==null){ */
                db.query(
                    "DELETE  FROM userq WHERE id = ?",[id],
                    (err,result1)=>{
                        if(err){
                            res.send(err);
                        }
                        else{
                            res.send("Deleted successfully");
                        }
                    }
                )
            /* }
            else{
                res.send()
            }
        }
    }) */
    
}
module.exports = {
    create_quest,select_quest,select_rep,delete_quest,update_quest
}