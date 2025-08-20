// App State
let appData = {
    isSetup: false,
    language: 'sr',
    currency: 'RSD',
    parentPin: '',
    negotiationEnabled: false,
    kids: [],
    chores: [],
    history: [],
    currentKid: null,
    familyId: null
};

// Firebase real-time listener
let dataListener = null;

// Translations
const translations = {
    sr: {
        // Setup
        initialSetup: 'Početno podešavanje',
        languageCurrency: 'Jezik i valuta',
        parentPin: 'PIN za roditelje (4 cifre)',
        enableNegotiation: 'Omogući pregovaranje o zadacima',
        completeSetup: 'Završi podešavanje',
        
        // Main menu
        child: 'Dete',
        parent: 'Roditelj',
        
        // PIN login
        enterPin: 'Unesite PIN',
        confirm: 'Potvrdi',
        back: 'Nazad',
        
        // Kid selection
        selectName: 'Izaberi svoje ime',
        
        // Kid dashboard
        myGoal: 'Moj cilj',
        addGoal: 'Dodaj cilj',
        availableChores: 'Dostupni zadaci',
        myChores: 'Moji zadaci',
        history: 'Istorija',
        
        // Parent dashboard
        chores: 'Zadaci',
        children: 'Deca',
        settings: 'Podešavanja',
        choreManagement: 'Upravljanje zadacima',
        addChore: 'Dodaj zadatak',
        childrenManagement: 'Upravljanje decom',
        addChild: 'Dodaj dete',
        transactionHistory: 'Istorija transakcija',
        changeLanguage: 'Promeni jezik i valutu',
        changePin: 'Promeni PIN',
        
        // Modals
        addNewChore: 'Dodaj novi zadatak',
        choreDescription: 'Opis zadatka',
        value: 'Vrednost',
        deadline: 'Rok',
        assign: 'Dodeli',
        openBidding: 'Otvori za nadmetanje',
        recurring: 'Ponavljajući zadatak',
        recurringFrequency: 'Učestalost ponavljanja',
        daily: 'Dnevno',
        weekly: 'Nedeljno',
        monthly: 'Mesečno',
        cancel: 'Otkaži',
        addChild: 'Dodaj dete',
        childName: 'Ime deteta',
        startingBalance: 'Početni iznos',
        setGoal: 'Postavi cilj',
        whatToBuy: 'Šta želiš da kupiš?',
        howMuch: 'Koliko košta?',
        
        // Negotiation
        negotiation: 'Pregovaranje',
        task: 'Zadatak',
        currentOffer: 'Trenutna ponuda',
        currentDeadline: 'Trenutni rok',
        yourOffer: 'Tvoja ponuda',
        yourDeadline: 'Tvoj predlog roka',
        acceptOffer: 'Prihvati ponudu',
        sendCounter: 'Pošalji kontrapredlog',
        
        // Status
        available: 'Dostupan',
        assigned: 'Dodeljen',
        completed: 'Završen',
        paid: 'Plaćen',
        negotiating: 'Pregovara se',
        
        // Actions
        accept: 'Prihvati',
        negotiate: 'Pregovaraj',
        complete: 'Završi',
        pay: 'Plati',
        edit: 'Izmeni',
        delete: 'Obriši',
        
        // Messages
        setupComplete: 'Podešavanje je završeno!',
        incorrectPin: 'Netačan PIN!',
        choreAdded: 'Zadatak je dodat!',
        childAdded: 'Dete je dodato!',
        goalSet: 'Cilj je postavljen!',
        choreCompleted: 'Zadatak je završen!',
        chorePaid: 'Zadatak je plaćen!',
        negotiationSent: 'Kontrapredlog je poslat!',
        offerAccepted: 'Ponuda je prihvaćena!',
        fillAllFields: 'Popunite sva polja!',
        pinChanged: 'PIN je promenjen!',
        bonusPaid: 'Bonus je isplaćen!',
        goalCompleted: 'Čestitamo! Postigao/la si svoj cilj!',
        goalArchived: 'Cilj je arhiviran!',
        
        // Goal completion
        congratulations: 'Čestitamo!',
        goalAchieved: 'Postigao/la si svoj cilj',
        goalCompletionMessage: 'Odličan rad! Uspešno si štedeo/la i postigao/la svoj cilj!',
        archiveGoal: 'Arhiviraj cilj',
        setNewGoal: 'Postavi novi cilj',
        keepSaving: 'Nastavi štednju',
        
        // Bonus
        payBonus: 'Isplati bonus',
        bonusAmount: 'Iznos bonusa',
        bonusReason: 'Razlog za bonus',
        bonusReasonPlaceholder: 'Odličan rad u školi, pomoć oko kuće...',
        
        // Family Stats
        familyStats: 'Porodična statistika',
        lifetimeEarnings: 'Ukupna zarada',
        monthlyEarnings: 'Zarada ovog meseca',
        currentGoal: 'Trenutni cilj',
        completedGoals: 'Završeni ciljevi',
        goalProgress: 'Napredak cilja',
        noCompletedGoals: 'Nema završenih ciljeva',
        
        // Empty states
        noChores: 'Nema zadataka',
        noChildren: 'Nema dece',
        noHistory: 'Nema istorije',
        noGoal: 'Nema cilja'
    },
    hr: {
        // Setup
        initialSetup: 'Početno podešavanje',
        languageCurrency: 'Jezik i valuta',
        parentPin: 'PIN za roditelje (4 cifre)',
        enableNegotiation: 'Omogući pregovaranje o zadacima',
        completeSetup: 'Završi podešavanje',
        
        // Main menu
        child: 'Dijete',
        parent: 'Roditelj',
        
        // PIN login
        enterPin: 'Unesite PIN',
        confirm: 'Potvrdi',
        back: 'Nazad',
        
        // Kid selection
        selectName: 'Izaberi svoje ime',
        
        // Kid dashboard
        myGoal: 'Moj cilj',
        addGoal: 'Dodaj cilj',
        availableChores: 'Dostupni zadaci',
        myChores: 'Moji zadaci',
        history: 'Povijest',
        
        // Parent dashboard
        chores: 'Zadaci',
        children: 'Djeca',
        settings: 'Postavke',
        choreManagement: 'Upravljanje zadacima',
        addChore: 'Dodaj zadatak',
        childrenManagement: 'Upravljanje djecom',
        addChild: 'Dodaj dijete',
        transactionHistory: 'Povijest transakcija',
        changeLanguage: 'Promijeni jezik i valutu',
        changePin: 'Promijeni PIN',
        
        // Modals
        addNewChore: 'Dodaj novi zadatak',
        choreDescription: 'Opis zadatka',
        value: 'Vrijednost',
        deadline: 'Rok',
        assign: 'Dodijeli',
        openBidding: 'Otvori za natjecanje',
        cancel: 'Otkaži',
        addChild: 'Dodaj dijete',
        childName: 'Ime djeteta',
        startingBalance: 'Početni iznos',
        setGoal: 'Postavi cilj',
        whatToBuy: 'Što želiš kupiti?',
        howMuch: 'Koliko košta?',
        
        // Negotiation
        negotiation: 'Pregovaranje',
        task: 'Zadatak',
        currentOffer: 'Trenutna ponuda',
        currentDeadline: 'Trenutni rok',
        yourOffer: 'Tvoja ponuda',
        yourDeadline: 'Tvoj prijedlog roka',
        acceptOffer: 'Prihvati ponudu',
        sendCounter: 'Pošalji kontraprijedlog',
        
        // Status
        available: 'Dostupan',
        assigned: 'Dodijeljen',
        completed: 'Završen',
        paid: 'Plaćen',
        negotiating: 'Pregovara se',
        
        // Actions
        accept: 'Prihvati',
        negotiate: 'Pregovaraj',
        complete: 'Završi',
        pay: 'Plati',
        edit: 'Izmijeni',
        delete: 'Obriši',
        
        // Messages
        setupComplete: 'Podešavanje je završeno!',
        incorrectPin: 'Netočan PIN!',
        choreAdded: 'Zadatak je dodan!',
        childAdded: 'Dijete je dodano!',
        goalSet: 'Cilj je postavljen!',
        choreCompleted: 'Zadatak je završen!',
        chorePaid: 'Zadatak je plaćen!',
        negotiationSent: 'Kontraprijedlog je poslan!',
        offerAccepted: 'Ponuda je prihvaćena!',
        fillAllFields: 'Popunite sva polja!',
        pinChanged: 'PIN je promijenjen!',
        goalCompleted: 'Čestitamo! Postigao/la si svoj cilj!',
        goalArchived: 'Cilj je arhiviran!',
        
        // Goal completion
        congratulations: 'Čestitamo!',
        goalAchieved: 'Postigao/la si svoj cilj',
        goalCompletionMessage: 'Odličan rad! Uspješno si štedio/la i postigao/la svoj cilj!',
        archiveGoal: 'Arhiviraj cilj',
        setNewGoal: 'Postavi novi cilj',
        keepSaving: 'Nastavi štednju',
        
        // Empty states
        noChores: 'Nema zadataka',
        noChildren: 'Nema djece',
        noHistory: 'Nema povijesti',
        noGoal: 'Nema cilja'
    },
    bs: {
        // Setup
        initialSetup: 'Početno podešavanje',
        languageCurrency: 'Jezik i valuta',
        parentPin: 'PIN za roditelje (4 cifre)',
        enableNegotiation: 'Omogući pregovaranje o zadacima',
        completeSetup: 'Završi podešavanje',
        
        // Main menu
        child: 'Dijete',
        parent: 'Roditelj',
        
        // PIN login
        enterPin: 'Unesite PIN',
        confirm: 'Potvrdi',
        back: 'Nazad',
        
        // Kid selection
        selectName: 'Izaberi svoje ime',
        
        // Kid dashboard
        myGoal: 'Moj cilj',
        addGoal: 'Dodaj cilj',
        availableChores: 'Dostupni zadaci',
        myChores: 'Moji zadaci',
        history: 'Historija',
        
        // Parent dashboard
        chores: 'Zadaci',
        children: 'Djeca',
        settings: 'Podešavanja',
        choreManagement: 'Upravljanje zadacima',
        addChore: 'Dodaj zadatak',
        childrenManagement: 'Upravljanje djecom',
        addChild: 'Dodaj dijete',
        transactionHistory: 'Historija transakcija',
        changeLanguage: 'Promijeni jezik i valutu',
        changePin: 'Promijeni PIN',
        
        // Modals
        addNewChore: 'Dodaj novi zadatak',
        choreDescription: 'Opis zadatka',
        value: 'Vrijednost',
        deadline: 'Rok',
        assign: 'Dodijeli',
        openBidding: 'Otvori za nadmetanje',
        cancel: 'Otkaži',
        addChild: 'Dodaj dijete',
        childName: 'Ime djeteta',
        startingBalance: 'Početni iznos',
        setGoal: 'Postavi cilj',
        whatToBuy: 'Šta želiš da kupiš?',
        howMuch: 'Koliko košta?',
        
        // Negotiation
        negotiation: 'Pregovaranje',
        task: 'Zadatak',
        currentOffer: 'Trenutna ponuda',
        currentDeadline: 'Trenutni rok',
        yourOffer: 'Tvoja ponuda',
        yourDeadline: 'Tvoj prijedlog roka',
        acceptOffer: 'Prihvati ponudu',
        sendCounter: 'Pošalji kontraprijedlog',
        
        // Status
        available: 'Dostupan',
        assigned: 'Dodijeljen',
        completed: 'Završen',
        paid: 'Plaćen',
        negotiating: 'Pregovara se',
        
        // Actions
        accept: 'Prihvati',
        negotiate: 'Pregovaraj',
        complete: 'Završi',
        pay: 'Plati',
        edit: 'Izmijeni',
        delete: 'Obriši',
        
        // Messages
        setupComplete: 'Podešavanje je završeno!',
        incorrectPin: 'Netačan PIN!',
        choreAdded: 'Zadatak je dodan!',
        childAdded: 'Dijete je dodano!',
        goalSet: 'Cilj je postavljen!',
        choreCompleted: 'Zadatak je završen!',
        chorePaid: 'Zadatak je plaćen!',
        negotiationSent: 'Kontraprijedlog je poslan!',
        offerAccepted: 'Ponuda je prihvaćena!',
        fillAllFields: 'Popunite sva polja!',
        pinChanged: 'PIN je promijenjen!',
        goalCompleted: 'Čestitamo! Postigao/la si svoj cilj!',
        goalArchived: 'Cilj je arhiviran!',
        
        // Goal completion
        congratulations: 'Čestitamo!',
        goalAchieved: 'Postigao/la si svoj cilj',
        goalCompletionMessage: 'Odličan rad! Uspješno si štedio/la i postigao/la svoj cilj!',
        archiveGoal: 'Arhiviraj cilj',
        setNewGoal: 'Postavi novi cilj',
        keepSaving: 'Nastavi štednju',
        
        // Empty states
        noChores: 'Nema zadataka',
        noChildren: 'Nema djece',
        noHistory: 'Nema historije',
        noGoal: 'Nema cilja'
    },
    me: {
        // Setup
        initialSetup: 'Početno podešavanje',
        languageCurrency: 'Jezik i valuta',
        parentPin: 'PIN za roditelje (4 cifre)',
        enableNegotiation: 'Omogući pregovaranje o zadacima',
        completeSetup: 'Završi podešavanje',
        
        // Main menu
        child: 'Dijete',
        parent: 'Roditelj',
        
        // PIN login
        enterPin: 'Unesite PIN',
        confirm: 'Potvrdi',
        back: 'Nazad',
        
        // Kid selection
        selectName: 'Izaberi svoje ime',
        
        // Kid dashboard
        myGoal: 'Moj cilj',
        addGoal: 'Dodaj cilj',
        availableChores: 'Dostupni zadaci',
        myChores: 'Moji zadaci',
        history: 'Istorija',
        
        // Parent dashboard
        chores: 'Zadaci',
        children: 'Djeca',
        settings: 'Podešavanja',
        choreManagement: 'Upravljanje zadacima',
        addChore: 'Dodaj zadatak',
        childrenManagement: 'Upravljanje djecom',
        addChild: 'Dodaj dijete',
        transactionHistory: 'Istorija transakcija',
        changeLanguage: 'Promijeni jezik i valutu',
        changePin: 'Promijeni PIN',
        
        // Modals
        addNewChore: 'Dodaj novi zadatak',
        choreDescription: 'Opis zadatka',
        value: 'Vrijednost',
        deadline: 'Rok',
        assign: 'Dodijeli',
        openBidding: 'Otvori za nadmetanje',
        cancel: 'Otkaži',
        addChild: 'Dodaj dijete',
        childName: 'Ime djeteta',
        startingBalance: 'Početni iznos',
        setGoal: 'Postavi cilj',
        whatToBuy: 'Šta želiš da kupiš?',
        howMuch: 'Koliko košta?',
        
        // Negotiation
        negotiation: 'Pregovaranje',
        task: 'Zadatak',
        currentOffer: 'Trenutna ponuda',
        currentDeadline: 'Trenutni rok',
        yourOffer: 'Tvoja ponuda',
        yourDeadline: 'Tvoj prijedlog roka',
        acceptOffer: 'Prihvati ponudu',
        sendCounter: 'Pošalji kontraprijedlog',
        
        // Status
        available: 'Dostupan',
        assigned: 'Dodijeljen',
        completed: 'Završen',
        paid: 'Plaćen',
        negotiating: 'Pregovara se',
        
        // Actions
        accept: 'Prihvati',
        negotiate: 'Pregovaraj',
        complete: 'Završi',
        pay: 'Plati',
        edit: 'Izmijeni',
        delete: 'Obriši',
        
        // Messages
        setupComplete: 'Podešavanje je završeno!',
        incorrectPin: 'Netačan PIN!',
        choreAdded: 'Zadatak je dodan!',
        childAdded: 'Dijete je dodano!',
        goalSet: 'Cilj je postavljen!',
        choreCompleted: 'Zadatak je završen!',
        chorePaid: 'Zadatak je plaćen!',
        negotiationSent: 'Kontraprijedlog je poslan!',
        offerAccepted: 'Ponuda je prihvaćena!',
        fillAllFields: 'Popunite sva polja!',
        pinChanged: 'PIN je promijenjen!',
        goalCompleted: 'Čestitamo! Postigao/la si svoj cilj!',
        goalArchived: 'Cilj je arhiviran!',
        
        // Goal completion
        congratulations: 'Čestitamo!',
        goalAchieved: 'Postigao/la si svoj cilj',
        goalCompletionMessage: 'Odličan rad! Uspješno si štedio/la i postigao/la svoj cilj!',
        archiveGoal: 'Arhiviraj cilj',
        setNewGoal: 'Postavi novi cilj',
        keepSaving: 'Nastavi štednju',
        
        // Empty states
        noChores: 'Nema zadataka',
        noChildren: 'Nema djece',
        noHistory: 'Nema istorije',
        noGoal: 'Nema cilja'
    },
    mk: {
        // Setup
        initialSetup: 'Почетна поставка',
        languageCurrency: 'Јазик и валута',
        parentPin: 'ПИН за родители (4 цифри)',
        enableNegotiation: 'Овозможи преговарање за задачи',
        completeSetup: 'Заврши поставка',
        
        // Main menu
        child: 'Дете',
        parent: 'Родител',
        
        // PIN login
        enterPin: 'Внесете ПИН',
        confirm: 'Потврди',
        back: 'Назад',
        
        // Kid selection
        selectName: 'Избери го твоето име',
        
        // Kid dashboard
        myGoal: 'Мојата цел',
        addGoal: 'Додај цел',
        availableChores: 'Достапни задачи',
        myChores: 'Мои задачи',
        history: 'Историја',
        
        // Parent dashboard
        chores: 'Задачи',
        children: 'Деца',
        settings: 'Поставки',
        choreManagement: 'Управување со задачи',
        addChore: 'Додај задача',
        childrenManagement: 'Управување со деца',
        addChild: 'Додај дете',
        transactionHistory: 'Историја на трансакции',
        changeLanguage: 'Промени јазик и валута',
        changePin: 'Промени ПИН',
        
        // Modals
        addNewChore: 'Додај нова задача',
        choreDescription: 'Опис на задачата',
        value: 'Вредност',
        deadline: 'Рок',
        assign: 'Додели',
        openBidding: 'Отвори за натпревар',
        recurring: 'Повторувачка задача',
        recurringFrequency: 'Честота на повторување',
        daily: 'Дневно',
        weekly: 'Неделно',
        monthly: 'Месечно',
        cancel: 'Откажи',
        addChild: 'Додај дете',
        childName: 'Име на детето',
        startingBalance: 'Почетен износ',
        setGoal: 'Постави цел',
        whatToBuy: 'Што сакаш да купиш?',
        howMuch: 'Колку чини?',
        
        // Negotiation
        negotiation: 'Преговарање',
        task: 'Задача',
        currentOffer: 'Тековна понуда',
        currentDeadline: 'Тековен рок',
        yourOffer: 'Твојата понуда',
        yourDeadline: 'Твој предлог за рок',
        acceptOffer: 'Прифати понуда',
        sendCounter: 'Испрати контрапредлог',
        
        // Status
        available: 'Достапна',
        assigned: 'Доделена',
        completed: 'Завршена',
        paid: 'Платена',
        negotiating: 'Се преговара',
        
        // Actions
        accept: 'Прифати',
        negotiate: 'Преговарај',
        complete: 'Заврши',
        pay: 'Плати',
        edit: 'Измени',
        delete: 'Избриши',
        
        // Messages
        setupComplete: 'Поставката е завршена!',
        incorrectPin: 'Неточен ПИН!',
        choreAdded: 'Задачата е додадена!',
        childAdded: 'Детето е додадено!',
        goalSet: 'Целта е поставена!',
        choreCompleted: 'Задачата е завршена!',
        chorePaid: 'Задачата е платена!',
        negotiationSent: 'Контрапредлогот е испратен!',
        offerAccepted: 'Понудата е прифатена!',
        fillAllFields: 'Пополнете ги сите полиња!',
        pinChanged: 'ПИН-от е променет!',
        bonusPaid: 'Бонусот е исплатен!',
        goalCompleted: 'Честитки! Ја постигна твојата цел!',
        goalArchived: 'Целта е архивирана!',
        
        // Goal completion
        congratulations: 'Честитки!',
        goalAchieved: 'Ја постигна твојата цел',
        goalCompletionMessage: 'Одлична работа! Успешно штедеше и ја постигна твојата цел!',
        archiveGoal: 'Архивирај цел',
        setNewGoal: 'Постави нова цел',
        keepSaving: 'Продолжи со штедење',
        
        // Bonus
        payBonus: 'Исплати бонус',
        bonusAmount: 'Износ на бонус',
        bonusReason: 'Причина за бонус',
        bonusReasonPlaceholder: 'Одлична работа во училиште, помош во домот...',
        
        // Family Stats
        familyStats: 'Семејна статистика',
        lifetimeEarnings: 'Вкупна заработка',
        monthlyEarnings: 'Заработка овој месец',
        currentGoal: 'Тековна цел',
        completedGoals: 'Завршени цели',
        goalProgress: 'Напредок на целта',
        noCompletedGoals: 'Нема завршени цели',
        
        // Empty states
        noChores: 'Нема задачи',
        noChildren: 'Нема деца',
        noHistory: 'Нема историја',
        noGoal: 'Нема цел'
    }
};

