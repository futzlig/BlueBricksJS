document.getElementById('connectButton').addEventListener('click', async () => {
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Versuche, eine Verbindung herzustellen...';
  try {
    const device = await navigator.bluetooth.requestDevice({
      //filters: [{ services: ['battery_service'] }]
      acceptAllDevices: true,
    });

    const server = await device.gatt.connect();
    statusDiv.textContent = 'Verbunden mit ' + device.name;
  } catch (error) {
    statusDiv.textContent = 'Fehler beim Verbinden: ' + error;
  }
});
