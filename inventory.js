/**
 * GastroGest - Main Application Orchestrator
 * Binds modules together, controls routing, modal toggles, and dashboard widgets.
 */

const App = {
    currentSection: 'dashboard',

    init() {
        // Initialize other modules
        if (window.Tables) Tables.init();
        if (window.CRM) CRM.init();
        if (window.Inventory) Inventory.init();
        if (window.Finances) Finances.init();

        // Setup routing based on hash URL
        this.handleHashRoute();
        window.addEventListener('hashchange', () => this.handleHashRoute());

        // Initial Dashboard rendering
        this.updateDashboardKPIs();
        this.renderDashboardReservations();
        this.renderDashboardStockAlerts();
    },

    // --- TAB ROUTING ---
    navigateTo(sectionId) {
        this.currentSection = sectionId;

        // Update active class on Sidebar links
        document.querySelectorAll('.nav-menu .nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.getElementById(`nav-${sectionId}`);
        if (activeNavItem) activeNavItem.classList.add('active');

        // Hide/Show section panels
        document.querySelectorAll('.app-section').forEach(section => {
            section.classList.remove('active-section');
        });
        const activeSection = document.getElementById(`section-${sectionId}`);
        if (activeSection) activeSection.classList.add('active-section');

        // Trigger updates depending on view
        this.refreshSectionView(sectionId);
    },

    handleHashRoute() {
        const hash = window.location.hash.replace('#', '') || 'dashboard';
        const validSections = ['dashboard', 'tables', 'reservations', 'clients', 'inventory', 'finances'];
        
        if (validSections.includes(hash)) {
            this.navigateTo(hash);
        } else {
            this.navigateTo('dashboard');
        }
    },

    refreshSectionView(sectionId) {
        switch (sectionId) {
            case 'dashboard':
                this.updateDashboardKPIs();
                this.renderDashboardReservations();
                this.renderDashboardStockAlerts();
                break;
            case 'tables':
                if (window.Tables) Tables.renderTablesMap();
                break;
            case 'reservations':
                if (window.CRM) CRM.renderReservations();
                break;
            case 'clients':
                if (window.CRM) CRM.renderClients();
                break;
            case 'inventory':
                if (window.Inventory) Inventory.renderInventory();
                break;
            case 'finances':
                if (window.Finances) Finances.renderFinances();
                break;
        }
    },

    // ==========================================
    // DASHBOARD METRICS & WIDGETS
    // ==========================================

    updateDashboardKPIs() {
        // 1. Today's Sales
        const finances = StorageManager.getFinances();
        const todayStr = new Date().toISOString().split('T')[0];
        const salesToday = finances
            .filter(tx => tx.tipo === 'Ingreso' && tx.categoria === 'Ventas' && tx.fecha.startsWith(todayStr))
            .reduce((sum, tx) => sum + tx.monto, 0);
        
        const salesEl = document.getElementById('kpi-sales-today');
        if (salesEl) salesEl.textContent = `$${salesToday.toFixed(2)}`;

        // 2. Active Tables
        const tables = StorageManager.getTables();
        const activeTables = tables.filter(t => t.estado === 'Ocupada').length;
        const totalTables = tables.length;
        const tablesEl = document.getElementById('kpi-tables-active');
        if (tablesEl) tablesEl.textContent = `${activeTables} / ${totalTables}`;

        // 3. Pending Reservations Today
        const reservations = StorageManager.getReservations();
        const pendingReservations = reservations.filter(r => r.fecha === todayStr && r.estado === 'Pendiente').length;
        const resEl = document.getElementById('kpi-reservations-pending');
        if (resEl) resEl.textContent = pendingReservations;

        // 4. Inventory Stock Warnings
        const inventory = StorageManager.getInventory();
        const warningItems = inventory.filter(i => i.cantidad <= i.stockMinimo).length;
        const warningsEl = document.getElementById('kpi-inventory-warnings');
        if (warningsEl) warningsEl.textContent = warningItems;
    },

    renderDashboardReservations() {
        const tbody = document.querySelector('#dashboard-reservations-table tbody');
        if (!tbody) return;

        const reservations = StorageManager.getReservations();
        const todayStr = new Date().toISOString().split('T')[0];
        
        // Show today's reservations
        const todayReservations = reservations.filter(r => r.fecha === todayStr);

        tbody.innerHTML = '';

        if (todayReservations.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">No hay reservaciones programadas para hoy.</td></tr>';
            return;
        }

        todayReservations.forEach(res => {
            let statusClass = 'badge-warning';
            if (res.estado === 'Completada' || res.estado === 'Asistió') statusClass = 'badge-success';
            if (res.estado === 'Cancelada') statusClass = 'badge-danger';

            let actionButtons = '';
            if (res.estado === 'Pendiente') {
                actionButtons = `
                    <button class="btn btn-success" style="padding: 4px 8px; font-size: 11px;" onclick="CRM.changeReservationState('${res.id}', 'Asistió')">Check-In</button>
                    <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="CRM.changeReservationState('${res.id}', 'Cancelada')">Cancelar</button>
                `;
            } else {
                actionButtons = `<span style="font-size: 11px; color: var(--text-muted);">${res.estado}</span>`;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${res.clienteNombre}</strong></td>
                <td><strong style="color: var(--primary-hover);">Mesa ${res.mesaNumero}</strong></td>
                <td>${res.hora} hrs</td>
                <td>${res.personas} pers.</td>
                <td><span class="badge ${statusClass}">${res.estado}</span></td>
                <td>${actionButtons}</td>
            `;
            tbody.appendChild(tr);
        });
    },

    renderDashboardStockAlerts() {
        const container = document.getElementById('dashboard-stock-alerts');
        if (!container) return;

        const inventory = StorageManager.getInventory();
        const lowStockItems = inventory.filter(i => i.cantidad <= i.stockMinimo);

        container.innerHTML = '';

        if (lowStockItems.length === 0) {
            container.innerHTML = `
                <div style="background: rgba(16, 185, 129, 0.05); padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(16, 185, 129, 0.2); font-size: 12px; color: var(--success); display: flex; align-items: center; gap: 8px;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    Excelente: Todos los insumos tienen stock suficiente.
                </div>`;
            return;
        }

        lowStockItems.slice(0, 4).forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.style.background = 'rgba(244, 63, 94, 0.06)';
            itemDiv.style.border = '1px solid rgba(244, 63, 94, 0.15)';
            itemDiv.style.borderRadius = 'var(--radius-sm)';
            itemDiv.style.padding = '10px 14px';
            itemDiv.style.display = 'flex';
            itemDiv.style.justifyContent = 'space-between';
            itemDiv.style.alignItems = 'center';
            itemDiv.style.fontSize = '12px';

            itemDiv.innerHTML = `
                <div>
                    <strong style="color: #fff;">${item.nombre}</strong>
                    <div style="color: var(--text-secondary); margin-top: 2px;">Stock: ${item.cantidad} ${item.unit || item.unidad} (Mín: ${item.stockMinimo})</div>
                </div>
                <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 10px;" onclick="App.quickRestock('${item.id}')">Surtir</button>
            `;
            container.appendChild(itemDiv);
        });
    },

    quickRestock(productId) {
        this.navigateTo('inventory');
        if (window.Inventory) {
            Inventory.openStockModal(productId);
        }
    }
};

// Start application when page is loaded
window.addEventListener('DOMContentLoaded', () => {
    App.init();
    window.App = App;
});
