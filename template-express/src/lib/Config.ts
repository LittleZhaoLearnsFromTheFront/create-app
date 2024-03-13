import YAML from 'yaml';
import fs from 'fs';

const CONFIG_FILE = process.env.NODE_ENV === 'production' ? process.cwd() + '/config.yaml' : './config.yaml';

const config = YAML.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));

export default { ...config } as {
    server: { name: string; port: number }
};

export const PREFIX = 'LABMAI'
