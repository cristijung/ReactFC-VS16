
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom', 
  
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',   
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',      
      isolatedModules: true,
    },
  },
};

export default createJestConfig(customJestConfig);