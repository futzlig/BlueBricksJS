const app = document.getElementById('app');

async function requestDevice() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['battery_service'] }]
        });
        console.log('Device selected:', device);
        await connectToDevice(device);
    } catch (error) {
        console.error('Error requesting device:', error);
    }
}

async function connectToDevice(device) {
    try {
        const server = await device.gatt.connect();
        console.log('Connected to GATT Server:', server);
        // You can now interact with the device's services and characteristics
    } catch (error) {
        console.error('Error connecting to device:', error);
    }
}

async function disconnectDevice(device) {
    if (device.gatt.connected) {
        await device.gatt.disconnect();
        console.log('Disconnected from device');
    } else {
        console.log('Device is not connected');
    }
}

app.innerHTML = `
    <h1>Bluetooth Connection Project</h1>
    <button id="connectButton">Connect to Bluetooth Device</button>
    <button id="disconnectButton">Disconnect from Bluetooth Device</button>
`;

document.getElementById('connectButton').addEventListener('click', requestDevice);
document.getElementById('disconnectButton').addEventListener('click', () => {
    const device = navigator.bluetooth.getDevices().then(devices => devices[0]);
    disconnectDevice(device);
});