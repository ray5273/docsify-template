const { exec } = require('child_process');

const port = 9876; // 원하는 포트 번호로 수정
exec(`docsify serve . -p ${port}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
