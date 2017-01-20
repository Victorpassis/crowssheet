let firebase = require('@modules/core/firebase')

class HomeService extends firebase{

	getPosts(postId) {
		var ref = this.database.ref("posts/"+postId);
		ref.once("value")
		.then(function(snapshot) {
			var key = snapshot.key; // "ada
			// var childKey = snapshot.child("title")
			console.log(key)
		})
	}

	store() {
		this.database.ref('users').set({
			username: 'Bruno',
			email: 'casottoalves'
		})
	}
}
module.exports = HomeService 