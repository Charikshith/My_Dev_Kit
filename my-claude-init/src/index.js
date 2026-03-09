import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

const c = (color, text) => `${COLORS[color]}${text}${COLORS.reset}`;

function write(filePath, content, cwd) {
  const abs = path.join(cwd, filePath);
  const dir = path.dirname(abs);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const existed = fs.existsSync(abs);
  if (existed) {
    console.log(`  ${c('yellow', '~')} ${filePath} ${c('dim', '(skipped — already exists)')}`);
    return;
  }

  fs.writeFileSync(abs, content, 'utf8');
  console.log(`  ${c('green', '+')} ${filePath}`);
}

function getTemplates() {
  const filesDir = path.join(__dirname, '../files');

  // Read CLAUDE.md
  const CLAUDE_MD = fs.readFileSync(path.join(filesDir, 'CLAUDE.md'), 'utf8');

  // Read project.md and rules.md
  const PROJECT_MD = fs.readFileSync(path.join(filesDir, 'project.md'), 'utf8');
  const RULES_MD = fs.readFileSync(path.join(filesDir, 'rules.md'), 'utf8');

  // Read all command files with project: prefix
  const commands = {
    'project-spec.md': fs.readFileSync(path.join(filesDir, 'spec.md'), 'utf8'),
    'project-plan.md': fs.readFileSync(path.join(filesDir, 'plan.md'), 'utf8'),
    'project-tasks.md': fs.readFileSync(path.join(filesDir, 'tasks.md'), 'utf8'),
    'project-implement.md': fs.readFileSync(path.join(filesDir, 'implement.md'), 'utf8'),
    'project-test.md': fs.readFileSync(path.join(filesDir, 'test.md'), 'utf8'),
    'project-review.md': fs.readFileSync(path.join(filesDir, 'review.md'), 'utf8'),
    'project-refactor.md': fs.readFileSync(path.join(filesDir, 'refactor.md'), 'utf8'),
    'project-validate.md': fs.readFileSync(path.join(filesDir, 'validate.md'), 'utf8'),
    'project-feature.md': fs.readFileSync(path.join(filesDir, 'feature.md'), 'utf8'),
    'project-debug.md': fs.readFileSync(path.join(filesDir, 'debug.md'), 'utf8'),
  };

  return { CLAUDE_MD, PROJECT_MD, RULES_MD, commands };
}

export function run() {
  const cwd = process.cwd();
  const { CLAUDE_MD, PROJECT_MD, RULES_MD, commands } = getTemplates();

  console.log();
  console.log(c('bold', '  claude-init'));
  console.log(c('dim', `  Scaffolding into ${cwd}`));
  console.log();

  // Core files
  write('CLAUDE.md', CLAUDE_MD, cwd);
  write('docs/project.md', PROJECT_MD, cwd);
  write('docs/rules.md', RULES_MD, cwd);

  // Commands
  for (const [name, content] of Object.entries(commands)) {
    write(`.claude/commands/${name}`, content, cwd);
  }

  // Specs output dir
  const specsDir = path.join(cwd, '.ai/specs');
  if (!fs.existsSync(specsDir)) {
    fs.mkdirSync(specsDir, { recursive: true });
    fs.writeFileSync(path.join(specsDir, '.gitkeep'), '', 'utf8');
    console.log(`  ${c('green', '+')} .ai/specs/`);
  } else {
    console.log(`  ${c('yellow', '~')} .ai/specs/ ${c('dim', '(skipped — already exists)')}`);
  }

  console.log();
  console.log(c('green', '  ✓ Done.'));
  console.log();
  console.log(`  ${c('bold', 'Next steps:')}`);
  console.log(`  ${c('cyan', '1.')} Fill in ${c('bold', 'docs/project.md')} — stack, architecture, context`);
  console.log(`  ${c('cyan', '2.')} Fill in ${c('bold', 'docs/rules.md')}  — coding standards, constraints`);
  console.log(`  ${c('cyan', '3.')} Open Claude Code and run ${c('bold', '/project:spec <feature-name>')}`);
  console.log();
  console.log(`  ${c('dim', 'Commands available in Claude Code:')}`);
  console.log(`  ${c('dim', '  /project:spec      /project:plan      /project:tasks')}`);
  console.log(`  ${c('dim', '  /project:implement /project:test      /project:review')}`);
  console.log(`  ${c('dim', '  /project:refactor  /project:validate  /project:feature')}`);
  console.log(`  ${c('dim', '  /project:debug')}`);
  console.log();
}