// Currency symbols
const currencySymbols = {
    'RSD': 'RSD',
    'EUR': '€',
    'KM': 'KM',
    'MKD': 'MKD'
};

// Translation helper
function t(key) {
    return translations[appData.language][key] || key;
}

// Format currency
function formatCurrency(amount) {
    const symbol = currencySymbols[appData.currency];
    if (appData.currency === 'EUR') {
        return `${amount} ${symbol}`;
    }
    return `${amount} ${symbol}`;
}

// Save data to Firebase
async function saveData() {
    if (!appData.familyId) {
        console.error('No family ID set, cannot save to Firebase');
        return;
    }
    
    try {
        await FirebaseDB.saveFamilyData(appData.familyId, {
            isSetup: appData.isSetup,
            language: appData.language,
            currency: appData.currency,
            parentPin: appData.parentPin,
            negotiationEnabled: appData.negotiationEnabled,
            kids: appData.kids,
            chores: appData.chores,
            history: appData.history
        });
    } catch (error) {
        console.error('Error saving data to Firebase:', error);
        showNotification('Greška pri čuvanju podataka!', 'error');
    }
}

// Load data from Firebase
async function loadData() {
    // First try to get family ID from localStorage
    const savedFamilyId = localStorage.getItem('dzeparac-family-id');
    if (savedFamilyId) {
        appData.familyId = savedFamilyId;
        
        try {
            const familyData = await FirebaseDB.getFamilyData(appData.familyId);
            if (familyData) {
                appData = { ...appData, ...familyData };
                setupRealtimeListener();
            }
        } catch (error) {
            console.error('Error loading data from Firebase:', error);
            showNotification('Greška pri učitavanju podataka!', 'error');
        }
    }
}

