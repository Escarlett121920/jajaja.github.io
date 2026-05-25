/* 
 * GastroGest - Premium Styling System
 * Sleek Dark Mode with Gold/Amber Accents, Glassmorphism, and Fluid Transitions
 */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

:root {
    --bg-main: #090d16;
    --bg-surface: rgba(21, 30, 47, 0.7);
    --bg-surface-solid: #151e2f;
    --border-color: rgba(255, 255, 255, 0.08);
    --border-highlight: rgba(217, 119, 6, 0.3);
    
    --primary: #d97706;
    --primary-hover: #f59e0b;
    --primary-light: rgba(217, 119, 6, 0.15);
    
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    
    --success: #10b981;
    --success-light: rgba(16, 185, 129, 0.15);
    --danger: #f43f5e;
    --danger-light: rgba(244, 63, 94, 0.15);
    --warning: #f59e0b;
    --warning-light: rgba(245, 158, 11, 0.15);
    --info: #0ea5e9;
    --info-light: rgba(14, 165, 233, 0.15);
    
    --shadow-sm: 0 2px 8px -1px rgba(0,0,0,0.2);
    --shadow-md: 0 10px 25px -5px rgba(0,0,0,0.4);
    --shadow-lg: 0 20px 40px -10px rgba(0,0,0,0.6);
    
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --radius-full: 9999px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    overflow-x: hidden;
}

h1, h2, h3, h4, .brand-name {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    letter-spacing: -0.02em;
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar-track {
    background: var(--bg-main);
}
::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
}

/* Navigation Sidebar */
.sidebar {
    width: 260px;
    background-color: var(--bg-surface-solid);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: var(--transition-normal);
}

.brand-container {
    padding: 30px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--border-color);
}

.brand-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary), #ef4444);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px rgba(217, 119, 6, 0.4);
}

.brand-logo svg {
    width: 22px;
    height: 22px;
    fill: #fff;
}

.brand-name {
    font-size: 22px;
    background: linear-gradient(to right, #fff, #fef08a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-menu {
    list-style: none;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
}

.nav-item a {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 16px;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: var(--radius-sm);
    font-size: 15px;
    font-weight: 500;
    transition: var(--transition-fast);
}

.nav-item a svg {
    width: 20px;
    height: 20px;
    stroke: var(--text-secondary);
    fill: none;
    stroke-width: 2;
    transition: var(--transition-fast);
}

.nav-item a:hover {
    color: var(--text-primary);
    background-color: rgba(255, 255, 255, 0.04);
}

.nav-item.active a {
    color: #fff;
    background-color: var(--primary);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.35);
}

.nav-item.active a svg {
    stroke: #fff;
}

.sidebar-footer {
    padding: 20px 24px;
    border-top: 1px solid var(--border-color);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
}

/* Main Workspace */
.main-content {
    flex-grow: 1;
    padding: 40px;
    height: 100vh;
    overflow-y: auto;
    position: relative;
}

/* App Sections Visibility */
.app-section {
    display: none;
    animation: fadeIn var(--transition-normal);
}

