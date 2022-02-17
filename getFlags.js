function getFlags(flag) {
  const index = process.argv.indexOf(flag);

  if (index === -1) {
    return `[${flag}: not exist]`;
  }

  const value = process.argv[index + 1];
  
  if (value === undefined || value.slice(0, 2) === '--') {
    return `[${flag}: is empty]`;
  }

  return value;
}

module.exports = getFlags;
