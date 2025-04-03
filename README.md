# Bluetooth Connection Project

This project allows you to connect to Bluetooth devices using the Web Bluetooth API. It provides a simple user interface to search for and connect to available Bluetooth devices.

## Project Structure

```
bluetooth-connection-project
├── src
│   ├── index.html       # Main HTML page of the project
│   ├── app.js           # JavaScript logic for Bluetooth connection
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd bluetooth-connection-project
   ```

3. Install dependencies (if any):
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in a web browser that supports the Web Bluetooth API (e.g., Chrome).
2. Click on the button to search for Bluetooth devices.
3. Select a device from the list to connect.
4. Follow the prompts to complete the connection.

## Functions

- `requestDevice()`: Initiates a request to select a Bluetooth device.
- `connectToDevice(device)`: Connects to the selected Bluetooth device.
- `disconnectDevice()`: Disconnects from the currently connected Bluetooth device.

## License

This project is licensed under the MIT License.