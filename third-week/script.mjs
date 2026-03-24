const args = process.argv.slice(2);
process.stdout.write(JSON.stringify(args) + "\n");

const obj = {
  key: "value",
};

if (args.length === 0) {
  process.stdout.write("pleas argv\n");

  console.log(`default ${obj.key}`)
  process.exit(0);
}

const json = JSON.stringify(args);
console.log(json);
