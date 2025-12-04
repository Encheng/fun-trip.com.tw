// Global variables
let tabButtons;
let tabContents;
let currentTabIndex = 0;

function switchTab(index) {
    // Remove active class from all tabs and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to selected tab and content
    tabButtons[index].classList.add('active');
    tabContents[index].classList.add('active');

    currentTabIndex = index;

    // Scroll tab into view
    tabButtons[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
    renderOverview(tripData.days);
    renderDays(tripData.days);
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

            // Render location card
            html += `
                <div class="timeline-item">
                    <div class="timeline-time">${item.time}</div>
                    <div class="timeline-marker">${itemNumber}</div>
                    <div class="timeline-card">
                        <div class="card-header">
                            <div class="card-image"></div>
                            <div class="card-content">
                                <h3 class="card-title">${item.title}</h3>
                                ${item.details.length > 0 ? `<p class="card-duration">${item.details[0].replace('**', '').replace('**', '')}</p>` : ''}
                            </div>
                            <button class="card-menu">⋯</button>
                        </div>
                        ${item.details.length > 1 ? `
                            <div class="card-info">
                                ${item.details.slice(1).map(detail => `<p>${detail.replace(/\*\*/g, '')}</p>`).join('')}
                            </div>
                        ` : ''}
                        ${item.transport ? '' : `<a href="${mapsUrl}" target="_blank" class="navigation-btn" title="在 Google Maps 中開啟">🧭</a>`}
                    </div>
                </div>
            `;

            // Render transport if available
            if (item.transport && index < items.length - 1) {
                const transportIcon = getTransportIcon(item.transport);
                html += `
                    <div class="timeline-transport">
                        <div class="transport-icon">${transportIcon}</div>
                        <span class="transport-duration">${item.transport}</span>
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
    return '🚗';
}

// Load trip data on page load
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    loadTrip();
});
