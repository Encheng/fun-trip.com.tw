// Global variables
let tabButtons;
let tabContents;
let currentTabIndex = 0;

function switchTab(index) {
    // Fade out current content
    const currentContent = tabContents[currentTabIndex];
    currentContent.style.opacity = '0';
    currentContent.style.transform = 'translateY(10px)';

    setTimeout(() => {
        // Remove active class from all tabs and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.opacity = '';
            content.style.transform = '';
        });

        // Add active class to selected tab and content
        tabButtons[index].classList.add('active');
        tabContents[index].classList.add('active');

        currentTabIndex = index;

        // Scroll tab into view
        tabButtons[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

        // Fade in new content
        setTimeout(() => {
            tabContents[index].style.opacity = '1';
            tabContents[index].style.transform = 'translateY(0)';
        }, 50);
    }, 200);
}

function initTabs() {
    tabButtons = document.querySelectorAll('.tab-btn');
    tabContents = document.querySelectorAll('.tab-content');

    // Add click handlers
    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            switchTab(index);
        });
    });

    // Navigation arrows
    document.getElementById('prevTab').addEventListener('click', () => {
        if (currentTabIndex > 0) {
            switchTab(currentTabIndex - 1);
        }
    });

    document.getElementById('nextTab').addEventListener('click', () => {
        if (currentTabIndex < tabButtons.length - 1) {
            switchTab(currentTabIndex + 1);
        }
    });
}

// Load trip data
function loadTrip() {
    renderWeatherSummary();
    renderOverview(tripData.days);
    renderDays(tripData.days);
}

function renderWeatherSummary() {
    const container = document.getElementById('weather-summary');
    if (container && tripData.weather) {
        container.innerHTML = `
            <span class="weather-item">
                <span class="weather-icon">🌤️</span>
                <span class="weather-location">仙台</span>
                <span class="weather-temp">${tripData.weather.sendai.avgTemp}</span>
            </span>
            <span class="weather-item">
                <span class="weather-icon">❄️</span>
                <span class="weather-location">山形</span>
                <span class="weather-temp">${tripData.weather.yamagata.avgTemp}</span>
            </span>
        `;
    }
}

