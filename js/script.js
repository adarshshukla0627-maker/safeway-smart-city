const translations = {
  en: {
    'app.title': 'CyberShield Smart City',
    'nav.home': 'Home',
    'nav.report': 'Report Fraud',
    'nav.myReports': 'My Reports',
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',
    'auth.register': 'Register',
    'auth.login': 'Login',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.name': 'Full Name',
    'auth.city': 'City',
    'report.category': 'Fraud Category',
    'report.description': 'Detailed Description',
    'report.amount': 'Amount Lost (₹)',
    'report.submit': 'Submit Report',
    'report.success': 'Report submitted successfully!',
    'dashboard.totalReports': 'Total Reports',
    'dashboard.resolved': 'Resolved',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
  },
  hi: {
    'app.title': 'CyberShield स्मार्ट सिटी',
    'nav.home': 'होम',
    'nav.report': 'धोखाधड़ी की रिपोर्ट करें',
    'nav.myReports': 'मेरी रिपोर्ट',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.profile': 'प्रोफाइल',
    'nav.logout': 'लॉगआउट',
    'auth.register': 'पंजीकरण',
    'auth.login': 'लॉगिन',
    'auth.email': 'ईमेल पता',
    'auth.password': 'पासवर्ड',
    'auth.name': 'पूरा नाम',
    'auth.city': 'शहर',
    'report.category': 'धोखाधड़ी की श्रेणी',
    'report.description': 'विस्तृत विवरण',
    'report.amount': 'खोई गई राशि (₹)',
    'report.submit': 'रिपोर्ट जमा करें',
    'report.success': 'रिपोर्ट सफलतापूर्वक जमा की गई!',
    'dashboard.totalReports': 'कुल रिपोर्ट',
    'dashboard.resolved': 'हल किया गया',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'एक त्रुटि हुई',
    'common.success': 'सफल',
  },
  es: {
    'app.title': 'CyberShield Smart City',
    'nav.home': 'Inicio',
    'nav.report': 'Reportar Fraude',
    'nav.myReports': 'Mis Reportes',
    'nav.dashboard': 'Panel',
    'nav.profile': 'Perfil',
    'nav.logout': 'Cerrar Sesión',
    'auth.register': 'Registrarse',
    'auth.login': 'Iniciar Sesión',
    'auth.email': 'Correo Electrónico',
    'auth.password': 'Contraseña',
    'auth.name': 'Nombre Completo',
    'auth.city': 'Ciudad',
    'report.category': 'Categoría de Fraude',
    'report.description': 'Descripción Detallada',
    'report.amount': 'Cantidad Perdida (₹)',
    'report.submit': 'Enviar Reporte',
    'report.success': '¡Reporte enviado exitosamente!',
    'dashboard.totalReports': 'Total de Reportes',
    'dashboard.resolved': 'Resuelto',
    'common.loading': 'Cargando...',
    'common.error': 'Ocurrió un error',
    'common.success': 'Éxito',
  },
};

let currentLanguage = localStorage.getItem('language') || 'en';

function getTranslation(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  location.reload();
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = getTranslation(key);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('languageSelect').value = currentLanguage;
  applyTranslations();
});
