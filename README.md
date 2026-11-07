# ⚡ PowerMap Nepal

<p align="center">
  <strong>An Interactive Atlas of Nepal's Electricity Infrastructure</strong>
</p>

<p align="center">
  Explore Nepal's power grid through an interactive map of hydropower plants, transmission lines, substations, and energy infrastructure.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Status: In Development" />
  <img src="https://img.shields.io/badge/React-TypeScript-blue?style=for-the-badge&logo=react" alt="React and TypeScript" />
  <img src="https://img.shields.io/badge/Map-MapLibre-green?style=for-the-badge" alt="MapLibre" />
  <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" alt="MIT License" />
</p>

---

## 🌏 Overview

**PowerMap Nepal** is an open-source project focused on visualizing Nepal's electricity infrastructure in one interactive platform.

From hydropower stations in the Himalayas to transmission networks connecting different regions, PowerMap aims to make Nepal's electricity landscape easier to explore and understand.

The goal is to build a beautiful, data-driven electricity atlas with an interactive geographic experience.

## ✨ Features

- 🗺️ **Interactive Map** — Explore electricity infrastructure across Nepal.
- ⚡ **Hydropower Plants** — Discover hydropower projects and their details.
- 🔌 **Transmission Lines** — Visualize electricity transmission networks.
- 🏭 **Substations** — Explore substations and grid infrastructure.
- 📊 **Energy Statistics** — Present useful electricity generation and infrastructure statistics.
- 📍 **Detailed Information** — View locations and available information about infrastructure.
- 🌙 **Modern UI** — A clean, responsive dark-themed interface.

> Some features are planned and are not yet implemented. Data availability and verification will determine what can be displayed.

## 🖼️ Preview

<!-- Add a project screenshot here -->
<!-- Example: ![PowerMap Preview](./screenshots/preview.png) -->

*Project preview coming soon.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type safety |
| Vite | Development and build tooling |
| Tailwind CSS | Styling |
| MapLibre GL JS | Interactive maps |
| deck.gl | Advanced geospatial visualization (planned) |
| Lucide React | Icons |
| Recharts | Data visualization |
| Python / FastAPI | Backend (planned) |
| PostgreSQL / PostGIS | Geospatial database (planned) |

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/naaavv/PowerMap.git
```

### 2. Navigate to the project

```bash
cd PowerMap
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

## 📁 Project Structure

```text
PowerMap/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MapView.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*The structure will evolve as development progresses.*

## 🗺️ Data Sources

PowerMap aims to use reliable and verifiable geographic and electricity infrastructure data.

Potential sources include:

- [Nepal Electricity Authority (NEA)](https://www.nea.org.np/)
- [Department of Electricity Development (DoED)](https://doed.gov.np/)
- [OpenStreetMap](https://www.openstreetmap.org/)

Data will be checked for accuracy, attribution requirements, and availability before being presented.

## 🧭 Roadmap

- [x] Initialize React + TypeScript + Vite project
- [x] Set up Tailwind CSS
- [x] Create initial application layout
- [x] Build reusable header and footer
- [ ] Integrate MapLibre GL JS
- [ ] Display an interactive map of Nepal
- [ ] Add hydropower plant locations
- [ ] Visualize transmission lines
- [ ] Add substations
- [ ] Build infrastructure information panels
- [ ] Add energy statistics and charts
- [ ] Develop backend API
- [ ] Integrate a geospatial database
- [ ] Improve performance and mobile experience

## 🤝 Contributing

Contributions, suggestions, and ideas are welcome!

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add: your feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a Pull Request.

## 📄 License

This project is intended to be released under the MIT License. See the `LICENSE` file for details once it is added.

## 👨‍💻 Author

**NAV**

GitHub: [@naaavv](https://github.com/naaavv)

---

<p align="center">
  <strong>⚡