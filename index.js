const fs = require('fs');
const path = require('path');

// Put your wallpaper's folder in this folder
// Change the "Wallpapers" to your wallpaper's folder name
const wallpaperFolder = path.join(__dirname, 'Wallpapers');

fs.readdirSync(wallpaperFolder).forEach((file, i) => {
  const extensions = file.split('.')[1];
  fs.rename(
    path.join(wallpaperFolder, file),
    path.join(wallpaperFolder, `${i}.${extensions}`),
    (err) => {
      if (err) console.log(err);
    }
  );
});
