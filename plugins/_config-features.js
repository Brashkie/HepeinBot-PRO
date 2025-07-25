// config-features.js

if (!global.db) global.db = {};
if (!global.db.data) global.db.data = {};

// Función para asegurar config por grupo
export function getSettings(groupId) {
    if (!global.db.data.settings[groupId]) {
        global.db.data.settings[groupId] = {
            antilink: false,
            antiviewonce: false,
            antispam: false,
            // puedes agregar más
        };
    }
    return global.db.data.settings[groupId];
}