// Setup real-time listener for data changes
function setupRealtimeListener() {
    if (!appData.familyId) return;
    
    // Remove existing listener if any
    if (dataListener) {
        dataListener();
    }
    
    dataListener = FirebaseDB.listenToFamilyData(appData.familyId, (familyData) => {
        if (familyData) {
            // Update app data with new data from Firebase
            const oldCurrentKid = appData.currentKid;
            appData = { ...appData, ...familyData };
            appData.currentKid = oldCurrentKid; // Preserve current kid selection
            
            // Re-render current screen
            const activeScreen = document.querySelector('.screen.active');
            if (activeScreen) {
                const screenId = activeScreen.id;
                if (screenId === 'kidDashboard') {
                    renderKidDashboard();
                } else if (screenId === 'parentDashboard') {
                    renderParentDashboard();
                } else if (screenId === 'kidSelectionScreen') {
                    renderKidSelection();
                }
            }
        }
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Screen management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Setup kids management
let setupKids = [];

function addKidToSetup() {
    const nameInput = document.getElementById('setupKidName');
    
    const name = nameInput.value.trim();
    const balance = 0; // Default balance is always 0
    
    if (!name) {
        showNotification('Unesite ime deteta!', 'error');
        return;
    }
    
    // Check if name already exists
    if (setupKids.some(kid => kid.name.toLowerCase() === name.toLowerCase())) {
        showNotification('Dete sa tim imenom već postoji!', 'error');
        return;
    }
    
    const newKid = {
        id: Date.now(),
        name,
        balance,
        goal: null
    };
    
    setupKids.push(newKid);
    
    // Clear inputs
    nameInput.value = '';
    
    renderSetupKids();
    showNotification(`${name} je dodat/a!`);
}

function removeKidFromSetup(kidId) {
    setupKids = setupKids.filter(kid => kid.id !== kidId);
    renderSetupKids();
    showNotification('Dete je uklonjeno!');
}

function renderSetupKids() {
    const container = document.getElementById('setupKidsList');
    
    if (setupKids.length === 0) {
        container.innerHTML = `
            <div class="setup-kids-empty">
                Dodajte prvo dete koristeći formu ispod
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    setupKids.forEach(kid => {
        const kidElement = document.createElement('div');
        kidElement.className = 'setup-kid-item';
        
        kidElement.innerHTML = `
            <div class="setup-kid-info">
                <div class="setup-kid-avatar">
                    <i class="fas fa-child"></i>
                </div>
                <div class="setup-kid-details">
                    <h4>${kid.name}</h4>
                    <div class="setup-kid-balance">${formatCurrency(kid.balance)}</div>
                </div>
            </div>
            <button class="setup-kid-remove" onclick="removeKidFromSetup(${kid.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(kidElement);
    });
}

// Setup functions
async function completeSetup() {
    const languageCurrency = document.getElementById('languageCurrency').value;
    const pin = document.getElementById('parentPin').value;
    const negotiation = document.getElementById('negotiationMode').checked;
    
    console.log('Setup validation:');
    console.log('- languageCurrency:', languageCurrency);
    console.log('- pin:', pin);
    console.log('- pin length:', pin ? pin.length : 0);
    console.log('- negotiation:', negotiation);
    console.log('- setupKids:', setupKids);
    
    if (!pin || pin.length !== 4) {
        console.log('Validation failed: PIN is invalid');
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    console.log('Validation passed, completing setup...');
    
    const [language, currency] = languageCurrency.split('-');
    appData.language = language;
    appData.currency = currency;
    appData.parentPin = pin;
    appData.negotiationEnabled = negotiation;
    appData.isSetup = true;
    
    // Add setup kids to main app data
    appData.kids = [...setupKids];
    
    console.log('Final appData:', appData);
    
    try {
        // Create new family in Firebase
        const familyData = {
            isSetup: appData.isSetup,
            language: appData.language,
            currency: appData.currency,
            parentPin: appData.parentPin,
            negotiationEnabled: appData.negotiationEnabled,
            kids: appData.kids,
            chores: appData.chores,
            history: appData.history,
            createdAt: new Date().toISOString()
        };
        
        const familyId = await FirebaseDB.createFamily(familyData);
        appData.familyId = familyId;
        
        // Save family ID to localStorage for future sessions
        localStorage.setItem('dzeparac-family-id', familyId);
        
        // Setup real-time listener
        setupRealtimeListener();
        
        showNotification(t('setupComplete'));
        showMainScreen();
    } catch (error) {
        console.error('Error creating family:', error);
        showNotification('Greška pri kreiranju porodice!', 'error');
    }
}

function showMainScreen() {
    showScreen('mainScreen');
}

// Navigation functions
function showKidView() {
    if (appData.kids.length === 0) {
        showNotification('Nema dodane dece! Roditelji moraju prvo da dodaju decu.', 'warning');
        return;
    }
    showScreen('kidSelectionScreen');
    renderKidSelection();
}

function showParentLogin() {
    showScreen('parentLoginScreen');
    document.getElementById('pinInput').value = '';
}

function verifyPin() {
    const pin = document.getElementById('pinInput').value;
    if (pin === appData.parentPin) {
        showScreen('parentDashboard');
        renderParentDashboard();
    } else {
        showNotification(t('incorrectPin'), 'error');
        document.getElementById('pinInput').value = '';
    }
}

// Kid selection and dashboard
function renderKidSelection() {
    const container = document.getElementById('kidsList');
    container.innerHTML = '';
    
    appData.kids.forEach(kid => {
        const kidElement = document.createElement('div');
        kidElement.className = 'kid-item';
        kidElement.onclick = () => selectKid(kid.id);
        
        kidElement.innerHTML = `
            <div class="kid-avatar">
                <i class="fas fa-child"></i>
            </div>
            <div class="kid-info">
                <h3>${kid.name}</h3>
                <div class="kid-balance">${formatCurrency(kid.balance)}</div>
            </div>
        `;
        
        container.appendChild(kidElement);
    });
}

function selectKid(kidId) {
    appData.currentKid = kidId;
    showScreen('kidDashboard');
    renderKidDashboard();
}

function renderKidDashboard() {
    const kid = appData.kids.find(k => k.id === appData.currentKid);
    if (!kid) return;
    
    // Update header
    document.getElementById('currentKidName').textContent = kid.name;
    document.getElementById('kidBalance').textContent = kid.balance;
    document.getElementById('currencySymbol').textContent = currencySymbols[appData.currency];
    
    // Update goal
    renderKidGoal(kid);
    
    // Update family statistics
    renderFamilyStats();
    
    // Update chores
    renderKidChores(kid);
    
    // Update history
    renderKidHistory(kid);
}

function renderKidGoal(kid) {
    const goalName = document.getElementById('goalName');
    const goalAmount = document.getElementById('goalAmount');
    const goalProgress = document.getElementById('goalProgress');
    
    if (kid.goal) {
        goalName.textContent = kid.goal.name;
        goalAmount.textContent = `${formatCurrency(kid.balance)} / ${formatCurrency(kid.goal.amount)}`;
        const progress = Math.min((kid.balance / kid.goal.amount) * 100, 100);
        goalProgress.style.width = `${progress}%`;
        
        // Check if goal is completed
        if (kid.balance >= kid.goal.amount && !kid.goal.completed) {
            // Mark goal as completed to prevent multiple celebrations
            kid.goal.completed = true;
            
            // Show congratulatory modal
            setTimeout(() => {
                showGoalCompletionModal(kid);
            }, 500); // Small delay to let the progress bar animate
        }
    } else {
        goalName.textContent = t('addGoal');
        goalAmount.textContent = '0 / 0';
        goalProgress.style.width = '0%';
    }
}

function renderKidChores(kid) {
    // Available chores (open for bidding or assigned to this kid)
    // Include open bidding tasks even when they're in negotiating status
    const availableChores = appData.chores.filter(chore => {
        // Show tasks that are available and assigned to this kid or open for bidding
        if (chore.status === 'available' && (chore.assignedTo === kid.id || chore.assignedTo === 'open')) {
            return true;
        }
        
        // Also show open bidding tasks that are in negotiating status (so all kids can participate)
        if (chore.status === 'negotiating' && chore.assignedTo === 'open') {
            return true;
        }
        
        return false;
    });
    
    const availableContainer = document.getElementById('availableChores');
    renderChoresList(availableContainer, availableChores, 'kid-available');
    
    // My chores (assigned to this kid and not available for others)
    const myChores = appData.chores.filter(chore => 
        chore.assignedTo === kid.id && chore.status !== 'available'
    );
    
    const myContainer = document.getElementById('myChores');
    renderChoresList(myContainer, myChores, 'kid-my');
}

function renderKidHistory(kid) {
    const kidHistory = appData.history.filter(h => h.kidId === kid.id).sort((a, b) => new Date(b.date) - new Date(a.date));
    const container = document.getElementById('kidHistory');
    
    if (kidHistory.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <h3>${t('noHistory')}</h3>
            </div>
        `;
        return;
    }
    
    // Initialize pagination state if not exists
    if (!container.dataset.currentPage) {
        container.dataset.currentPage = '1';
    }
    
    const currentPage = parseInt(container.dataset.currentPage);
    const itemsPerPage = currentPage === 1 ? 6 : 10; // First page shows 6, subsequent pages show 10
    const startIndex = currentPage === 1 ? 0 : 6 + (currentPage - 2) * 10;
    const endIndex = currentPage === 1 ? 6 : 6 + (currentPage - 1) * 10;
    
    const visibleHistory = kidHistory.slice(0, endIndex);
    const hasMore = kidHistory.length > endIndex;
    
    container.innerHTML = '';
    
    // Render history items
    visibleHistory.forEach(item => {
        const historyElement = document.createElement('div');
        historyElement.className = 'history-item';
        
        historyElement.innerHTML = `
            <div class="history-info">
                <div class="history-date">${new Date(item.date).toLocaleDateString()}</div>
                <div class="history-description">${item.description}</div>
            </div>
            <div class="history-amount">${formatCurrency(item.amount)}</div>
        `;
        
        container.appendChild(historyElement);
    });
    
    // Add "Show More" button if there are more items
    if (hasMore) {
        const showMoreButton = document.createElement('button');
        showMoreButton.className = 'btn-secondary btn-small show-more-btn';
        showMoreButton.textContent = `Prikaži još (${Math.min(10, kidHistory.length - endIndex)})`;
        showMoreButton.onclick = () => {
            container.dataset.currentPage = (currentPage + 1).toString();
            renderKidHistory(kid);
        };
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'show-more-container';
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.marginTop = '15px';
        buttonContainer.appendChild(showMoreButton);
        
        container.appendChild(buttonContainer);
    }
}

// Parent dashboard
function renderParentDashboard() {
    showTab('chores');
}

function showTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    // Render content based on tab
    switch(tabName) {
        case 'chores':
            renderParentChores();
            break;
        case 'kids':
            renderParentKids();
            break;
        case 'history':
            renderParentHistory();
            break;
        case 'settings':
            renderParentSettings();
            break;
    }
}

function renderParentChores() {
    const container = document.getElementById('parentChoresList');
    renderChoresList(container, appData.chores, 'parent');
}

function renderParentKids() {
    // Find the correct container in the kids tab
    const container = document.querySelector('#kidsTab .kids-management-list');
    if (!container) {
        console.error('Kids management container not found');
        return;
    }
    
    container.innerHTML = '';
    
    if (appData.kids.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-child"></i>
                <h3>${t('noChildren')}</h3>
            </div>
        `;
        return;
    }
    
    appData.kids.forEach(kid => {
        const amountDue = calculateAmountDue(kid.id);
        const kidElement = document.createElement('div');
        kidElement.className = 'kid-management-item';
        
        kidElement.innerHTML = `
            <div class="kid-management-info">
                <h4>${kid.name}</h4>
                <div class="kid-management-balance">${formatCurrency(amountDue)}</div>
            </div>
            <div class="kid-management-actions">
                <button class="btn-primary btn-small" onclick="showBonusModal(${kid.id})">
                    ${t('payBonus')}
                </button>
                <button class="btn-danger btn-small" onclick="deleteKid(${kid.id})">
                    ${t('delete')}
                </button>
            </div>
        `;
        
        container.appendChild(kidElement);
    });
}

function renderParentHistory() {
    const allHistory = appData.history.sort((a, b) => new Date(b.date) - new Date(a.date));
    const container = document.getElementById('parentHistory');
    
    if (allHistory.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <h3>${t('noHistory')}</h3>
            </div>
        `;
        return;
    }
    
    // Initialize pagination state if not exists
    if (!container.dataset.currentPage) {
        container.dataset.currentPage = '1';
    }
    
    const currentPage = parseInt(container.dataset.currentPage);
    const itemsPerPage = currentPage === 1 ? 6 : 10; // First page shows 6, subsequent pages show 10
    const startIndex = currentPage === 1 ? 0 : 6 + (currentPage - 2) * 10;
    const endIndex = currentPage === 1 ? 6 : 6 + (currentPage - 1) * 10;
    
    const visibleHistory = allHistory.slice(0, endIndex);
    const hasMore = allHistory.length > endIndex;
    
    container.innerHTML = '';
    
    // Render history items
    visibleHistory.forEach(item => {
        const historyElement = document.createElement('div');
        historyElement.className = 'history-item';
        
        const kid = appData.kids.find(k => k.id === item.kidId);
        const kidName = kid ? kid.name : 'Unknown';
        
        historyElement.innerHTML = `
            <div class="history-info">
                <div class="history-date">${new Date(item.date).toLocaleDateString()}</div>
                <div class="history-description">${kidName}: ${item.description}</div>
            </div>
            <div class="history-amount">${formatCurrency(item.amount)}</div>
        `;
        
        container.appendChild(historyElement);
    });
    
    // Add "Show More" button if there are more items
    if (hasMore) {
        const showMoreButton = document.createElement('button');
        showMoreButton.className = 'btn-secondary btn-small show-more-btn';
        showMoreButton.textContent = `Prikaži još (${Math.min(10, allHistory.length - endIndex)})`;
        showMoreButton.onclick = () => {
            container.dataset.currentPage = (currentPage + 1).toString();
            renderParentHistory();
        };
        
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'show-more-container';
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.marginTop = '15px';
        buttonContainer.appendChild(showMoreButton);
        
        container.appendChild(buttonContainer);
    }
}

function renderParentSettings() {
    document.getElementById('settingsLanguageCurrency').value = `${appData.language}-${appData.currency}`;
    document.getElementById('settingsNegotiation').checked = appData.negotiationEnabled;
    
    // Display Family ID
    if (appData.familyId) {
        document.getElementById('familyIdDisplay').value = appData.familyId;
    }
}

// Chores rendering
function renderChoresList(container, chores, context) {
    if (chores.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-tasks"></i>
                <h3>${t('noChores')}</h3>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    chores.forEach(chore => {
        const choreElement = document.createElement('div');
        choreElement.className = 'chore-item';
        
        let actionsHtml = '';
        
        if (context === 'kid-available') {
            if (appData.negotiationEnabled && chore.assignedTo === 'open') {
                actionsHtml = `
                    <button class="btn-success btn-small" onclick="acceptChore(${chore.id})">
                        ${t('accept')}
                    </button>
                    <button class="btn-warning btn-small" onclick="negotiateChore(${chore.id})">
                        ${t('negotiate')}
                    </button>
                `;
            } else {
                actionsHtml = `
                    <button class="btn-success btn-small" onclick="acceptChore(${chore.id})">
                        ${t('accept')}
                    </button>
                `;
            }
        } else if (context === 'kid-my') {
            if (chore.status === 'assigned') {
                actionsHtml = `
                    <button class="btn-primary btn-small" onclick="completeChore(${chore.id})">
                        ${t('complete')}
                    </button>
                `;
            } else if (chore.status === 'negotiating') {
                actionsHtml = `
                    <div class="negotiation-notice">
                        ${t('negotiation')} - ${t('currentOffer')}: ${formatCurrency(chore.value)}
                    </div>
                    <button class="btn-success btn-small" onclick="acceptNegotiation(${chore.id})">
                        ${t('acceptOffer')}
                    </button>
                    <button class="btn-warning btn-small" onclick="makeKidCounterOffer(${chore.id})">
                        ${t('sendCounter')}
                    </button>
                `;
            }
        } else if (context === 'parent') {
            if (chore.status === 'completed') {
                actionsHtml = `
                    <button class="btn-success btn-small" onclick="payChore(${chore.id})">
                        ${t('pay')}
                    </button>
                    <button class="btn-danger btn-small" onclick="deleteChore(${chore.id})">
                        ${t('delete')}
                    </button>
                `;
            } else if (chore.status === 'negotiating') {
                if (chore.assignedTo === 'open' && chore.negotiations && chore.negotiations.length > 0) {
                    // Open bidding with negotiations
                    const sortedNegotiations = [...chore.negotiations].sort((a, b) => a.value - b.value);
                    const bestOffer = sortedNegotiations[0];
                    const bestKid = appData.kids.find(k => k.id === bestOffer.kidId);
                    const bestKidName = bestKid ? bestKid.name : 'Unknown';
                    
                    actionsHtml = `
                        <div class="negotiation-notice">
                            <small>Nadmetanje: ${chore.negotiations.length} predlog(a)</small>
                            <small>Najbolji: ${bestKidName} - ${formatCurrency(bestOffer.value)}</small>
                        </div>
                        <button class="btn-success btn-small" onclick="acceptNegotiation(${chore.id})">
                            Prihvati najbolji
                        </button>
                        <button class="btn-warning btn-small" onclick="parentCounterOffer(${chore.id})">
                            Pregled predloga
                        </button>
                        <button class="btn-danger btn-small" onclick="deleteChore(${chore.id})">
                            ${t('delete')}
                        </button>
                    `;
                } else if (chore.negotiatingWith) {
                    // Direct assignment negotiation
                    const negotiatingKid = appData.kids.find(k => k.id === chore.negotiatingWith);
                    const kidName = negotiatingKid ? negotiatingKid.name : 'Unknown';
                    actionsHtml = `
                        <div class="negotiation-notice">
                            <small>Pregovaranje sa ${kidName}</small>
                        </div>
                        <button class="btn-success btn-small" onclick="acceptNegotiation(${chore.id})">
                            ${t('accept')}
                        </button>
                        <button class="btn-warning btn-small" onclick="parentCounterOffer(${chore.id})">
                            Kontrapredlog
                        </button>
                        <button class="btn-danger btn-small" onclick="deleteChore(${chore.id})">
                            ${t('delete')}
                        </button>
                    `;
                }
            } else {
                actionsHtml = `
                    <button class="btn-danger btn-small" onclick="deleteChore(${chore.id})">
                        ${t('delete')}
                    </button>
                `;
            }
        }
        
        const assignedKid = appData.kids.find(k => k.id === chore.assignedTo);
        const assignedText = chore.assignedTo === 'open' ? t('openBidding') : (assignedKid ? assignedKid.name : '');
        
        choreElement.innerHTML = `
            <div class="chore-header">
                <div class="chore-info">
                    <div class="chore-description">${chore.description}</div>
                    <div class="chore-meta">
                        <span class="chore-value">${formatCurrency(chore.value)}</span>
                        <span>Rok: ${new Date(chore.deadline).toLocaleDateString()}</span>
                        <span>${assignedText}</span>
                    </div>
                </div>
                <div class="chore-status status-${chore.status}">
                    ${t(chore.status)}
                </div>
            </div>
            <div class="chore-actions">
                ${actionsHtml}
            </div>
        `;
        
        container.appendChild(choreElement);
    });
}

// Enhanced Chore actions with full negotiation support
function acceptChore(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // If this is an open bidding task and other kids are negotiating, finalize it
    if (chore.assignedTo === 'open' && chore.negotiations && chore.negotiations.length > 0) {
        // Clear all other negotiations
        chore.negotiations = [];
    }
    
    chore.status = 'assigned';
    chore.assignedTo = appData.currentKid;
    chore.acceptedBy = appData.currentKid;
    chore.acceptedDate = new Date().toISOString();
    
    // Clear any negotiation data
    delete chore.negotiatingWith;
    delete chore.negotiations;
    
    saveData();
    showNotification(t('offerAccepted'));
    renderKidDashboard();
}

function negotiateChore(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Show negotiation modal
    document.getElementById('negTaskDescription').textContent = chore.description;
    document.getElementById('negCurrentOffer').textContent = formatCurrency(chore.value);
    document.getElementById('negCurrentDeadline').textContent = new Date(chore.deadline).toLocaleDateString();
    document.getElementById('negNewValue').value = chore.value;
    document.getElementById('negNewDeadline').value = chore.deadline;
    
    // Show current negotiations if this is open bidding
    if (chore.assignedTo === 'open' && chore.negotiations) {
        renderCurrentNegotiations(chore);
    }
    
    document.getElementById('negotiationModal').classList.add('active');
    document.getElementById('negotiationModal').dataset.choreId = choreId;
}

function renderCurrentNegotiations(chore) {
    const container = document.getElementById('currentNegotiations');
    if (!container) return;
    
    if (!chore.negotiations || chore.negotiations.length === 0) {
        container.innerHTML = '<p>Nema trenutnih pregovora</p>';
        return;
    }
    
    container.innerHTML = '<h4>Trenutni predlozi:</h4>';
    
    // Sort negotiations by value (lowest first for competitive bidding)
    const sortedNegotiations = [...chore.negotiations].sort((a, b) => a.value - b.value);
    
    sortedNegotiations.forEach(negotiation => {
        const kid = appData.kids.find(k => k.id === negotiation.kidId);
        const kidName = kid ? kid.name : 'Unknown';
        
        const negElement = document.createElement('div');
        negElement.className = 'negotiation-item';
        negElement.innerHTML = `
            <div class="negotiation-info">
                <strong>${kidName}</strong>: ${formatCurrency(negotiation.value)}
                <br><small>Rok: ${new Date(negotiation.deadline).toLocaleDateString()}</small>
                <br><small>Poslato: ${new Date(negotiation.timestamp).toLocaleString()}</small>
            </div>
        `;
        
        container.appendChild(negElement);
    });
}

function makeCounterOffer() {
    const choreId = parseInt(document.getElementById('negotiationModal').dataset.choreId);
    const newValue = parseInt(document.getElementById('negNewValue').value);
    const newDeadline = document.getElementById('negNewDeadline').value;
    
    if (!newValue || !newDeadline) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    const currentKid = appData.kids.find(k => k.id === appData.currentKid);
    if (!currentKid) return;
    
    // Handle different negotiation scenarios
    if (chore.assignedTo === 'open') {
        // Open bidding - add to negotiations array
        if (!chore.negotiations) {
            chore.negotiations = [];
        }
        
        // Remove any existing negotiation from this kid
        chore.negotiations = chore.negotiations.filter(n => n.kidId !== appData.currentKid);
        
        // Add new negotiation
        chore.negotiations.push({
            kidId: appData.currentKid,
            kidName: currentKid.name,
            value: newValue,
            deadline: newDeadline,
            timestamp: new Date().toISOString()
        });
        
        chore.status = 'negotiating';
        
    } else if (chore.assignedTo === appData.currentKid) {
        // Direct assignment - traditional negotiation
        chore.value = newValue;
        chore.deadline = newDeadline;
        chore.status = 'negotiating';
        chore.negotiatingWith = appData.currentKid;
        chore.lastNegotiationBy = 'kid';
        chore.lastNegotiationDate = new Date().toISOString();
    }
    
    saveData();
    closeModal('negotiationModal');
    showNotification(t('negotiationSent'));
    renderKidDashboard();
}

function acceptOffer() {
    const choreId = parseInt(document.getElementById('negotiationModal').dataset.choreId);
    acceptChore(choreId);
    closeModal('negotiationModal');
}

function completeChore(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    chore.status = 'completed';
    chore.completedDate = new Date().toISOString();
    
    saveData();
    showNotification(t('choreCompleted'));
    renderKidDashboard();
}

function payChore(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    const kid = appData.kids.find(k => k.id === chore.assignedTo);
    if (!kid) return;
    
    // Add money to kid's balance
    kid.balance += chore.value;
    
    // Add to history
    appData.history.push({
        id: Date.now(),
        kidId: kid.id,
        date: new Date().toISOString(),
        description: chore.description,
        amount: chore.value
    });
    
    // Mark chore as paid
    chore.status = 'paid';
    
    saveData();
    showNotification(t('chorePaid'));
    renderParentChores();
}

function editChore(choreId) {
    // Implementation for editing chores
    showNotification('Edit functionality coming soon!', 'warning');
}

function deleteChore(choreId) {
    if (confirm('Da li ste sigurni da želite da obrišete ovaj zadatak?')) {
        appData.chores = appData.chores.filter(c => c.id !== choreId);
        saveData();
        renderParentChores();
    }
}

// Enhanced Parent negotiation functions with full bidding support
function acceptNegotiation(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Handle different negotiation scenarios
    if (chore.assignedTo === 'open' && chore.negotiations && chore.negotiations.length > 0) {
        // Open bidding - parent accepts the lowest offer
        const sortedNegotiations = [...chore.negotiations].sort((a, b) => a.value - b.value);
        const acceptedNegotiation = sortedNegotiations[0];
        
        // Assign task to the kid with the accepted offer
        chore.assignedTo = acceptedNegotiation.kidId;
        chore.value = acceptedNegotiation.value;
        chore.deadline = acceptedNegotiation.deadline;
        chore.status = 'assigned';
        chore.acceptedBy = acceptedNegotiation.kidId;
        chore.acceptedDate = new Date().toISOString();
        
        // Clear negotiations
        delete chore.negotiations;
        
        const acceptedKid = appData.kids.find(k => k.id === acceptedNegotiation.kidId);
        const kidName = acceptedKid ? acceptedKid.name : 'Unknown';
        
        showNotification(`Prihvaćen je predlog od ${kidName} za ${formatCurrency(acceptedNegotiation.value)}!`);
        
    } else if (chore.negotiatingWith) {
        // Direct assignment negotiation - accept current terms
        chore.status = 'assigned';
        delete chore.negotiatingWith;
        delete chore.lastNegotiationBy;
        delete chore.lastNegotiationDate;
        
        showNotification('Pregovaranje je prihvaćeno! Zadatak je dodeljen.');
    }
    
    saveData();
    
    // Check if we're in kid context or parent context
    if (appData.currentKid) {
        renderKidDashboard();
    } else {
        renderParentChores();
    }
}

function parentCounterOffer(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Handle different negotiation scenarios
    if (chore.assignedTo === 'open' && chore.negotiations && chore.negotiations.length > 0) {
        // Open bidding - show modal with current negotiations
        showParentBiddingModal(chore);
    } else if (chore.negotiatingWith) {
        // Direct assignment - show traditional negotiation modal
        showParentNegotiationModal(chore);
    }
}

function showParentBiddingModal(chore) {
    // Show parent bidding modal for open bidding scenarios
    document.getElementById('parentBidTaskDescription').textContent = chore.description;
    document.getElementById('parentBidOriginalValue').textContent = formatCurrency(chore.value);
    document.getElementById('parentBidOriginalDeadline').textContent = new Date(chore.deadline).toLocaleDateString();
    
    // Render current negotiations
    renderParentBiddingNegotiations(chore);
    
    document.getElementById('parentBiddingModal').classList.add('active');
    document.getElementById('parentBiddingModal').dataset.choreId = chore.id;
}

function showParentNegotiationModal(chore) {
    // Show traditional parent negotiation modal
    document.getElementById('parentNegTaskDescription').textContent = chore.description;
    document.getElementById('parentNegCurrentOffer').textContent = formatCurrency(chore.value);
    document.getElementById('parentNegCurrentDeadline').textContent = new Date(chore.deadline).toLocaleDateString();
    document.getElementById('parentNegNewValue').value = chore.value;
    document.getElementById('parentNegNewDeadline').value = chore.deadline;
    
    const negotiatingKid = appData.kids.find(k => k.id === chore.negotiatingWith);
    const kidName = negotiatingKid ? negotiatingKid.name : 'Unknown';
    document.getElementById('parentNegKidName').textContent = kidName;
    
    document.getElementById('parentNegotiationModal').classList.add('active');
    document.getElementById('parentNegotiationModal').dataset.choreId = chore.id;
}

function renderParentBiddingNegotiations(chore) {
    const container = document.getElementById('parentBiddingNegotiations');
    if (!container) return;
    
    if (!chore.negotiations || chore.negotiations.length === 0) {
        container.innerHTML = '<p>Nema trenutnih predloga</p>';
        return;
    }
    
    container.innerHTML = '<h4>Trenutni predlozi (sortirani po vrednosti):</h4>';
    
    // Sort negotiations by value (lowest first for competitive bidding)
    const sortedNegotiations = [...chore.negotiations].sort((a, b) => a.value - b.value);
    
    sortedNegotiations.forEach((negotiation, index) => {
        const kid = appData.kids.find(k => k.id === negotiation.kidId);
        const kidName = kid ? kid.name : 'Unknown';
        
        const negElement = document.createElement('div');
        negElement.className = `parent-bidding-item ${index === 0 ? 'best-offer' : ''}`;
        negElement.innerHTML = `
            <div class="bidding-info">
                <div class="bidding-header">
                    <strong>${kidName}</strong>
                    ${index === 0 ? '<span class="best-offer-badge">Najbolji predlog</span>' : ''}
                </div>
                <div class="bidding-details">
                    <span class="bidding-value">${formatCurrency(negotiation.value)}</span>
                    <span class="bidding-deadline">Rok: ${new Date(negotiation.deadline).toLocaleDateString()}</span>
                    <span class="bidding-time">Poslato: ${new Date(negotiation.timestamp).toLocaleString()}</span>
                </div>
            </div>
            <div class="bidding-actions">
                <button class="btn-success btn-small" onclick="acceptSpecificNegotiation(${chore.id}, ${negotiation.kidId})">
                    Prihvati
                </button>
                <button class="btn-warning btn-small" onclick="counterSpecificNegotiation(${chore.id}, ${negotiation.kidId})">
                    Kontrapredlog
                </button>
            </div>
        `;
        
        container.appendChild(negElement);
    });
}

function acceptSpecificNegotiation(choreId, kidId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore || !chore.negotiations) return;
    
    const acceptedNegotiation = chore.negotiations.find(n => n.kidId === kidId);
    if (!acceptedNegotiation) return;
    
    // Assign task to the specific kid
    chore.assignedTo = acceptedNegotiation.kidId;
    chore.value = acceptedNegotiation.value;
    chore.deadline = acceptedNegotiation.deadline;
    chore.status = 'assigned';
    chore.acceptedBy = acceptedNegotiation.kidId;
    chore.acceptedDate = new Date().toISOString();
    
    // Clear negotiations
    delete chore.negotiations;
    
    const acceptedKid = appData.kids.find(k => k.id === acceptedNegotiation.kidId);
    const kidName = acceptedKid ? acceptedKid.name : 'Unknown';
    
    saveData();
    closeModal('parentBiddingModal');
    showNotification(`Prihvaćen je predlog od ${kidName} za ${formatCurrency(acceptedNegotiation.value)}!`);
    renderParentChores();
}

function counterSpecificNegotiation(choreId, kidId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore || !chore.negotiations) return;
    
    const negotiation = chore.negotiations.find(n => n.kidId === kidId);
    if (!negotiation) return;
    
    // Show counter offer modal for specific kid
    const kid = appData.kids.find(k => k.id === kidId);
    const kidName = kid ? kid.name : 'Unknown';
    
    document.getElementById('specificCounterTaskDescription').textContent = chore.description;
    document.getElementById('specificCounterKidName').textContent = kidName;
    document.getElementById('specificCounterCurrentOffer').textContent = formatCurrency(negotiation.value);
    document.getElementById('specificCounterCurrentDeadline').textContent = new Date(negotiation.deadline).toLocaleDateString();
    document.getElementById('specificCounterNewValue').value = negotiation.value;
    document.getElementById('specificCounterNewDeadline').value = negotiation.deadline;
    
    document.getElementById('specificCounterModal').classList.add('active');
    document.getElementById('specificCounterModal').dataset.choreId = choreId;
    document.getElementById('specificCounterModal').dataset.kidId = kidId;
    
    closeModal('parentBiddingModal');
}

function makeSpecificCounterOffer() {
    const choreId = parseInt(document.getElementById('specificCounterModal').dataset.choreId);
    const kidId = parseInt(document.getElementById('specificCounterModal').dataset.kidId);
    const newValue = parseInt(document.getElementById('specificCounterNewValue').value);
    const newDeadline = document.getElementById('specificCounterNewDeadline').value;
    
    if (!newValue || !newDeadline) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore || !chore.negotiations) return;
    
    // Update the specific kid's negotiation
    const negotiationIndex = chore.negotiations.findIndex(n => n.kidId === kidId);
    if (negotiationIndex !== -1) {
        chore.negotiations[negotiationIndex].value = newValue;
        chore.negotiations[negotiationIndex].deadline = newDeadline;
        chore.negotiations[negotiationIndex].timestamp = new Date().toISOString();
        chore.negotiations[negotiationIndex].lastCounterBy = 'parent';
    }
    
    const kid = appData.kids.find(k => k.id === kidId);
    const kidName = kid ? kid.name : 'Unknown';
    
    saveData();
    closeModal('specificCounterModal');
    showNotification(`Kontrapredlog je poslat za ${kidName}!`);
    renderParentChores();
}

function makeParentCounterOffer() {
    const choreId = parseInt(document.getElementById('parentNegotiationModal').dataset.choreId);
    const newValue = parseInt(document.getElementById('parentNegNewValue').value);
    const newDeadline = document.getElementById('parentNegNewDeadline').value;
    
    if (!newValue || !newDeadline) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Update chore with parent's counter offer
    chore.value = newValue;
    chore.deadline = newDeadline;
    chore.lastNegotiationBy = 'parent';
    chore.lastNegotiationDate = new Date().toISOString();
    // Keep status as 'negotiating' so child can respond
    
    saveData();
    closeModal('parentNegotiationModal');
    showNotification('Kontrapredlog je poslat detetu!');
    renderParentChores();
}

function makeKidCounterOffer(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Show negotiation modal for kid counter-offer
    document.getElementById('negTaskDescription').textContent = chore.description;
    document.getElementById('negCurrentOffer').textContent = formatCurrency(chore.value);
    document.getElementById('negCurrentDeadline').textContent = new Date(chore.deadline).toLocaleDateString();
    document.getElementById('negNewValue').value = chore.value;
    document.getElementById('negNewDeadline').value = chore.deadline;
    
    document.getElementById('negotiationModal').classList.add('active');
    document.getElementById('negotiationModal').dataset.choreId = choreId;
}

// Modal functions
function showAddChoreModal() {
    // Populate kids dropdown
    const assignmentSelect = document.getElementById('choreAssignment');
    assignmentSelect.innerHTML = '<option value="open">Otvori za nadmetanje</option>';
    
    appData.kids.forEach(kid => {
        const option = document.createElement('option');
        option.value = kid.id;
        option.textContent = kid.name;
        assignmentSelect.appendChild(option);
    });
    
    // Set default deadline to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('choreDeadline').value = tomorrow.toISOString().split('T')[0];
    
    document.getElementById('addChoreModal').classList.add('active');
}

function addChore() {
    const description = document.getElementById('choreDescription').value.trim();
    const value = parseInt(document.getElementById('choreValue').value);
    const deadline = document.getElementById('choreDeadline').value;
    const assignedToValue = document.getElementById('choreAssignment').value;
    const isRecurring = document.getElementById('choreRecurring').checked;
    const recurringFrequency = document.getElementById('recurringFrequency').value;
    
    if (!description || !value || !deadline) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    // Convert assignedTo to proper type: keep 'open' as string, convert kid IDs to numbers
    const assignedTo = assignedToValue === 'open' ? 'open' : parseInt(assignedToValue);
    
    const newChore = {
        id: Date.now(),
        description,
        value,
        deadline,
        assignedTo,
        status: 'available',
        createdDate: new Date().toISOString(),
        isRecurring: isRecurring,
        recurringFrequency: isRecurring ? recurringFrequency : null,
        lastRecurringDate: isRecurring ? new Date().toISOString() : null
    };
    
    appData.chores.push(newChore);
    saveData();
    
    // Clear form
    document.getElementById('choreDescription').value = '';
    document.getElementById('choreValue').value = '';
    document.getElementById('choreDeadline').value = '';
    document.getElementById('choreAssignment').selectedIndex = 0;
    document.getElementById('choreRecurring').checked = false;
    document.getElementById('recurringFrequency').value = 'weekly';
    toggleRecurringOptions();
    
    closeModal('addChoreModal');
    showNotification(t('choreAdded'));
    renderParentChores();
}

function showAddKidModal() {
    document.getElementById('addKidModal').classList.add('active');
}

function addKid() {
    const name = document.getElementById('kidName').value.trim();
    const balance = 0; // Default balance is always 0
    
    if (!name) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    const newKid = {
        id: Date.now(),
        name,
        balance,
        goal: null
    };
    
    appData.kids.push(newKid);
    saveData();
    
    // Clear form
    document.getElementById('kidName').value = '';
    
    closeModal('addKidModal');
    showNotification(t('childAdded'));
    renderParentKids();
}

function editKidBalance(kidId) {
    const kid = appData.kids.find(k => k.id === kidId);
    if (!kid) return;
    
    const newBalance = prompt(`Novi iznos za ${kid.name}:`, kid.balance);
    if (newBalance !== null && !isNaN(newBalance)) {
        const oldBalance = kid.balance;
        kid.balance = parseInt(newBalance);
        
        // Add to history if balance changed
        if (oldBalance !== kid.balance) {
            appData.history.push({
                id: Date.now(),
                kidId: kid.id,
                date: new Date().toISOString(),
                description: 'Ručno podešavanje balansa',
                amount: kid.balance - oldBalance
            });
        }
        
        saveData();
        renderParentKids();
    }
}

function deleteKid(kidId) {
    if (confirm('Da li ste sigurni da želite da obrišete ovo dete?')) {
        appData.kids = appData.kids.filter(k => k.id !== kidId);
        // Remove kid's chores and history
        appData.chores = appData.chores.filter(c => c.assignedTo !== kidId);
        appData.history = appData.history.filter(h => h.kidId !== kidId);
        saveData();
        renderParentKids();
    }
}

function showGoalModal() {
    const kid = appData.kids.find(k => k.id === appData.currentKid);
    if (!kid) return;
    
    if (kid.goal) {
        document.getElementById('goalNameInput').value = kid.goal.name;
        document.getElementById('goalAmountInput').value = kid.goal.amount;
    } else {
        document.getElementById('goalNameInput').value = '';
        document.getElementById('goalAmountInput').value = '';
    }
    
    document.getElementById('goalModal').classList.add('active');
}

function setGoal() {
    const name = document.getElementById('goalNameInput').value.trim();
    const amount = parseInt(document.getElementById('goalAmountInput').value);
    
    if (!name || !amount) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    const kid = appData.kids.find(k => k.id === appData.currentKid);
    if (!kid) return;
    
    kid.goal = { name, amount };
    
    saveData();
    closeModal('goalModal');
    showNotification(t('goalSet'));
    renderKidDashboard();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Goal completion functions
function showGoalCompletionModal(kid) {
    if (!kid.goal) return;
    
    // Create the modal dynamically if it doesn't exist
    let modal = document.getElementById('goalCompletionModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'goalCompletionModal';
        modal.className = 'modal goal-completion-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="goal-completion-header">
                    <span class="celebration-emoji">🎉</span>
                    <h1 class="goal-completion-title" id="goalCompletionTitle">${t('congratulations')}</h1>
                    <h2 class="goal-completion-subtitle" id="goalCompletionSubtitle">${t('goalAchieved')}</h2>
                </div>
                <div class="goal-completion-body">
                    <div class="goal-details">
                        <div class="goal-name" id="completedGoalName">${kid.goal.name}</div>
                        <div class="goal-amount" id="completedGoalAmount">${formatCurrency(kid.goal.amount)}</div>
                        <p class="goal-message" id="goalCompletionMessage">
                            ${t('goalCompletionMessage')}
                        </p>
                    </div>
                </div>
                <div class="goal-completion-actions">
                    <button class="goal-action-btn btn-archive-and-new" onclick="archiveGoalAndSetNew()">
                        ${t('archiveGoal')} & ${t('setNewGoal')}
                    </button>
                    <button class="goal-action-btn btn-archive-only" onclick="archiveGoalOnly()">
                        ${t('archiveGoal')}
                    </button>
                    <button class="goal-action-btn btn-keep-saving" onclick="closeModal('goalCompletionModal')">
                        ${t('keepSaving')}
                    </button>
                </div>
            </div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
            <div class="confetti"></div>
        `;
        document.body.appendChild(modal);
    }
    
    // Update modal content with current translations and goal info
    document.getElementById('goalCompletionTitle').textContent = t('congratulations');
    document.getElementById('goalCompletionSubtitle').textContent = t('goalAchieved');
    document.getElementById('completedGoalName').textContent = kid.goal.name;
    document.getElementById('completedGoalAmount').textContent = formatCurrency(kid.goal.amount);
    document.getElementById('goalCompletionMessage').textContent = t('goalCompletionMessage');
    
    // Update button texts
    const buttons = modal.querySelectorAll('.goal-action-btn');
    buttons[0].innerHTML = `${t('archiveGoal')} & ${t('setNewGoal')}`;
    buttons[1].textContent = t('archiveGoal');
    buttons[2].textContent = t('keepSaving');
    
    // Show the modal with celebration effect
    modal.classList.add('active');
    
    // Store the kid ID for the action functions
    modal.dataset.kidId = kid.id;
    
    // Add celebration sound effect (optional - browser dependent)
    try {
        // Create a simple celebration sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        // Ignore audio errors - not critical for functionality
        console.log('Audio celebration effect not available');
    }
}

function archiveGoalAndSetNew() {
    archiveCurrentGoal();
    closeModal('goalCompletionModal');
    
    // Small delay to let the modal close, then show goal setting modal
    setTimeout(() => {
        showGoalModal();
    }, 300);
}

function archiveGoalOnly() {
    archiveCurrentGoal();
    closeModal('goalCompletionModal');
}

function archiveCurrentGoal() {
    const modal = document.getElementById('goalCompletionModal');
    const kidId = parseInt(modal.dataset.kidId);
    const kid = appData.kids.find(k => k.id === kidId);
    
    if (!kid || !kid.goal) return;
    
    // Add completed goal to history
    appData.history.push({
        id: Date.now(),
        kidId: kid.id,
        date: new Date().toISOString(),
        description: `Cilj završen: ${kid.goal.name}`,
        amount: kid.goal.amount
    });
    
    // Remove the current goal
    kid.goal = null;
    
    // Save data
    saveData();
    
    // Show success notification
    showNotification(t('goalArchived'));
    
    // Re-render the dashboard
    renderKidDashboard();
}

// Bonus functions
function showBonusModal(kidId) {
    const kid = appData.kids.find(k => k.id === kidId);
    if (!kid) return;
    
    // Clear previous values
    document.getElementById('bonusAmount').value = '';
    document.getElementById('bonusReason').value = '';
    
    // Set kid name in modal
    document.getElementById('bonusKidName').textContent = kid.name;
    
    // Store kid ID for later use
    document.getElementById('bonusModal').dataset.kidId = kidId;
    
    document.getElementById('bonusModal').classList.add('active');
}

function payBonus() {
    const kidId = parseInt(document.getElementById('bonusModal').dataset.kidId);
    const amount = parseInt(document.getElementById('bonusAmount').value);
    const reason = document.getElementById('bonusReason').value.trim();
    
    if (!amount || amount <= 0) {
        showNotification('Unesite valjan iznos bonusa!', 'error');
        return;
    }
    
    if (!reason) {
        showNotification('Unesite razlog za bonus!', 'error');
        return;
    }
    
    const kid = appData.kids.find(k => k.id === kidId);
    if (!kid) return;
    
    // Add bonus to kid's balance
    kid.balance += amount;
    
    // Add to history
    appData.history.push({
        id: Date.now(),
        kidId: kid.id,
        date: new Date().toISOString(),
        description: `Bonus: ${reason}`,
        amount: amount
    });
    
    saveData();
    closeModal('bonusModal');
    showNotification(t('bonusPaid'));
    renderParentKids();
}

// Settings functions
function changePin() {
    const newPin = document.getElementById('newPin').value;
    
    if (!newPin || newPin.length !== 4) {
        showNotification(t('fillAllFields'), 'error');
        return;
    }
    
    appData.parentPin = newPin;
    saveData();
    
    document.getElementById('newPin').value = '';
    showNotification(t('pinChanged'));
}

function updateSettings() {
    const languageCurrency = document.getElementById('settingsLanguageCurrency').value;
    const negotiation = document.getElementById('settingsNegotiation').checked;
    
    const [language, currency] = languageCurrency.split('-');
    appData.language = language;
    appData.currency = currency;
    appData.negotiationEnabled = negotiation;
    
    saveData();
    showNotification('Podešavanja su ažurirana!');
    
    // Update UI language
    updateUILanguage();
}

function updateUILanguage() {
    // Update all translatable elements
    document.documentElement.lang = appData.language;
    
    // Re-render current screen content
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen) {
        const screenId = activeScreen.id;
        if (screenId === 'kidDashboard') {
            renderKidDashboard();
        } else if (screenId === 'parentDashboard') {
            renderParentDashboard();
        }
    }
}

// Welcome and Login Functions
function showWelcomeScreen() {
    showScreen('welcomeScreen');
}

function showSetupScreen() {
    showScreen('setupScreen');
}

function showLoginScreen() {
    showScreen('familyLoginScreen');
    // Clear previous input
    document.getElementById('familyIdInput').value = '';
    document.getElementById('loginPinInput').value = '';
}

// Family Login Function
async function loginFamily() {
    const familyId = document.getElementById('familyIdInput').value.trim();
    const pin = document.getElementById('loginPinInput').value.trim();
    
    if (!familyId || !pin) {
        showNotification('Molimo unesite ID porodice i PIN!', 'error');
        return;
    }
    
    if (pin.length !== 4) {
        showNotification('PIN mora imati 4 cifre!', 'error');
        return;
    }
    
    try {
        // Check if family exists
        const familyExists = await FirebaseDB.familyExists(familyId);
        if (!familyExists) {
            showNotification('Porodica sa tim ID-om ne postoji!', 'error');
            return;
        }
        
        // Load family data
        const familyData = await FirebaseDB.getFamilyData(familyId);
        if (!familyData) {
            showNotification('Greška pri učitavanju podataka porodice!', 'error');
            return;
        }
        
        // Verify PIN
        if (familyData.parentPin !== pin) {
            showNotification('Netačan PIN!', 'error');
            return;
        }
        
        // Login successful - load family data
        appData = { ...appData, ...familyData };
        appData.familyId = familyId;
        
        // Save family ID to localStorage for future sessions
        localStorage.setItem('dzeparac-family-id', familyId);
        
        // Setup real-time listener
        setupRealtimeListener();
        
        showNotification('Uspešno ste se prijavili!', 'success');
        showMainScreen();
        
    } catch (error) {
        console.error('Login error:', error);
        showNotification('Greška pri prijavi. Pokušajte ponovo.', 'error');
    }
}

// Copy Family ID function
function copyFamilyId() {
    const familyIdInput = document.getElementById('familyIdDisplay');
    familyIdInput.select();
    familyIdInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        showNotification('ID porodice je kopiran!', 'success');
    } catch (err) {
        // Fallback for modern browsers
        navigator.clipboard.writeText(familyIdInput.value).then(() => {
            showNotification('ID porodice je kopiran!', 'success');
        }).catch(() => {
            showNotification('Greška pri kopiranju ID-a!', 'error');
        });
    }
}

// Logout functions
function logout() {
    // Clear current kid selection
    appData.currentKid = null;
    
    // Return to main screen
    showMainScreen();
    showNotification('Uspešno ste se odjavili!', 'success');
}

function logoutCompletely() {
    // Show confirmation dialog
    if (confirm('Da li želite da se potpuno odjavite? Moraćete ponovo da unesete ID porodice za sledeću prijavu.')) {
        // Clear current session
        appData.currentKid = null;
        
        // Remove Firebase listener
        if (dataListener) {
            dataListener();
            dataListener = null;
        }
        
        // Clear localStorage
        localStorage.removeItem('dzeparac-family-id');
        
        // Reset app data to initial state
        appData = {
            isSetup: false,
            language: 'sr',
            currency: 'RSD',
            parentPin: '',
            negotiationEnabled: false,
            kids: [],
            chores: [],
            history: [],
            currentKid: null,
            familyId: null
        };
        
        // Return to welcome screen
        showWelcomeScreen();
        showNotification('Potpuno ste se odjavili!', 'success');
    }
}

// Initialize app
async function initApp() {
    await loadData();
    
    if (appData.isSetup) {
        showMainScreen();
    } else {
        showScreen('welcomeScreen');
    }
    
    updateUILanguage();
}

// Event listeners
document.addEventListener('DOMContentLoaded', initApp);

// Modal background click to close
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Settings change listeners
document.getElementById('settingsLanguageCurrency').addEventListener('change', updateSettings);
document.getElementById('settingsNegotiation').addEventListener('change', updateSettings);

// Enter key listeners
document.getElementById('pinInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verifyPin();
    }
});

