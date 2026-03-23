const args = process.argv.slice(2);
process.stdout.write(JSON.stringify(args));

if (args.length === 0) {
  process.stdout.write("pleas argv");
  process.exit(0);
}

const json = JSON.stringify(args);
console.log(json);
