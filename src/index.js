import React from 'react';
import App from './components/App';
import topics from './diagram-data';

React.render(<App topics={topics} />, document.getElementById('root'));
