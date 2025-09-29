// babel.config.js
module.exports = {
  // O next/babel é crucial para o Next.js
  presets: [
    'next/babel', 
    '@babel/preset-react',        // Corrige o erro de "jsx"
    '@babel/preset-typescript'    // Garante que o Jest entenda o TS
  ],
};