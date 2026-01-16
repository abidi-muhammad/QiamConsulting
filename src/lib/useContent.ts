import { useState, useEffect } from 'react';
import contentData from './content-config.json';

export const useContent = () => {
  const [content, setContent] = useState(contentData);

  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Error loading saved content:', e);
      }
    }
  }, []);

  const updateContent = (newContent: typeof contentData) => {
    setContent(newContent);
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  return { content, updateContent };
};

export default useContent;