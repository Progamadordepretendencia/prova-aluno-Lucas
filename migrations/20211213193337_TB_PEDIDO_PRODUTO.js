exports.up = function(knex) {
    return knex.schema.createTable('TB_PEDIDO_PRODUTO', function (table) {
        table.integer('id');
        table.integer('pedido_id').unsigned();
        table.integer('produto_id').unsigned();
        table.integer('quantidade');
        table.string('valor_item',255);
        table.foreign('pedido_id').references('TB_PEDIDO.id');
        table.foreign('produto_id').references('TB_PRODUTO.id');
      });
  };
  exports.down = function(knex) {
    return knex.schema
      .dropTable('TB_PEDIDO_PRODUTO');
  };