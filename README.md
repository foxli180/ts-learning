### Config ts dev environment

1. initialize environment
   ```bash
   yarn init -y
   ```
2. add tsconfig.json in root folder

   ```bash
   tsc init
   ```

   [tsconfig guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

3. config compiler options

4. integrate with build tools

   [gulp](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html#gulp)

5. install dependencies
   ```bash
   yarn init -y
   ```
6. configure eslint
7. configure prettier
8. configure husky
9. configure launch.json
   ```
   "configurations": [
    {
      "name": "调试 TS Node 程序 - args",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "node",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${relativeFile}"],
      "protocol": "inspector"
    }
   ]
   ```
   enable source map in tsconfig.json
   ```
   "sourceMap": true /* Generates corresponding '.map' file. */,
   ```
