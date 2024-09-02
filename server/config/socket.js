// module.exports = async ({ strapi }) => {
//     const httpServer = strapi.server.httpServer;
  
//     // @ts-ignore
//     const io = require("socket.io")(httpServer, {
//       cors: {
//         origin: "*",
//         methods: ["GET", "POST"],
//       },
//     });
  
//     io.on("connection", (socket) => {
//       console.log("A user connected:", socket.id);
  
//       socket.on("message", (data) => {
//         console.log("Received message:", data);
//         socket.emit("chat-message", data);
//       });
  
//       socket.on("disconnect", () => {
//         console.log("User disconnected:", socket.id);
//       });
//     });
  
//     strapi.io = io; // Store io instance in Strapi for further use if needed
//   };
  