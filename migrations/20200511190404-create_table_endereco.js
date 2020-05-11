'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('endereco', 
   {
      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      endereço: {
        type: Sequelize.STRING(199),
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      complemento: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(8) ,
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      fk_usuario: {
        type:Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id_usuario'
        },
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('endereco');
  }
};
