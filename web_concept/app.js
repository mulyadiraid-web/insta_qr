document.addEventListener('DOMContentLoaded', () => {
    const qrInput = document.getElementById('qr-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrResult = document.getElementById('qr-result');
    const qrcodeContainer = document.getElementById('qrcode');
    const displayText = document.getElementById('display-text');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');

    let qrcode = null;

    function generateQR() {
        const data = qrInput.value.trim();

        if (data === '') {
            alert('Please enter some text or a link');
            return;
        }

        // Clear previous QR
        qrcodeContainer.innerHTML = '';
        
        // Show result card with animation
        qrResult.classList.remove('hidden');
        qrResult.classList.add('fade-in-up');

        // Update text display
        displayText.textContent = data.length > 30 ? data.substring(0, 27) + '...' : data;

        // Generate new QR
        qrcode = new QRCode(qrcodeContainer, {
            text: data,
            width: 200,
            height: 200,
            colorDark: "#0F2027",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    generateBtn.addEventListener('click', generateQR);

    // Enter key support
    qrInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateQR();
        }
    });

    // Mock download functionality
    downloadBtn.addEventListener('click', () => {
        const img = qrcodeContainer.querySelector('img');
        if (img) {
            const link = document.createElement('a');
            link.download = 'qr-code.png';
            link.href = img.src;
            link.click();
        }
    });

    // Mock share functionality
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'QR Code',
                text: 'Generated with QR Generator Premium',
                url: qrInput.value
            }).catch(console.error);
        } else {
            alert('Sharing is not supported on this browser');
        }
    });
});
