class SessionManager {
	static init(){
		this.listen();
		game.settings.register('session-manager', 'active-session', {
			name: "Duration (in MS)",
			hint: "How fast or slow to transition to focus point. (1000ms = 1 second)",
			scope: "world",
			config: true,
			type: String,
			default: "global",
			choices: {
				"global": "global"
			}
	    });
	}
}

Hooks.on('init',()=>{
	
})
Hooks.on('ready',()=>{
	PullFocus.init();
})


