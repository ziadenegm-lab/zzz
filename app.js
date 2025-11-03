// Application State
const appState = {
  currentUser: null,
  selectedEmployees: [],
  assessments: {},
  users: [],
  employees: [],
  assessmentHistory: []
};

// Initialize sample data
function initializeData() {
  // Sample users with permissions
  appState.users = [
    { 
      id: 1, username: 'manager1', password: 'pass123', fullName: 'Ahmed Hassan', role: 'LineManager',
      lastLogin: '2024-11-01 09:00',
      permissions: {
        canAssessEmployees: true, canViewAllAssessments: false, canEditOwnAssessmentsOnly: true, canEditAllAssessments: false,
        canAddEmployees: false, canEditEmployeeData: false, canDeleteEmployees: false, canViewAllEmployees: false,
        canAccessAllSections: false, restrictedToSections: ['Operations'],
        canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
        canViewExecutiveDashboard: true, canExportReportsToPDF: false, canViewAllManagerData: false, canAccessAnalytics: true,
        canManageUsers: false, canAssignRoles: false, canResetPasswords: false
      }
    },
    { 
      id: 2, username: 'manager2', password: 'pass123', fullName: 'Fatima Mohamed', role: 'LineManager',
      lastLogin: '2024-11-02 10:30',
      permissions: {
        canAssessEmployees: true, canViewAllAssessments: false, canEditOwnAssessmentsOnly: true, canEditAllAssessments: false,
        canAddEmployees: false, canEditEmployeeData: false, canDeleteEmployees: false, canViewAllEmployees: false,
        canAccessAllSections: false, restrictedToSections: ['Finance', 'Sales & Marketing'],
        canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
        canViewExecutiveDashboard: true, canExportReportsToPDF: false, canViewAllManagerData: false, canAccessAnalytics: true,
        canManageUsers: false, canAssignRoles: false, canResetPasswords: false
      }
    },
    { 
      id: 3, username: 'manager3', password: 'pass123', fullName: 'Omar Khalil', role: 'LineManager',
      lastLogin: '2024-11-02 14:15',
      permissions: {
        canAssessEmployees: true, canViewAllAssessments: false, canEditOwnAssessmentsOnly: true, canEditAllAssessments: false,
        canAddEmployees: false, canEditEmployeeData: false, canDeleteEmployees: false, canViewAllEmployees: false,
        canAccessAllSections: false, restrictedToSections: ['Human Resources', 'IT'],
        canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
        canViewExecutiveDashboard: true, canExportReportsToPDF: false, canViewAllManagerData: false, canAccessAnalytics: true,
        canManageUsers: false, canAssignRoles: false, canResetPasswords: false
      }
    },
    { 
      id: 4, username: 'hr1', password: 'pass123', fullName: 'Layla Ibrahim', role: 'HR',
      lastLogin: '2024-11-03 08:00',
      permissions: {
        canAssessEmployees: true, canViewAllAssessments: true, canEditOwnAssessmentsOnly: false, canEditAllAssessments: true,
        canAddEmployees: true, canEditEmployeeData: true, canDeleteEmployees: true, canViewAllEmployees: true,
        canAccessAllSections: true, restrictedToSections: [],
        canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
        canViewExecutiveDashboard: true, canExportReportsToPDF: true, canViewAllManagerData: true, canAccessAnalytics: true,
        canManageUsers: true, canAssignRoles: true, canResetPasswords: true
      }
    },
    { 
      id: 5, username: 'hr2', password: 'pass123', fullName: 'Noor Hassan', role: 'HR',
      lastLogin: '2024-11-03 08:30',
      permissions: {
        canAssessEmployees: true, canViewAllAssessments: true, canEditOwnAssessmentsOnly: false, canEditAllAssessments: true,
        canAddEmployees: true, canEditEmployeeData: true, canDeleteEmployees: true, canViewAllEmployees: true,
        canAccessAllSections: true, restrictedToSections: [],
        canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
        canViewExecutiveDashboard: true, canExportReportsToPDF: true, canViewAllManagerData: true, canAccessAnalytics: true,
        canManageUsers: true, canAssignRoles: true, canResetPasswords: true
      }
    }
  ];

  // Sample employees
  appState.employees = [
    { id: 1001, name: 'Karim Said', jobTitle: 'Senior Engineer', jobGrade: 'G4', direction: 'Operations', department: 'Engineering', jobCategory: 'Technical', last3YearsPerformance: 4.5 },
    { id: 1002, name: 'Sarah Khan', jobTitle: 'HR Specialist', jobGrade: 'G3', direction: 'Human Resources', department: 'Talent Management', jobCategory: 'Administrative', last3YearsPerformance: 4.0 },
    { id: 1003, name: 'Ahmed Saleh', jobTitle: 'Project Manager', jobGrade: 'G3', direction: 'Operations', department: 'Projects', jobCategory: 'Management', last3YearsPerformance: 3.8 },
    { id: 1004, name: 'Mona Aziz', jobTitle: 'Marketing Manager', jobGrade: 'G3', direction: 'Sales & Marketing', department: 'Marketing', jobCategory: 'Management', last3YearsPerformance: 3.5 },
    { id: 1005, name: 'Hassan Ahmed', jobTitle: 'Financial Analyst', jobGrade: 'G2', direction: 'Finance', department: 'Financial Analysis', jobCategory: 'Technical', last3YearsPerformance: 3.2 },
    { id: 1006, name: 'Laila Karim', jobTitle: 'Operations Officer', jobGrade: 'G2', direction: 'Operations', department: 'Administration', jobCategory: 'Administrative', last3YearsPerformance: 3.8 },
    { id: 1007, name: 'Youssef Ali', jobTitle: 'Sales Executive', jobGrade: 'G2', direction: 'Sales & Marketing', department: 'Sales', jobCategory: 'Sales', last3YearsPerformance: 4.2 },
    { id: 1008, name: 'Dina Hassan', jobTitle: 'Quality Assurance Lead', jobGrade: 'G3', direction: 'Operations', department: 'Quality', jobCategory: 'Technical', last3YearsPerformance: 4.1 },
    { id: 1009, name: 'Tariq Mahmoud', jobTitle: 'IT Specialist', jobGrade: 'G2', direction: 'IT', department: 'Systems', jobCategory: 'Technical', last3YearsPerformance: 2.8 },
    { id: 1010, name: 'Amira Samir', jobTitle: 'Customer Service Manager', jobGrade: 'G3', direction: 'Operations', department: 'Customer Service', jobCategory: 'Management', last3YearsPerformance: 3.9 },
    { id: 1011, name: 'Rashid Nasser', jobTitle: 'Finance Manager', jobGrade: 'G4', direction: 'Finance', department: 'Finance', jobCategory: 'Management', last3YearsPerformance: 4.3 },
    { id: 1012, name: 'Noura Khalid', jobTitle: 'Sales Manager', jobGrade: 'G4', direction: 'Sales & Marketing', department: 'Sales', jobCategory: 'Management', last3YearsPerformance: 4.4 },
    { id: 1013, name: 'Jamal Abdel', jobTitle: 'Supply Chain Analyst', jobGrade: 'G2', direction: 'Operations', department: 'Supply Chain', jobCategory: 'Technical', last3YearsPerformance: 3.3 },
    { id: 1014, name: 'Hana Mahmoud', jobTitle: 'HR Generalist', jobGrade: 'G3', direction: 'Human Resources', department: 'HR Operations', jobCategory: 'Administrative', last3YearsPerformance: 3.7 },
    { id: 1015, name: 'Samir Hassan', jobTitle: 'Maintenance Technician', jobGrade: 'G1', direction: 'Operations', department: 'Maintenance', jobCategory: 'Technical', last3YearsPerformance: 2.5 }
  ];

  // Sample assessment history with complete data
  appState.assessmentHistory = [
    { employeeId: 1001, managerId: 1, year: 2024, performanceContribution: 3, evolutionPotential: 3, riskOfLoss: 'Low', impactOfLoss: 'High', nextRole: 'Engineering Director', readiness: '1-3 Years' },
    { employeeId: 1001, managerId: 1, year: 2023, performanceContribution: 3, evolutionPotential: 3 },
    { employeeId: 1002, managerId: 3, year: 2024, performanceContribution: 3, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'High', nextRole: 'HR Manager', readiness: 'Ready Now' },
    { employeeId: 1003, managerId: 1, year: 2024, performanceContribution: 2, evolutionPotential: 2, riskOfLoss: 'Medium', impactOfLoss: 'Medium', nextRole: 'Senior Project Manager', readiness: '1-3 Years' },
    { employeeId: 1004, managerId: 2, year: 2024, performanceContribution: 2, evolutionPotential: 3, riskOfLoss: 'High', impactOfLoss: 'Medium', nextRole: 'Director of Marketing', readiness: '1-3 Years' },
    { employeeId: 1005, managerId: 2, year: 2024, performanceContribution: 2, evolutionPotential: 1, riskOfLoss: 'Medium', impactOfLoss: 'Low', nextRole: 'Senior Analyst', readiness: 'More than 3 Years' },
    { employeeId: 1006, managerId: 1, year: 2024, performanceContribution: 2, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'Low', nextRole: 'Operations Supervisor', readiness: '1-3 Years' },
    { employeeId: 1007, managerId: 2, year: 2024, performanceContribution: 3, evolutionPotential: 3, riskOfLoss: 'High', impactOfLoss: 'High', nextRole: 'Sales Director', readiness: 'Ready Now' },
    { employeeId: 1008, managerId: 1, year: 2024, performanceContribution: 3, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'High', nextRole: 'Quality Director', readiness: '1-3 Years' },
    { employeeId: 1009, managerId: 3, year: 2024, performanceContribution: 1, evolutionPotential: 1, riskOfLoss: 'Low', impactOfLoss: 'Low', nextRole: 'Senior IT Technician', readiness: 'More than 3 Years' },
    { employeeId: 1010, managerId: 1, year: 2024, performanceContribution: 2, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'Medium', nextRole: 'Service Operations Manager', readiness: '1-3 Years' },
    { employeeId: 1011, managerId: 2, year: 2024, performanceContribution: 3, evolutionPotential: 3, riskOfLoss: 'Low', impactOfLoss: 'High', nextRole: 'CFO', readiness: '1-3 Years' },
    { employeeId: 1012, managerId: 2, year: 2024, performanceContribution: 3, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'High', nextRole: 'Sales VP', readiness: 'Ready Now' },
    { employeeId: 1013, managerId: 1, year: 2024, performanceContribution: 2, evolutionPotential: 1, riskOfLoss: 'Medium', impactOfLoss: 'Medium', nextRole: 'Senior Supply Chain Analyst', readiness: 'More than 3 Years' },
    { employeeId: 1014, managerId: 3, year: 2024, performanceContribution: 2, evolutionPotential: 2, riskOfLoss: 'Low', impactOfLoss: 'Medium', nextRole: 'HR Manager', readiness: '1-3 Years' },
    { employeeId: 1015, managerId: 1, year: 2024, performanceContribution: 1, evolutionPotential: 1, riskOfLoss: 'Medium', impactOfLoss: 'Low', nextRole: 'Senior Technician', readiness: 'More than 3 Years' }
  ];

  // Initialize comprehensive assessments from history
  appState.assessmentHistory.filter(h => h.year === 2024).forEach(h => {
    appState.assessments[h.employeeId] = {
      performanceContribution: h.performanceContribution,
      evolutionPotential: h.evolutionPotential,
      riskOfLoss: h.riskOfLoss || '',
      impactOfLoss: h.impactOfLoss || '',
      nextRole: h.nextRole || '',
      readiness: h.readiness || '',
      idp: '',
      comment: ''
    };
  });
}