.app-section.active-section {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Page Headers */
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.page-title h2 {
    font-size: 32px;
    color: var(--text-primary);
}

.page-title p {
    color: var(--text-secondary);
    font-size: 14px;
    margin-top: 4px;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 600;
    border-radius: var(--radius-sm);
    border: none;
    cursor: pointer;
    transition: var(--transition-fast);
    text-decoration: none;
    color: #fff;
}

.btn-primary {
    background-color: var(--primary);
    box-shadow: 0 4px 10px rgba(217, 119, 6, 0.2);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(217, 119, 6, 0.3);
}

.btn-secondary {
    background-color: rgba(255,255,255,0.06);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background-color: rgba(255,255,255,0.1);
    color: #fff;
}

.btn-danger {
    background-color: var(--danger);
    box-shadow: 0 4px 10px rgba(244, 63, 94, 0.2);
}

.btn-danger:hover {
    background-color: #e11d48;
}

.btn-success {
    background-color: var(--success);
    box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
}

.btn-success:hover {
    background-color: #059669;
}

.btn:active {
    transform: scale(0.97);
}

/* Cards & Glassmorphism */
.glass-card {
    background: var(--bg-surface);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 24px;
    box-shadow: var(--shadow-md);
    transition: var(--transition-fast);
}

.glass-card:hover {
    border-color: rgba(255,255,255,0.12);
    box-shadow: var(--shadow-lg);
}

/* Dashboard Metrics */
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.metric-card {
    display: flex;
    align-items: center;
    gap: 20px;
}

.metric-icon {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
}

.metric-icon.color-primary { background-color: var(--primary-light); color: var(--primary); }
.metric-icon.color-success { background-color: var(--success-light); color: var(--success); }
.metric-icon.color-danger { background-color: var(--danger-light); color: var(--danger); }
.metric-icon.color-warning { background-color: var(--warning-light); color: var(--warning); }
.metric-icon.color-info { background-color: var(--info-light); color: var(--info); }

.metric-icon svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
}

.metric-info h3 {
    font-size: 26px;
    font-weight: 700;
}

.metric-info p {
    font-size: 13px;
    color: var(--text-secondary);
    margin-top: 2px;
}

/* Dashboard Summary Cards and Layout */
.dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
}

.dashboard-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.dashboard-panel-title {
    font-size: 18px;
    color: var(--text-primary);
}

/* Tables Section - Interactive Map */
.tables-map-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tables-legend {
    display: flex;
    gap: 24px;
    font-size: 13px;
    background: rgba(255,255,255,0.03);
    padding: 12px 20px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-color);
    width: fit-content;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
}

.legend-dot {
    width: 12px;
    height: 12px;
    border-radius: var(--radius-full);
}

.legend-dot.libre { background-color: var(--success); }
.legend-dot.ocupada { background-color: var(--danger); }
.legend-dot.reservada { background-color: var(--warning); }

.tables-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px;
}

.table-card {
    height: 150px;
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.02);
    border: 2px dashed rgba(255,255,255,0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    cursor: pointer;
    transition: var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.table-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.04);
}

.table-card.state-libre {
    border-style: solid;
    border-color: var(--success-light);
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.01));
}
.table-card.state-libre:hover {
    border-color: var(--success);
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
}

.table-card.state-ocupada {
    border-style: solid;
    border-color: var(--danger-light);
    background: linear-gradient(135deg, rgba(244, 63, 94, 0.06), rgba(244, 63, 94, 0.01));
}
.table-card.state-ocupada:hover {
    border-color: var(--danger);
    box-shadow: 0 0 15px rgba(244, 63, 94, 0.15);
}

.table-card.state-reservada {
    border-style: solid;
    border-color: var(--warning-light);
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.06), rgba(245, 158, 11, 0.01));
}
.table-card.state-reservada:hover {
    border-color: var(--warning);
    box-shadow: 0 0 15px rgba(245, 158, 11, 0.15);
}

.table-num {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
}

.table-capacity {
    font-size: 12px;
    color: var(--text-secondary);
}

.table-status-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 3px 8px;
    border-radius: var(--radius-full);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.state-libre .table-status-badge { background-color: var(--success-light); color: var(--success); }
.state-ocupada .table-status-badge { background-color: var(--danger-light); color: var(--danger); }
.state-reservada .table-status-badge { background-color: var(--warning-light); color: var(--warning); }

.table-amount {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    margin-top: auto;
}

/* Order Management Sidebar (Sliding or Overlay) */
.order-sidebar-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-fast);
}

.order-sidebar-backdrop.active {
    opacity: 1;
    visibility: visible;
}

