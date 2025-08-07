<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalog API Management Dashboard</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #4facfe;
            --secondary-color: #00f2fe;
            --success-color: #10b981;
            --warning-color: #f59e0b;
            --error-color: #ef4444;
            --info-color: #3b82f6;
            --dark-bg: #1f2937;
            --dark-card: #374151;
            --light-bg: #f8fafc;
            --light-card: #ffffff;
            --text-dark: #1f2937;
            --text-light: #f9fafb;
            --border-color: #e5e7eb;
        }

        [data-theme="dark"] {
            --light-bg: #111827;
            --light-card: #1f2937;
            --text-dark: #f9fafb;
            --border-color: #374151;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, var(--primary-color) 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            color: var(--text-dark);
            transition: all 0.3s ease;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: var(--light-card);
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
        }

        .header h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .theme-toggle {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255,255,255,0.2);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            transition: all 0.3s ease;
        }

        .theme-toggle:hover {
            background: rgba(255,255,255,0.3);
            transform: scale(1.1);
        }

        .status-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }

        .main-content {
            padding: 40px;
            background: var(--light-bg);
        }

        .tabs {
            display: flex;
            background: var(--light-card);
            border-radius: 12px;
            padding: 8px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .tab {
            flex: 1;
            padding: 12px 20px;
            text-align: center;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            border: none;
            background: transparent;
            color: var(--text-dark);
        }

        .tab.active {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            box-shadow: 0 4px 12px rgba(79, 172, 254, 0.3);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .api-section {
            background: var(--light-card);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }

        .api-section:hover {
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transform: translateY(-2px);
        }

        .api-section h3 {
            color: var(--text-dark);
            margin-bottom: 25px;
            font-size: 1.5rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-dark);
            font-size: 14px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            font-size: 14px;
            transition: all 0.3s ease;
            background: var(--light-card);
            color: var(--text-dark);
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.1);
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }

        .btn {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            border: none;
            padding: 14px 28px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
            margin: 8px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .btn-success {
            background: linear-gradient(135deg, var(--success-color), #34d399);
        }

        .btn-warning {
            background: linear-gradient(135deg, var(--warning-color), #fbbf24);
        }

        .btn-error {
            background: linear-gradient(135deg, var(--error-color), #f87171);
        }

        .btn-secondary {
            background: linear-gradient(135deg, #6b7280, #9ca3af);
        }

        .quick-actions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .quick-action-card {
            background: var(--light-card);
            border: 2px solid var(--border-color);
            border-radius: 16px;
            padding: 25px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .quick-action-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .quick-action-card:hover::before {
            transform: scaleX(1);
        }

        .quick-action-card:hover {
            border-color: var(--primary-color);
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .quick-action-card h4 {
            color: var(--text-dark);
            margin-bottom: 12px;
            font-size: 1.2rem;
        }

        .quick-action-card p {
            color: #6b7280;
            font-size: 14px;
        }

        .loading {
            display: none;
            text-align: center;
            padding: 40px;
        }

        .loading.show {
            display: block;
        }

        .spinner {
            border: 4px solid var(--border-color);
            border-top: 4px solid var(--primary-color);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-left: 10px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .status-online {
            background-color: var(--success-color);
            box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }

        .status-offline {
            background-color: var(--error-color);
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification.success {
            background: linear-gradient(135deg, var(--success-color), #34d399);
        }

        .notification.error {
            background: linear-gradient(135deg, var(--error-color), #f87171);
        }

        .data-display {
            background: var(--light-card);
            border-radius: 16px;
            padding: 25px;
            margin-top: 25px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid var(--border-color);
        }

        .data-card {
            background: var(--light-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .data-card h4 {
            color: var(--text-dark);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .data-table th,
        .data-table td {
            padding: 16px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }

        .data-table th {
            background: var(--light-bg);
            font-weight: 600;
            color: var(--text-dark);
        }

        .data-table tr:hover {
            background: var(--light-bg);
        }

        .status-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .status-success {
            background-color: #dcfce7;
            color: #166534;
        }

        .status-info {
            background-color: #dbeafe;
            color: #1e40af;
        }

        .status-warning {
            background-color: #fef3c7;
            color: #92400e;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .info-item {
            background: var(--light-card);
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid var(--primary-color);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .info-item .label {
            font-size: 12px;
            color: #6b7280;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 8px;
        }

        .info-item .value {
            font-size: 16px;
            color: var(--text-dark);
            font-weight: 600;
        }

        .dynamic-form {
            border: 2px dashed var(--border-color);
            border-radius: 12px;
            padding: 25px;
            margin-top: 20px;
            background: var(--light-bg);
        }

        .field-builder {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .field-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--light-card);
            padding: 12px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }

        .remove-field {
            background: var(--error-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            font-size: 12px;
        }

        .json-toggle {
            background: #6b7280;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
            margin-top: 15px;
        }

        .json-raw {
            display: none;
            background: var(--dark-bg);
            color: var(--text-light);
            padding: 20px;
            border-radius: 12px;
            margin-top: 15px;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 13px;
            white-space: pre-wrap;
            word-wrap: break-word;
            max-height: 300px;
            overflow-y: auto;
        }

        .timestamp {
            color: #6b7280;
            font-size: 12px;
            margin-bottom: 15px;
            font-family: monospace;
        }

        .search-filter {
            background: var(--light-card);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 20px;
            border: 1px solid var(--border-color);
        }

        .search-filter input {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-size: 14px;
        }

        .export-buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }

        .floating-actions {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 100;
        }

        .floating-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
        }

        .floating-btn:hover {
            transform: scale(1.1);
        }

        .url-config {
            background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
            border: 1px solid #0ea5e9;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
        }

        .url-config label {
            font-weight: 600;
            color: #0c4a6e;
        }

        @media (max-width: 768px) {
            .container {
                margin: 10px;
                border-radius: 16px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .main-content {
                padding: 20px;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .quick-actions {
                grid-template-columns: 1fr;
            }
            
            .tabs {
                flex-direction: column;
            }
        }
    </style>
</head>
<body data-theme="light">
    <div class="container">
        <div class="header">
            <button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark Mode">🌙</button>
            <h1>Catalog API Dashboard</h1>
            <p>Comprehensive Product Catalog Management System</p>
            <div class="status-bar">
                <span>Service Status: <strong id="serviceStatus">Checking...</strong></span>
                <span id="statusIndicator" class="status-indicator"></span>
            </div>
        </div>

        <div class="main-content">
            <!-- API URL Configuration -->
            <div class="url-config">
                <div class="form-group">
                    <label>🔗 API Base URL:</label>
                    <input type="text" id="apiBaseUrl" value="http://localhost:3000" placeholder="Enter your API base URL">
                    <small style="color: #0c4a6e; display: block; margin-top: 8px;">
                        Change this if your server runs on a different port
                    </small>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
                <div class="quick-action-card" onclick="checkHealth()">
                    <h4>🏥 Health Check</h4>
                    <p>Verify service status and connectivity</p>
                </div>
                <div class="quick-action-card" onclick="getCatalogStatus()">
                    <h4>📊 Catalog Status</h4>
                    <p>View current catalog information</p>
                </div>
                <div class="quick-action-card" onclick="getCatalogProducts()">
                    <h4>📦 View Products</h4>
                    <p>Fetch all catalog products</p>
                </div>
                <div class="quick-action-card" onclick="switchTab('create-dataset')">
                    <h4>🗃️ Create Dataset</h4>
                    <p>Create a new dataset entry</p>
                </div>
                <div class="quick-action-card" onclick="switchTab('create-table')">
                    <h4>📋 Create Table</h4>
                    <p>Create a new table entry</p>
                </div>
                <div class="quick-action-card" onclick="switchTab('create-catalog')">
                    <h4>➕ Create Catalog</h4>
                    <p>Set up a new product catalog</p>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="tabs">
                <button class="tab active" onclick="switchTab('get-products')">📦 Get Products</button>
                <button class="tab" onclick="switchTab('catalog-status')">📊 Status Check</button>
                <button class="tab" onclick="switchTab('add-entry')">➕ Add Entry</button>
                <button class="tab" onclick="switchTab('create-dataset')">🗃️ Create Dataset</button>
                <button class="tab" onclick="switchTab('create-table')">📋 Create Table</button>
                <button class="tab" onclick="switchTab('create-catalog')">🆕 Create Catalog</button>
            </div>

            <!-- Get Products Tab -->
            <div id="get-products" class="tab-content active">
                <div class="api-section">
                    <h3>📦 Fetch Catalog Products</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Result Limit:</label>
                            <input type="number" id="catalogLimit" value="100" min="1" max="1000" placeholder="Max results to fetch">
                        </div>
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="catalogProjectId" value="wise-program-468308-r6" placeholder="Google Cloud Project ID">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="catalogId" value="my_catalog" placeholder="Catalog identifier">
                        </div>
                        <div class="form-group">
                            <label>Page Token (Optional):</label>
                            <input type="text" id="pageToken" placeholder="For pagination">
                        </div>
                    </div>
                    <button class="btn btn-info" onclick="getCatalogProducts()">
                        🔍 Fetch Products
                    </button>
                    <button class="btn btn-warning" onclick="getCatalogByProject()">
                        🎯 Fetch by Project
                    </button>
                </div>
            </div>

            <!-- Catalog Status Tab -->
            <div id="catalog-status" class="tab-content">
                <div class="api-section">
                    <h3>📊 Check Catalog Status</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="statusProjectId" value="wise-program-468308-r6" placeholder="Google Cloud Project ID">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="statusCatalogId" value="my_catalog" placeholder="Catalog identifier">
                        </div>
                    </div>
                    <button class="btn btn-warning" onclick="getCatalogStatus()">
                        📊 Check Status
                    </button>
                </div>
            </div>

            <!-- Add Entry Tab -->
            <div id="add-entry" class="tab-content">
                <div class="api-section">
                    <h3>➕ Add New Catalog Entry</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Entry ID:</label>
                            <input type="text" id="entryId" placeholder="e.g., product_001">
                        </div>
                        <div class="form-group">
                            <label>Display Name:</label>
                            <input type="text" id="entryDisplayName" placeholder="Product Name">
                        </div>
                        <div class="form-group">
                            <label>Description:</label>
                            <input type="text" id="entryDescription" placeholder="Product description">
                        </div>
                        <div class="form-group">
                            <label>Entry Type:</label>
                            <select id="entryType">
                                <option value="DATASET">Dataset</option>
                                <option value="TABLE">Table</option>
                                <option value="MODEL">Model</option>
                                <option value="DATA_STREAM">Data Stream</option>
                                <option value="FILESET">Fileset</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="entryProjectId" value="wise-program-468308-r6">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="entryCatalogId" value="my_catalog">
                        </div>
                        <div class="form-group">
                            <label>Linked Resource (Optional):</label>
                            <input type="text" id="entryLinkedResource" placeholder="//bigquery.googleapis.com/projects/...">
                        </div>
                    </div>

                    <!-- Dynamic Schema Builder -->
                    <div class="dynamic-form">
                        <h4>📝 Schema Fields (Optional)</h4>
                        <p style="color: #6b7280; margin-bottom: 20px;">Add schema columns for your entry:</p>
                        
                        <div class="field-builder">
                            <input type="text" id="schemaColumnName" placeholder="Column name" style="flex: 1;">
                            <select id="schemaColumnType" style="width: 120px;">
                                <option value="STRING">String</option>
                                <option value="INTEGER">Integer</option>
                                <option value="FLOAT">Float</option>
                                <option value="BOOLEAN">Boolean</option>
                                <option value="DATE">Date</option>
                                <option value="TIMESTAMP">Timestamp</option>
                            </select>
                            <input type="text" id="schemaColumnDesc" placeholder="Description" style="flex: 1;">
                            <button type="button" class="btn btn-secondary" onclick="addSchemaColumn()">+ Add Column</button>
                        </div>

                        <div id="schemaColumns"></div>

                        <div style="margin-top: 20px;">
                            <button class="btn btn-success" onclick="addEntryToCatalog()">
                                ➕ Add Entry
                            </button>
                            <button class="btn btn-secondary" onclick="clearSchemaColumns()">
                                🗑️ Clear Schema
                            </button>
                            <button class="btn btn-info" onclick="previewEntryJSON()">
                                👁️ Preview JSON
                            </button>
                        </div>

                        <div id="entryJsonPreview" class="json-raw"></div>
                    </div>
                </div>
            </div>

            <!-- Create Catalog Tab -->
            <div id="create-catalog" class="tab-content">
                <div class="api-section">
                    <h3>🆕 Create New Catalog</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="createProjectId" value="wise-program-468308-r6" placeholder="Google Cloud Project ID">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="createCatalogId" value="my_catalog" placeholder="Unique catalog identifier">
                        </div>
                        <div class="form-group">
                            <label>Display Name:</label>
                            <input type="text" id="displayName" value="My Product Catalog" placeholder="Human-readable catalog name">
                        </div>
                        <div class="form-group">
                            <label>Description:</label>
                            <input type="text" id="description" value="Product catalog for my business" placeholder="Catalog description">
                        </div>
                    </div>
                    <button class="btn btn-success" onclick="createCatalog()">
                        🆕 Create Catalog
                    </button>
                </div>
            </div>

            <!-- Create Dataset Tab -->
            <div id="create-dataset" class="tab-content">
                <div class="api-section">
                    <h3>🗃️ Create Dataset Entry</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Entry ID:</label>
                            <input type="text" id="datasetEntryId" placeholder="e.g., dataset_001">
                        </div>
                        <div class="form-group">
                            <label>Display Name:</label>
                            <input type="text" id="datasetDisplayName" placeholder="My Dataset">
                        </div>
                        <div class="form-group">
                            <label>Description:</label>
                            <input type="text" id="datasetDescription" placeholder="Dataset description">
                        </div>
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="datasetProjectId" value="wise-program-468308-r6">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="datasetCatalogId" value="my_catalog">
                        </div>
                    </div>
                    <button class="btn btn-success" onclick="createDatasetEntry()">
                        🗃️ Create Dataset
                    </button>
                </div>
            </div>

            <!-- Create Table Tab -->
            <div id="create-table" class="tab-content">
                <div class="api-section">
                    <h3>📋 Create Table Entry</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Entry ID:</label>
                            <input type="text" id="tableEntryId" placeholder="e.g., table_001">
                        </div>
                        <div class="form-group">
                            <label>Display Name:</label>
                            <input type="text" id="tableDisplayName" placeholder="My Table">
                        </div>
                        <div class="form-group">
                            <label>Linked Resource:</label>
                            <input type="text" id="tableLinkedResource" placeholder="//bigquery.googleapis.com/projects/...">
                        </div>
                        <div class="form-group">
                            <label>Project ID:</label>
                            <input type="text" id="tableProjectId" value="wise-program-468308-r6">
                        </div>
                        <div class="form-group">
                            <label>Catalog ID:</label>
                            <input type="text" id="tableCatalogId" value="my_catalog">
                        </div>
                    </div>
                    <button class="btn btn-success" onclick="createTableEntry()">
                        📋 Create Table
                    </button>
                </div>
            </div>

            <!-- Loading Indicator -->
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p>Processing request...</p>
            </div>

            <!-- Search and Filter -->
            <div class="search-filter">
                <input type="text" id="searchResults" placeholder="🔍 Search in results..." onkeyup="filterResults()">
            </div>

            <!-- Results Display Area -->
            <div id="responseArea">
                <div class="data-display">
                    <div class="data-card">
                        <h4>👋 Welcome to Catalog API Dashboard</h4>
                        <p>Use the tabs above to interact with your catalog API. Start by checking the service health or fetching your catalog products.</p>
                        <div class="info-grid" style="margin-top: 20px;">
                            <div class="info-item">
                                <div class="label">Available Actions</div>
                                <div class="value">4 API Endpoints</div>
                            </div>
                            <div class="info-item">
                                <div class="label">Status</div>
                                <div class="value">Ready to Connect</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Floating Action Buttons -->
    <div class="floating-actions">
        <button class="floating-btn" style="background: var(--success-color);" onclick="exportResults('json')" title="Export as JSON">📄</button>
        <button class="floating-btn" style="background: var(--info-color);" onclick="clearAllResults()" title="Clear Results">🗑️</button>
        <button class="floating-btn" style="background: var(--warning-color);" onclick="scrollToTop()" title="Scroll to Top">⬆️</button>
    </div>

    <script>
        let API_BASE_URL = 'http://localhost:3000';
        let allResults = [];
        let currentTheme = 'light';

        // Initialize on page load
        window.addEventListener('load', function() {
            const urlInput = document.getElementById('apiBaseUrl');
            urlInput.addEventListener('change', function() {
                API_BASE_URL = this.value.replace(/\/$/, '');
                checkHealth();
            });
            
            checkHealth();
            loadSavedFields();
        });

        // Theme Toggle
        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', currentTheme);
            document.querySelector('.theme-toggle').textContent = currentTheme === 'light' ? '🌙' : '☀️';
            localStorage.setItem('theme', currentTheme);
        }

        // Load saved theme
        if (localStorage.getItem('theme')) {
            currentTheme = localStorage.getItem('theme');
            document.body.setAttribute('data-theme', currentTheme);
            document.querySelector('.theme-toggle').textContent = currentTheme === 'light' ? '🌙' : '☀️';
        }

        // Tab Switching
        function switchTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabId).classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Loading States
        function showLoading() {
            document.getElementById('loading').classList.add('show');
            document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
        }

        function hideLoading() {
            document.getElementById('loading').classList.remove('show');
            document.querySelectorAll('.btn').forEach(btn => btn.disabled = false);
        }

        // Notifications
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => notification.classList.add('show'), 100);
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => document.body.removeChild(notification), 4000);
            }, 4000);
        }

        // API Request Handler
        async function makeRequest(url, options = {}) {
            showLoading();
            try {
                const response = await fetch(url, {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        ...options.headers
                    },
                    ...options
                });
                
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.message || `HTTP ${response.status}`);
                }
                
                allResults.unshift({ timestamp: new Date(), data, success: true });
                displayResponse(data);
                showNotification('Request completed successfully', 'success');
                
                return data;
            } catch (error) {
                allResults.unshift({ timestamp: new Date(), error: error.message, success: false });
                displayResponse(error.message, true);
                showNotification(`Error: ${error.message}`, 'error');
                throw error;
            } finally {
                hideLoading();
            }
        }

        // API Functions
        async function checkHealth() {
            try {
                const data = await makeRequest(`${API_BASE_URL}/health`);
                document.getElementById('serviceStatus').textContent = 'Online';
                document.getElementById('statusIndicator').className = 'status-indicator status-online';
            } catch (error) {
                document.getElementById('serviceStatus').textContent = 'Offline';
                document.getElementById('statusIndicator').className = 'status-indicator status-offline';
            }
        }

        async function getCatalogProducts() {
            const limit = document.getElementById('catalogLimit').value;
            const projectId = document.getElementById('catalogProjectId').value;
            const catalogId = document.getElementById('catalogId').value;
            const pageToken = document.getElementById('pageToken').value;

            let url = `${API_BASE_URL}/catalog/products?limit=${limit}&projectId=${projectId}&catalogId=${catalogId}`;
            if (pageToken) {
                url += `&pageToken=${pageToken}`;
            }

            await makeRequest(url);
        }

        async function getCatalogStatus() {
            const projectId = document.getElementById('statusProjectId').value;
            const catalogId = document.getElementById('statusCatalogId').value;

            const url = `${API_BASE_URL}/catalog/status?projectId=${projectId}&catalogId=${catalogId}`;
            await makeRequest(url);
        }

        // Dynamic Form Functions
        function addField() {
            const fieldName = document.getElementById('fieldName').value.trim();
            const fieldType = document.getElementById('fieldType').value;

            if (!fieldName) {
                showNotification('Please enter a field name', 'error');
                return;
            }

            const fieldsContainer = document.getElementById('dynamicFields');
            const fieldId = `field_${Date.now()}`;

            let inputElement;
            if (fieldType === 'textarea') {
                inputElement = `<textarea id="${fieldId}" placeholder="Enter ${fieldName}"></textarea>`;
            } else {
                inputElement = `<input type="${fieldType}" id="${fieldId}" placeholder="Enter ${fieldName}">`;
            }

            const fieldHTML = `
                <div class="field-item" data-field="${fieldId}">
                    <label style="min-width: 100px; font-weight: 600;">${fieldName}:</label>
                    ${inputElement}
                    <button type="button" class="remove-field" onclick="removeField('${fieldId}')" title="Remove field">×</button>
                </div>
            `;

            fieldsContainer.insertAdjacentHTML('beforeend', fieldHTML);
            
            // Clear inputs
            document.getElementById('fieldName').value = '';
            document.getElementById('fieldType').value = 'text';

            saveFields();
        }

        function removeField(fieldId) {
            const fieldElement = document.querySelector(`[data-field="${fieldId}"]`);
            if (fieldElement) {
                fieldElement.remove();
                saveFields();
            }
        }

        function clearFields() {
            document.getElementById('dynamicFields').innerHTML = '';
            document.getElementById('jsonPreview').style.display = 'none';
            saveFields();
        }

        function collectFieldData() {
            const data = {};
            const fieldItems = document.querySelectorAll('.field-item');
            
            fieldItems.forEach(item => {
                const label = item.querySelector('label').textContent.replace(':', '').trim();
                const input = item.querySelector('input, textarea');
                if (input && input.value.trim()) {
                    let value = input.value.trim();
                    // Try to parse numbers
                    if (input.type === 'number' && !isNaN(value)) {
                        value = parseFloat(value);
                    }
                    data[label.toLowerCase().replace(/\s+/g, '_')] = value;
                }
            });
            
            return data;
        }

        function previewJSON() {
            const data = collectFieldData();
            const preview = document.getElementById('jsonPreview');
            preview.textContent = JSON.stringify(data, null, 2);
            preview.style.display = preview.style.display === 'block' ? 'none' : 'block';
        }

        function saveFields() {
            const fields = [];
            document.querySelectorAll('.field-item').forEach(item => {
                const label = item.querySelector('label').textContent.replace(':', '').trim();
                const input = item.querySelector('input, textarea');
                fields.push({
                    name: label,
                    type: input.type || 'textarea',
                    value: input.value
                });
            });
            localStorage.setItem('catalogFields', JSON.stringify(fields));
        }

        function loadSavedFields() {
            const saved = localStorage.getItem('catalogFields');
            if (saved) {
                const fields = JSON.parse(saved);
                fields.forEach(field => {
                    document.getElementById('fieldName').value = field.name;
                    document.getElementById('fieldType').value = field.type;
                    addField();
                    // Set the value
                    const lastField = document.querySelector('.field-item:last-child input, .field-item:last-child textarea');
                    if (lastField) lastField.value = field.value;
                });
            }
        }

        // Display Functions
        function displayResponse(data, isError = false) {
            const responseArea = document.getElementById('responseArea');
            const timestamp = new Date().toLocaleString();
            
            if (isError) {
                const errorHtml = `
                    <div class="data-display">
                        <div class="timestamp">[${timestamp}]</div>
                        <div class="data-card">
                            <h4>❌ Request Failed</h4>
                            <p style="color: var(--error-color); font-weight: 500;">${data}</p>
                        </div>
                    </div>
                `;
                responseArea.innerHTML = errorHtml + responseArea.innerHTML;
                return;
            }

            let displayHtml = `<div class="data-display">
                <div class="timestamp">[${timestamp}]</div>`;

            if (data.success) {
                displayHtml += `<div class="data-card">
                    <h4>✅ ${data.message || 'Request Successful'}</h4>
                    <span class="status-badge status-success">Success</span>
                </div>`;

                // Display catalog results
                if (data.data && data.data.results) {
                    displayHtml += `<div class="data-card">
                        <h4>📦 Catalog Results</h4>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="label">Total Results</div>
                                <div class="value">${data.data.totalSize || 0}</div>
                            </div>`;
                    
                    if (data.data.catalogInfo) {
                        displayHtml += `
                            <div class="info-item">
                                <div class="label">Catalog ID</div>
                                <div class="value">${data.data.catalogInfo.catalogId}</div>
                            </div>
                            <div class="info-item">
                                <div class="label">Project ID</div>
                                <div class="value">${data.data.catalogInfo.projectId}</div>
                            </div>
                            <div class="info-item">
                                <div class="label">Location</div>
                                <div class="value">${data.data.catalogInfo.location}</div>
                            </div>
                            <div class="info-item">
                                <div class="label">Catalog Status</div>
                                <div class="value">
                                    <span class="status-badge ${data.data.catalogInfo.catalogExists ? 'status-success' : 'status-info'}">
                                        ${data.data.catalogInfo.catalogExists ? 'Exists' : 'Not Found'}
                                    </span>
                                </div>
                            </div>`;
                    }
                    
                    displayHtml += `</div>`;

                    // Results table
                    if (data.data.results.length > 0) {
                        displayHtml += `
                            <table class="data-table">
                                <thead>
                                    <tr>
                                        <th>Result Type</th>
                                        <th>Display Name</th>
                                        <th>Description</th>
                                        <th>Resource</th>
                                    </tr>
                                </thead>
                                <tbody>`;
                        
                        data.data.results.forEach(result => {
                            displayHtml += `
                                <tr>
                                    <td><span class="status-badge status-info">${result.searchResultType}</span></td>
                                    <td>${result.displayName || 'Not specified'}</td>
                                    <td>${result.description || 'No description'}</td>
                                    <td style="font-size: 11px; color: #6b7280; max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${result.linkedResource || 'Not specified'}</td>
                                </tr>`;
                        });
                        
                        displayHtml += `</tbody></table>`;
                    }
                    
                    displayHtml += `</div>`;
                }

                // Health check data
                else if (data.timestamp) {
                    displayHtml += `<div class="data-card">
                        <h4>🏥 Service Health</h4>
                        <div class="info-grid">
                            <div class="info-item">
                                <div class="label">Status</div>
                                <div class="value">
                                    <span class="status-badge status-success">Healthy</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="label">Response Time</div>
                                <div class="value">${new Date(data.timestamp).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>`;
                }

                // Generic data display
                else if (data.data) {
                    displayHtml += `<div class="data-card">
                        <h4>📋 Response Data</h4>
                        <div class="info-grid">`;
                    
                    Object.keys(data.data).forEach(key => {
                        const value = data.data[key];
                        displayHtml += `
                            <div class="info-item">
                                <div class="label">${key.replace(/_/g, ' ').toUpperCase()}</div>
                                <div class="value">${typeof value === 'object' ? JSON.stringify(value) : value}</div>
                            </div>`;
                    });
                    
                    displayHtml += `</div></div>`;
                }
            }

            // Export buttons
            displayHtml += `
                <div class="export-buttons">
                    <button class="btn btn-secondary" onclick="exportSingleResult(${allResults.length - 1}, 'json')">📄 Export JSON</button>
                    <button class="btn btn-secondary" onclick="copySingleResult(${allResults.length - 1})">📋 Copy Data</button>
                </div>
            `;

            // JSON toggle
            const jsonId = 'json_' + Date.now();
            displayHtml += `
                <button class="json-toggle" onclick="toggleJson('${jsonId}')">View Raw JSON</button>
                <div class="json-raw" id="${jsonId}">${JSON.stringify(data, null, 2)}</div>
            `;

            displayHtml += `</div>`;
            
            responseArea.innerHTML = displayHtml + responseArea.innerHTML;
        }

        // Utility Functions
        function toggleJson(id) {
            const jsonElement = document.getElementById(id);
            const button = jsonElement.previousElementSibling;
            
            if (jsonElement.style.display === 'none' || !jsonElement.style.display) {
                jsonElement.style.display = 'block';
                button.textContent = 'Hide Raw JSON';
            } else {
                jsonElement.style.display = 'none';
                button.textContent = 'View Raw JSON';
            }
        }

        function filterResults() {
            const searchTerm = document.getElementById('searchResults').value.toLowerCase();
            const displays = document.querySelectorAll('.data-display');
            
            displays.forEach(display => {
                const text = display.textContent.toLowerCase();
                display.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        }

        function clearAllResults() {
            document.getElementById('responseArea').innerHTML = `
                <div class="data-display">
                    <div class="data-card">
                        <h4>🗑️ Results Cleared</h4>
                        <p>All previous results have been cleared. Start making new requests to see data here.</p>
                    </div>
                </div>
            `;
            allResults = [];
        }

        function exportResults(format) {
            if (allResults.length === 0) {
                showNotification('No results to export', 'error');
                return;
            }

            const dataStr = JSON.stringify(allResults, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `catalog-api-results-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
            
            showNotification('Results exported successfully', 'success');
        }

        function exportSingleResult(index, format) {
            if (!allResults[index]) return;
            
            const result = allResults[index];
            const dataStr = JSON.stringify(result, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `result-${index}-${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
        }

        function copySingleResult(index) {
            if (!allResults[index]) return;
            
            const result = JSON.stringify(allResults[index], null, 2);
            navigator.clipboard.writeText(result).then(() => {
                showNotification('Result copied to clipboard', 'success');
            });
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

// Schema builder functions
function addSchemaColumn() {
    const columnName = document.getElementById('schemaColumnName').value.trim();
    const columnType = document.getElementById('schemaColumnType').value;
    const columnDesc = document.getElementById('schemaColumnDesc').value.trim();

    if (!columnName) {
        showNotification('Please enter a column name', 'error');
        return;
    }

    const columnsContainer = document.getElementById('schemaColumns');
    const columnId = `column_${Date.now()}`;

    const columnHTML = `
        <div class="field-item" data-column="${columnId}">
            <label style="min-width: 100px; font-weight: 600;">${columnName} (${columnType}):</label>
            <input type="text" value="${columnDesc}" placeholder="Column description" readonly>
            <button type="button" class="remove-field" onclick="removeSchemaColumn('${columnId}')" title="Remove column">×</button>
        </div>
    `;

    columnsContainer.insertAdjacentHTML('beforeend', columnHTML);
    
    // Clear inputs
    document.getElementById('schemaColumnName').value = '';
    document.getElementById('schemaColumnType').value = 'STRING';
    document.getElementById('schemaColumnDesc').value = '';
}

function removeSchemaColumn(columnId) {
    const columnElement = document.querySelector(`[data-column="${columnId}"]`);
    if (columnElement) {
        columnElement.remove();
    }
}

function clearSchemaColumns() {
    document.getElementById('schemaColumns').innerHTML = '';
    document.getElementById('entryJsonPreview').style.display = 'none';
}

function collectSchemaData() {
    const columns = [];
    const columnItems = document.querySelectorAll('#schemaColumns .field-item');
    
    columnItems.forEach(item => {
        const label = item.querySelector('label').textContent;
        const [columnName, columnType] = label.split(' (');
        const description = item.querySelector('input').value;
        
        columns.push({
            column: columnName,
            type: columnType.replace(')', ''),
            description: description || ''
        });
    });
    
    return columns.length > 0 ? { columns } : null;
}

function previewEntryJSON() {
    const entryData = {
        entryId: document.getElementById('entryId').value,
        displayName: document.getElementById('entryDisplayName').value,
        description: document.getElementById('entryDescription').value,
        type: document.getElementById('entryType').value,
        projectId: document.getElementById('entryProjectId').value,
        catalogId: document.getElementById('entryCatalogId').value
    };

    const linkedResource = document.getElementById('entryLinkedResource').value;
    if (linkedResource) {
        entryData.linkedResource = linkedResource;
    }

    const schema = collectSchemaData();
    if (schema) {
        entryData.schema = schema;
    }

    const preview = document.getElementById('entryJsonPreview');
    preview.textContent = JSON.stringify(entryData, null, 2);
    preview.style.display = preview.style.display === 'block' ? 'none' : 'block';
}

// Updated addEntryToCatalog function
async function addEntryToCatalog() {
    const entryId = document.getElementById('entryId').value;
    const displayName = document.getElementById('entryDisplayName').value;
    const description = document.getElementById('entryDescription').value;
    const type = document.getElementById('entryType').value;
    const projectId = document.getElementById('entryProjectId').value;
    const catalogId = document.getElementById('entryCatalogId').value;
    const linkedResource = document.getElementById('entryLinkedResource').value;

    if (!entryId || !displayName) {
        showNotification('Please enter Entry ID and Display Name', 'error');
        return;
    }

    const requestBody = {
        entryId,
        displayName,
        description,
        type,
        projectId,
        catalogId
    };

    if (linkedResource) {
        requestBody.linkedResource = linkedResource;
    }

    const schema = collectSchemaData();
    if (schema) {
        requestBody.schema = schema;
    }

    await makeRequest(`${API_BASE_URL}/catalog/entries`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}

// New API functions for dataset and table creation
async function createDatasetEntry() {
    const entryId = document.getElementById('datasetEntryId').value;
    const displayName = document.getElementById('datasetDisplayName').value;
    const description = document.getElementById('datasetDescription').value;
    const projectId = document.getElementById('datasetProjectId').value;
    const catalogId = document.getElementById('datasetCatalogId').value;

    if (!entryId || !displayName) {
        showNotification('Please enter Entry ID and Display Name', 'error');
        return;
    }

    const requestBody = {
        entryId,
        displayName,
        description,
        projectId,
        catalogId
    };

    await makeRequest(`${API_BASE_URL}/catalog/entries/dataset`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}

async function createTableEntry() {
    const entryId = document.getElementById('tableEntryId').value;
    const displayName = document.getElementById('tableDisplayName').value;
    const linkedResource = document.getElementById('tableLinkedResource').value;
    const projectId = document.getElementById('tableProjectId').value;
    const catalogId = document.getElementById('tableCatalogId').value;

    if (!entryId || !displayName || !linkedResource) {
        showNotification('Please enter Entry ID, Display Name, and Linked Resource', 'error');
        return;
    }

    const requestBody = {
        entryId,
        displayName,
        linkedResource,
        projectId,
        catalogId
    };

    await makeRequest(`${API_BASE_URL}/catalog/entries/table`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });
}

// Add support for project-specific catalog fetching
async function getCatalogByProject() {
    const projectId = document.getElementById('catalogProjectId').value;
    const limit = document.getElementById('catalogLimit').value;
    const catalogId = document.getElementById('catalogId').value;
    const pageToken = document.getElementById('pageToken').value;

    if (!projectId) {
        showNotification('Please enter a Project ID', 'error');
        return;
    }

    let url = `${API_BASE_URL}/catalog/products/${projectId}?limit=${limit}&catalogId=${catalogId}`;
    if (pageToken) {
        url += `&pageToken=${pageToken}`;
    }

    await makeRequest(url);
}
    </script>
</body>
</html>