// Authentication
function login(username, password) {
  console.log('Login function called');
  console.log('Checking credentials for:', username);
  console.log('Available usernames:', appState.users.map(u => u.username).join(', '));
  
  const user = appState.users.find(u => u.username === username && u.password === password);
  
  if (user) {
    console.log('User found:', user.fullName, '- Role:', user.role);
    appState.currentUser = user;
    
    // Update last login time
    user.lastLogin = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    return true;
  }
  
  console.log('User not found or password incorrect');
  return false;
}

function logout() {
  appState.currentUser = null;
  
  // Hide main app, show login page
  document.getElementById('mainApp').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
  
  // Clear login form
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').textContent = '';
  document.getElementById('loginError').style.display = 'none';
  
  // Focus on username field
  document.getElementById('loginUsername').focus();
  
  console.log('Logged out successfully');
}

// navigateAfterLogin function removed - navigation now handled directly in login form

// NAVIGATION - SIMPLIFIED AND GUARANTEED TO WORK
function showPage(pageName) {
  console.log('=== SHOWING PAGE:', pageName, '===');
  
  // Hide ALL page contents first
  const allPages = document.querySelectorAll('.page-content');
  allPages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('active');
  });
  console.log('✓ All pages hidden');
  
  // Map page names to IDs
  const pageMap = {
    'welcome': 'welcomePage',
    'instructions': 'instructionsPage',
    'criticalPositions': 'criticalPositionsPage',
    'assessment': 'assessmentPage',
    'retention': 'retentionPage',
    'nextSteps': 'nextStepsPage',
    'nineBoxGrid': 'nineBoxGridPage',
    'dashboard': 'dashboardPage',
    'usersList': 'usersListPage',
    'employeesDB': 'employeesDBPage'
  };
  
  const pageId = pageMap[pageName];
  if (!pageId) {
    console.error('✗ Invalid page name:', pageName);
    return;
  }
  
  // Show the selected page
  const pageElement = document.getElementById(pageId);
  if (pageElement) {
    pageElement.style.display = 'block';
    pageElement.classList.add('active');
    console.log('✓ Page displayed:', pageId);
  } else {
    console.error('✗ Page element not found:', pageId);
    return;
  }

  // Update navigation active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === pageName) {
      item.classList.add('active');
    }
  });

  // Load page-specific content
  if (pageName === 'criticalPositions') {
    loadCriticalPositionsPage();
  } else if (pageName === 'assessment') {
    loadAssessmentPage();
  } else if (pageName === 'retention') {
    loadRetentionPage();
  } else if (pageName === 'nextSteps') {
    loadNextStepsPage();
  } else if (pageName === 'nineBoxGrid') {
    loadNineBoxGrid();
  } else if (pageName === 'dashboard') {
    loadDashboard();
  } else if (pageName === 'usersList') {
    loadUsersList();
  } else if (pageName === 'employeesDB') {
    loadEmployeesDB();
  }
}

function setupNavigation() {
  console.log('Setting up navigation...');
  const navItems = document.querySelectorAll('.nav-item');
  console.log('Found', navItems.length, 'navigation items');
  
  navItems.forEach((item, index) => {
    const pageName = item.dataset.page;
    console.log(`Nav item ${index + 1}: ${pageName}`);
    
    item.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Navigation clicked:', pageName);
      showPage(pageName);
    });
  });
  
  console.log('✓ Navigation setup complete');
}

function updateNavigationForRole() {
  console.log('Updating navigation for role:', appState.currentUser.role);
  const role = appState.currentUser.role;
  
  if (role === 'HR') {
    // HR sees everything
    document.querySelectorAll('.manager-only').forEach(el => {
      el.style.display = 'block';
    });
    document.querySelectorAll('.hr-only').forEach(el => {
      el.style.display = 'block';
    });
    console.log('✓ HR role - all menu items visible');
  } else {
    // Manager sees manager items only
    document.querySelectorAll('.manager-only').forEach(el => {
      el.style.display = 'block';
    });
    document.querySelectorAll('.hr-only').forEach(el => {
      el.style.display = 'none';
    });
    console.log('✓ Manager role - HR items hidden');
  }
}

// Welcome Page
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
}

// Critical Positions Page
function loadCriticalPositionsPage() {
  populateFilters();
  renderEmployeesTable();
}

