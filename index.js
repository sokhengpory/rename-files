const fs = require('fs');
const path = require('path');

const wallpaperFolder = path.join(__dirname, 'Wallpapers');

fs.readdirSync(wallpaperFolder).forEach((file, i) => {
  fs.rename(
    path.join(wallpaperFolder, file),
    path.join(wallpaperFolder, `${i}.jpg`),
    (err) => {
      if (err) console.log(err);
    }
  );
});
