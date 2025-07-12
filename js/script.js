// Generate QR code that links to certificate.html
document.addEventListener('DOMContentLoaded', function() {
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: 'certificate.html',
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
});