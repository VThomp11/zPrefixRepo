/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // // Deletes ALL existing entries
  await knex('store_table').del()
  await knex('store_table').insert([
    { id: 1, name: 'Ruby Necklace', type: 'Necklace', price: '$1200', username: 'Admin' },
    { id: 2, name: 'Emerald Necklace', type: 'Necklace', price: '$1800', username: 'Admin' },
    { id: 3, name: 'Pearl Necklace', type: 'Necklace' , price: '$1100', username: 'Admin'},
    { id: 4, name: 'Ruby Earrings', type: 'Earrings' , price: '$1050', username: 'Admin'},
    { id: 5, name: 'Emerald Earrings', type: 'Earrings' , price: '$1230', username: 'Admin'},
    { id: 6, name: 'Pearl Earrings', type: 'Earrings', price: '$12770', username: 'Admin' }
  ]);
};