.order-sidebar {
    position: fixed;
    top: 0;
    right: -450px;
    bottom: 0;
    width: 450px;
    background: var(--bg-surface-solid);
    border-left: 1px solid var(--border-color);
    box-shadow: var(--shadow-lg);
    z-index: 1001;
    display: flex;
    flex-direction: column;
    transition: var(--transition-normal);
}

.order-sidebar.active {
    right: 0;
}

.order-sidebar-header {
    padding: 24px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.order-sidebar-header h3 {
    font-size: 20px;
}

.btn-close {
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 24px;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-fast);
}

.btn-close:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
}

.order-sidebar-content {
    flex-grow: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.order-state-actions {
    display: flex;
    gap: 12px;
}

.order-items-list {
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(0,0,0,0.2);
    min-height: 120px;
    max-height: 240px;
    overflow-y: auto;
}

.empty-order-msg {
    text-align: center;
    color: var(--text-muted);
    padding: 40px 20px;
    font-size: 14px;
}

.order-item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
}

.order-item-row:last-child {
    border-bottom: none;
}

.order-item-info {
    flex-grow: 1;
}

.order-item-name {
    font-size: 14px;
    font-weight: 500;
}

.order-item-price {
    font-size: 12px;
    color: var(--text-secondary);
    margin-top: 2px;
}

.order-item-qty-control {
    display: flex;
    align-items: center;
    gap: 10px;
}

.qty-btn {
    width: 24px;
    height: 24px;
    border-radius: var(--radius-full);
    border: 1px solid var(--border-color);
    background: rgba(255,255,255,0.05);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.qty-btn:hover {
    background: var(--primary);
    border-color: var(--primary);
}

.qty-val {
    font-size: 14px;
    font-weight: 600;
    min-width: 18px;
    text-align: center;
}

.menu-selector {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.menu-selector label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    max-height: 220px;
    overflow-y: auto;
    padding-right: 4px;
}

.menu-card-item {
    padding: 10px;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    cursor: pointer;
    text-align: left;
    transition: var(--transition-fast);
}

.menu-card-item:hover {
    background: var(--primary-light);
    border-color: var(--primary);
}

.menu-card-item .item-title {
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.menu-card-item .item-price {
    font-size: 11px;
    color: var(--primary-hover);
    margin-top: 2px;
}

.order-sidebar-footer {
    padding: 24px;
    border-top: 1px solid var(--border-color);
    background: rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.order-total-summary {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 700;
}

.order-total-val {
    color: var(--primary-hover);
}

/* Modals */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-fast);
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    background: var(--bg-surface-solid);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    width: 100%;
    max-width: 500px;
    box-shadow: var(--shadow-lg);
    transform: scale(0.95);
    transition: var(--transition-fast);
    overflow: hidden;
}

.modal-overlay.active .modal-content {
    transform: scale(1);
}

.modal-header {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    font-size: 20px;
}

.modal-body {
    padding: 24px;
}

.modal-footer {
    padding: 16px 24px;
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    background: rgba(0,0,0,0.1);
}

/* Forms */
.form-group {
    margin-bottom: 18px;
}

.form-group:last-child {
    margin-bottom: 0;
}

.form-group label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 6px;
}

.form-control {
    width: 100%;
    padding: 10px 14px;
    background: rgba(0,0,0,0.25);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 14px;
    transition: var(--transition-fast);
}

.form-control:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px var(--primary-light);
}

textarea.form-control {
    resize: vertical;
    min-height: 80px;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}

/* Data Tables */
.table-responsive {
    overflow-x: auto;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(255,255,255,0.01);
}

.data-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 14px;
}

.data-table th {
    background: rgba(255,255,255,0.03);
    padding: 14px 18px;
    font-weight: 600;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border-color);
}

.data-table td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
}

.data-table tr:last-child td {
    border-bottom: none;
}

.data-table tr:hover td {
    background: rgba(255,255,255,0.02);
}

.actions-cell {
    display: flex;
    gap: 8px;
}

