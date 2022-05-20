const Users = require("./models/Fetch")
const Regis = require("./models/register")
const Addstate = require("./models/addstate")
const { generateToken } = require("./utils/genToken")
const resolvers = {
    Query: {
        courts: async () => {
            const user = await Users.find();
            return user;
        },
    },
    Mutation: {
        addUsers: async (parent, args, ctx, info) => {
            const { id, name, state } = args
            const user = new Users({
                id: id,
                name: name,
                state: state
            })
            await user.save()
            return user;
        },
        editUsers: async (parent, args, ctx, info) => {
            const { id, name, state } = args
            const user = await Users.findOneAndUpdate({ id: id }, { name: name, state: state }, { new: true })
            return user;
        },
        delete: async (parent, args, ctx, info) => {
            const { id, name, state } = args
            const user = await Users.findOneAndRemove({ id: id })
            return user;
        },
        register: async (parent, args, ctx, info) => {
            const { email, password, name, surname, stu_id } = args
            const regis = new Regis({
                email: email,
                password: password,
                name: name,
                surname: surname,
                stu_id: stu_id,
                role: "user",
                token: generateToken()
            })
            await regis.save()
            return regis;
        },
        login: async (parent, args) => {
            const { email, password } = args
            const login = await Regis.findOne({ email: email, password: password });
            return login;
        },
        addstate: async (parent, args, ctx, info) => {
            const { id, detail, status, index } = args
            const add = await Users.findOneAndUpdate({ id: id }, { $push: { state: { detail, status, index } } }, { new: true })
            return add;
        },
        editstate: async (parent, args, ctx, info) => {
            const { id, index, detail, status } = args
            const edit = await Users.updateOne({ id: id, 'state.index': index }, {
                $set: {
                    "state.$.detail": detail,
                    "state.$.status": status,
                    "state.$.index": index
                }
            })
            return edit;
        }
    }
}

module.exports = resolvers