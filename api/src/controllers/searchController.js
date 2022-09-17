const { Question, Answer, Category } = require('../db.js');
const { Op } = require('sequelize')

const searchQuestion = async (req, res) => {
    const { string } = req.query;
    try {
        if (string) {
            // console.log('Respuesta query con title: ', title);
            //ver https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
            // ver https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#examples-with-opand-and-opor
            let resultQuestion = await Question.findAll({
                where: {
                    [Op.or]: [
                        {
                            title: {
                                [Op.iLike]: `%${string}%`,
                            }
                        },
                        {
                            description: {
                                [Op.iLike]: `%${string}%`,
                            }
                        }
                    ]
                },
                include: [
                    { model: Category },
                    { model: Answer }
                ]
            }
            );
            if (!resultQuestion.length) {
                return res
                    .status(404)
                    .json({ error: "No se encuentran preguntas para la busqueda", data: [] })
            }
            return res.status(200).json({ error: null, data: resultQuestion })
        }
        return res.status(200).json({ error: null, data: "No ha ingresado texto de busqueda" })
    } catch (error) {
        // console.log('El error es: ', error)
        return res.status(500).json({ error: "falla el searchQuestion ", data: null })
    }
}


// WORK IN PROGRESS ... --- SOON SEARCH ON ANSWERS --------

// const searchAnswer = async (req, res) => {
//     const { string } = req.query;

//     try {
//         if (string) {
//             let result = await Answer.findAll({
//                 where: {
//                     [Op.or]: [
//                         {
//                             title: {
//                                 [Op.iLike]: `%${string}%`,
//                             }
//                         },
//                         {
//                             description: {
//                                 [Op.iLike]: `%${string}%`,
//                             }
//                         }
//                     ]
//                 },
//                 include: {
//                     model: Answer
//                 }
//             }
//             );
//             if (!result.length) {
//                 return res
//                     .status(200)
//                     .send("No se encuentran preguntas para la busqueda")
//             }
//             return res.status(200).json({ error: null, data: result })
//         }
//         return res.status(200).json({ error: null, data: "No ha ingresado texto de busqueda" })
//     } catch (error) {
//         // console.log('El error es: ', error)
//         return res.status(500).json({ error: "falla el searchQuestion ", data: null })
//     }
// }

module.exports = { searchQuestion }