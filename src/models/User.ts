import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

//passando os dados do banco para a linguagem
export interface UserInstance extends Model {
    id: number,
    name: string,
    age:number
}
//ensinando o sequelize sobre as infos do nosso banco
export const User = sequelize.define<UserInstance>("User,",{

    id:{
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    name: {
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
},{
    tableName: 'users',
    timestamps: false
})


