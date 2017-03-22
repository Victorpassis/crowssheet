let routes = require("@modules/home/routes")
	.concat(require("@modules/authentication/routes"))
	.concat(require("@modules/admin/dashboard/routes"))
	.concat(require("@modules/static/routes"))
	.concat(require("@modules/course/routes"))
	.concat(require("@modules/course/class/routes"))
	.concat(require("@modules/user/routes"))
	.concat(require("@modules/team/routes"))
	.concat(require("@modules/achievement/routes"))
module.exports = routes