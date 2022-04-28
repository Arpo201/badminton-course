import { composeWithMongoose } from 'graphql-compose-mongoose'
import { model, Schema } from 'mongoose'

// let bookInfo = {
//     student1: {
//         studentId: {
//             type: String,
//             default: '',
//         },
//         name: {
//             type: String,
//             default: '',
//         }
//     },
//     student2: {
//         studentId: {
//             type: String,
//             default: '',
//         },
//         name: {
//             type: String,
//             default: '',
//         }
//     },
//     student3: {
//         studentId: {
//             type: String,
//             default: '',
//         },
//         name: {
//             type: String,
//             default: '',
//         }
//     },
//     student4: {
//         studentId: {
//             type: String,
//             default: '',
//         },
//         name: {
//             type: String,
//             default: '',
//         }
//     },
//     bookById: {
//         type: String,
//         default: '',
//     }
// }

// let timeSchedule = {
//     time1600: {
//         ...bookInfo
//     },
//     time1700: {
//         ...bookInfo
//     },
//     time1800: {
//         ...bookInfo
//     },
//     time1900: {
//         ...bookInfo
//     },
//     time2000: {
//         ...bookInfo
//     },
// }

const PostSchema = new Schema({
    courtNum: {
        type: String,
        required: true,
    },
    // bookInfo: timeSchedule
})
export const PostModel = model('Court', PostSchema)

export const CourtTC = composeWithMongoose(PostModel)
