#!/usr/bin/env node
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';import {buildServer,VERSION} from './server.js';import {runCli,exitCodeFor} from './cli.js';import {runDoctor} from './doctor.js';import {basename} from 'node:path';
const HELP=`Bannerbear focused MCP and CLI ${VERSION}
bannerbear-mcp                         Local stdio MCP
bannerbear-cli <command> --help        Arguments from shared schemas
bannerbear-cli schema <command>        Complete current JSON input schema
bannerbear-cli doctor [--network]      Local checks / provider account verification
bannerbear-cli login                   Private API-key instructions only
BANNERBEAR_API_KEY                   Private Bearer token
BANNERBEAR_TOKEN_FILE                  Regular owner-only token-only file
BANNERBEAR_ACCOUNTS / _DEFAULT_ACCOUNT  Named profiles without inherited global tokens
BANNERBEAR_READ_ONLY=1                  Hide and refuse all mutations
BANNERBEAR_ALLOW_DESTRUCTIVE=0          Refuse mutations even when confirmed
BANNERBEAR_REQUEST_TIMEOUT_MS=30000     No automatic retries
BANNERBEAR_MIN_REQUEST_INTERVAL_MS=200  Per-profile process pacing
`;
async function main():Promise<void>{const args=process.argv.slice(2);const command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Create a V5 API key in the intended Bannerbear workspace at https://app.bannerbear.com/v5/api_keys. Restrict resource/action scopes for the task. Store it privately in BANNERBEAR_API_KEY or BANNERBEAR_TOKEN_FILE. V2 keys do not authenticate V5. Named profiles never borrow global credentials. login prints instructions; no browser flow, credential saving or OAuth refresh.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('bannerbear-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
