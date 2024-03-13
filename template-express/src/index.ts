import express from "express"
import Config from "./lib/Config.ts"
import Logger from "./lib/Logger.ts";
const logger = Logger.of('express');
const app = express()

app.listen(Config.server.port, () => {
    logger?.info("-------------------------4000端口已启用-------------------------")
})
