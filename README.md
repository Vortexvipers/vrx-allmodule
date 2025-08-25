---

📄 README.md

# vrx-allmodule

Module Yang Menyediakan Beberapa Module Yang Di Perlukan Sekaligus Tanpa Menginstal Yang Lain Nya.

## 📦 Install

```bash
npm install vrx-allmodule

🚀 Usage

CommonJS

const { fetch, axios } = require("vrx-allmodule");

(async () => {
  // fetch
  const res = await fetch("https://api.github.com");
  console.log(await res.json());

  // axios
  const r = await axios.get("https://api.github.com");
  console.log(r.data);

})();

---

## 🚀 Cara Publish ke npmjs

1. Login npm:
   ```bash
   npm login

2. Publish package:

npm publish --access public


3. Install & pakai:

npm install vrx-allmodule




---
