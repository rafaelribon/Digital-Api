let chai = require("chai");
let chaiHttp = require("chai-http");
let faker = require("faker");
let config = require("../../config/urlBase");


let expect = chai.expect;
let randonEmail =  faker.internet.email();;


chai.use(chaiHttp);

    let email;
    let obterToken;
    let usuarioId; 


describe("Post", () =>{

    context('quando eu autentico com email cadastrado ', () => {
        
        it("então deve retornar 200", (done) =>{
            let usuario = {
                "email":"Glennie_Roob54@gmail.com",
                "password":"dev100"

        } 
                chai.request(`${config.URL_BASE}`) 
                .post("/usuarios/v3/autenticar")
                .send(usuario)
                .end((err,res) => {
                    if(err) done(err);
                    expect(res).to.have.status(200);
                    expect(res.body.acess_token).to.not.be.null
                    expect(res.body.atualizar_cadastro.atualizar).to.be.false;
                    expect(res.body.atualizar_cadastro.message).to.
                        equals("Não é necessário atualizar dados cadastrais.");
                    expect(res.body.atualizar_cadastro.success).to.be.true;
                    done(); 
                });
        });

    });


    context('quando eu autentico com email não cadastrado', () => {
        
        it("então deve retornar 400", (done) =>{
            let usuario = {
                "email":randonEmail,
                "password":"dev100"
        }       
                chai.request(`${config.URL_BASE}`) 
                .post("/usuarios/v3/autenticar")
                .send(usuario)
                .end((err,res) => {
                    if(err) done(err);
                    expect(res).to.have.status(400);
                     expect(res.body.message).to.
                         equals("Parece que você não tem uma conta Ticket com este e-mail.");
                    expect(res.body.success).to.be.false;
                    done(); 
                });
   
        });

    });

    context('quando eu autentico com senha inválida ', () => {
        
        it("então deve retornar 400", (done) =>{
            let usuario = {
                "email":"Glennie_Roob54@gmail.com",
                "password":"dev1001"
                }

               
                chai.request(`${config.URL_BASE}`) 
                .post("/usuarios/v3/autenticar")
                .send(usuario)
                .end((err,res) => {
                    if(err) done(err);
                    expect(res).to.have.status(400);
                    
                    expect(res.body.message).to.
                        equals("E-mail ou senha inválidos.");
                     expect(res.body.success).to.be.false;
                    done(); 
                });
   
        });
    });

});