function populateFilters() {
  const directions = [...new Set(appState.employees.map(e => e.direction))];
  const departments = [...new Set(appState.employees.map(e => e.department))];
  const grades = [...new Set(appState.employees.map(e => e.jobGrade))];
  const categories = [...new Set(appState.employees.map(e => e.jobCategory))];

  const filterDirection = document.getElementById('filterDirection');
  const filterDepartment = document.getElementById('filterDepartment');
  const filterGrade = document.getElementById('filterGrade');
  const filterCategory = document.getElementById('filterCategory');

  // Clear and populate
  filterDirection.innerHTML = '<option value="">All Directions</option>';
  directions.forEach(d => {
    filterDirection.innerHTML += `<option value="${d}">${d}</option>`;
  });

  filterDepartment.innerHTML = '<option value="">All Departments</option>';
  departments.forEach(d => {
    filterDepartment.innerHTML += `<option value="${d}">${d}</option>`;
  });

  filterGrade.innerHTML = '<option value="">All Grades</option>';
  grades.forEach(g => {
    filterGrade.innerHTML += `<option value="${g}">${g}</option>`;
  });

  filterCategory.innerHTML = '<option value="">All Categories</option>';
  categories.forEach(c => {
    filterCategory.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function renderEmployeesTable() {
  const tbody = document.getElementById('employeesTableBody');
  const direction = document.getElementById('filterDirection').value;
  const department = document.getElementById('filterDepartment').value;
  const grade = document.getElementById('filterGrade').value;
  const category = document.getElementById('filterCategory').value;

  let filteredEmployees = appState.employees.filter(emp => {
    return (!direction || emp.direction === direction) &&
           (!department || emp.department === department) &&
           (!grade || emp.jobGrade === grade) &&
           (!category || emp.jobCategory === category);
  });

  tbody.innerHTML = '';
  filteredEmployees.forEach(emp => {
    const isSelected = appState.selectedEmployees.includes(emp.id);
    tbody.innerHTML += `
      <tr>
        <td><input type="checkbox" class="employee-checkbox" data-id="${emp.id}" ${isSelected ? 'checked' : ''}></td>
        <td>${emp.name}</td>
        <td>${emp.jobTitle}</td>
        <td>${emp.jobGrade}</td>
        <td>${emp.department}</td>
      </tr>
    `;
  });

  // Add event listeners
  document.querySelectorAll('.employee-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', handleEmployeeSelection);
  });

  updateSelectionCount();
}

function handleEmployeeSelection(e) {
  const empId = parseInt(e.target.dataset.id);
  if (e.target.checked) {
    if (!appState.selectedEmployees.includes(empId)) {
      appState.selectedEmployees.push(empId);
    }
  } else {
    appState.selectedEmployees = appState.selectedEmployees.filter(id => id !== empId);
  }
  updateSelectionCount();
}

function updateSelectionCount() {
  const count = appState.selectedEmployees.length;
  document.getElementById('selectionCount').textContent = `${count} employee${count !== 1 ? 's' : ''} selected`;
  document.getElementById('continueToAssessment').disabled = count === 0;
}

// Assessment Page
function loadAssessmentPage() {
  const container = document.getElementById('assessmentList');
  container.innerHTML = '';

  appState.selectedEmployees.forEach(empId => {
    const emp = appState.employees.find(e => e.id === empId);
    if (!emp) return;

    const assessment = appState.assessments[empId] || {};

    container.innerHTML += `
      <div class="assessment-item">
        <h3>${emp.name}</h3>
        <div class="assessment-info">
          <div><strong>Job Title:</strong> ${emp.jobTitle}</div>
          <div><strong>Job Grade:</strong> ${emp.jobGrade}</div>
          <div><strong>3-Year Avg Performance:</strong> ${emp.last3YearsPerformance.toFixed(1)}</div>
        </div>
        <div class="assessment-fields">
          <div class="form-group">
            <label>Performance Contribution</label>
            <select class="form-control" id="perf_${empId}">
              <option value="">Select...</option>
              <option value="1" ${assessment.performanceContribution === 1 ? 'selected' : ''}>1. Does not meet expectations</option>
              <option value="2" ${assessment.performanceContribution === 2 ? 'selected' : ''}>2. Meets expectations</option>
              <option value="3" ${assessment.performanceContribution === 3 ? 'selected' : ''}>3. Exceeds expectations</option>
            </select>
          </div>
          <div class="form-group">
            <label>Perspective of Evolution</label>
            <select class="form-control" id="evol_${empId}">
              <option value="">Select...</option>
              <option value="1" ${assessment.evolutionPotential === 1 ? 'selected' : ''}>1. Low Potential</option>
              <option value="2" ${assessment.evolutionPotential === 2 ? 'selected' : ''}>2. Medium Potential</option>
              <option value="3" ${assessment.evolutionPotential === 3 ? 'selected' : ''}>3. High Potential</option>
            </select>
          </div>
        </div>
      </div>
    `;
  });
}

function saveAssessmentData() {
  appState.selectedEmployees.forEach(empId => {
    const perf = document.getElementById(`perf_${empId}`)?.value;
    const evol = document.getElementById(`evol_${empId}`)?.value;

    if (perf && evol) {
      if (!appState.assessments[empId]) {
        appState.assessments[empId] = {};
      }
      appState.assessments[empId].performanceContribution = parseInt(perf);
      appState.assessments[empId].evolutionPotential = parseInt(evol);
    }
  });
  alert('Assessment data saved!');
}

// Retention Page
function loadRetentionPage() {
  const container = document.getElementById('retentionList');
  container.innerHTML = '';

  appState.selectedEmployees.forEach(empId => {
    const emp = appState.employees.find(e => e.id === empId);
    if (!emp) return;

    const assessment = appState.assessments[empId] || {};

    container.innerHTML += `
      <div class="assessment-item">
        <h3>${emp.name}</h3>
        <div class="assessment-info">
          <div><strong>Job Title:</strong> ${emp.jobTitle}</div>
          <div><strong>Performance:</strong> ${assessment.performanceContribution ? getPerformanceLabel(assessment.performanceContribution) : 'Not assessed'}</div>
          <div><strong>Potential:</strong> ${assessment.evolutionPotential ? getPotentialLabel(assessment.evolutionPotential) : 'Not assessed'}</div>
        </div>
        <div class="assessment-fields">
          <div class="form-group">
            <label>Risk of Loss</label>
            <select class="form-control" id="risk_${empId}">
              <option value="">Select...</option>
              <option value="Low" ${assessment.riskOfLoss === 'Low' ? 'selected' : ''}>Low</option>
              <option value="Medium" ${assessment.riskOfLoss === 'Medium' ? 'selected' : ''}>Medium</option>
              <option value="High" ${assessment.riskOfLoss === 'High' ? 'selected' : ''}>High</option>
            </select>
          </div>
          <div class="form-group">
            <label>Impact of Loss</label>
            <select class="form-control" id="impact_${empId}">
              <option value="">Select...</option>
              <option value="Low" ${assessment.impactOfLoss === 'Low' ? 'selected' : ''}>Low</option>
              <option value="Medium" ${assessment.impactOfLoss === 'Medium' ? 'selected' : ''}>Medium</option>
              <option value="High" ${assessment.impactOfLoss === 'High' ? 'selected' : ''}>High</option>
            </select>
          </div>
        </div>
      </div>
    `;
  });
}

function saveRetentionData() {
  appState.selectedEmployees.forEach(empId => {
    const risk = document.getElementById(`risk_${empId}`)?.value;
    const impact = document.getElementById(`impact_${empId}`)?.value;

    if (risk && impact) {
      if (!appState.assessments[empId]) {
        appState.assessments[empId] = {};
      }
      appState.assessments[empId].riskOfLoss = risk;
      appState.assessments[empId].impactOfLoss = impact;
    }
  });
  alert('Retention data saved!');
}

// Next Steps Page
function loadNextStepsPage() {
  const container = document.getElementById('nextStepsList');
  container.innerHTML = '';

  appState.selectedEmployees.forEach(empId => {
    const emp = appState.employees.find(e => e.id === empId);
    if (!emp) return;

    const assessment = appState.assessments[empId] || {};

    container.innerHTML += `
      <div class="assessment-item">
        <h3>${emp.name}</h3>
        <div class="assessment-info">
          <div><strong>Current Role:</strong> ${emp.jobTitle}</div>
          <div><strong>Grade:</strong> ${emp.jobGrade}</div>
        </div>
        <div class="assessment-fields">
          <div class="form-group">
            <label>Next Role Job Title</label>
            <input type="text" class="form-control" id="nextRole_${empId}" value="${assessment.nextRole || ''}">
          </div>
          <div class="form-group">
            <label>Readiness</label>
            <select class="form-control" id="readiness_${empId}">
              <option value="">Select...</option>
              <option value="Ready Now" ${assessment.readiness === 'Ready Now' ? 'selected' : ''}>Ready Now</option>
              <option value="1-3 Years" ${assessment.readiness === '1-3 Years' ? 'selected' : ''}>1-3 Years</option>
              <option value="More than 3 Years" ${assessment.readiness === 'More than 3 Years' ? 'selected' : ''}>More than 3 Years</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Individual Development Plan (IDP)</label>
          <textarea class="form-control" id="idp_${empId}" rows="3">${assessment.idp || ''}</textarea>
        </div>
        <div class="form-group">
          <label>Comment</label>
          <textarea class="form-control" id="comment_${empId}" rows="2">${assessment.comment || ''}</textarea>
        </div>
      </div>
    `;
  });
}

function saveNextStepsData() {
  appState.selectedEmployees.forEach(empId => {
    const nextRole = document.getElementById(`nextRole_${empId}`)?.value;
    const readiness = document.getElementById(`readiness_${empId}`)?.value;
    const idp = document.getElementById(`idp_${empId}`)?.value;
    const comment = document.getElementById(`comment_${empId}`)?.value;

    if (!appState.assessments[empId]) {
      appState.assessments[empId] = {};
    }
    appState.assessments[empId].nextRole = nextRole;
    appState.assessments[empId].readiness = readiness;
    appState.assessments[empId].idp = idp;
    appState.assessments[empId].comment = comment;
  });
  alert('Next steps data saved! Assessment complete.');
}

// Helper functions
function getPerformanceLabel(value) {
  const labels = { 1: 'Does not meet', 2: 'Meets', 3: 'Exceeds' };
  return labels[value] || '';
}

function getPotentialLabel(value) {
  const labels = { 1: 'Low', 2: 'Medium', 3: 'High' };
  return labels[value] || '';
}

function get9BoxCategory(perf, potential) {
  const matrix = {
    '1-1': { name: 'UNDERPERFORMER', class: 'cell-underperformer' },
    '1-2': { name: 'DILEMMA', class: 'cell-dilemma' },
    '1-3': { name: 'ENIGMA', class: 'cell-enigma' },
    '2-1': { name: 'SPECIALIST', class: 'cell-specialist' },
    '2-2': { name: 'CORE EMPLOYEE', class: 'cell-core' },
    '2-3': { name: 'GROWTH EMPLOYEE', class: 'cell-growth' },
    '3-1': { name: 'HIGH IMPACT PERFORMER', class: 'cell-high-impact' },
    '3-2': { name: 'EFFECTIVE PERFORMER', class: 'cell-effective' },
    '3-3': { name: 'FUTURE LEADER', class: 'cell-future-leader' }
  };
  return matrix[`${perf}-${potential}`] || { name: 'Unknown', class: '' };
}

// 9-Box Grid
function loadNineBoxGrid() {
  const grid = document.getElementById('nineBoxGrid');
  grid.innerHTML = '';

  // Create 9 cells (3x3 grid)
  const cells = [
    { perf: 1, pot: 3, name: 'ENIGMA', class: 'cell-enigma' },
    { perf: 2, pot: 3, name: 'GROWTH EMPLOYEE', class: 'cell-growth' },
    { perf: 3, pot: 3, name: 'FUTURE LEADER', class: 'cell-future-leader' },
    { perf: 1, pot: 2, name: 'DILEMMA', class: 'cell-dilemma' },
    { perf: 2, pot: 2, name: 'CORE EMPLOYEE', class: 'cell-core' },
    { perf: 3, pot: 2, name: 'EFFECTIVE PERFORMER', class: 'cell-effective' },
    { perf: 1, pot: 1, name: 'UNDERPERFORMER', class: 'cell-underperformer' },
    { perf: 2, pot: 1, name: 'SPECIALIST', class: 'cell-specialist' },
    { perf: 3, pot: 1, name: 'HIGH IMPACT PERFORMER', class: 'cell-high-impact' }
  ];

  cells.forEach(cell => {
    const cellDiv = document.createElement('div');
    cellDiv.className = `ninebox-cell ${cell.class}`;
    cellDiv.innerHTML = `<div class="ninebox-cell-title">${cell.name}</div>`;

    // Find employees in this cell
    Object.keys(appState.assessments).forEach(empId => {
      const assessment = appState.assessments[empId];
      if (assessment.performanceContribution === cell.perf && assessment.evolutionPotential === cell.pot) {
        const emp = appState.employees.find(e => e.id === parseInt(empId));
        if (emp) {
          const empDiv = document.createElement('div');
          empDiv.className = 'ninebox-employee';
          empDiv.textContent = emp.name;
          empDiv.onclick = () => showEmployeeHistory(empId);
          cellDiv.appendChild(empDiv);
        }
      }
    });

    grid.appendChild(cellDiv);
  });
}

function showEmployeeHistory(empId) {
  const emp = appState.employees.find(e => e.id === parseInt(empId));
  if (!emp) return;

  const history = appState.assessmentHistory.filter(h => h.employeeId === parseInt(empId));
  
  const modal = document.getElementById('historyModal');
  document.getElementById('modalEmployeeName').textContent = emp.name;
  
  let content = '<div>';
  if (history.length === 0) {
    content += '<p>No historical data available.</p>';
  } else {
    history.forEach(h => {
      const category = get9BoxCategory(h.performanceContribution, h.evolutionPotential);
      content += `
        <div class="history-entry">
          <h4>Year ${h.year}</h4>
          <p><strong>Performance:</strong> ${getPerformanceLabel(h.performanceContribution)}</p>
          <p><strong>Potential:</strong> ${getPotentialLabel(h.evolutionPotential)}</p>
          <p><strong>Category:</strong> ${category.name}</p>
        </div>
      `;
    });
  }
  content += '</div>';
  
  document.getElementById('modalHistoryContent').innerHTML = content;
  modal.classList.add('active');
}

// CSV Import Functions
function handleUsersImport(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    if (file.name.endsWith('.csv')) {
      Papa.parse(data, {
        header: true,
        complete: function(results) {
          processUsersImport(results.data);
        },
        error: function(error) {
          alert('Error parsing CSV: ' + error.message);
        }
      });
    } else if (file.name.endsWith('.xlsx')) {
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      processUsersImport(jsonData);
    }
  };
  if (file.name.endsWith('.csv')) {
    reader.readAsText(file);
  } else {
    reader.readAsBinaryString(file);
  }
}

function processUsersImport(data) {
  const errors = [];
  const validUsers = [];
  const requiredFields = ['Username', 'Full Name', 'Password', 'Role'];
  
  data.forEach((row, index) => {
    if (!row.Username && !row['Full Name']) return; // Skip empty rows
    
    // Validate required fields
    const missingFields = requiredFields.filter(field => !row[field]);
    if (missingFields.length > 0) {
      errors.push(`Row ${index + 2}: Missing fields - ${missingFields.join(', ')}`);
      return;
    }
    
    // Check for duplicate username
    const existingUser = appState.users.find(u => u.username === row.Username);
    if (existingUser) {
      errors.push(`Row ${index + 2}: Username "${row.Username}" already exists`);
      return;
    }
    
    // Validate role
    if (row.Role !== 'LineManager' && row.Role !== 'HR') {
      errors.push(`Row ${index + 2}: Role must be "LineManager" or "HR"`);
      return;
    }
    
    validUsers.push({
      username: row.Username,
      fullName: row['Full Name'],
      password: row.Password,
      role: row.Role
    });
  });
  
  showImportPreview('users', validUsers, errors);
}

function handleEmployeesImport(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    if (file.name.endsWith('.csv')) {
      Papa.parse(data, {
        header: true,
        complete: function(results) {
          processEmployeesImport(results.data);
        },
        error: function(error) {
          alert('Error parsing CSV: ' + error.message);
        }
      });
    } else if (file.name.endsWith('.xlsx')) {
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      processEmployeesImport(jsonData);
    }
  };
  if (file.name.endsWith('.csv')) {
    reader.readAsText(file);
  } else {
    reader.readAsBinaryString(file);
  }
}

function processEmployeesImport(data) {
  const errors = [];
  const validEmployees = [];
  const requiredFields = ['Employee ID', 'Name', 'Job Title', 'Job Grade', 'Direction', 'Department', 'Job Category', 'Last 3 Years Performance Average'];
  
  data.forEach((row, index) => {
    if (!row['Employee ID'] && !row.Name) return; // Skip empty rows
    
    // Validate required fields
    const missingFields = requiredFields.filter(field => !row[field]);
    if (missingFields.length > 0) {
      errors.push(`Row ${index + 2}: Missing fields - ${missingFields.join(', ')}`);
      return;
    }
    
    // Check for duplicate employee ID
    const empId = parseInt(row['Employee ID']);
    if (isNaN(empId)) {
      errors.push(`Row ${index + 2}: Employee ID must be a number`);
      return;
    }
    
    const existingEmp = appState.employees.find(e => e.id === empId);
    if (existingEmp) {
      errors.push(`Row ${index + 2}: Employee ID ${empId} already exists`);
      return;
    }
    
    // Validate performance
    const performance = parseFloat(row['Last 3 Years Performance Average']);
    if (isNaN(performance) || performance < 1 || performance > 5) {
      errors.push(`Row ${index + 2}: Performance must be between 1 and 5`);
      return;
    }
    
    validEmployees.push({
      id: empId,
      name: row.Name,
      jobTitle: row['Job Title'],
      jobGrade: row['Job Grade'],
      direction: row.Direction,
      department: row.Department,
      jobCategory: row['Job Category'],
      last3YearsPerformance: performance
    });
  });
  
  showImportPreview('employees', validEmployees, errors);
}

