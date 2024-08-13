exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table
      .enum("role", ["admin", "customer"], {
        useNative: true,
        enumName: "roles",
      })
      .notNullable()
      .default("customer");
    table.increments("id").primary();
    table.string("name");
    table.string("email").unique();
    table.string("password");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
