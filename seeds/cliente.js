exports.seed = function(knex) {
  return knex('TB_CLIENTE').del()
  .then(function () {
      return knex('TB_CLIENTE').insert([
        {id: 1, nome: 'Jose'},
        {id: 2, nome: 'Maria'},
        {id: 3, nome: 'Joao'},
        {id: 4, nome: 'Ana'}
      ]);
    });
};