document.getElementById('parentPin').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        completeSetup();
    }
});

// Setup kid form listeners
document.getElementById('setupKidName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addKidToSetup();
    }
});

// Recurring chores functions
function toggleRecurringOptions() {
    const isRecurring = document.getElementById('choreRecurring').checked;
    const frequencyContainer = document.getElementById('recurringFrequencyContainer');
    
    if (frequencyContainer) {
        frequencyContainer.style.display = isRecurring ? 'block' : 'none';
    }
}

function processRecurringChores() {
    const now = new Date();
    
    appData.chores.forEach(chore => {
        if (chore.isRecurring && chore.status === 'paid' && chore.lastRecurringDate) {
            const lastDate = new Date(chore.lastRecurringDate);
            let shouldCreateNew = false;
            
            switch (chore.recurringFrequency) {
                case 'daily':
                    shouldCreateNew = (now - lastDate) >= (24 * 60 * 60 * 1000); // 1 day
                    break;
                case 'weekly':
                    shouldCreateNew = (now - lastDate) >= (7 * 24 * 60 * 60 * 1000); // 7 days
                    break;
                case 'monthly':
                    shouldCreateNew = (now - lastDate) >= (30 * 24 * 60 * 60 * 1000); // 30 days
                    break;
            }
            
            if (shouldCreateNew) {
                createRecurringChore(chore);
            }
        }
    });
}