function showImportPreview(type, validData, errors) {
  const modal = document.getElementById('importPreviewModal');
  if (!modal) {
    createImportPreviewModal();
  }
  
  const title = document.getElementById('importPreviewTitle');
  const content = document.getElementById('importPreviewContent');
  const confirmBtn = document.getElementById('confirmImportBtn');
  
  title.textContent = type === 'users' ? 'Import Users Preview' : 'Import Employees Preview';
  
  let html = `<div class="import-preview">`;
  html += `<h3>Valid Records: ${validData.length}</h3>`;
  
  if (errors.length > 0) {
    html += `<div class="import-errors">`;
    html += `<h4>Errors Found (${errors.length})</h4>`;
    html += `<ul class="error-list">`;
    errors.forEach(error => {
      html += `<li>${error}</li>`;
    });
    html += `</ul></div>`;
  }
  
  html += `</div>`;
  content.innerHTML = html;
  
  confirmBtn.onclick = () => {
    if (validData.length > 0) {
      if (type === 'users') {
        importUsers(validData);
      } else {
        importEmployees(validData);
      }
    }
    closeModal('importPreviewModal');
  };
  
  document.getElementById('importPreviewModal').classList.add('active');
}

function createImportPreviewModal() {
  const modal = document.createElement('div');
  modal.id = 'importPreviewModal';
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <h2 id="importPreviewTitle">Import Preview</h2>
      <div id="importPreviewContent"></div>
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal('importPreviewModal')">Cancel</button>
        <button type="button" id="confirmImportBtn" class="btn btn--primary">Confirm Import</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    closeModal('importPreviewModal');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal('importPreviewModal');
    }
  });
}

function importUsers(users) {
  const nextId = Math.max(...appState.users.map(u => u.id), 0) + 1;
  users.forEach((user, index) => {
    appState.users.push({
      id: nextId + index,
      username: user.username,
      fullName: user.fullName,
      password: user.password,
      role: user.role
    });
  });
  alert(`Successfully imported ${users.length} user(s)!`);
  loadUsersList();
}

function importEmployees(employees) {
  employees.forEach(emp => {
    appState.employees.push(emp);
  });
  alert(`Successfully imported ${employees.length} employee(s)!`);
  loadEmployeesDB();
  // Refresh filters in critical positions if on that page
  if (document.getElementById('criticalPositionsPage').classList.contains('active')) {
    populateFilters();
  }
}

// Dashboard
function loadDashboard() {
  console.log('Loading Executive Dashboard...');
  
  // Check permission
  if (!appState.currentUser.permissions.canViewExecutiveDashboard) {
    document.getElementById('dashboardPage').innerHTML = '<div class="content-card"><p>You do not have permission to view this dashboard.</p></div>';
    return;
  }
  
  // Show/hide export button based on permission
  const exportBtn = document.getElementById('exportDashboardPDF');
  if (exportBtn) {
    exportBtn.style.display = appState.currentUser.permissions.canExportReportsToPDF ? 'inline-flex' : 'none';
  }
  
  console.log('User has dashboard access. Loading data...');
  console.log('Total assessments:', Object.keys(appState.assessments).length);
  console.log('Assessment data:', appState.assessments);
  
  // Use setTimeout to ensure DOM is ready
  setTimeout(() => {
    updateRefreshTimestamp();
    calculateAndDisplayKPIs();
    createRetentionRiskChart();
    createReadinessByDirectionChart();
    createRiskImpactHeatmap();
    create9BoxDistribution();
    createReadinessSummary();
    calculateTrustedPerformers();
    console.log('Dashboard loaded successfully!');
  }, 100);
}

function updateRefreshTimestamp() {
  const now = new Date();
  const options = { 
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  };
  document.getElementById('lastRefreshTime').textContent = now.toLocaleString('en-US', options);
}

function calculateAndDisplayKPIs() {
  // Total Talent Pool
  const totalTalent = appState.employees.length;
  
  // Critical Roles: Performance >= 2 AND (Risk=High OR Evolution=3) AND Next Role defined
  let criticalRoles = 0;
  Object.keys(appState.assessments).forEach(empId => {
    const a = appState.assessments[empId];
    if (a.performanceContribution >= 2 && 
        (a.riskOfLoss === 'High' || a.evolutionPotential === 3) &&
        a.nextRole && a.nextRole.trim() !== '') {
      criticalRoles++;
    }
  });
  
  // Average Performance (mean of all performance ratings)
  let avgPerf = 0;
  let perfCount = 0;
  Object.values(appState.assessments).forEach(a => {
    if (a.performanceContribution) {
      avgPerf += a.performanceContribution;
      perfCount++;
    }
  });
  avgPerf = perfCount > 0 ? (avgPerf / perfCount).toFixed(2) : '0.00';
  
  // Average Readiness (as percentage: Ready Now=3, 1-3 Years=2, More than 3 Years=1)
  let avgReadiness = 0;
  let readinessCount = 0;
  Object.values(appState.assessments).forEach(a => {
    if (a.readiness) {
      const readinessMap = { 'Ready Now': 3, '1-3 Years': 2, 'More than 3 Years': 1 };
      avgReadiness += readinessMap[a.readiness] || 0;
      readinessCount++;
    }
  });
  avgReadiness = readinessCount > 0 ? Math.round((avgReadiness / readinessCount / 3) * 100) : 0;
  
  console.log('KPIs:', {
    totalTalent,
    criticalRoles,
    avgPerf,
    avgReadiness: avgReadiness + '%'
  });
  
  // Update KPI cards
  const kpiCards = document.querySelectorAll('.kpi-card');
  kpiCards.forEach(card => card.className = 'kpi-card');
  
  const totalTalentEl = document.getElementById('kpiTotalTalent');
  const criticalRolesEl = document.getElementById('kpiCriticalRoles');
  const avgPerfEl = document.getElementById('kpiAvgPerformance');
  const avgReadinessEl = document.getElementById('kpiAvgReadiness');
  
  if (totalTalentEl) {
    totalTalentEl.textContent = totalTalent;
    totalTalentEl.parentElement.classList.add('kpi-blue');
  }
  
  if (criticalRolesEl) {
    criticalRolesEl.textContent = criticalRoles;
    criticalRolesEl.parentElement.classList.add('kpi-green');
  }
  
  if (avgPerfEl) {
    avgPerfEl.textContent = avgPerf;
    avgPerfEl.parentElement.classList.add('kpi-orange');
  }
  
  if (avgReadinessEl) {
    avgReadinessEl.textContent = avgReadiness + '%';
    avgReadinessEl.parentElement.classList.add('kpi-purple');
  }
}

function calculateTrustedPerformers() {
  // Trusted Performers: Performance=3 AND Evolution=2 AND Readiness="Ready Now" OR "1-3 Years"
  let count = 0;
  Object.values(appState.assessments).forEach(a => {
    if (a.performanceContribution === 3 && a.evolutionPotential === 2 && 
        (a.readiness === 'Ready Now' || a.readiness === '1-3 Years')) {
      count++;
    }
  });
  
  console.log('Trusted Performers count:', count);
  
  const countElement = document.getElementById('trustedPerformersCount');
  if (countElement) {
    countElement.textContent = count;
  } else {
    console.error('Trusted Performers count element not found');
  }
}

function createRetentionRiskChart() {
  const ctx = document.getElementById('retentionRiskChart');
  if (!ctx) {
    console.error('Retention Risk Chart canvas not found');
    return;
  }
  
  // Count risk levels from ALL assessments
  const riskCounts = { Low: 0, Medium: 0, High: 0 };
  Object.values(appState.assessments).forEach(a => {
    if (a.riskOfLoss) {
      riskCounts[a.riskOfLoss]++;
    }
  });
  
  const total = riskCounts.Low + riskCounts.Medium + riskCounts.High;
  
  console.log('Retention Risk Data:', riskCounts, 'Total:', total);
  
  // Destroy existing chart if it exists
  if (window.retentionRiskChart instanceof Chart) {
    window.retentionRiskChart.destroy();
  }
  
  // Create new chart
  window.retentionRiskChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Low Risk', 'Medium Risk', 'High Risk'],
      datasets: [{
        data: [riskCounts.Low, riskCounts.Medium, riskCounts.High],
        backgroundColor: ['#3B82F6', '#F59E0B', '#EF4444'],
        borderWidth: 2,
        borderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            padding: 15,
            font: { size: 12 },
            generateLabels: function(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                return data.labels.map((label, i) => {
                  const value = data.datasets[0].data[i];
                  const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                  return {
                    text: `${label}: ${value} (${percentage}%)`,
                    fillStyle: data.datasets[0].backgroundColor[i],
                    hidden: false,
                    index: i
                  };
                });
              }
              return [];
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    }
  });
  
  console.log('Retention Risk Chart created successfully');
}

function createReadinessByDirectionChart() {
  const ctx = document.getElementById('readinessByDirectionChart');
  if (!ctx) {
    console.error('Readiness by Direction Chart canvas not found');
    return;
  }
  
  // Group by direction and readiness
  const directionData = {};
  
  Object.keys(appState.assessments).forEach(empId => {
    const emp = appState.employees.find(e => e.id === parseInt(empId));
    const assessment = appState.assessments[empId];
    
    if (emp && assessment.readiness) {
      if (!directionData[emp.direction]) {
        directionData[emp.direction] = { 'Ready Now': 0, '1-3 Years': 0, 'More than 3 Years': 0 };
      }
      directionData[emp.direction][assessment.readiness]++;
    }
  });
  
  const directions = Object.keys(directionData).sort();
  
  console.log('Readiness by Direction Data:', directionData);
  
  // Destroy existing chart if it exists
  if (window.readinessByDirectionChart instanceof Chart) {
    window.readinessByDirectionChart.destroy();
  }
  
  // Create new chart
  window.readinessByDirectionChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: directions,
      datasets: [
        {
          label: 'Ready Now',
          data: directions.map(d => directionData[d]['Ready Now']),
          backgroundColor: '#22C55E',
          borderWidth: 0
        },
        {
          label: '1-3 Years',
          data: directions.map(d => directionData[d]['1-3 Years']),
          backgroundColor: '#F59E0B',
          borderWidth: 0
        },
        {
          label: 'More than 3 Years',
          data: directions.map(d => directionData[d]['More than 3 Years']),
          backgroundColor: '#EF4444',
          borderWidth: 0
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 10,
            font: { size: 12 }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: {
            display: true,
            text: 'Number of Employees'
          }
        },
        y: {
          stacked: true
        }
      }
    }
  });
  
  console.log('Readiness by Direction Chart created successfully');
}

