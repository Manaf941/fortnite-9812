const fortnite = require("./index.js")
/*
client.brStats("Ñoт Tfuе", "ps4")
.then(stats => console.log(stats))
.catch(err => console.error(err))

*/
fortnite.text({text:"this is a test for the fortnite.text method", color: "FFFFFF"})
.then(url => console.log(url))
.catch(err => console.error(err))