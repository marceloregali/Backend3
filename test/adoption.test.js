// tests/adoption.test.js
import request from "supertest";
import app from "../app"; // Asegúrate de importar tu instancia de Express

describe("Testing Adoption Router", () => {
  it("GET /api/adoptions should return all adoptions", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("POST /api/adoptions should create a new adoption", async () => {
    const newAdoption = { petId: "12345", userId: "67890" };
    const res = await request(app).post("/api/adoptions").send(newAdoption);
    expect(res.status).toBe(201);
    expect(res.body.petId).toBe(newAdoption.petId);
  });
});