function createRiskImpactHeatmap() {
  const heatmapData = {
    'High-High': 0, 'High-Medium': 0, 'High-Low': 0,
    'Medium-High': 0, 'Medium-Medium': 0, 'Medium-Low': 0,
    'Low-High': 0, 'Low-Medium': 0, 'Low-Low': 0
  };
  
  Object.values(appState.assessments).forEach(a => {
    if (a.riskOfLoss && a.impactOfLoss) {
      const key = `${a.riskOfLoss}-${a.impactOfLoss}`;
      heatmapData[key]++;
    }
  });
  
  const container = document.getElementById('riskImpactHeatmap');
  if (!container) return;
  
  const getHeatClass = (value) => {
    if (value === 0) return 'heat-low';
    if (value <= 2) return 'heat-low';
    if (value <= 5) return 'heat-medium';
    return 'heat-high';
  };
  
  container.innerHTML = `
    <div class="heatmap-container">
      <table class="heatmap-table">
        <thead>
          <tr>
            <th>Risk of Loss \\ Impact</th>
            <th>Low Impact</th>
            <th>Medium Impact</th>
            <th>High Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>High Risk</th>
            <td class="heatmap-cell ${getHeatClass(heatmapData['High-Low'])}">${heatmapData['High-Low']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['High-Medium'])}">${heatmapData['High-Medium']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['High-High'])}">${heatmapData['High-High']}</td>
          </tr>
          <tr>
            <th>Medium Risk</th>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Medium-Low'])}">${heatmapData['Medium-Low']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Medium-Medium'])}">${heatmapData['Medium-Medium']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Medium-High'])}">${heatmapData['Medium-High']}</td>
          </tr>
          <tr>
            <th>Low Risk</th>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Low-Low'])}">${heatmapData['Low-Low']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Low-Medium'])}">${heatmapData['Low-Medium']}</td>
            <td class="heatmap-cell ${getHeatClass(heatmapData['Low-High'])}">${heatmapData['Low-High']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function create9BoxDistribution() {
  const distribution = {
    'ENIGMA': 0,
    'GROWTH EMPLOYEE': 0,
    'FUTURE LEADER': 0,
    'DILEMMA': 0,
    'CORE EMPLOYEE': 0,
    'EFFECTIVE PERFORMER': 0,
    'UNDERPERFORMER': 0,
    'SPECIALIST': 0,
    'HIGH IMPACT PERFORMER': 0
  };
  
  Object.values(appState.assessments).forEach(a => {
    if (a.performanceContribution && a.evolutionPotential) {
      const category = get9BoxCategory(a.performanceContribution, a.evolutionPotential);
      const catName = category.name.toUpperCase();
      if (distribution.hasOwnProperty(catName)) {
        distribution[catName]++;
      }
    }
  });
  
  console.log('9-Box Distribution:', distribution);
  
  const container = document.getElementById('nineboxDistribution');
  if (!container) {
    console.error('9-Box Distribution container not found');
    return;
  }
  
  const categoryColors = {
    'FUTURE LEADER': '#22C55E',
    'GROWTH EMPLOYEE': '#F59E0B',
    'ENIGMA': '#FF6B35',
    'EFFECTIVE PERFORMER': '#3B82F6',
    'CORE EMPLOYEE': '#6366F1',
    'DILEMMA': '#EF4444',
    'HIGH IMPACT PERFORMER': '#A855F7',
    'SPECIALIST': '#94A3B8',
    'UNDERPERFORMER': '#DC2626'
  };
  
  container.innerHTML = '';
  
  // Order for display: top row, middle row, bottom row
  const displayOrder = [
    'FUTURE LEADER', 'GROWTH EMPLOYEE', 'ENIGMA',
    'EFFECTIVE PERFORMER', 'CORE EMPLOYEE', 'DILEMMA',
    'HIGH IMPACT PERFORMER', 'SPECIALIST', 'UNDERPERFORMER'
  ];
  
  displayOrder.forEach(key => {
    const color = categoryColors[key] || '#6B7280';
    container.innerHTML += `
      <div class="distribution-item" style="border-left: 4px solid ${color};">
        <h4 style="font-size: 11px;">${key}</h4>
        <p style="color: ${color};">${distribution[key]}</p>
      </div>
    `;
  });
  
  console.log('9-Box Distribution created successfully');
}

function createReadinessSummary() {
  const readiness = {
    'Ready Now': 0,
    '1-3 Years': 0,
    'More than 3 Years': 0
  };
  
  let totalAssessed = 0;
  
  Object.values(appState.assessments).forEach(a => {
    if (a.readiness) {
      readiness[a.readiness]++;
      totalAssessed++;
    }
  });
  
  console.log('Readiness Summary:', readiness, 'Total:', totalAssessed);
  
  const container = document.getElementById('readinessSummary');
  if (!container) {
    console.error('Readiness Summary container not found');
    return;
  }
  
  const colors = {
    'Ready Now': '#22C55E',
    '1-3 Years': '#F59E0B',
    'More than 3 Years': '#EF4444'
  };
  
  container.innerHTML = '';
  
  Object.keys(readiness).forEach(key => {
    const count = readiness[key];
    const percentage = totalAssessed > 0 ? ((count / totalAssessed) * 100).toFixed(1) : 0;
    const color = colors[key] || '#6B7280';
    
    container.innerHTML += `
      <div class="readiness-item" style="background: rgba(${hexToRgb(color)}, 0.1); border: 2px solid ${color};">
        <h4 style="color: var(--color-text-secondary);">${key}</h4>
        <p style="color: ${color}; font-size: 28px; font-weight: bold; margin: 8px 0;">${count}</p>
        <p style="font-size: 12px; color: var(--color-text-secondary); margin: 0;">${percentage}% of assessed</p>
      </div>
    `;
  });
  
  console.log('Readiness Summary created successfully');
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '107, 114, 128';
}

// Users List
function loadUsersList() {
  const tbody = document.getElementById('usersTableBody');
  tbody.innerHTML = '';
  
  appState.users.forEach(user => {
    const permSummary = getPermissionsSummary(user.permissions);
    tbody.innerHTML += `
      <tr>
        <td>${user.username}</td>
        <td>${user.fullName}</td>
        <td>${user.role === 'HR' ? 'Human Resources' : 'Line Manager'}</td>
        <td>${user.lastLogin || 'Never'}</td>
        <td>
          <div class="action-buttons-group">
            <button class="btn btn--secondary btn--sm" onclick="editUser(${user.id})">Edit</button>
            <button class="btn btn--danger btn--sm" onclick="deleteUser(${user.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  });
}

function getPermissionsSummary(permissions) {
  if (!permissions) return 'No permissions set';
  const parts = [];
  if (permissions.canAssessEmployees) parts.push('Can assess');
  if (permissions.canViewAllAssessments) parts.push('View all');
  if (!permissions.canAccessAllSections && permissions.restrictedToSections) {
    parts.push('Access: ' + permissions.restrictedToSections.join(', '));
  }
  if (permissions.canExportReportsToPDF) parts.push('Export PDF');
  return parts.join(' | ') || 'Limited access';
}

function togglePassword(element, password) {
  const span = element.previousElementSibling;
  if (span.textContent === '••••••') {
    span.textContent = password;
    span.classList.remove('password-hidden');
    span.classList.add('password-display');
    element.textContent = 'Hide';
  } else {
    span.textContent = '••••••';
    span.classList.remove('password-display');
    span.classList.add('password-hidden');
    element.textContent = 'Show';
  }
}

function editUser(userId) {
  const user = appState.users.find(u => u.id === userId);
  if (!user) return;
  
  document.getElementById('userFormTitle').textContent = 'Edit User';
  document.getElementById('userFormId').value = user.id;
  document.getElementById('userFormUsername').value = user.username;
  document.getElementById('userFormFullName').value = user.fullName;
  document.getElementById('userFormPassword').value = user.password;
  document.getElementById('userFormRole').value = user.role;
  
  // Load permissions
  const perms = user.permissions || getDefaultPermissions(user.role);
  document.getElementById('permCanAssess').checked = perms.canAssessEmployees;
  document.getElementById('permViewAllAssessments').checked = perms.canViewAllAssessments;
  document.getElementById('permEditOwnAssessments').checked = perms.canEditOwnAssessmentsOnly;
  document.getElementById('permEditAllAssessments').checked = perms.canEditAllAssessments;
  document.getElementById('permAddEmployees').checked = perms.canAddEmployees;
  document.getElementById('permEditEmployeeData').checked = perms.canEditEmployeeData;
  document.getElementById('permDeleteEmployees').checked = perms.canDeleteEmployees;
  document.getElementById('permViewAllEmployees').checked = perms.canViewAllEmployees;
  document.getElementById('permAccessAllSections').checked = perms.canAccessAllSections;
  document.getElementById('permRatePerformance').checked = perms.canRatePerformance;
  document.getElementById('permRateEvolution').checked = perms.canRateEvolutionPotential;
  document.getElementById('permRateRetention').checked = perms.canRateRetentionRisk;
  document.getElementById('permDefineNextSteps').checked = perms.canDefineNextSteps;
  document.getElementById('permViewDashboard').checked = perms.canViewExecutiveDashboard;
  document.getElementById('permExportPDF').checked = perms.canExportReportsToPDF;
  document.getElementById('permViewAllManagerData').checked = perms.canViewAllManagerData;
  document.getElementById('permAccessAnalytics').checked = perms.canAccessAnalytics;
  document.getElementById('permManageUsers').checked = perms.canManageUsers;
  document.getElementById('permAssignRoles').checked = perms.canAssignRoles;
  document.getElementById('permResetPasswords').checked = perms.canResetPasswords;
  
  // Set restricted sections
  const sectionsSelect = document.getElementById('permRestrictedSections');
  Array.from(sectionsSelect.options).forEach(option => {
    option.selected = perms.restrictedToSections && perms.restrictedToSections.includes(option.value);
  });
  
  document.getElementById('userFormModal').classList.add('active');
}

function getDefaultPermissions(role) {
  if (role === 'HR') {
    return {
      canAssessEmployees: true, canViewAllAssessments: true, canEditOwnAssessmentsOnly: false, canEditAllAssessments: true,
      canAddEmployees: true, canEditEmployeeData: true, canDeleteEmployees: true, canViewAllEmployees: true,
      canAccessAllSections: true, restrictedToSections: [],
      canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
      canViewExecutiveDashboard: true, canExportReportsToPDF: true, canViewAllManagerData: true, canAccessAnalytics: true,
      canManageUsers: true, canAssignRoles: true, canResetPasswords: true
    };
  } else {
    return {
      canAssessEmployees: true, canViewAllAssessments: false, canEditOwnAssessmentsOnly: true, canEditAllAssessments: false,
      canAddEmployees: false, canEditEmployeeData: false, canDeleteEmployees: false, canViewAllEmployees: false,
      canAccessAllSections: false, restrictedToSections: [],
      canRatePerformance: true, canRateEvolutionPotential: true, canRateRetentionRisk: true, canDefineNextSteps: true,
      canViewExecutiveDashboard: true, canExportReportsToPDF: false, canViewAllManagerData: false, canAccessAnalytics: true,
      canManageUsers: false, canAssignRoles: false, canResetPasswords: false
    };
  }
}

function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    appState.users = appState.users.filter(u => u.id !== userId);
    loadUsersList();
  }
}

