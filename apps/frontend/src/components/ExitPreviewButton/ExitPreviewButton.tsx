import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { PREVIEW_SESSION_NAME } from '@/sessions';
import { exitButton, exitButtonInner, warningText } from '@/components/ExitPreviewButton/ExitPreviewButton.css.ts';

export function ExitPreviewButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sjekk om vi har preview cookie men IKKE er i iframe
    if (typeof window !== 'undefined') {
      const hasCookie = document.cookie.includes(`${PREVIEW_SESSION_NAME}=`);
      const isInIframe = window.self !== window.top;

      // Vis knappen kun hvis vi har cookie men ikke er i iframe
      setShowButton(hasCookie && !isInIframe);
    }
  }, []);

  const handleExitPreview = async () => {
    await fetch('/api/preview', { method: 'POST' });
    window.location.reload();
  };

  if (!showButton) return null;

  return (
    <div className={exitButton}>
      <p className={warningText}>⚠️ Preview mode er aktivert utenfor Sanity Studio. Appen kan oppføre seg feil.</p>
      <button onClick={handleExitPreview} className={exitButtonInner} aria-label="Exit preview mode">
        <X size={16} />
        <span>Exit Preview</span>
      </button>
    </div>
  );
}
