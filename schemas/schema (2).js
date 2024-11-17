const exampleSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer" }
  },
  required: ["name", "age"]
};

module.exports = exampleSchema;
