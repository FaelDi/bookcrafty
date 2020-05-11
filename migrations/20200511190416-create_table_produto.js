'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('produto', 
   {
    id_produto: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    descricao: {
      type: Sequelize.STRING(300),
      allowNull: false
    },
    preco: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    imagem: {
      type: Sequelize.STRING(500) ,
      allowNull: false
    },
    fk_produto_categoria: {
      type:Sequelize.INTEGER,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }, 
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    fk_produto_categoria: {
      type:Sequelize.INTEGER,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }, 
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    fk_produto_editora: {
      type:Sequelize.INTEGER,
      references: {
        model: 'editora',
        key: 'id_editora'
      }, 
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('produto');
  }
};
