
const inputData = document.querySelector('#qrText');

const generateQR = document.querySelector('#generateQR');

const imgBox = document.querySelector('#imgBox');
const qrImg = document.querySelector('#qrImg');


async function generateQRCode() {
    try {
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value}`);
        const qrCodeDataUrl = await response.url;
        qrImg.src = qrCodeDataUrl;
        imgBox.classList.add('active');
    } catch (error) {
        inputData.classList.add('error')
        setTimeout(() => {
            inputData.classList.remove('error')
        }, 1000);
        console.error('Error generating QR code:', error);
    }
}





function handleKeyDown(event) {
    if (event.key === "Enter") {
        generateQRCode();
    }
}

inputData.addEventListener('keydown', handleKeyDown);
generateQR.addEventListener('click', generateQRCode);