function saveUser(e) {
  e.preventDefault();
  
  const id = document.getElementById('userFormId').value;
  const username = document.getElementById('userFormUsername').value;
  const fullName = document.getElementById('userFormFullName').value;
  const password = document.getElementById('userFormPassword').value;
  const role = document.getElementById('userFormRole').value;
  
  // Collect permissions
  const sectionsSelect = document.getElementById('permRestrictedSections');
  const restrictedSections = Array.from(sectionsSelect.selectedOptions).map(opt => opt.value);
  
  const permissions = {
    canAssessEmployees: document.getElementById('permCanAssess').checked,
    canViewAllAssessments: document.getElementById('permViewAllAssessments').checked,
    canEditOwnAssessmentsOnly: document.getElementById('permEditOwnAssessments').checked,
    canEditAllAssessments: document.getElementById('permEditAllAssessments').checked,
    canAddEmployees: document.getElementById('permAddEmployees').checked,
    canEditEmployeeData: document.getElementById('permEditEmployeeData').checked,
    canDeleteEmployees: document.getElementById('permDeleteEmployees').checked,
    canViewAllEmployees: document.getElementById('permViewAllEmployees').checked,
    canAccessAllSections: document.getElementById('permAccessAllSections').checked,
    restrictedToSections: restrictedSections,
    canRatePerformance: document.getElementById('permRatePerformance').checked,
    canRateEvolutionPotential: document.getElementById('permRateEvolution').checked,
    canRateRetentionRisk: document.getElementById('permRateRetention').checked,
    canDefineNextSteps: document.getElementById('permDefineNextSteps').checked,
    canViewExecutiveDashboard: document.getElementById('permViewDashboard').checked,
    canExportReportsToPDF: document.getElementById('permExportPDF').checked,
    canViewAllManagerData: document.getElementById('permViewAllManagerData').checked,
    canAccessAnalytics: document.getElementById('permAccessAnalytics').checked,
    canManageUsers: document.getElementById('permManageUsers').checked,
    canAssignRoles: document.getElementById('permAssignRoles').checked,
    canResetPasswords: document.getElementById('permResetPasswords').checked
  };
  
  if (id) {
    // Edit existing user
    const user = appState.users.find(u => u.id === parseInt(id));
    if (user) {
      user.username = username;
      user.fullName = fullName;
      user.password = password;
      user.role = role;
      user.permissions = permissions;
    }
  } else {
    // Add new user
    const newId = Math.max(...appState.users.map(u => u.id)) + 1;
    appState.users.push({ id: newId, username, fullName, password, role, permissions, lastLogin: null });
  }
  
  closeModal('userFormModal');
  loadUsersList();
}

// Employees Database
function loadEmployeesDB() {
  renderEmployeesDBTable();
}

