exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function(){
		browser.driver.get('http://localhost:3000');
		browser.debugger();
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys('leandro.job@live.com');
		browser.driver.findElement(by.id('password')).sendKeys('GIT@leandro2013');
		browser.driver.findElement(by.name('commit')).click();
	}

};