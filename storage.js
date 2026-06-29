// storage.js acts as a helper module
// It handles saving and loading data from the browser’s local storage
// We are saveing data in the browser, so players can continue where they left off.
// localSctorage is a browser feature tht saves data

export function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocal(key, defaultValue = null) {
  const raw = localStorage.getItem(key);
  if (!raw) return defaultValue;
  try { return JSON.parse(raw); }
  catch { return defaultValue; }
}