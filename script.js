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
        
        // Empty states
        noChores: 'Nema zadataka',
        noChildren: 'Nema djece',
        noHistory: 'Nema istorije',
        noGoal: 'Nema cilja'
    }
};

// Currency symbols
const currencySymbols = {
    'RSD': 'RSD',
    'EUR': '€',
    'KM': 'KM'
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
    } else {
        goalName.textContent = t('addGoal');
        goalAmount.textContent = '0 / 0';
        goalProgress.style.width = '0%';
    }
}

function renderKidChores(kid) {
    // Available chores (open for bidding or assigned to this kid)
    const availableChores = appData.chores.filter(chore => 
        chore.status === 'available' && 
        (chore.assignedTo === kid.id || chore.assignedTo === 'open')
    );
    
    const availableContainer = document.getElementById('availableChores');
    renderChoresList(availableContainer, availableChores, 'kid-available');
    
    // My chores (assigned to this kid)
    const myChores = appData.chores.filter(chore => 
        chore.assignedTo === kid.id && chore.status !== 'available'
    );
    
    const myContainer = document.getElementById('myChores');
    renderChoresList(myContainer, myChores, 'kid-my');
}

function renderKidHistory(kid) {
    const kidHistory = appData.history.filter(h => h.kidId === kid.id);
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
    
    container.innerHTML = '';
    kidHistory.forEach(item => {
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
        const kidElement = document.createElement('div');
        kidElement.className = 'kid-management-item';
        
        kidElement.innerHTML = `
            <div class="kid-management-info">
                <h4>${kid.name}</h4>
                <div class="kid-management-balance">${formatCurrency(kid.balance)}</div>
            </div>
            <div class="kid-management-actions">
                <button class="btn-secondary btn-small" onclick="editKidBalance(${kid.id})">
                    ${t('edit')}
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
    const container = document.getElementById('parentHistory');
    
    if (appData.history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-history"></i>
                <h3>${t('noHistory')}</h3>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    appData.history.forEach(item => {
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
            } else {
                actionsHtml = `
                    <button class="btn-secondary btn-small" onclick="editChore(${chore.id})">
                        ${t('edit')}
                    </button>
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

// Chore actions
function acceptChore(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    chore.status = 'assigned';
    chore.assignedTo = appData.currentKid;
    
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
    
    document.getElementById('negotiationModal').classList.add('active');
    document.getElementById('negotiationModal').dataset.choreId = choreId;
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
    
    // Update chore with counter offer
    chore.value = newValue;
    chore.deadline = newDeadline;
    chore.status = 'negotiating';
    chore.negotiatingWith = appData.currentKid;
    
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

// Parent negotiation functions
function acceptNegotiation(choreId) {
    const chore = appData.chores.find(c => c.id === choreId);
    if (!chore) return;
    
    // Accept the negotiation and assign the task
    chore.status = 'assigned';
    
    saveData();
    showNotification('Pregovaranje je prihvaćeno! Zadatak je dodeljen.');
    
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
    
    // Show parent negotiation modal
    document.getElementById('parentNegTaskDescription').textContent = chore.description;
    document.getElementById('parentNegCurrentOffer').textContent = formatCurrency(chore.value);
    document.getElementById('parentNegCurrentDeadline').textContent = new Date(chore.deadline).toLocaleDateString();
    document.getElementById('parentNegNewValue').value = chore.value;
    document.getElementById('parentNegNewDeadline').value = chore.deadline;
    
    const negotiatingKid = appData.kids.find(k => k.id === chore.negotiatingWith);
    const kidName = negotiatingKid ? negotiatingKid.name : 'Unknown';
    document.getElementById('parentNegKidName').textContent = kidName;
    
    document.getElementById('parentNegotiationModal').classList.add('active');
    document.getElementById('parentNegotiationModal').dataset.choreId = choreId;
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
        createdDate: new Date().toISOString()
    };
    
    appData.chores.push(newChore);
    saveData();
    
    // Clear form
    document.getElementById('choreDescription').value = '';
    document.getElementById('choreValue').value = '';
    document.getElementById('choreDeadline').value = '';
    document.getElementById('choreAssignment').selectedIndex = 0;
    
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

// Initialize setup kids list on page load
document.addEventListener('DOMContentLoaded', () => {
    renderSetupKids();
});
