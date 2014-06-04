CloudFlare.define('reset_the_net',[
	'reset_the_net/config',
	'cloudflare/dom'
],
function(
	config,
	dom
){

	config.callOnly = (config.callOnly === 'true');

	// Doesn't come with any configuration variables
	// window.rtn_config = config;

	// use dom.createElement to get around CFJS cache
        var s = dom.createElement('script');
        dom.setAttribute(s, 'src', '//fightforthefuture.github.io/reset-the-net-widget/widget/rtn.js');
        document.getElementsByTagName('body')[0].insertBefore(s, null);
});
