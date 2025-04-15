import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const expect = chai.expect;
chai.use(chaiHttp);

describe("Test básico del servidor", () => {
  it("Debe responder en la ruta raíz", async () => {
    const res = await chai.request(app).get("/");
    expect(res).to.have.status(200);
  });
});
