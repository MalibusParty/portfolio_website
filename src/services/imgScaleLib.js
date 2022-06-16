export function createBinaryImg(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const text = 'Portfolio';
    ctx.font = 'oblique 1000 100px sans-serif';
    ctx.fillText(text, 0, 75);
    let imgData = ctx.getImageData(0, 0, canvas.width, 100);
    let pixArr = new Array(imgData.data.length);
    
    let counter = 0;
    for(let i = 0; i < imgData.data.length; i += 4) {
        const num = imgData.data[i] + imgData.data[i+1] + imgData.data[i+2] + imgData.data[i+3];
        pixArr[counter++] = (num > 0) ? 1 : 0;
    }
    return pixArr;
}

export function scaleImgDown(pixelArray, newWidth, newHeight, width, height) {
    let outputArr = new Array(newWidth*newHeight);
    const scaleX = newWidth / width;
    const scaleY = newHeight / height;
    for(let x = 0; x < newWidth; x++) {
        for(let y = 0; y < newHeight; y++) {
            const xNearest = Math.round(x / scaleX);
            const yNearest = Math.round(y / scaleY);
            const pixel = getPixel(pixelArray, xNearest, yNearest, width);
            outputArr[x * newWidth + y] = pixel;
        }
        
    }
    return outputArr;
}

export function getPixel(pixelArray, x, y, width) {
    return pixelArray[y * width + x]
}