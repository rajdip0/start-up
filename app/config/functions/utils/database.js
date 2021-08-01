"use strict"

const getUsersByUsernameAndRoom = async (username, room) => await strapi.services.users.find({ username, room })

const findUserById = async (userId) => await strapi.services.users.findOne({ id: userId })

async function findUser(username, room) {
    try {
        const userExists = await strapi.services.users.find({ username, room });
        return userExists;
    } catch (err) {
        console.log("error while fetching", err);
    }
}
async function createUser({ username, room, status, socketId }) {
    try {
        const user = await strapi.services.users.create({
            username,
            room,
            status: status,
            socketId
        });
        return user;
    } catch (err) {
        console.log("User couldn't be created. Try again!")
    }
}

const deleteUserBySocketId = async (socketId) => await strapi.services.users.delete({ socketId })

const getUsersInRoom = async (room) => await strapi.services.users.find({ room })

async function userExists(id) {
    try {
        const user = strapi.services.users.findOne({ id: id });
        return user;
    } catch (err) {
        console.log("Error occured when fetching user", err);
    }
}
module.exports = {
    getUsersByUsernameAndRoom, createUser, findUserById, getUsersInRoom, deleteUserBySocketId, findUser, userExists
}