function createRecurringChore(originalChore) {
    const now = new Date();
    let newDeadline = new Date(now);
    
    // Set new deadline based on frequency
    switch (originalChore.recurringFrequency) {
        case 'daily':
            newDeadline.setDate(newDeadline.getDate() + 1);
            break;
        case 'weekly':
            newDeadline.setDate(newDeadline.getDate() + 7);
            break;
        case 'monthly':
            newDeadline.setMonth(newDeadline.getMonth() + 1);
            break;
    }
    
    const newChore = {
        id: Date.now(),
        description: originalChore.description,
        value: originalChore.value,
        deadline: newDeadline.toISOString().split('T')[0],
        assignedTo: originalChore.assignedTo,
        status: 'available',
        createdDate: now.toISOString(),
        isRecurring: true,
        recurringFrequency: originalChore.recurringFrequency,
        lastRecurringDate: now.toISOString(),
        parentChoreId: originalChore.id // Link to original recurring chore
    };
    
    appData.chores.push(newChore);
    
    // Update the original chore's last recurring date
    originalChore.lastRecurringDate = now.toISOString();
    
    saveData();
}

// Helper function to calculate amount due to a kid (unpaid completed tasks)
function calculateAmountDue(kidId) {
    return appData.chores
        .filter(chore => chore.assignedTo === kidId && chore.status === 'completed')
        .reduce((total, chore) => total + chore.value, 0);
}

