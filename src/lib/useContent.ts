import { useState, useEffect } from 'react';
import contentData from './content-config.json';

export const useContent = () => {
  const [content, setContent] = useState(contentData);

  useEffect(() => {
    // Load from localStorage if exists
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const updateContent = (newContent: typeof contentData) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  return { content, updateContent };
};

export default useContent;