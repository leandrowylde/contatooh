module.exports = {
	env: 'test',
	db: 'mongodb://localhost/contatooh_test',
	sauceTestName: 'Contatooh E2E Testing',
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_KEY,
	travisJobNumber: process.envTRAVIS_JOB_NUMBER,
	travisBuild: process.env.TRAVIS_BUILD_NUMBER,
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPasswor: process.env.SELENIUM_USER_PASSWORD
};