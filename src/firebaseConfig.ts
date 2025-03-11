export const firebaseConfig = {
  apiKey: "AIzaSyCLhg3_lzvr1pue5beDSdPNSaUBe6o57kk",
  authDomain: "brandon-portfolio-448520.firebaseapp.com",
  projectId: "brandon-portfolio-448520",
  storageBucket: "brandon-portfolio-448520.firebasestorage.app",
  messagingSenderId: "137475142741",
  appId: "1:137475142741:web:5881c8455542901e9050dc",
};

const { initializeApp } = await import("firebase/app");
export const firebaseApp = initializeApp(firebaseConfig);
