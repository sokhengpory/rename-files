const fs = require('fs');
const path = require('path');

// Put your wallpaper's folder in this folder
// Change the "Wallpapers" to your wallpaper's folder name
const renameFolder = path.join(__dirname, 'rename-folder');

fs.readdirSync(renameFolder).forEach((file, i) => {
  const extensions = file.split('.')[1];
  fs.rename(
    path.join(renameFolder, file),
    path.join(renameFolder, `${i}.${extensions}`),
    (err) => {
      if (err) console.log(err);
    }
  );
});
