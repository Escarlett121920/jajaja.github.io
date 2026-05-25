/**
 * GastroGest - Finances Module (ERP)
 * Registers cashflow, revenue sales, manual expenditures, and visual balances.
 */

const Finances = {
    searchQuery: '',

    init() {
        this.renderFinances();
        this.setupEventListeners();
    },

    setupEventListeners() {
        const searchInput = document.getElementById('search-finances');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
                this.renderFinances();
            });
        }
    },

    renderFinances() {
        const listContainer = document.getElementById('finances-list');
        if (!listContainer) return;

        const finances = StorageManager.getFinances();
        listContainer.innerHTML = '';

        let totalIncomes = 0;
        let totalOutflows = 0;

        // Calculate actual totals from database
        finances.forEach(tx => {
            if (tx.tipo === 'Ingreso') {
                totalIncomes += tx.monto;
            } else {
                totalOutflows += tx.monto;
            }
        });

        const netBalance = totalIncomes - totalOutflows;

        // Render KPI Totals
        document.getElementById('finance-total-incomes').textContent = `$${totalIncomes.toFixed(2)}`;
        document.getElementById('finance-total-outflows').textContent = `$${totalOutflows.toFixed(2)}`;
        
        const balanceEl = document.getElementById('finance-balance');
        balanceEl.textContent = `$${netBalance.toFixed(2)}`;
        if (netBalance >= 0) {
            balanceEl.style.color = 'var(--success)';
        } else {
            balanceEl.style.color = 'var(--danger)';
        }

        // Render Visual Progress Bar percentages
        const totalVolume = totalIncomes + totalOutflows;
        if (totalVolume > 0) {
            const incPct = Math.round((totalIncomes / totalVolume) * 100);
            const outPct = Math.round((totalOutflows / totalVolume) * 100);

            document.getElementById('finance-pct-incomes').textContent = `${incPct}%`;
            document.getElementById('finance-pct-outflows').textContent = `${outPct}%`;
            
            document.getElementById('finance-bar-incomes').style.width = `${incPct}%`;
            document.getElementById('finance-bar-outflows').style.width = `${outPct}%`;
        } else {
            document.getElementById('finance-pct-incomes').textContent = '0%';
            document.getElementById('finance-pct-outflows').textContent = '0%';
            document.getElementById('finance-bar-incomes').style.width = '0%';
            document.getElementById('finance-bar-outflows').style.width = '0%';
        }

        // Filter transaction lists based on search
        const filtered = finances.filter(tx => {
            return tx.descripcion.toLowerCase().includes(this.searchQuery) ||
                   tx.categoria.toLowerCase().includes(this.searchQuery);
        });

        if (filtered.length === 0) {
            listContainer.innerHTML = '<div class="empty-order-msg" style="padding: 30px;">No se encontraron movimientos registrados.</div>';
            return;
        }

        filtered.forEach(tx => {
            const isIngreso = tx.tipo === 'Ingreso';
            const iconClass = isIngreso ? 'ingreso' : 'egreso';
            const amountPrefix = isIngreso ? '+' : '-';
            const amountClass = isIngreso ? 'ingreso' : 'egreso';
            
            // Nice transaction details SVG icons
            const svgIcon = isIngreso 
                ? `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7-7 7 7"/></svg>`
                : `<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7 7 7-7"/></svg>`;

            const dateStr = new Date(tx.fecha).toLocaleString('es-MX', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: 'short'
            });

            const div = document.createElement('div');
            div.className = 'tx-item';
            div.innerHTML = `
                <div class="tx-left">
                    <div class="tx-icon ${iconClass}">
                        ${svgIcon}
                    </div>
                    <div>
                        <div class="tx-desc">${tx.descripcion}</div>
                        <div class="tx-meta"><span class="badge" style="background: rgba(255,255,255,0.04); font-size: 9px; padding: 2px 6px;">${tx.categoria}</span> • ${dateStr}</div>
                    </div>
                </div>
                <div class="tx-amount ${amountClass}">
                    ${amountPrefix}$${tx.monto.toFixed(2)}
                </div>
            `;
            listContainer.appendChild(div);
        });
    },

    // --- EGRESO FORM MODAL ---
    openNewOutflowModal() {
        document.getElementById('form-outflow').reset();
        document.getElementById('modal-outflow').classList.add('active');
    },

    closeOutflowModal() {
        document.getElementById('modal-outflow').classList.remove('active');
    },

    saveOutflowForm(event) {
        event.preventDefault();
        const outflowData = {
            tipo: 'Egreso',
            monto: parseFloat(document.getElementById('outflow-amount').value),
            categoria: document.getElementById('outflow-category').value,
            descripcion: document.getElementById('outflow-desc').value.trim()
        };

        StorageManager.addFinanceTransaction(outflowData);
        this.closeOutflowModal();
        this.refreshAll();
    },

    refreshAll() {
        this.renderFinances();
        if (window.App) {
            App.updateDashboardKPIs();
        }
    }
};

window.Finances = Finances;
