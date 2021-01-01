module.exports = {
	name: "Kids Sites", // optional, falls back to object key
	description: "Each of my kids sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 12, // 12 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://zadieheimlich.com/",
		"https://zadieheimlich.com/archives/",
		"https://veraheimlich.com/",
		"https://veraheimlich.com/archives/",
		"https://cadenheimlich.com/",
		"https://cadenheimlich.com/archives/",
	]
};
