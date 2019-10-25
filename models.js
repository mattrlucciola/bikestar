import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    {   database: "bikingtrails_db",
        dialect: "postgres"
    }
)

// state model
export class State extends Model{}
State.init(
    {
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,

    },
    {
        freezeTableName: true,
        tableName: "States",
        sequelize
    }
)

// trail model
export class Trail extends Model {}
Trail.init(
    {
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
    },
    {
        freezeTableName: true,
        tableName: "States",
        sequelize
    }
)

Trail.init(
    {
        name: DataTypes.STRING,
        summary: DataTypes.STRING,
        imgSqSmall: DataTypes.STRING,
        imgSmall: DataTypes.STRING,
        imgSmallMed: DataTypes.STRING,
        imgMedium: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        url: DataTypes.STRING,
        difficulty: DataTypes.STRING,
        length: DataTypes.DOUBLE,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
        stateId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'States', // 'persons' refers to table name
                key: 'id', // 'id' refers to column name in persons table
            }
        }
    },
    {
        freezeTableName: true,
        tableName: "Trails",
        sequelize
    },
)


// user model
export class User extends Model{}
User.init(
    {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        alias: DataTypes.STRING
    },
    {
        freezeTableName: true,
        tableName: "users",
        sequelize
    }
)

State.hasMany(Trail, {onDelete: 'CASCADE'});
Trail.belongsTo(State)