.btn-icon {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border-color);
    background: rgba(255,255,255,0.04);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-fast);
}

.btn-icon:hover {
    color: #fff;
    background: rgba(255,255,255,0.08);
}

.btn-icon.edit:hover {
    border-color: var(--info);
    background: var(--info-light);
    color: var(--info);
}

.btn-icon.delete:hover {
    border-color: var(--danger);
    background: var(--danger-light);
    color: var(--danger);
}

.btn-icon svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
}

/* Badges */
.badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: var(--radius-full);
    font-size: 11px;
    font-weight: 600;
}

.badge-success { background: var(--success-light); color: var(--success); }
.badge-danger { background: var(--danger-light); color: var(--danger); }
.badge-warning { background: var(--warning-light); color: var(--warning); }
.badge-info { background: var(--info-light); color: var(--info); }

/* Filters / Search Bar Row */
.filter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 16px;
    flex-wrap: wrap;
}

.search-box {
    position: relative;
    max-width: 320px;
    width: 100%;
}

.search-box input {
    padding-left: 36px;
}

.search-box svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    stroke: var(--text-muted);
    fill: none;
    stroke-width: 2;
}

.filter-group {
    display: flex;
    gap: 8px;
}

.filter-btn {
    padding: 8px 14px;
    font-size: 13px;
    font-weight: 500;
    background: rgba(255,255,255,0.03);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    cursor: pointer;
    transition: var(--transition-fast);
}

.filter-btn:hover {
    color: var(--text-primary);
    background: rgba(255,255,255,0.06);
}

.filter-btn.active {
    background: var(--primary-light);
    border-color: var(--primary);
    color: #fff;
}

/* CRM Client Card View option or Table detail */
.client-meta {
    font-size: 12px;
    color: var(--text-secondary);
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
}

/* Stock Status warnings */
.stock-warning-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--danger);
    font-size: 11px;
    font-weight: 700;
    margin-top: 2px;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}

/* Finance Charts and Cashflow widgets */
.finance-summary {
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    gap: 24px;
}

.recent-transactions {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.tx-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    background: rgba(255,255,255,0.02);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    transition: var(--transition-fast);
}

.tx-item:hover {
    background: rgba(255,255,255,0.04);
}

.tx-left {
    display: flex;
    align-items: center;
    gap: 14px;
}

.tx-icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
}

.tx-icon.ingreso { background: var(--success-light); color: var(--success); }
.tx-icon.egreso { background: var(--danger-light); color: var(--danger); }

.tx-icon svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
}

.tx-desc {
    font-size: 14px;
    font-weight: 500;
}

.tx-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 2px;
}

.tx-amount {
    font-size: 15px;
    font-weight: 700;
}

.tx-amount.ingreso { color: var(--success); }
.tx-amount.egreso { color: var(--danger); }

/* Progress meters for finances categories */
.category-progress-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.prog-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.prog-labels {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 500;
}

.prog-bar-bg {
    height: 8px;
    background: rgba(255,255,255,0.06);
    border-radius: var(--radius-full);
    overflow: hidden;
}

.prog-bar-fill {
    height: 100%;
    border-radius: var(--radius-full);
}

.prog-bar-fill.ingresos { background: var(--success); }
.prog-bar-fill.egresos { background: var(--danger); }

/* responsive mobile sidebar toggle */
@media (max-width: 992px) {
    body {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
        position: relative;
    }
    .brand-container {
        padding: 16px 20px;
    }
    .nav-menu {
        flex-direction: row;
        overflow-x: auto;
        padding: 12px 20px;
        gap: 12px;
    }
    .nav-item a {
        padding: 8px 12px;
        white-space: nowrap;
    }
    .main-content {
        height: auto;
        padding: 24px 20px;
    }
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
    .finance-summary {
        grid-template-columns: 1fr;
    }
    .order-sidebar {
        width: 100%;
        right: -100%;
    }
}
