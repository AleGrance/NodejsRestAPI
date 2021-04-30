module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define('Tasks', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            done: {
                type: DataType.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }
    });

    Tasks.asociate = (models) => {
        Tasks.belongsTo(models.User)
    };

    return Tasks;

};