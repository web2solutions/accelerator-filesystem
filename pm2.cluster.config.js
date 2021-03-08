const pkg = require('./package.json'),
    env = process.env.NODE_ENV || "development";

module.exports = {
  "apps": [
    {
      "name": pkg.name,
      "script": "./dist/index.js",
      "instances": 'max',
      "exec_mode": "cluster",
      "instance_var": 'INSTANCE_ID',
      "exp_backoff_restart_delay": 100,
      "max_memory_restart": '100M',
      "increment_var" : 'PORT',
      "watch": false,
      "env": {
        "NODE_ENV": env,
        "HOST": "0.0.0.0",
        "PORT": 4000,
      }
    }
  ]
}
