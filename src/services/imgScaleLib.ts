function createBinaryImg(canvasId: any) {
    const canvas: any = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const text = 'Portfolio';
    ctx.font = 'oblique 1000 100px sans-serif';
    ctx.fillText(text, 0, 75);
    const imgData = ctx.getImageData(0, 0, canvas.width, 100);
    const pixArr = new Array(imgData.data.length);
    
    let counter = 0;
    for(let i = 0; i < imgData.data.length; i += 4) {
        const num = imgData.data[i] + imgData.data[i+1] + imgData.data[i+2] + imgData.data[i+3];
        pixArr[counter++] = (num > 0) ? 1 : 0;
    }
    return pixArr;
}

function scaleImgDown(pixelArray: any, newWidth: any, newHeight: any, width: any, height: any) {
    newWidth = newWidth | 0;
    newHeight = newHeight | 0;
    const outputArr = new Array(newWidth*newHeight);
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

function getPixel(pixelArray: any, x: any, y: any, width: any) {
    return pixelArray[y * width + x]
}

function readImgFile(imgId: any, newWidth: any, newHeight: any) {
    const canvas = document.createElement("canvas");
    //const canvas = document.getElementById(imgId);
    const ctx: any = canvas.getContext('2d');
    const img = new Image();
    img.onload = function () {
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixArr = new Array(imgData.data.length / 4);
        const data = imgData.data;

        let counter = 0;
        for(let i = 0; i < data.length; i+4) {
            pixArr[counter++] = (data[i] * 0.299 + data[i+1] * 0.587 + data[i+2] * 0.114) * data[i+3];
        }

        return scaleImgDown(pixArr, newWidth, newHeight, canvas.width, canvas.height);
    };
    const element: any = document.getElementById(imgId);
    img.src = element.src;
}

export function imgScaleLib() {
    return {
        readImgFile,
        getPixel,
        scaleImgDown,
        createBinaryImg
    }
}