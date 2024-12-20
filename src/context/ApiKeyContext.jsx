import { createContext, useContext, useState } from 'react';

const ApiKeyContext = createContext(null);

export function ApiKeyProvider({ children }) {
  const [apiKey, setApiKey] = useState(() => {
    const savedKey = localStorage.getItem('openai_api_key');
    return savedKey || '';
  });

  const updateApiKey = (newKey) => {
    setApiKey(newKey);
    if (newKey) {
      localStorage.setItem('openai_api_key', newKey);
    } else {
      localStorage.removeItem('openai_api_key');
    }
  };

  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('openai_api_key');
  };

  const validateApiKey = (key) => {
    return key && key.startsWith('sk-') && key.length > 20;
  };

  return (
    <ApiKeyContext.Provider value={{ 
      apiKey, 
      updateApiKey, 
      clearApiKey,
      validateApiKey,
      isKeyValid: validateApiKey(apiKey)
    }}>
      {children}
    </ApiKeyContext.Provider>
  );
}

export const useApiKey = () => {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error('useApiKey must be used within an ApiKeyProvider');
  }
  return context;
};

export default ApiKeyContext;
