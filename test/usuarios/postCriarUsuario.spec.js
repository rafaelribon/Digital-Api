let chai = require("chai");
let chaiHttp = require("chai-http");
let faker = require("faker");
let config = require("../../config/urlBase");




let expect = chai.expect;
let randonEmail =  faker.internet.email();;



chai.use(chaiHttp);

describe("Post", () =>{

    context('quando eu cadastro um novo usuario', () => {

        it("então deve retornar 200", (done) =>{
            let usuario = {
                    "name":"Martin Seamus McFly",
                    "cellphone":"(32)9147-4938",
                    "email":randonEmail,
                    "password":"dev100",
                    "nascimento":"12/06/1968",
                    "cpf":"54688909179"
            
            }       
                    chai.request(`${config.URL_BASE}`) 
                    .post("/usuarios/v3.1")
                    .send(usuario)
                    .end((err,res) => {
                        if(err) done(err);
                        //jsonData = res;
                        //email = jsonData.body.value.email;
                        expect(res).to.have.status(200);
                        expect(res.body.value.email).to.eqls(randonEmail);
                        expect(res.body.value.aceitoMarketing).to.
                            be.an('boolean');
                        expect(res.body.value.aceitoMarketing).to.eqls(true);
                        expect(res.body.success).to.be.an('boolean');
                        expect(res.body.success).to.be.true;
                        expect(res.body.message).to.eqls("");
                        done(); 
                    });
        });

    });


    context('quando não informo email', () => {

        it("então deve retornar 400", (done) =>{
            let usuario = {
                    "name":"Martin Seamus McFly",
                    "cellphone":"(32)9147-4938",
                    "email":"",
                    "password":"dev100",
                    "nascimento":"12/06/1968",
                    "cpf":"54688909179"
            
            }       
                    chai.request(`${config.URL_BASE}`) 
                    .post("/usuarios/v3.1")
                    .send(usuario)
                    .end((err,res) => {
                        if(err) done(err);
                        expect(res).to.have.status(400);
                        expect(res.body.success).to.be.an('boolean');
                        expect(res.body.success).to.be.false;
                        expect(res.body.message).to.eqls("Email não informado");
                        done(); 
                    });
        });

    });


    context('quando não informo email', () => {

        it("então deve retornar 400", (done) =>{
            let usuario = {
                    "name":"Martin Seamus McFly",
                    "cellphone":"(32)9147-4938",
                    "email":randonEmail,
                    "password":"",
                    "nascimento":"12/06/1968",
                    "cpf":"54688909179"
            
            }       
                    chai.request(`${config.URL_BASE}`) 
                    .post("/usuarios/v3.1")
                    .send(usuario)
                    .end((err,res) => {
                        if(err) done(err);
                        expect(res).to.have.status(400);
                        expect(res.body.success).to.be.an('boolean');
                        expect(res.body.success).to.be.false;
                        expect(res.body.message).to.eqls("Senha não informada");
                        done(); 
                    });
        });

    });
   
});
