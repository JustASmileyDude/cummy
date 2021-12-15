module.exports = {
    name: "test",
    description: "a description",
    permissions: ["SEND_MESSAGES"],

    run: async (client, message, args) => {
        message.channel.send("fuck off.")
    }}
