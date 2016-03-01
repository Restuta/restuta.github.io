import task from './lib/task';

export default task(async function buildProd() {
  process.argv.push('release');
  await require('./build')();
});
