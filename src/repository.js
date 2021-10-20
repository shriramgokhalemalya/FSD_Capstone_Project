

export function isAuthenticated() {
    return localStorage.getItem('username');
}

export function isAdmin() {
    return localStorage.getItem('admin');
}