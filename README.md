# LuckyCoin Wallet

The only wallet you need to store, send, and receive LuckyCoin!!

---

## Downloading Prebuilt Releases

For an easy setup, check the [Releases](https://github.com/LuckyCoinProj/luckycoinwallet/releases) section on GitHub. Prebuilt ZIP files are available for both Chrome and Firefox, so you can get started without building the project. Here’s how:

1. **Download** the latest release ZIP file for **Chrome** or **Firefox** from the Releases section.
2. **Extract** the ZIP file to a convenient location on your device.
3. **Follow the steps below** for installation based on your browser:

   ### Chrome
   - Go to `chrome://extensions` in your Chrome browser.
   - Enable **Developer mode** in the top right corner.
   - Select **Load unpacked** and choose the folder you extracted from the ZIP file.

   ### Firefox
   - Go to `about:debugging#/runtime/this-firefox` in your Firefox browser.
   - Click on **Load Temporary Add-on…** and select the folder you extracted from the ZIP file.

With this prebuilt version, your LuckyCoin Wallet will be up and running in seconds.

---

## Getting Started for Developers

If you'd like to build LuckyCoin Wallet from source, follow these steps:

### Installation

#### Step 1: [Install Yarn (if not already installed)](https://yarnpkg.com/getting-started/install)

#### Step 2: Install Dependencies

```bash
yarn install
```

---

### Building the Browser Extension

#### Chrome

1. Build the extension for Chrome:
   ```bash
   yarn chrome
   ```
2. In Chrome, navigate to `chrome://extensions`.
3. Enable **Developer mode** in the top right corner.
4. Select **Load unpacked** and choose the `dist/chrome` folder from the project directory.

#### Firefox

1. Build the extension for Firefox:
   ```bash
   yarn firefox
   ```
2. Go to `about:debugging#/runtime/this-firefox` in Firefox.
3. Click on **Load Temporary Add-on** and select the `dist/firefox` folder from the project directory.

---

Special thanks to [NintondoWallet](https://github.com/nintondo/extension) ❤️
