<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GastroGest - Sistema de Gestión de Restaurante (CRM & ERP)</title>
    <meta name="description" content="GastroGest es un sistema de administración premium para restaurantes. Control de mesas, reservaciones, base de datos de clientes (CRM), inventario de insumos y balances financieros integrados en tiempo real.">
    <!-- Estilos CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <!-- SIDEBAR DE NAVEGACIÓN -->
    <aside class="sidebar">
        <div class="brand-container">
            <div class="brand-logo">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-8.03c2.09-.13 3.75-1.85 3.75-3.97V2zm7 4c1.66 0 3-1.34 3-3V2h-3v11h-1v9h2.5v-9h1.5z"/>
                </svg>
            </div>
            <span class="brand-name">GastroGest</span>
        </div>

        <ul class="nav-menu">
            <li class="nav-item active" id="nav-dashboard">
                <a href="#dashboard" onclick="App.navigateTo('dashboard')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="7" height="7" rx="1"/>
                        <rect x="14" y="3" width="7" height="7" rx="1"/>
                        <rect x="14" y="14" width="7" height="7" rx="1"/>
                        <rect x="3" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    Dashboard
                </a>
            </li>
            <li class="nav-item" id="nav-tables">
                <a href="#mesas" onclick="App.navigateTo('tables')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="6"/>
                        <path d="M4 12h2M18 12h2M12 4v2M12 18v2"/>
                    </svg>
                    Mesas & Comandas
                </a>
            </li>
            <li class="nav-item" id="nav-reservations">
                <a href="#reservas" onclick="App.navigateTo('reservations')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Reservas
                </a>
            </li>
            <li class="nav-item" id="nav-clients">
                <a href="#clientes" onclick="App.navigateTo('clients')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    Clientes (CRM)
                </a>
            </li>
            <li class="nav-item" id="nav-inventory">
                <a href="#inventario" onclick="App.navigateTo('inventory')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                        <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                    Inventario (ERP)
                </a>
            </li>
            <li class="nav-item" id="nav-finances">
                <a href="#finanzas" onclick="App.navigateTo('finances')">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    Finanzas & Caja
                </a>
            </li>
        </ul>

        <div class="sidebar-footer">
            <p>GastroGest v1.0.0</p>
            <p>© 2026 Restaurante Premium</p>
        </div>
    </aside>

    <!-- CONTENIDO PRINCIPAL -->
    <main class="main-content">

        <!-- 1. SECCIÓN DASHBOARD -->
        <section id="section-dashboard" class="app-section active-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>Panel de Control</h2>
                    <p>Resumen operativo y financiero para hoy</p>
                </div>
            </div>

            <!-- KPI Cards -->
            <div class="metrics-grid">
                <div class="glass-card metric-card">
                    <div class="metric-icon color-success">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="kpi-sales-today">$0.00</h3>
                        <p>Ventas del Día</p>
                    </div>
                </div>
                <div class="glass-card metric-card">
                    <div class="metric-icon color-primary">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="kpi-tables-active">0 / 0</h3>
                        <p>Mesas Ocupadas</p>
                    </div>
                </div>
                <div class="glass-card metric-card">
                    <div class="metric-icon color-warning">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="kpi-reservations-pending">0</h3>
                        <p>Reservas Pendientes</p>
                    </div>
                </div>
                <div class="glass-card metric-card">
                    <div class="metric-icon color-danger">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="kpi-inventory-warnings">0</h3>
                        <p>Productos Stock Bajo</p>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <!-- Izquierda: Estado de mesas actuales y reservas -->
                <div class="glass-card">
                    <div class="dashboard-panel-header">
                        <h3 class="dashboard-panel-title">Estado Rápido de Reservas (Hoy)</h3>
                        <button class="btn btn-secondary btn-small" onclick="App.navigateTo('reservations')">Ver Todas</button>
                    </div>
                    <div class="table-responsive">
                        <table class="data-table" id="dashboard-reservations-table">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Mesa</th>
                                    <th>Hora</th>
                                    <th>Personas</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Derecha: Avisos de stock e información rápida -->
                <div class="glass-card" style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <h3 class="dashboard-panel-title" style="margin-bottom: 12px;">Alertas de Stock Bajo</h3>
                        <div id="dashboard-stock-alerts" style="display: flex; flex-direction: column; gap: 10px;">
                            <!-- Dinámico -->
                        </div>
                    </div>
                    <hr style="border: none; border-top: 1px solid var(--border-color);">
                    <div>
                        <h3 class="dashboard-panel-title" style="margin-bottom: 12px;">Accesos Rápidos</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <button class="btn btn-secondary" onclick="CRM.openNewReservationModal()">+ Reservar</button>
                            <button class="btn btn-secondary" onclick="CRM.openNewClientModal()">+ Cliente</button>
                            <button class="btn btn-secondary" onclick="Inventory.openNewProductModal()">+ Insumo</button>
                            <button class="btn btn-secondary" onclick="Finances.openNewOutflowModal()">- Egreso</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. SECCIÓN MESAS & COMANDAS -->
        <section id="section-tables" class="app-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>Control de Mesas</h2>
                    <p>Distribución de salón, comandas activas y facturación rápida</p>
                </div>
            </div>

            <div class="glass-card tables-map-container">
                <div class="tables-legend">
                    <div class="legend-item">
                        <span class="legend-dot libre"></span>
                        <span>Mesa Libre</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-dot ocupada"></span>
                        <span>En Consumo</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-dot reservada"></span>
                        <span>Mesa Reservada</span>
                    </div>
                </div>

                <div class="tables-grid" id="tables-grid">
                    <!-- Dinámico -->
                </div>
            </div>
        </section>

        <!-- 3. SECCIÓN RESERVAS -->
        <section id="section-reservations" class="app-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>Libro de Reservas</h2>
                    <p>Gestión de reservas de clientes integradas con mesas</p>
                </div>
                <button class="btn btn-primary" onclick="CRM.openNewReservationModal()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                    Nueva Reserva
                </button>
            </div>

            <div class="glass-card">
                <div class="filter-row">
                    <div class="filter-group" id="reservation-filters">
                        <button class="filter-btn active" data-filter="Pendiente">Pendientes</button>
                        <button class="filter-btn" data-filter="Completada">Completadas</button>
                        <button class="filter-btn" data-filter="Cancelada">Canceladas</button>
                        <button class="filter-btn" data-filter="Todos">Todas</button>
                    </div>
                    <div class="search-box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" class="form-control" id="search-reservations" placeholder="Buscar por cliente o teléfono...">
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="data-table" id="reservations-table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Mesa Asignada</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Personas</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Dinámico -->
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 4. SECCIÓN CLIENTES (CRM) -->
        <section id="section-clients" class="app-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>CRM de Clientes</h2>
                    <p>Fidelización, historial de consumo y preferencias gastronómicas</p>
                </div>
                <button class="btn btn-primary" onclick="CRM.openNewClientModal()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/></svg>
                    Nuevo Cliente
                </button>
            </div>

            <div class="glass-card">
                <div class="filter-row">
                    <div class="search-box" style="max-width: 400px;">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" class="form-control" id="search-clients" placeholder="Buscar por nombre, teléfono o email...">
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="data-table" id="clients-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Preferencias del Cliente</th>
                                <th>Observaciones Especiales</th>
                                <th>Fecha Registro</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Dinámico -->
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 5. SECCIÓN INVENTARIO (ERP) -->
        <section id="section-inventory" class="app-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>Inventario de Insumos</h2>
                    <p>Control de stock, alertas de reabastecimiento y categorías</p>
                </div>
                <button class="btn btn-primary" onclick="Inventory.openNewProductModal()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                    Nuevo Producto
                </button>
            </div>

            <div class="glass-card">
                <div class="filter-row">
                    <div class="filter-group" id="inventory-filters">
                        <button class="filter-btn active" data-filter="Todos">Todos</button>
                        <button class="filter-btn" data-filter="Carnes">Carnes</button>
                        <button class="filter-btn" data-filter="Lácteos">Lácteos</button>
                        <button class="filter-btn" data-filter="Verduras">Verduras</button>
                        <button class="filter-btn" data-filter="Bebidas">Bebidas</button>
                        <button class="filter-btn" data-filter="Abarrotes">Abarrotes</button>
                    </div>
                    <div class="search-box">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" class="form-control" id="search-inventory" placeholder="Buscar insumo...">
                    </div>
                </div>

                <div class="table-responsive">
                    <table class="data-table" id="inventory-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Stock Actual</th>
                                <th>Stock Mínimo</th>
                                <th>Costo Unitario</th>
                                <th>Estado Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Dinámico -->
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 6. SECCIÓN FINANZAS & CAJA (ERP) -->
        <section id="section-finances" class="app-section">
            <div class="page-header">
                <div class="page-title">
                    <h2>Finanzas & Caja</h2>
                    <p>Historial de ventas, entradas directas y salidas/egresos de efectivo</p>
                </div>
                <button class="btn btn-danger" onclick="Finances.openNewOutflowModal()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Registrar Egreso / Gasto
                </button>
            </div>

            <!-- Financial balance totals -->
            <div class="metrics-grid" style="margin-bottom: 24px;">
                <div class="glass-card metric-card">
                    <div class="metric-icon color-success">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12l7-7 7 7"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="finance-total-incomes" style="color: var(--success);">$0.00</h3>
                        <p>Total Ingresos</p>
                    </div>
                </div>
                <div class="glass-card metric-card">
                    <div class="metric-icon color-danger">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19V5M5 12l7 7 7-7"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="finance-total-outflows" style="color: var(--danger);">$0.00</h3>
                        <p>Total Egresos</p>
                    </div>
                </div>
                <div class="glass-card metric-card">
                    <div class="metric-icon color-info">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div class="metric-info">
                        <h3 id="finance-balance">$0.00</h3>
                        <p>Saldo en Caja (Balance)</p>
                    </div>
                </div>
            </div>

            <div class="finance-summary">
                <!-- Movimientos de Caja -->
                <div class="glass-card">
                    <div class="dashboard-panel-header">
                        <h3 class="dashboard-panel-title">Movimientos Recientes</h3>
                        <div class="search-box" style="max-width: 250px;">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <input type="text" class="form-control" id="search-finances" placeholder="Buscar movimiento...">
                        </div>
                    </div>
                    <div class="recent-transactions" id="finances-list">
                        <!-- Dinámico -->
                    </div>
                </div>

                <!-- Distribución Visual de Saldo -->
                <div class="glass-card" style="display: flex; flex-direction: column; gap: 24px;">
                    <h3 class="dashboard-panel-title">Desglose de Flujo</h3>
                    <div class="category-progress-container">
                        <div class="prog-item">
                            <div class="prog-labels">
                                <span>Ingresos (Ventas)</span>
                                <span id="finance-pct-incomes">0%</span>
                            </div>
                            <div class="prog-bar-bg">
                                <div class="prog-bar-fill ingresos" id="finance-bar-incomes" style="width: 0%;"></div>
                            </div>
                        </div>
                        <div class="prog-item">
                            <div class="prog-labels">
                                <span>Egresos (Gastos)</span>
                                <span id="finance-pct-outflows">0%</span>
                            </div>
                            <div class="prog-bar-bg">
                                <div class="prog-bar-fill egresos" id="finance-bar-outflows" style="width: 0%;"></div>
                            </div>
                        </div>
                    </div>
                    <div style="background: rgba(255,255,255,0.02); padding: 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
                        <p><strong>Nota Operativa:</strong> Las comandas cerradas de las mesas se facturan automáticamente y se añaden a los <strong>Ingresos</strong>. Todos los insumos adquiridos mediante "Entradas de stock" que tengan un costo unitario asignado generarán automáticamente un <strong>Egreso</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- BACKDROP PARA LA COMANDA LATERAL -->
    <div class="order-sidebar-backdrop" id="order-backdrop" onclick="Tables.closeOrderSidebar()"></div>

    <!-- PANEL DE COMANDA LATERAL (MESA SELECCIONADA) -->
    <div class="order-sidebar" id="order-sidebar">
        <div class="order-sidebar-header">
            <div>
                <h3 id="order-title">Mesa 0</h3>
                <p id="order-subtitle" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">Capacidad: 4 personas</p>
            </div>
            <button class="btn-close" onclick="Tables.closeOrderSidebar()">&times;</button>
        </div>

        <div class="order-sidebar-content">
            <!-- Estado de Mesa -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 12px; font-weight: 600; color: var(--text-secondary);">ESTADO ACTUAL DE MESA:</span>
                <div class="order-state-actions" id="order-state-buttons">
                    <!-- Dinámico -->
                </div>
            </div>

            <!-- Items de la Comanda -->
            <div id="order-active-section" style="display: none; flex-direction: column; gap: 16px;">
                <hr style="border: none; border-top: 1px solid var(--border-color);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">PLATILLOS Y BEBIDAS:</span>
                    <span id="order-opening-time" style="font-size: 11px; color: var(--text-muted);">Apertura: 00:00</span>
                </div>
                
                <div class="order-items-list" id="order-items-container">
                    <!-- Dinámico -->
                </div>

                <!-- Añadir del menú -->
                <div class="menu-selector">
                    <label>Añadir al Consumo:</label>
                    <div class="menu-grid" id="order-menu-grid">
                        <!-- Dinámico -->
                    </div>
                </div>
            </div>
        </div>

        <div class="order-sidebar-footer" id="order-footer-section" style="display: none;">
            <div class="order-total-summary">
                <span>TOTAL A PAGAR:</span>
                <span class="order-total-val" id="order-total-amount">$0.00</span>
            </div>
            <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
                <button class="btn btn-success" id="btn-close-billing" onclick="Tables.payAndCloseOrder()">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H4v8h9m7-4h-8m8 8h.01M17 16h3.5a1.5 1.5 0 0 1 1.5 1.5V20a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2v-2.5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>
                    Cobrar y Liberar Mesa
                </button>
            </div>
        </div>
    </div>


    <!-- ==================== MODALES ==================== -->

    <!-- MODAL CLIENTE (CREAR / EDITAR) -->
    <div class="modal-overlay" id="modal-client">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-client-title">Agregar Nuevo Cliente</h3>
                <button class="btn-close" onclick="CRM.closeClientModal()">&times;</button>
            </div>
            <form id="form-client" onsubmit="CRM.saveClientForm(event)">
                <input type="hidden" id="client-id-field">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="client-name">Nombre Completo *</label>
                        <input type="text" class="form-control" id="client-name" required placeholder="Ej. Juan Pérez">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="client-phone">Teléfono *</label>
                            <input type="tel" class="form-control" id="client-phone" required placeholder="Ej. 555-0123">
                        </div>
                        <div class="form-group">
                            <label for="client-email">Correo Electrónico</label>
                            <input type="email" class="form-control" id="client-email" placeholder="Ej. juan@email.com">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="client-preferences">Preferencias Gastronómicas (Mesa, Alimentos, Alergias)</label>
                        <input type="text" class="form-control" id="client-preferences" placeholder="Ej. Prefiere mesa exterior, vegetariano, alérgico a nueces">
                    </div>
                    <div class="form-group">
                        <label for="client-notes">Notas / Observaciones del Cliente</label>
                        <textarea class="form-control" id="client-notes" placeholder="Ej. Cliente corporativo, suele dejar buena propina."></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="CRM.closeClientModal()">Cancelar</button>
                    <button type="submit" class="btn btn-primary" id="btn-save-client">Guardar Cliente</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL RESERVACIÓN (CREAR / EDITAR) -->
    <div class="modal-overlay" id="modal-reservation">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-reservation-title">Nueva Reservación</h3>
                <button class="btn-close" onclick="CRM.closeReservationModal()">&times;</button>
            </div>
            <form id="form-reservation" onsubmit="CRM.saveReservationForm(event)">
                <input type="hidden" id="reservation-id-field">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="reservation-client">Seleccionar Cliente *</label>
                        <select class="form-control" id="reservation-client" required>
                            <!-- Dinámico -->
                        </select>
                        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">¿No está en la lista? Regístralo primero en Clientes.</p>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="reservation-date">Fecha *</label>
                            <input type="date" class="form-control" id="reservation-date" required>
                        </div>
                        <div class="form-group">
                            <label for="reservation-time">Hora *</label>
                            <input type="time" class="form-control" id="reservation-time" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="reservation-people">Número de Personas *</label>
                            <input type="number" class="form-control" id="reservation-people" min="1" max="20" required>
                        </div>
                        <div class="form-group">
                            <label for="reservation-table">Mesa Asignada *</label>
                            <select class="form-control" id="reservation-table" required>
                                <!-- Dinámico -->
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="CRM.closeReservationModal()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Registrar Reserva</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL PRODUCTO INVENTARIO (CREAR / EDITAR) -->
    <div class="modal-overlay" id="modal-product">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modal-product-title">Agregar Producto a Inventario</h3>
                <button class="btn-close" onclick="Inventory.closeProductModal()">&times;</button>
            </div>
            <form id="form-product" onsubmit="Inventory.saveProductForm(event)">
                <input type="hidden" id="product-id-field">
                <div class="modal-body">
                    <div class="form-group">
                        <label for="product-name">Nombre del Producto / Insumo *</label>
                        <input type="text" class="form-control" id="product-name" required placeholder="Ej. Tomate Jitomate kg">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="product-category">Categoría *</label>
                            <select class="form-control" id="product-category" required>
                                <option value="Carnes">Carnes</option>
                                <option value="Lácteos">Lácteos</option>
                                <option value="Verduras">Verduras</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Abarrotes">Abarrotes</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="product-unit">Unidad de Medida *</label>
                            <input type="text" class="form-control" id="product-unit" required placeholder="Ej. kg, L, pzas, botellas">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="product-qty">Cantidad Inicial en Stock *</label>
                            <input type="number" class="form-control" id="product-qty" step="any" min="0" required placeholder="0.0">
                        </div>
                        <div class="form-group">
                            <label for="product-min">Stock Mínimo Alerta *</label>
                            <input type="number" class="form-control" id="product-min" step="any" min="0" required placeholder="0.0">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="product-cost">Precio Costo Unitario ($) *</label>
                        <input type="number" class="form-control" id="product-cost" step="any" min="0" required placeholder="0.00">
                        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Usado para calcular egresos de caja al surtir stock.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="Inventory.closeProductModal()">Cancelar</button>
                    <button type="submit" class="btn btn-primary" id="btn-save-product">Guardar Producto</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL AJUSTE DE STOCK (RÁPIDO) -->
    <div class="modal-overlay" id="modal-stock-adjust">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Ajustar Stock de Insumo</h3>
                <button class="btn-close" onclick="Inventory.closeStockModal()">&times;</button>
            </div>
            <form id="form-stock-adjust" onsubmit="Inventory.saveStockAdjustment(event)">
                <input type="hidden" id="stock-adjust-id-field">
                <div class="modal-body">
                    <p style="margin-bottom: 16px; font-size: 14px;" id="stock-adjust-label">Ajustando stock para: <strong>Producto</strong></p>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="stock-adjust-type">Tipo de Operación *</label>
                            <select class="form-control" id="stock-adjust-type" required>
                                <option value="entrada">Entrada (+) - Compra / Abasto</option>
                                <option value="salida">Salida (-) - Desperdicio / Merma</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="stock-adjust-qty">Cantidad a Ajustar *</label>
                            <input type="number" class="form-control" id="stock-adjust-qty" step="any" min="0.01" required placeholder="0.00">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="stock-adjust-reason">Motivo / Notas del Ajuste *</label>
                        <input type="text" class="form-control" id="stock-adjust-reason" required placeholder="Ej. Surtido semanal, mermas de cocina, etc.">
                        <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">Las ENTRADAS registran un egreso financiero automático basado en el costo unitario del producto.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="Inventory.closeStockModal()">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Registrar Ajuste</button>
                </div>
            </form>
        </div>
    </div>

    <!-- MODAL FINANZAS EGRESO CAJA -->
    <div class="modal-overlay" id="modal-outflow">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Registrar Egreso Financiero</h3>
                <button class="btn-close" onclick="Finances.closeOutflowModal()">&times;</button>
            </div>
            <form id="form-outflow" onsubmit="Finances.saveOutflowForm(event)">
                <div class="modal-body">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="outflow-amount">Monto del Gasto ($) *</label>
                            <input type="number" class="form-control" id="outflow-amount" step="any" min="0.01" required placeholder="0.00">
                        </div>
                        <div class="form-group">
                            <label for="outflow-category">Categoría del Gasto *</label>
                            <select class="form-control" id="outflow-category" required>
                                <option value="Insumos">Insumos y Comida</option>
                                <option value="Servicios">Servicios (Luz, Agua, Gas)</option>
                                <option value="Renta">Renta del Local</option>
                                <option value="Nómina">Nómina y Personal</option>
                                <option value="Mantenimiento">Mantenimiento / Limpieza</option>
                                <option value="Otros">Otros Gastos Diversos</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="outflow-desc">Descripción / Detalle del Pago *</label>
                        <input type="text" class="form-control" id="outflow-desc" required placeholder="Ej. Pago recibo bimestral CFE, compra carbón">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="Finances.closeOutflowModal()">Cancelar</button>
                    <button type="submit" class="btn btn-danger">Confirmar Egreso</button>
                </div>
            </form>
        </div>
    </div>


    <!-- ==================== LOGICA SCRIPT ==================== -->
    <script src="js/storage.js"></script>
    <script src="js/tables.js"></script>
    <script src="js/inventory.js"></script>
    <script src="js/crm.js"></script>
    <script src="js/finances.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
