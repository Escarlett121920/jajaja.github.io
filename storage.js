/**
 * GastroGest - CRM & Reservations Module
 * Manages customer database (preferences, allergies) and restaurant reservations.
 */

const CRM = {
    clientSearchQuery: '',
    reservationFilter: 'Pendiente',
    reservationSearchQuery: '',

    init() {
        this.renderClients();
        this.renderReservations();
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Client Search
        const searchClients = document.getElementById('search-clients');
        if (searchClients) {
            searchClients.addEventListener('input', (e) => {
                this.clientSearchQuery = e.target.value.toLowerCase();
                this.renderClients();
            });
        }

        // Reservation Search
        const searchReservations = document.getElementById('search-reservations');
        if (searchReservations) {
            searchReservations.addEventListener('input', (e) => {
                this.reservationSearchQuery = e.target.value.toLowerCase();
                this.renderReservations();
            });
        }

        // Reservation Filters
        const filterContainer = document.getElementById('reservation-filters');
        if (filterContainer) {
            filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.reservationFilter = btn.getAttribute('data-filter');
                    this.renderReservations();
                });
            });
        }
    },

    // ==========================================
    // CLIENTS CRM SECTION
    // ==========================================

    renderClients() {
        const tbody = document.querySelector('#clients-table tbody');
        if (!tbody) return;

        const clients = StorageManager.getClients();
        tbody.innerHTML = '';

        const filtered = clients.filter(c => {
            return c.nombre.toLowerCase().includes(this.clientSearchQuery) ||
                   c.telefono.toLowerCase().includes(this.clientSearchQuery) ||
                   (c.email && c.email.toLowerCase().includes(this.clientSearchQuery));
        });

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">No se encontraron clientes registrados.</td></tr>';
            return;
        }

        filtered.forEach(client => {
            const preferences = client.preferencias 
                ? `<span style="font-size: 13px; color: var(--text-primary);">${client.preferencias}</span>` 
                : '<em style="color: var(--text-muted); font-size: 12px;">Sin preferencias registradas</em>';

            const notes = client.notes 
                ? `<span style="font-size: 13px; color: var(--text-secondary);">${client.notes}</span>` 
                : '<em style="color: var(--text-muted); font-size: 12px;">Ninguna</em>';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <strong style="color: #fff; font-size: 15px;">${client.nombre}</strong>
                </td>
                <td>
                    <div class="client-meta">
                        <span>📞 ${client.telefono}</span>
                        <span>✉️ ${client.email || 'N/A'}</span>
                    </div>
                </td>
                <td>${preferences}</td>
                <td>${notes}</td>
                <td style="color: var(--text-muted); font-size: 13px;">${client.fechaRegistro}</td>
                <td>
                    <div class="actions-cell">
                        <button class="btn-icon edit" title="Editar Perfil" onclick="CRM.openEditClientModal('${client.id}')">
                            <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="btn-icon delete" title="Eliminar Cliente" onclick="CRM.deleteClient('${client.id}')">
                            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    openNewClientModal() {
        document.getElementById('form-client').reset();
        document.getElementById('client-id-field').value = '';
        document.getElementById('modal-client-title').textContent = 'Agregar Nuevo Cliente';
        document.getElementById('btn-save-client').textContent = 'Guardar Cliente';
        document.getElementById('modal-client').classList.add('active');
    },

    openEditClientModal(id) {
        const client = StorageManager.getClients().find(c => c.id === id);
        if (!client) return;

        document.getElementById('client-id-field').value = client.id;
        document.getElementById('client-name').value = client.nombre;
        document.getElementById('client-phone').value = client.telefono;
        document.getElementById('client-email').value = client.email || '';
        document.getElementById('client-preferences').value = client.preferencias || '';
        document.getElementById('client-notes').value = client.notes || '';

        document.getElementById('modal-client-title').textContent = 'Editar Perfil de Cliente';
        document.getElementById('btn-save-client').textContent = 'Actualizar Datos';
        document.getElementById('modal-client').classList.add('active');
    },

    closeClientModal() {
        document.getElementById('modal-client').classList.remove('active');
    },

    saveClientForm(event) {
        event.preventDefault();
        const id = document.getElementById('client-id-field').value;
        const clientData = {
            nombre: document.getElementById('client-name').value.trim(),
            telefono: document.getElementById('client-phone').value.trim(),
            email: document.getElementById('client-email').value.trim(),
            preferencias: document.getElementById('client-preferences').value.trim(),
            notes: document.getElementById('client-notes').value.trim()
        };

        if (id) {
            clientData.id = id;
            StorageManager.updateClient(clientData);
        } else {
            StorageManager.addClient(clientData);
        }

        this.closeClientModal();
        this.refreshAll();
    },

    deleteClient(id) {
        if (confirm('¿Está seguro de que desea eliminar a este cliente? Se eliminarán también todas sus reservaciones activas.')) {
            StorageManager.deleteClient(id);
            this.refreshAll();
        }
    },


    // ==========================================
    // RESERVATIONS SECTION
    // ==========================================

    renderReservations() {
        const tbody = document.querySelector('#reservations-table tbody');
        if (!tbody) return;

        const reservations = StorageManager.getReservations();
        tbody.innerHTML = '';

        const filtered = reservations.filter(r => {
            const matchesFilter = this.reservationFilter === 'Todos' || r.estado === this.reservationFilter;
            const matchesSearch = r.clienteNombre.toLowerCase().includes(this.reservationSearchQuery) ||
                                  r.clienteTelefono.toLowerCase().includes(this.reservationSearchQuery);
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">No se encontraron reservas con este filtro.</td></tr>';
            return;
        }

        filtered.forEach(res => {
            let statusClass = 'badge-warning';
            if (res.estado === 'Completada' || res.estado === 'Asistió') statusClass = 'badge-success';
            if (res.estado === 'Cancelada') statusClass = 'badge-danger';

            let actionButtons = '';
            if (res.estado === 'Pendiente') {
                actionButtons = `
                    <button class="btn btn-success" style="padding: 4px 8px; font-size: 11px;" onclick="CRM.changeReservationState('${res.id}', 'Asistió')">Check-In</button>
                    <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="CRM.changeReservationState('${res.id}', 'Cancelada')">Cancelar</button>
                `;
            } else if (res.estado === 'Asistió') {
                actionButtons = `
                    <button class="btn btn-primary" style="padding: 4px 8px; font-size: 11px;" onclick="CRM.changeReservationState('${res.id}', 'Completada')">Cerrar Servicio</button>
                `;
            } else {
                actionButtons = `<span style="font-size: 12px; color: var(--text-muted);">Sin acciones pendientes</span>`;
            }

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <strong style="color: #fff;">${res.clienteNombre}</strong>
                    <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">📞 ${res.clienteTelefono}</div>
                </td>
                <td><strong style="color: var(--primary-hover);">Mesa ${res.mesaNumero}</strong></td>
                <td>${res.fecha}</td>
                <td>${res.hora} hrs</td>
                <td style="font-weight: 500;">${res.personas} pers.</td>
                <td><span class="badge ${statusClass}">${res.estado}</span></td>
                <td>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        ${actionButtons}
                        <button class="btn-icon delete" title="Eliminar Registro" onclick="CRM.deleteReservation('${res.id}')">
                            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    openNewReservationModal() {
        const clients = StorageManager.getClients();
        if (clients.length === 0) {
            alert('Para programar una reserva, primero debes registrar al menos un cliente en el CRM.');
            App.navigateTo('clients');
            return;
        }

        // Fill Client Select options
        const clientSelect = document.getElementById('reservation-client');
        clientSelect.innerHTML = '';
        clients.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = `${c.nombre} (${c.telefono})`;
            clientSelect.appendChild(opt);
        });

        // Fill Tables Select options (compatible tables)
        const tablesSelect = document.getElementById('reservation-table');
        tablesSelect.innerHTML = '';
        const tables = StorageManager.getTables();
        
        // Render options showing capacities
        tables.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t.id;
            opt.textContent = `Mesa ${t.numero} - (Máx ${t.capacidad} personas) - ${t.estado}`;
            tablesSelect.appendChild(opt);
        });

        // Pre-fill today's date in form
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('reservation-date').value = today;
        document.getElementById('reservation-time').value = '19:00';
        document.getElementById('reservation-people').value = 2;

        document.getElementById('modal-reservation').classList.add('active');
    },

    closeReservationModal() {
        document.getElementById('modal-reservation').classList.remove('active');
    },

    saveReservationForm(event) {
        event.preventDefault();
        const clients = StorageManager.getClients();
        const clientSelect = document.getElementById('reservation-client');
        const selectedClientId = clientSelect.value;
        const clientObj = clients.find(c => c.id === selectedClientId);

        const tables = StorageManager.getTables();
        const selectedTableId = document.getElementById('reservation-table').value;
        const tableObj = tables.find(t => t.id === selectedTableId);

        if (!clientObj || !tableObj) return;

        const resData = {
            clienteId: clientObj.id,
            clienteNombre: clientObj.nombre,
            clienteTelefono: clientObj.telefono,
            mesaId: tableObj.id,
            mesaNumero: tableObj.numero,
            fecha: document.getElementById('reservation-date').value,
            hora: document.getElementById('reservation-time').value,
            personas: parseInt(document.getElementById('reservation-people').value),
            estado: 'Pendiente'
        };

        StorageManager.addReservation(resData);
        this.closeReservationModal();
        this.refreshAll();
    },

    changeReservationState(id, nuevoEstado) {
        StorageManager.updateReservationStatus(id, nuevoEstado);
        this.refreshAll();
    },

    deleteReservation(id) {
        if (confirm('¿Está seguro de que desea eliminar este registro de reserva?')) {
            StorageManager.deleteReservation(id);
            this.refreshAll();
        }
    },

    refreshAll() {
        this.renderClients();
        this.renderReservations();
        if (window.App) {
            App.updateDashboardKPIs();
            App.renderDashboardReservations();
        }
        if (window.Tables) Tables.renderTablesMap();
    }
};

window.CRM = CRM;
