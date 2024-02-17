// const puppeteer = require('puppeteer');
// const fs = require('fs');

// async function extractImgSrc(url) {
//   // Launch the browser
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the specified URL
//   await page.goto(url, { waitUntil: 'networkidle2' });

//   // Extract src attributes of img tags
//   const imgSrcs = await page.evaluate(() => {
//     const imgs = Array.from(document.querySelectorAll('img'));
//     return imgs.map(img => img.src);
//   });

//   // Close the browser
//   await browser.close();

//   // Write the srcs to links.txt
//   fs.writeFile('links.txt', imgSrcs.join('\n'), (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//     } else {
//       console.log('Image srcs have been written to links.txt');
//     }
//   });
// }

// extractImgSrc('');


