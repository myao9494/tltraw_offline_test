import React from 'react';
import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';

const TldrawComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Tldraw
        persistenceKey="tldraw"
        autoFocus
        showMenu={false}
        showTools={true}
        showZoom={true}
        showStyles={true}
        showUI={true}
        readOnly={false}
        disableAssets={false}
      />
    </div>
  );
};

export default TldrawComponent;