import { Command } from 'commander';
import { ConsoleInterceptor } from '../core/interceptor.js';
import { spawn } from 'child_process';

export function createCLI(): Command {
  const program = new Command();

  program
    .name('logvision')
    .description('Beautiful, structured, and developer-friendly logs')
    .version('0.1.0');

  program
    .command('watch <script>')
    .description('Run a script with beautiful logging')
    .option('-m, --mode <mode>', 'Output mode (pretty, minimal, json)', 'pretty')
    .option('--no-colors', 'Disable colors')
    .action(async (script, options) => {
      try {
        console.log(`📝 LogVision: Watching ${script} with ${options.mode} mode`);
        
        const interceptor = new ConsoleInterceptor({
          outputMode: options.mode,
          enableColors: options.colors,
          dateFormat: 'YYYY-MM-DD HH:mm:ss'
        });

        interceptor.intercept();

        const [command, ...args] = script.split(' ');
        
        const child = spawn(command, args, {
          stdio: 'inherit',
          shell: true
        });

        child.on('exit', (code) => {
          interceptor.restore();
          process.exit(code || 0);
        });

        child.on('error', (error) => {
          console.error(`❌ LogVision: Failed to start process: ${error.message}`);
          interceptor.restore();
          process.exit(1);
        });

      } catch (error) {
        console.error(`❌ LogVision: Error: ${error}`);
        process.exit(1);
      }
    });

  program
    .command('run <command>')
    .description('Run a command with beautiful logging')
    .option('-m, --mode <mode>', 'Output mode (pretty, minimal, json)', 'pretty')
    .option('--no-colors', 'Disable colors')
    .action(async (command, options) => {
      try {
        console.log(`📝 LogVision: Running ${command} with ${options.mode} mode`);
        
        const interceptor = new ConsoleInterceptor({
          outputMode: options.mode,
          enableColors: options.colors,
          dateFormat: 'YYYY-MM-DD HH:mm:ss'
        });

        interceptor.intercept();

        const [cmd, ...args] = command.split(' ');
        
        const child = spawn(cmd, args, {
          stdio: 'inherit',
          shell: true
        });

        child.on('exit', (code) => {
          interceptor.restore();
          process.exit(code || 0);
        });

        child.on('error', (error) => {
          console.error(`❌ LogVision: Failed to execute command: ${error.message}`);
          interceptor.restore();
          process.exit(1);
        });

      } catch (error) {
        console.error(`❌ LogVision: Error: ${error}`);
        process.exit(1);
      }
    });

  return program;
}