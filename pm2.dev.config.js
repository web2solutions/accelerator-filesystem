const pkg = require('./package.json'),
    env = process.env.NODE_ENV || "development";

module.exports = {
  "apps": [
    {
      "name": pkg.name + "-dev",
      "script": "./src/index.js",
      "watch": ["./src/*.{js}"],
      "cwd": __dirname,
      "exec_interpreter": "babel-node",
      "exp_backoff_restart_delay": 100,
      "max_memory_restart": '100M',
      "env": {
        "PORT": 4000,
        "HOST": "0.0.0.0",
        "NODE_ENV": env
      },
      "args": [
        "--color"
      ]
    }
  ]
}