function renderEmployeesDBTable() {
  const tbody = document.getElementById('employeesDBTableBody');
  const searchTerm = document.getElementById('employeeSearch')?.value.toLowerCase() || '';
  
  let filteredEmployees = appState.employees;
  if (searchTerm) {
    filteredEmployees = appState.employees.filter(emp => 
      emp.name.toLowerCase().includes(searchTerm) ||
      emp.jobTitle.toLowerCase().includes(searchTerm) ||
      emp.department.toLowerCase().includes(searchTerm)
    );
  }
  
  tbody.innerHTML = '';
  filteredEmployees.forEach(emp => {
    tbody.innerHTML += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.jobTitle}</td>
        <td>${emp.jobGrade}</td>
        <td>${emp.direction}</td>
        <td>${emp.department}</td>
        <td>${emp.jobCategory}</td>
        <td>${emp.last3YearsPerformance.toFixed(1)}</td>
        <td>
          <div class="action-buttons-group">
            <button class="btn btn--secondary btn--sm" onclick="editEmployee(${emp.id})">Edit</button>
            <button class="btn btn--danger btn--sm" onclick="deleteEmployee(${emp.id})">Delete</button>
          </div>
        </td>
      </tr>
    `;
  });
}

function editEmployee(empId) {
  const emp = appState.employees.find(e => e.id === empId);
  if (!emp) return;
  
  document.getElementById('employeeFormTitle').textContent = 'Edit Employee';
  document.getElementById('employeeFormId').value = emp.id;
  document.getElementById('employeeFormName').value = emp.name;
  document.getElementById('employeeFormJobTitle').value = emp.jobTitle;
  document.getElementById('employeeFormJobGrade').value = emp.jobGrade;
  document.getElementById('employeeFormDirection').value = emp.direction;
  document.getElementById('employeeFormDepartment').value = emp.department;
  document.getElementById('employeeFormJobCategory').value = emp.jobCategory;
  document.getElementById('employeeFormPerformance').value = emp.last3YearsPerformance;
  
  document.getElementById('employeeFormModal').classList.add('active');
}

function deleteEmployee(empId) {
  if (confirm('Are you sure you want to delete this employee?')) {
    appState.employees = appState.employees.filter(e => e.id !== empId);
    appState.selectedEmployees = appState.selectedEmployees.filter(id => id !== empId);
    delete appState.assessments[empId];
    loadEmployeesDB();
  }
}

function saveEmployee(e) {
  e.preventDefault();
  
  const id = document.getElementById('employeeFormId').value;
  const name = document.getElementById('employeeFormName').value;
  const jobTitle = document.getElementById('employeeFormJobTitle').value;
  const jobGrade = document.getElementById('employeeFormJobGrade').value;
  const direction = document.getElementById('employeeFormDirection').value;
  const department = document.getElementById('employeeFormDepartment').value;
  const jobCategory = document.getElementById('employeeFormJobCategory').value;
  const last3YearsPerformance = parseFloat(document.getElementById('employeeFormPerformance').value);
  
  if (id) {
    // Edit existing employee
    const emp = appState.employees.find(e => e.id === parseInt(id));
    if (emp) {
      emp.name = name;
      emp.jobTitle = jobTitle;
      emp.jobGrade = jobGrade;
      emp.direction = direction;
      emp.department = department;
      emp.jobCategory = jobCategory;
      emp.last3YearsPerformance = last3YearsPerformance;
    }
  } else {
    // Add new employee
    const newId = Math.max(...appState.employees.map(e => e.id)) + 1;
    appState.employees.push({
      id: newId,
      name,
      jobTitle,
      jobGrade,
      direction,
      department,
      jobCategory,
      last3YearsPerformance
    });
  }
  
  closeModal('employeeFormModal');
  loadEmployeesDB();
}

// Modal functions
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function openAddUserModal() {
  document.getElementById('userFormTitle').textContent = 'Add New User';
  document.getElementById('userForm').reset();
  document.getElementById('userFormId').value = '';
  
  // Set default permissions for LineManager
  const perms = getDefaultPermissions('LineManager');
  document.getElementById('permCanAssess').checked = perms.canAssessEmployees;
  document.getElementById('permViewAllAssessments').checked = perms.canViewAllAssessments;
  document.getElementById('permEditOwnAssessments').checked = perms.canEditOwnAssessmentsOnly;
  document.getElementById('permEditAllAssessments').checked = perms.canEditAllAssessments;
  document.getElementById('permAddEmployees').checked = perms.canAddEmployees;
  document.getElementById('permEditEmployeeData').checked = perms.canEditEmployeeData;
  document.getElementById('permDeleteEmployees').checked = perms.canDeleteEmployees;
  document.getElementById('permViewAllEmployees').checked = perms.canViewAllEmployees;
  document.getElementById('permAccessAllSections').checked = perms.canAccessAllSections;
  document.getElementById('permRatePerformance').checked = perms.canRatePerformance;
  document.getElementById('permRateEvolution').checked = perms.canRateEvolutionPotential;
  document.getElementById('permRateRetention').checked = perms.canRateRetentionRisk;
  document.getElementById('permDefineNextSteps').checked = perms.canDefineNextSteps;
  document.getElementById('permViewDashboard').checked = perms.canViewExecutiveDashboard;
  document.getElementById('permExportPDF').checked = perms.canExportReportsToPDF;
  document.getElementById('permViewAllManagerData').checked = perms.canViewAllManagerData;
  document.getElementById('permAccessAnalytics').checked = perms.canAccessAnalytics;
  document.getElementById('permManageUsers').checked = perms.canManageUsers;
  document.getElementById('permAssignRoles').checked = perms.canAssignRoles;
  document.getElementById('permResetPasswords').checked = perms.canResetPasswords;
  
  document.getElementById('userFormModal').classList.add('active');
}

function openAddEmployeeModal() {
  document.getElementById('employeeFormTitle').textContent = 'Add New Employee';
  document.getElementById('employeeForm').reset();
  document.getElementById('employeeFormId').value = '';
  document.getElementById('employeeFormModal').classList.add('active');
}

// Setup logo click handlers
function setupLogoClickHandlers() {
  const headerLogo = document.getElementById('headerLogo');
  const sidebarLogo = document.querySelector('.sidebar-logo');
  
  if (headerLogo) {
    headerLogo.parentElement.addEventListener('click', () => {
      if (appState.currentUser) {
        showPage('welcome');
      }
    });
  }
  
  if (sidebarLogo) {
    sidebarLogo.addEventListener('click', () => {
      if (appState.currentUser) {
        showPage('welcome');
      }
    });
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('=== APPLICATION STARTING ===');
  
  // Initialize data first
  initializeData();
  console.log('✓ Data initialized');
  
  // CRITICAL: Ensure correct initial state
  const loginPage = document.getElementById('loginPage');
  const mainApp = document.getElementById('mainApp');
  
  if (loginPage && mainApp) {
    // Show login page, hide main app
    loginPage.style.display = 'flex';
    loginPage.classList.remove('hidden');
    console.log('✓ Login page visible');
    
    mainApp.style.display = 'none';
    mainApp.classList.add('hidden');
    console.log('✓ Main app hidden');
    
    // Focus on username field
    const usernameField = document.getElementById('loginUsername');
    if (usernameField) {
      usernameField.focus();
      console.log('✓ Username field focused');
    }
  } else {
    console.error('✗ Page elements not found!', {loginPage: !!loginPage, mainApp: !!mainApp});
  }
  
  console.log('=== ✓ APPLICATION READY - SHOWING LOGIN PAGE ===');
  
  // Setup logo click handlers
  setupLogoClickHandlers();
  
  // LOGIN FORM - SIMPLIFIED AND GUARANTEED TO WORK
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('=== LOGIN BUTTON CLICKED ===');
      
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      const errorDiv = document.getElementById('loginError');
      
      console.log('Attempting login with username:', username);
      
      // Clear any previous errors
      if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
      }
      
      // Check empty fields
      if (!username || !password) {
        console.log('Empty username or password');
        if (errorDiv) {
          errorDiv.textContent = 'Please enter username and password';
          errorDiv.style.display = 'block';
        }
        return false;
      }
      
      // Try to login
      console.log('Calling login function...');
      const success = login(username, password);
      
      if (success) {
        console.log('✓ LOGIN SUCCESS - User authenticated:', appState.currentUser.fullName);
        
        // IMMEDIATE NAVIGATION - NO DELAYS
        console.log('Starting immediate navigation...');
        
        // Step 1: Hide login page
        const loginPage = document.getElementById('loginPage');
        if (loginPage) {
          loginPage.style.display = 'none';
          console.log('✓ Login page hidden');
        }
        
        // Step 2: Show main app
        const mainApp = document.getElementById('mainApp');
        if (mainApp) {
          mainApp.style.display = 'grid';
          mainApp.classList.remove('hidden');
          console.log('✓ Main app displayed');
        }
        
        // Step 3: Update user info
        const welcomeUser = document.getElementById('welcomeUsername');
        const headerUser = document.getElementById('currentUser');
        if (welcomeUser) welcomeUser.textContent = appState.currentUser.fullName;
        if (headerUser) headerUser.textContent = appState.currentUser.fullName;
        console.log('✓ User info updated');
        
        // Step 4: Setup navigation
        updateNavigationForRole();
        setupNavigation();
        console.log('✓ Navigation setup complete');
        
        // Step 5: Show welcome page
        showPage('welcome');
        console.log('✓ Welcome page shown');
        
        // Step 6: Start clock
        updateDateTime();
        setInterval(updateDateTime, 1000);
        console.log('✓ DateTime started');
        
        console.log('=== ✓✓✓ LOGIN COMPLETE - WELCOME PAGE SHOULD BE VISIBLE ✓✓✓ ===');
        
      } else {
        console.log('✗ LOGIN FAILED - Invalid credentials');
        if (errorDiv) {
          errorDiv.textContent = 'Invalid username or password';
          errorDiv.style.display = 'block';
        }
        document.getElementById('loginPassword').value = '';
      }
      
      return false;
    });
    
    console.log('✓ Login form event listener attached');
  } else {
    console.error('✗ Login form not found!');
  }
  
  // Add Enter key support for login inputs
  const usernameInput = document.getElementById('loginUsername');
  const passwordInput = document.getElementById('loginPassword');
  
  if (usernameInput) {
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        passwordInput.focus();
      }
    });
  }
  
  if (passwordInput) {
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        document.getElementById('loginForm').dispatchEvent(submitEvent);
      }
    });
  }
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // Critical Positions
  document.getElementById('applyFilters')?.addEventListener('click', renderEmployeesTable);
  document.getElementById('clearFilters')?.addEventListener('click', () => {
    document.getElementById('filterDirection').value = '';
    document.getElementById('filterDepartment').value = '';
    document.getElementById('filterGrade').value = '';
    document.getElementById('filterCategory').value = '';
    renderEmployeesTable();
  });
  
  document.getElementById('selectAll')?.addEventListener('change', (e) => {
    document.querySelectorAll('.employee-checkbox').forEach(cb => {
      cb.checked = e.target.checked;
      const empId = parseInt(cb.dataset.id);
      if (e.target.checked) {
        if (!appState.selectedEmployees.includes(empId)) {
          appState.selectedEmployees.push(empId);
        }
      } else {
        appState.selectedEmployees = appState.selectedEmployees.filter(id => id !== empId);
      }
    });
    updateSelectionCount();
  });
  
  document.getElementById('continueToAssessment')?.addEventListener('click', () => {
    showPage('assessment');
  });
  
  // Assessment
  document.getElementById('saveAssessment')?.addEventListener('click', saveAssessmentData);
  document.getElementById('nextToRetention')?.addEventListener('click', () => {
    saveAssessmentData();
    showPage('retention');
  });
  
  // Retention
  document.getElementById('backToAssessment')?.addEventListener('click', () => showPage('assessment'));
  document.getElementById('saveRetention')?.addEventListener('click', saveRetentionData);
  document.getElementById('nextToSteps')?.addEventListener('click', () => {
    saveRetentionData();
    showPage('nextSteps');
  });
  
  // Next Steps
  document.getElementById('backToRetention')?.addEventListener('click', () => showPage('retention'));
  document.getElementById('saveNextSteps')?.addEventListener('click', saveNextStepsData);
  document.getElementById('completeAssessment')?.addEventListener('click', () => {
    saveNextStepsData();
    showPage('nineBoxGrid');
  });
  
  // Users
  document.getElementById('addUserBtn')?.addEventListener('click', openAddUserModal);
  document.getElementById('userForm')?.addEventListener('submit', saveUser);
  
  // Employees
  document.getElementById('addEmployeeBtn')?.addEventListener('click', openAddEmployeeModal);
  document.getElementById('employeeForm')?.addEventListener('submit', saveEmployee);
  document.getElementById('employeeSearch')?.addEventListener('input', renderEmployeesDBTable);
  
  // CSV Import
  document.getElementById('importUsersBtn')?.addEventListener('click', () => {
    document.getElementById('usersCsvInput').click();
  });
  
  document.getElementById('usersCsvInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleUsersImport(file);
      e.target.value = ''; // Reset input
    }
  });
  
  document.getElementById('importEmployeesBtn')?.addEventListener('click', () => {
    document.getElementById('employeesCsvInput').click();
  });
  
  document.getElementById('employeesCsvInput')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleEmployeesImport(file);
      e.target.value = ''; // Reset input
    }
  });
  
  // Dashboard Refresh
  document.getElementById('refreshDashboard')?.addEventListener('click', () => {
    console.log('Refreshing dashboard...');
    loadDashboard();
    
    // Show success message
    const refreshBtn = document.getElementById('refreshDashboard');
    const originalText = refreshBtn.textContent;
    refreshBtn.textContent = '✓ Refreshed!';
    refreshBtn.disabled = true;
    
    setTimeout(() => {
      refreshBtn.textContent = originalText;
      refreshBtn.disabled = false;
    }, 1500);
  });
  
  // PDF Export - WITH VERIFICATION
  const pdfExportBtn = document.getElementById('exportDashboardPDF');
  if (pdfExportBtn) {
    console.log('PDF Export button found - attaching event listener');
    pdfExportBtn.addEventListener('click', () => {
      console.log('PDF Export button clicked!');
      exportDashboardToPDF();
    });
  } else {
    console.warn('PDF Export button not found in DOM');
  }
  
  // Role change handler for permissions
  document.getElementById('userFormRole')?.addEventListener('change', (e) => {
    const role = e.target.value;
    const perms = getDefaultPermissions(role);
    // Update checkboxes with default permissions for selected role
    document.getElementById('permCanAssess').checked = perms.canAssessEmployees;
    document.getElementById('permViewAllAssessments').checked = perms.canViewAllAssessments;
    document.getElementById('permEditOwnAssessments').checked = perms.canEditOwnAssessmentsOnly;
    document.getElementById('permEditAllAssessments').checked = perms.canEditAllAssessments;
    document.getElementById('permAddEmployees').checked = perms.canAddEmployees;
    document.getElementById('permEditEmployeeData').checked = perms.canEditEmployeeData;
    document.getElementById('permDeleteEmployees').checked = perms.canDeleteEmployees;
    document.getElementById('permViewAllEmployees').checked = perms.canViewAllEmployees;
    document.getElementById('permAccessAllSections').checked = perms.canAccessAllSections;
    document.getElementById('permRatePerformance').checked = perms.canRatePerformance;
    document.getElementById('permRateEvolution').checked = perms.canRateEvolutionPotential;
    document.getElementById('permRateRetention').checked = perms.canRateRetentionRisk;
    document.getElementById('permDefineNextSteps').checked = perms.canDefineNextSteps;
    document.getElementById('permViewDashboard').checked = perms.canViewExecutiveDashboard;
    document.getElementById('permExportPDF').checked = perms.canExportReportsToPDF;
    document.getElementById('permViewAllManagerData').checked = perms.canViewAllManagerData;
    document.getElementById('permAccessAnalytics').checked = perms.canAccessAnalytics;
    document.getElementById('permManageUsers').checked = perms.canManageUsers;
    document.getElementById('permAssignRoles').checked = perms.canAssignRoles;
    document.getElementById('permResetPasswords').checked = perms.canResetPasswords;
  });
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });
  
  // Close modal on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});

// PDF Export Function - SIMPLE TEXT DOWNLOAD (GUARANTEED TO WORK)
function exportDashboardToPDF() {
  console.log('=== Starting Simple PDF Export (pdf Format) ===');
  
  // Check permissions
  if (!appState.currentUser || !appState.currentUser.permissions.canExportReportsToPDF) {
    alert('❌ Permission Denied\n\nYou do not have permission to export reports.\n\nPlease contact HR administrator.');
    return;
  }
  
  console.log('✓ Permission granted - proceeding with export');
  
  // Show loading message
  const exportBtn = document.getElementById('exportDashboardPDF');
  if (!exportBtn) {
    console.error('Export button not found');
    return;
  }
  
  const originalText = exportBtn.textContent;
  exportBtn.disabled = true;
  exportBtn.textContent = '📥 Generating Report...';
  
  try {
    console.log('Building report content...');
    
    // Create text content
    let content = '';
    content += '═══════════════════════════════════════════════════════════════\n';
    content += '                    EXECUTIVE DASHBOARD                        \n';
    content += '              SUCCESSION PLANNING REPORT                       \n';
    content += '                                                               \n';
    content += '                          ECPC                                 \n';
    content += '              Human Resources Department                      \n';
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Report metadata
    const now = new Date();
    content += 'Generated: ' + now.toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    }) + '\n';
    content += 'By: ' + appState.currentUser.fullName + '\n';
    content += 'Role: ' + appState.currentUser.role + '\n\n';
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Key Performance Indicators
    content += 'KEY PERFORMANCE INDICATORS\n\n';
    
    const totalTalent = appState.employees.length;
    content += 'Total Talent Pool: ' + totalTalent + ' employees\n';
    
    // Critical Roles
    let criticalRoles = 0;
    Object.keys(appState.assessments).forEach(empId => {
      const a = appState.assessments[empId];
      if (a.performanceContribution >= 2 && 
          (a.riskOfLoss === 'High' || a.evolutionPotential === 3) &&
          a.nextRole && a.nextRole.trim() !== '') {
        criticalRoles++;
      }
    });
    content += 'Critical Roles: ' + criticalRoles + '\n';
    
    // Average Performance
    let avgPerf = 0;
    let perfCount = 0;
    Object.values(appState.assessments).forEach(a => {
      if (a.performanceContribution) {
        avgPerf += a.performanceContribution;
        perfCount++;
      }
    });
    avgPerf = perfCount > 0 ? (avgPerf / perfCount).toFixed(2) : '0.00';
    content += 'Average Performance: ' + avgPerf + '/3\n';
    
    // Average Readiness
    let avgReadiness = 0;
    let readinessCount = 0;
    Object.values(appState.assessments).forEach(a => {
      if (a.readiness) {
        const readinessMap = { 'Ready Now': 3, '1-3 Years': 2, 'More than 3 Years': 1 };
        avgReadiness += readinessMap[a.readiness] || 0;
        readinessCount++;
      }
    });
    avgReadiness = readinessCount > 0 ? Math.round((avgReadiness / readinessCount / 3) * 100) : 0;
    content += 'Average Readiness: ' + avgReadiness + '%\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Retention Risk Distribution
    content += 'RETENTION RISK DISTRIBUTION\n\n';
    const riskCounts = { Low: 0, Medium: 0, High: 0 };
    Object.values(appState.assessments).forEach(a => {
      if (a.riskOfLoss) riskCounts[a.riskOfLoss]++;
    });
    const totalRisk = riskCounts.Low + riskCounts.Medium + riskCounts.High;
    
    content += 'Low Risk: ' + riskCounts.Low + ' employees';
    if (totalRisk > 0) content += ' (' + ((riskCounts.Low / totalRisk) * 100).toFixed(1) + '%)';
    content += '\n';
    
    content += 'Medium Risk: ' + riskCounts.Medium + ' employees';
    if (totalRisk > 0) content += ' (' + ((riskCounts.Medium / totalRisk) * 100).toFixed(1) + '%)';
    content += '\n';
    
    content += 'High Risk: ' + riskCounts.High + ' employees';
    if (totalRisk > 0) content += ' (' + ((riskCounts.High / totalRisk) * 100).toFixed(1) + '%)';
    content += '\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Talent Categories (9-Box Grid)
    content += 'TALENT CATEGORIES (9-BOX DISTRIBUTION)\n\n';
    const distribution = {
      'FUTURE LEADER': 0, 'GROWTH EMPLOYEE': 0, 'ENIGMA': 0,
      'EFFECTIVE PERFORMER': 0, 'CORE EMPLOYEE': 0, 'DILEMMA': 0,
      'HIGH IMPACT PERFORMER': 0, 'SPECIALIST': 0, 'UNDERPERFORMER': 0
    };
    
    Object.values(appState.assessments).forEach(a => {
      if (a.performanceContribution && a.evolutionPotential) {
        const category = get9BoxCategory(a.performanceContribution, a.evolutionPotential);
        distribution[category.name]++;
      }
    });
    
    content += 'Future Leaders: ' + distribution['FUTURE LEADER'] + '\n';
    content += 'Growth Employees: ' + distribution['GROWTH EMPLOYEE'] + '\n';
    content += 'Effective Performers: ' + distribution['EFFECTIVE PERFORMER'] + '\n';
    content += 'Core Employees: ' + distribution['CORE EMPLOYEE'] + '\n';
    content += 'High Impact Performers: ' + distribution['HIGH IMPACT PERFORMER'] + '\n';
    content += 'Enigmas: ' + distribution['ENIGMA'] + '\n';
    content += 'Dilemmas: ' + distribution['DILEMMA'] + '\n';
    content += 'Specialists: ' + distribution['SPECIALIST'] + '\n';
    content += 'Underperformers: ' + distribution['UNDERPERFORMER'] + '\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Readiness Summary
    content += 'SUCCESSION READINESS SUMMARY\n\n';
    const readiness = { 'Ready Now': 0, '1-3 Years': 0, 'More than 3 Years': 0 };
    let totalReadiness = 0;
    Object.values(appState.assessments).forEach(a => {
      if (a.readiness) {
        readiness[a.readiness]++;
        totalReadiness++;
      }
    });
    
    content += 'Ready Now: ' + readiness['Ready Now'] + ' employees';
    if (totalReadiness > 0) content += ' (' + ((readiness['Ready Now'] / totalReadiness) * 100).toFixed(1) + '%)';
    content += '\n';
    
    content += '1-3 Years: ' + readiness['1-3 Years'] + ' employees';
    if (totalReadiness > 0) content += ' (' + ((readiness['1-3 Years'] / totalReadiness) * 100).toFixed(1) + '%)';
    content += '\n';
    
    content += 'More than 3 Years: ' + readiness['More than 3 Years'] + ' employees';
    if (totalReadiness > 0) content += ' (' + ((readiness['More than 3 Years'] / totalReadiness) * 100).toFixed(1) + '%)';
    content += '\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Talent by Direction
    content += 'READINESS BY DIRECTION\n\n';
    const directionData = {};
    Object.keys(appState.assessments).forEach(empId => {
      const emp = appState.employees.find(e => e.id === parseInt(empId));
      const assessment = appState.assessments[empId];
      if (emp && assessment.readiness) {
        if (!directionData[emp.direction]) {
          directionData[emp.direction] = { 'Ready Now': 0, '1-3 Years': 0, 'More than 3 Years': 0, Total: 0 };
        }
        directionData[emp.direction][assessment.readiness]++;
        directionData[emp.direction].Total++;
      }
    });
    
    Object.keys(directionData).sort().forEach(dir => {
      const d = directionData[dir];
      content += dir + ': ';
      content += 'Ready=' + d['Ready Now'] + ', ';
      content += '1-3Y=' + d['1-3 Years'] + ', ';
      content += '3+Y=' + d['More than 3 Years'] + ', ';
      content += 'Total=' + d.Total + '\n';
    });
    
    content += '\n═══════════════════════════════════════════════════════════════\n\n';
    
    // Risk & Impact Matrix
    content += 'RISK & IMPACT ASSESSMENT MATRIX\n\n';
    const heatmapData = {
      'High-High': 0, 'High-Medium': 0, 'High-Low': 0,
      'Medium-High': 0, 'Medium-Medium': 0, 'Medium-Low': 0,
      'Low-High': 0, 'Low-Medium': 0, 'Low-Low': 0
    };
    
    Object.values(appState.assessments).forEach(a => {
      if (a.riskOfLoss && a.impactOfLoss) {
        const key = `${a.riskOfLoss}-${a.impactOfLoss}`;
        heatmapData[key]++;
      }
    });
    
    content += '                 Low Impact | Medium Impact | High Impact\n';
    content += '             -------------------------------------------\n';
    content += '  High Risk  |      ' + String(heatmapData['High-Low']).padStart(2, ' ') + '     |      ' + String(heatmapData['High-Medium']).padStart(2, ' ') + '       |      ' + String(heatmapData['High-High']).padStart(2, ' ') + '\n';
    content += 'Medium Risk  |      ' + String(heatmapData['Medium-Low']).padStart(2, ' ') + '     |      ' + String(heatmapData['Medium-Medium']).padStart(2, ' ') + '       |      ' + String(heatmapData['Medium-High']).padStart(2, ' ') + '\n';
    content += '   Low Risk  |      ' + String(heatmapData['Low-Low']).padStart(2, ' ') + '     |      ' + String(heatmapData['Low-Medium']).padStart(2, ' ') + '       |      ' + String(heatmapData['Low-High']).padStart(2, ' ') + '\n\n';
    
    content += '⚠ CRITICAL: ' + heatmapData['High-High'] + ' employees identified as High Risk & High Impact\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Detailed Talent Inventory
    content += 'DETAILED TALENT INVENTORY\n\n';
    content += 'Total Assessed Employees: ' + Object.keys(appState.assessments).length + '\n\n';
    
    let empNum = 1;
    Object.keys(appState.assessments).forEach(empId => {
      const emp = appState.employees.find(e => e.id === parseInt(empId));
      const assess = appState.assessments[empId];
      
      if (!emp) return;
      
      content += empNum + '. ' + emp.name + '\n';
      content += '   Title: ' + emp.jobTitle + '\n';
      content += '   Grade: ' + emp.jobGrade + ' | Direction: ' + emp.direction + '\n';
      content += '   Department: ' + emp.department + '\n';
      content += '   Performance: ' + getPerformanceLabel(assess.performanceContribution) + '\n';
      content += '   Potential: ' + getPotentialLabel(assess.evolutionPotential) + '\n';
      
      if (assess.performanceContribution && assess.evolutionPotential) {
        const cat = get9BoxCategory(assess.performanceContribution, assess.evolutionPotential);
        content += '   Category: ' + cat.name + '\n';
      }
      
      content += '   Retention Risk: ' + (assess.riskOfLoss || 'N/A') + '\n';
      content += '   Impact of Loss: ' + (assess.impactOfLoss || 'N/A') + '\n';
      content += '   Next Role: ' + (assess.nextRole || 'Not defined') + '\n';
      content += '   Readiness: ' + (assess.readiness || 'Not assessed') + '\n\n';
      
      empNum++;
    });
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Key Recommendations
    content += 'STRATEGIC RECOMMENDATIONS\n\n';
    content += '1. RETENTION FOCUS AREAS:\n';
    content += '   • ' + heatmapData['High-High'] + ' employees require immediate retention initiatives\n';
    content += '   • Conduct stay interviews with high-risk critical talent\n';
    content += '   • Review compensation and development opportunities\n\n';
    
    content += '2. DEVELOPMENT PRIORITIES:\n';
    content += '   • ' + distribution['FUTURE LEADER'] + ' Future Leaders - priority succession candidates\n';
    content += '   • ' + distribution['GROWTH EMPLOYEE'] + ' Growth Employees - need performance support\n';
    content += '   • ' + distribution['ENIGMA'] + ' Enigmas - high potential requiring coaching\n\n';
    
    content += '3. SUCCESSION READINESS:\n';
    content += '   • ' + readiness['Ready Now'] + ' employees ready for immediate promotion\n';
    content += '   • ' + readiness['1-3 Years'] + ' employees in development pipeline (1-3 years)\n';
    content += '   • Create succession plans for critical leadership positions\n\n';
    
    content += '4. ACTION TIMELINE:\n';
    content += '   • Immediate (0-30 days): Address high-risk retention cases\n';
    content += '   • Short-term (1-3 months): Launch development programs\n';
    content += '   • Medium-term (3-6 months): Implement mentoring initiatives\n';
    content += '   • Long-term (6-12 months): Quarterly reviews and assessments\n\n';
    
    content += '═══════════════════════════════════════════════════════════════\n\n';
    
    // Footer
    content += 'ECPC - Human Resources Department\n';
    content += 'CONFIDENTIAL - For Internal Use Only\n';
    content += 'Unauthorized distribution or disclosure is prohibited\n\n';
    content += 'End of Report\n';
    content += '═══════════════════════════════════════════════════════════════\n';
    
    console.log('✓ Report content generated (' + content.length + ' characters)');
    
    // Download the file
    const timestamp = getTimestamp();
    const filename = 'Succession_Dashboard_' + timestamp + '.txt';
    
    console.log('Initiating download as:', filename);
    downloadTextAsFile(content, filename);
    
    // Success feedback
    exportBtn.textContent = '✓ Downloaded!';
    exportBtn.disabled = false;
    
    setTimeout(() => {
      alert('✓ REPORT DOWNLOADED SUCCESSFULLY!\n\nFilename: ' + filename + '\n\nThe report has been saved to your Downloads folder.\n\nReport includes:\n• Key Performance Indicators\n• Retention Risk Analysis\n• Talent Category Distribution\n• Succession Readiness\n• Detailed Employee Inventory\n• Strategic Recommendations\n\nYou can open this file in any text editor.');
      
      exportBtn.textContent = originalText;
    }, 1000);
    
    console.log('=== ✓ Export Completed Successfully ===');
    
  } catch (error) {
    console.error('=== Export Error ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    
    alert('❌ Export Failed\n\nError: ' + error.message + '\n\nPlease try again or contact IT support.');
    
    exportBtn.disabled = false;
    exportBtn.textContent = originalText;
  }
}

// Helper function to download text as file
function downloadTextAsFile(content, filename) {
  console.log('Creating download link for:', filename);
  
  try {
    // Create a link element
    const element = document.createElement('a');
    
    // Set the file content as data URL
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    
    // Append to body, click, and remove
    document.body.appendChild(element);
    console.log('✓ Link created and appended to body');
    
    element.click();
    console.log('✓ Download triggered');
    
    document.body.removeChild(element);
    console.log('✓ Link removed from body');
    
    console.log('✓ File download initiated successfully');
    
  } catch (error) {
    console.error('Download error:', error);
    throw new Error('Failed to download file: ' + error.message);
  }
}

// Helper function to get timestamp for filename
function getTimestamp() {
  const now = new Date();
  return now.getFullYear() + '-' + 
         String(now.getMonth() + 1).padStart(2, '0') + '-' +
         String(now.getDate()).padStart(2, '0') + '_' +
         String(now.getHours()).padStart(2, '0') + '-' +
         String(now.getMinutes()).padStart(2, '0') + '-' +
         String(now.getSeconds()).padStart(2, '0');
}