// Family statistics functions
function calculateLifetimeEarnings(kidId) {
    return appData.history
        .filter(h => h.kidId === kidId && h.amount > 0)
        .reduce((total, h) => total + h.amount, 0);
}

function calculateMonthlyEarnings(kidId) {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    return appData.history
        .filter(h => h.kidId === kidId && h.amount > 0 && new Date(h.date) >= startOfMonth)
        .reduce((total, h) => total + h.amount, 0);
}

function getCompletedGoals(kidId) {
    // For now, we'll track completed goals in history
    // In a more advanced version, we could have a separate completedGoals array
    return appData.history
        .filter(h => h.kidId === kidId && h.description.startsWith('Cilj završen:'))
        .map(h => ({
            name: h.description.replace('Cilj završen: ', ''),
            date: h.date,
            amount: h.amount
        }));
}

function renderFamilyStats() {
    const currentKid = appData.kids.find(k => k.id === appData.currentKid);
    if (!currentKid) return;
    
    // Only show family stats if there are multiple kids
    const familyStatsSection = document.getElementById('familyStatsSection');
    if (appData.kids.length <= 1) {
        if (familyStatsSection) {
            familyStatsSection.style.display = 'none';
        }
        return;
    }
    
    const container = document.getElementById('familyStatsContainer');
    if (!container || !familyStatsSection) return;
    
    familyStatsSection.style.display = 'block';
    container.innerHTML = '';
    
    // Create stats for each kid (excluding current kid)
    appData.kids.forEach(kid => {
        if (kid.id === appData.currentKid) return; // Skip current kid
        
        const lifetimeEarnings = calculateLifetimeEarnings(kid.id);
        const monthlyEarnings = calculateMonthlyEarnings(kid.id);
        const completedGoals = getCompletedGoals(kid.id);
        
        const kidStatsElement = document.createElement('div');
        kidStatsElement.className = 'family-stats-kid';
        
        let goalProgressHtml = '';
        if (kid.goal) {
            const progress = Math.min((kid.balance / kid.goal.amount) * 100, 100);
            goalProgressHtml = `
                <div class="stat-item">
                    <span class="stat-label">${t('currentGoal')}:</span>
                    <span class="stat-value">${kid.goal.name}</span>
                    <div class="goal-progress-bar">
                        <div class="goal-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="goal-progress-text">${formatCurrency(kid.balance)} / ${formatCurrency(kid.goal.amount)}</span>
                </div>
            `;
        } else {
            goalProgressHtml = `
                <div class="stat-item">
                    <span class="stat-label">${t('currentGoal')}:</span>
                    <span class="stat-value">${t('noGoal')}</span>
                </div>
            `;
        }
        
        let completedGoalsHtml = '';
        if (completedGoals.length > 0) {
            completedGoalsHtml = `
                <div class="stat-item">
                    <span class="stat-label">${t('completedGoals')}:</span>
                    <div class="completed-goals-list">
                        ${completedGoals.slice(-3).map(goal => `
                            <div class="completed-goal-item">
                                <span class="goal-name">${goal.name}</span>
                                <span class="goal-date">${new Date(goal.date).toLocaleDateString()}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            completedGoalsHtml = `
                <div class="stat-item">
                    <span class="stat-label">${t('completedGoals')}:</span>
                    <span class="stat-value">${t('noCompletedGoals')}</span>
                </div>
            `;
        }
        
        kidStatsElement.innerHTML = `
            <div class="family-stats-header">
                <div class="family-stats-avatar">
                    <i class="fas fa-child"></i>
                </div>
                <h4>${kid.name}</h4>
            </div>
            <div class="family-stats-content">
                <div class="stat-item">
                    <span class="stat-label">${t('lifetimeEarnings')}:</span>
                    <span class="stat-value">${formatCurrency(lifetimeEarnings)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">${t('monthlyEarnings')}:</span>
                    <span class="stat-value">${formatCurrency(monthlyEarnings)}</span>
                </div>
                ${goalProgressHtml}
                ${completedGoalsHtml}
            </div>
        `;
        
        container.appendChild(kidStatsElement);
    });
}

// Initialize setup kids list on page load
document.addEventListener('DOMContentLoaded', () => {
    renderSetupKids();
    
    // Process recurring chores on app load
    processRecurringChores();
    
    // Set up interval to check for recurring chores every hour
    setInterval(processRecurringChores, 60 * 60 * 1000);
});
