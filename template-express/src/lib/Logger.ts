import Pino from 'pino';

const loggers: { [name: string]: Pino.Logger } = {};

export default {
    of(name = 'default', options?: Pino.LoggerOptions) {
        if (!loggers[name]) {
            loggers[name] = Pino({
                level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
                ...options
            })
        }
        return loggers[name];
    }
}