function renderOverview(dayData) {
    const container = document.getElementById('overview-timeline');
    let html = '';

    Object.keys(dayData).forEach(day => {
        const items = dayData[day];
        if (items.length > 0) {
            html += `
                <div class="timeline-item">
                    <div class="timeline-marker">${day}</div>
                    <div class="timeline-card">
                        <div class="card-content">
                            <h3 class="card-title">第${day}天</h3>
                            <div class="card-info">
                                ${items.map(item => `<p>• ${item.title}</p>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

function renderDays(dayData) {
    Object.keys(dayData).forEach(day => {
        const container = document.getElementById(`timeline-day-${day}`);
        if (!container) return;

        const items = dayData[day];
        let html = '';
        let itemNumber = 1;

        items.forEach((item, index) => {
            // Create search query for Google Maps
            const locationQuery = encodeURIComponent(item.location || item.title);
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;

            // Check if item has detailed info
            const hasDetails = item.businessHours || item.tips || item.flightInfo;

            // Render location card
            html += `
                <div class="timeline-item">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-marker">${itemNumber}</div>
                    <div class="timeline-card" ${hasDetails ? `data-item-index="${day}-${index}"` : ''}>
                        ${item.image ? `
                            <div class="card-image" style="background-image: url('${item.image}')"></div>
                        ` : ''}
                        <div class="card-header">
                            <div class="card-content">
                                <h3 class="card-title ${hasDetails ? 'clickable' : ''}" ${hasDetails ? `onclick="showDetails(${day}, ${index})"` : ''}>${item.title}</h3>
                                ${item.details.length > 0 ? `<p class="card-duration">${item.details[0].replace(/\*\*/g, '')}</p>` : ''}
                                ${item.duration ? `<p class="stay-duration">⏱️ 停留 ${item.duration}</p>` : ''}
                            </div>
                        </div>
                        ${item.details.length > 1 ? `
                            <div class="card-info">
                                ${item.details.slice(1).map(detail => `<p>${detail.replace(/\*\*/g, '')}</p>`).join('')}
                            </div>
                        ` : ''}
                        ${item.flightInfo ? `
                            <div class="flight-info">
                                <div class="flight-badge">
                                    <span class="flight-airline">${item.flightInfo.airline}</span>
                                    <span class="flight-number">${item.flightInfo.flightNumber}</span>
                                </div>
                                <div class="flight-time">
                                    <span>起飛 ${item.flightInfo.departure}</span>
                                    <span class="flight-arrow">✈️</span>
                                    <span>抵達 ${item.flightInfo.arrival}</span>
                                </div>
                            </div>
                        ` : ''}
                        ${item.transport ? '' : `<a href="${mapsUrl}" target="_blank" class="navigation-btn" title="在 Google Maps 中開啟">🧭</a>`}
                    </div>
                </div>
            `;

            // Render transport if available
            if (item.transport && index < items.length - 1) {
                const transportIcon = getTransportIcon(item.transport);
                const nextItem = items[index + 1];

                // Build Google Maps directions URL
                const origin = encodeURIComponent(item.location || item.title);
                const destination = encodeURIComponent(nextItem.location || nextItem.title);
                const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=transit`;

                html += `
                    <div class="timeline-transport">
                        <div class="transport-icon">${transportIcon}</div>
                        <a href="${googleMapsUrl}" target="_blank" class="transport-duration" title="點擊查看 Google Maps 路線規劃">
                            ${item.transport}
                        </a>
                    </div>
                `;
            }

            itemNumber++;
        });

        container.innerHTML = html;
    });
}

function getTransportIcon(transport) {
    if (transport.includes('飛行') || transport.includes('機場')) return '✈️';
    if (transport.includes('巴士')) return '🚌';
    if (transport.includes('JR') || transport.includes('捷運')) return '🚃';
    if (transport.includes('步行')) return '🚶';
    if (transport.includes('接送') || transport.includes('接駁')) return '🚗';
    if (transport.includes('遊船') || transport.includes('船')) return '⛴️';
    return '🚗';
}

// Show details popup
function showDetails(day, index) {
    const item = tripData.days[day][index];

    let detailsHTML = `
        <div class="modal-overlay" onclick="closeDetails()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${item.title}</h2>
                    <button class="modal-close" onclick="closeDetails()">✕</button>
                </div>
                <div class="modal-body">
    `;

    // Location
    if (item.location) {
        detailsHTML += `
            <div class="detail-section">
                <h3>📍 地點</h3>
                <p>${item.location}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}"
                   target="_blank" class="maps-link">在 Google Maps 中開啟 →</a>
            </div>
        `;
    }

    // Flight Info
    if (item.flightInfo) {
        detailsHTML += `
            <div class="detail-section">
                <h3>✈️ 航班資訊</h3>
                <div class="flight-details">
                    <p><strong>航空公司：</strong>${item.flightInfo.airline}</p>
                    <p><strong>航班號碼：</strong>${item.flightInfo.flightNumber}</p>
                    ${item.flightInfo.aircraft ? `<p><strong>機型：</strong>${item.flightInfo.aircraft}</p>` : ''}
                    <p><strong>起飛時間：</strong>${item.flightInfo.departure}</p>
                    <p><strong>抵達時間：</strong>${item.flightInfo.arrival}</p>
                    <p><strong>航廈：</strong>${item.flightInfo.terminal}</p>
                </div>
            </div>
        `;
    }

    // Business Hours
    if (item.businessHours) {
        detailsHTML += `
            <div class="detail-section">
                <h3>🕐 營業時間</h3>
                <p>${item.businessHours}</p>
            </div>
        `;
    }

    // Duration
    if (item.duration) {
        detailsHTML += `
            <div class="detail-section">
                <h3>⏱️ 停留時間</h3>
                <p>${item.duration}</p>
            </div>
        `;
    }

    // Weather
    if (item.weather) {
        detailsHTML += `
            <div class="detail-section">
                <h3>🌤️ 天氣預報</h3>
                <p><strong>氣溫：</strong>${item.weather.temp}</p>
                <p><strong>天氣：</strong>${item.weather.condition}</p>
            </div>
        `;
    }

    // Tips
    if (item.tips && item.tips.length > 0) {
        detailsHTML += `
            <div class="detail-section">
                <h3>💡 注意事項</h3>
                <ul class="tips-list">
                    ${item.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Details
    if (item.details && item.details.length > 0) {
        detailsHTML += `
            <div class="detail-section">
                <h3>📝 詳細資訊</h3>
                <ul>
                    ${item.details.map(detail => `<li>${detail.replace(/\*\*/g, '')}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    detailsHTML += `
                </div>
            </div>
        </div>
    `;

    // Add to body
    document.body.insertAdjacentHTML('beforeend', detailsHTML);
    document.body.style.overflow = 'hidden';
}

function closeDetails() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Souvenir filters state
let currentLocationFilter = '全部';
let currentCategoryFilter = '全部';

// Toggle souvenirs section
function toggleSouvenirs() {
    // Check if modal already exists
    const existingModal = document.getElementById('souvenirs-modal');
    if (existingModal) {
        closeSouvenirsModal();
        return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.id = 'souvenirs-modal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => {
        if (e.target === modal) closeSouvenirsModal();
    };

    modal.innerHTML = `
        <div class="souvenirs-modal-content">
            <div class="souvenirs-modal-header">
                <div>
                    <h2>🎁 精選伴手禮推薦</h2>
                    <p>帶回最道地的仙台・山形風味</p>
                </div>
                <button onclick="closeSouvenirsModal()" class="modal-close">✕</button>
            </div>

            <div class="souvenirs-modal-body">
                <!-- Filters -->
                <div class="souvenir-filters">
                    <div class="filter-group">
                        <label class="filter-label">📍 地區</label>
                        <div id="location-filters" class="filter-buttons"></div>
                    </div>
                    <div class="filter-group">
                        <label class="filter-label">🏷️ 分類</label>
                        <div id="category-filters" class="filter-buttons"></div>
                    </div>
                </div>

                <!-- Stats -->
                <div id="souvenir-stats" class="souvenir-stats"></div>

                <!-- Grid -->
                <div id="souvenirs-grid" class="souvenirs-grid"></div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Initialize filters and render
    setTimeout(() => {
        initSouvenirFilters();
        renderSouvenirs();
    }, 100);
}

function closeSouvenirsModal() {
    const modal = document.getElementById('souvenirs-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function initSouvenirFilters() {
    const locationFilters = document.getElementById('location-filters');
    const categoryFilters = document.getElementById('category-filters');

    // Render location filters
    tripData.souvenirs.locations.forEach(location => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (location === '全部' ? ' active' : '');
        btn.textContent = location;
        btn.onclick = () => filterByLocation(location);
        locationFilters.appendChild(btn);
    });

    // Render category filters
    tripData.souvenirs.categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (category === '全部' ? ' active' : '');
        btn.textContent = category;
        btn.onclick = () => filterByCategory(category);
        categoryFilters.appendChild(btn);
    });
}

function filterByLocation(location) {
    currentLocationFilter = location;
    updateFilterButtons('location-filters', location);
    renderSouvenirs();
}

function filterByCategory(category) {
    currentCategoryFilter = category;
    updateFilterButtons('category-filters', category);
    renderSouvenirs();
}

function updateFilterButtons(containerId, activeValue) {
    const container = document.getElementById(containerId);
    Array.from(container.children).forEach(btn => {
        if (btn.textContent === activeValue) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function getFilteredSouvenirs() {
    return tripData.souvenirs.items.filter(item => {
        const matchesLocation = currentLocationFilter === '全部' || item.location === currentLocationFilter;
        const matchesCategory = currentCategoryFilter === '全部' || item.category === currentCategoryFilter;
        return matchesLocation && matchesCategory;
    });
}

function renderSouvenirs() {
    const grid = document.getElementById('souvenirs-grid');
    const statsEl = document.getElementById('souvenir-stats');
    const filtered = getFilteredSouvenirs();

    // Clear grid
    grid.innerHTML = '';

    // Update stats
    statsEl.textContent = `顯示 ${filtered.length} 項伴手禮${currentLocationFilter !== '全部' ? ` • ${currentLocationFilter}` : ''}${currentCategoryFilter !== '全部' ? ` • ${currentCategoryFilter}` : ''}`;

    // Render cards
    filtered.forEach((souvenir, index) => {
        const card = document.createElement('div');
        card.className = 'souvenir-card';
        card.style.animationDelay = `${index * 0.05}s`;

        const stars = '⭐'.repeat(souvenir.rating);
        const searchQuery = encodeURIComponent(`${souvenir.name} ${souvenir.location} 伴手禮`);
        const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;

        card.innerHTML = `
            <div class="souvenir-card-header">
                <a href="${googleSearchUrl}" target="_blank" class="souvenir-name" title="點擊 Google 搜尋">${souvenir.name}</a>
                <div class="souvenir-name-en">${souvenir.nameEn}</div>
                <div class="souvenir-rating">${stars}</div>
            </div>

            <p class="souvenir-description">${souvenir.description}</p>

            <div class="souvenir-info">
                <div class="souvenir-info-item">
                    <span class="souvenir-info-label">💰 價格</span>
                    <span class="souvenir-info-value">${souvenir.price}</span>
                </div>
                <div class="souvenir-info-item">
                    <span class="souvenir-info-label">🏪 店家</span>
                    <span class="souvenir-info-value">${souvenir.shop}</span>
                </div>
                <div class="souvenir-info-item">
                    <span class="souvenir-info-label">📍 地點</span>
                    <span class="souvenir-info-value">${souvenir.where}</span>
                </div>
                <div class="souvenir-info-item">
                    <span class="souvenir-info-label">🎯 適合</span>
                    <span class="souvenir-info-value">${souvenir.bestFor}</span>
                </div>
            </div>

            <div class="souvenir-tips">
                <div class="souvenir-tips-title">💡 小提醒</div>
                <ul class="souvenir-tips-list">
                    ${souvenir.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Load trip data on page load
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadTrip();
});

// Add keyboard support for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetails();
        closeSouvenirsModal();
    }
});
