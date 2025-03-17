import React from 'react';
import { IonApp, IonContent, IonFooter, IonHeader, IonText, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Welcome, Samuel O. Adebayo-Adesina</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent color="primary">
      <h1>Welcome to Bootcamp</h1>
    </IonContent>
    
    <IonFooter>
      <IonToolbar>
        <IonText>
          Day 1 Assignment
        </IonText>
      </IonToolbar>
    </IonFooter>
  </IonApp>
);

export default App;
