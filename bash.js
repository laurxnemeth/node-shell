process.stdout.write('prompt >');

process.stdin.on('process',(process) => {
    //const cmd = data.toString().trim();
      const cwd = process.cwd()
    process.stdout.write('You typed: ' + cwd)
    process.stdout.write('\nprompt > ');
});

