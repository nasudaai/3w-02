const args = process.argv.slice(2);
process.stdout.write(JSON.stringify(args) + "\n");

const obj = {
  key: "value",
};

if (args.length === 0) {
  process.stdout.write("pleas argv\n");

  const keyName = Object.keys(obj);
  const keys = Object.keys(obj);
  console.log(keys);

  console.log(`default ${keyName}:  ${obj[keyName]}`);
  process.exit(0);
}

const json = JSON.stringify(args);
const outObj = JSON.stringify(obj);
console.log(json);
console.log(outObj);
