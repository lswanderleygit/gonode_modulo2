module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    data: DataTypes.DATE
  })

  // pertence a um usuário = user_id e é prestado por outro usuário = provider_id
  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' })
  }

  return Appointment
}
