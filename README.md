# Weather App (React + Vite)

Small React weather app built with Vite. It fetches current weather using OpenWeather APIs, shows basic details (temperature, humidity, wind, visibility, sunrise/sunset), and displays a background animation/video matching the weather.

This README describes how to run the project locally, where to place your OpenWeather API key, and a couple of troubleshooting tips.

## Quick start

1. Install dependencies

	```powershell
	npm install
	```

2. Create a `.env` file in the project root to store your API key (recommended):

	```text
	VITE_OPENWEATHER_API_KEY=your_api_key_here
	```

	Note: Vite exposes environment variables prefixed with `VITE_` to your client code via `import.meta.env.VITE_OPENWEATHER_API_KEY`.

3. Start the dev server

	```powershell
	npm run dev
	```

4. Open the local URL shown by Vite (usually `http://localhost:5173`).

## PowerShell on Windows

If `npm run dev` fails with a PowerShell script execution policy error (message mentioning `npm.ps1 cannot be loaded`), run PowerShell as Administrator and set the execution policy:

```powershell
Set-ExecutionPolicy RemoteSigned
# then close and re-open PowerShell and run `npm run dev` again
```

If you prefer not to change the system policy, you can run the dev server from Git Bash, WSL, or use Node directly.

## Using an environment variable (optional)

If you add `VITE_OPENWEATHER_API_KEY` in `.env`, update `src/App.jsx` to use it instead of the hardcoded key. Example:

```js
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'fallback_key';
```

This is safer for source control than hardcoding the key.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
