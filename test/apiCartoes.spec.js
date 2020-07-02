// let chai = require("chai");
// let chaiHttp = require("chai-http");




// let expect = chai.expect;

// chai.use(chaiHttp);

// let cartaoId;
// let permissao;

// describe("API de Cartões", () =>{

 


//      it("Post - Adicionar Cartão Cultura", (done) =>{
 
//         let cartao = {
//             "number": "3085130001405817",
//             "nickname": "TKE 3085130001405817"


        
//         }

//             chai.request("https://api.ticket.com.br/app/mobile_qa/v1")
//                 .post("/usuarios/"+usuarioId+"/cartoes")
//                 //.set("Authorization", "Bearer " + token)
//                 .send(cartao)
//                 .end((err,res) => {
//                     jsonData = res;
//                     cartaoId = jsonData.body.value.id;
//                     expect(res).to.have.status(200);
//                     expect(res.body.value.number).to.equal('3085130001405817');
//                     expect(res.body.message).to.equal("Cartão adicionado com sucesso");
//                     console.log(cartaoId)
                 
//              done();
//                  });
//      });

//     it("Get - Consultar Extrato ", (done) =>{
//             chai.request("https://api.ticket.com.br/app/mobile_qa/v1")
//                 .get("/usuarios/"+usuarioId+"/cartoes/"+cartaoId+"/extrato")
//                 .set("Authorization", "Bearer " + token)
//                 .end((err,res) => {
//                    // console.log(res.body);
//                    jsonData = res
//                    permissao = jsonData.body.value.permissions;
//                    console.log(permissao);
//                     expect(res).to.have.status(200);
//                     expect(res.body.value.balance.produto).to.equal("Ticket Cultura");
//                     expect(res.body.value.permissions.addCard).to.be.an('boolean');
//                     expect(res.body.value.permissions.deleteCard).to.be.an('boolean');
//                     expect(res.body.value.permissions.rename).to.be.an('boolean');
//                     expect(res.body.value.permissions.reissue).to.be.an('boolean');
//                     expect(res.body.value.permissions.block).to.be.an('boolean');
//                     expect(res.body.value.permissions.unblock).to.be.an('boolean');
//                     expect(res.body.value.permissions.activate).to.be.an('boolean');
//                     expect(res.body.value.permissions.activateOnlineShopping).to.be.an('boolean');
//                     expect(res.body.value.permissions.deactivateOnlineShopping).to.be.an('boolean');
//                     expect(res.body.value.permissions.changePassword).to.be.an('boolean');
//                     expect(res.body.value.permissions.mobileRecharge).to.be.an('boolean');
//                     expect(res.body.value.permissions.lastTransactions).to.be.an('boolean');
//                     expect(res.body.value.permissions.averageDailyBalance).to.be.an('boolean');
//                     expect(res.body.value.permissions.nextCredits).to.be.an('boolean');
//                     expect(res.body.value.permissions.scheduleLunch).to.be.an('boolean');
//                     expect(res.body.value.permissions.shoppingList).to.be.an('boolean');
//                     expect(res.body.value.permissions.lastRecharge).to.be.an('boolean');
//                     expect(res.body.value.permissions.places).to.be.an('boolean');
//                     expect(res.body.value.permissions.availableServices).to.be.an('boolean');
//                     expect(res.body.value.permissions.examScheduling).to.be.an('boolean');
//             done();
//                 });
//     });
// });    