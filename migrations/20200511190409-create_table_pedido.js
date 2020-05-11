'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('pedido', 
   {
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      status: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      fk_usuario: {
        type:Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.dropTable('pedido');
  }
};
