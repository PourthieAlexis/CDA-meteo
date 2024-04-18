export function nowTOHHMM() {
    const d = new Date();
    return `${d.getHours()} : ${d.getMinutes().toString().padStart(2, '0')}`;
}

export function dateToDDMM(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
}

export const DAYS = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM']