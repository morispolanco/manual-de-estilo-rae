// WARNING: This is a mock database service for demonstration purposes only.
// Storing sensitive information like passwords in localStorage is INSECURE.
// In a real-world application, this should be replaced with a secure backend server and database.

import type { UserProgress } from '../types';

interface Database {
    users: Record<string, string>; // username: password
    progress: Record<string, UserProgress>;
}

const DB_KEY = 'panhispanicoDB';

const getDB = (): Database => {
    try {
        const dbString = localStorage.getItem(DB_KEY);
        if (dbString) {
            return JSON.parse(dbString);
        }
    } catch (error) {
        console.error("Failed to parse DB from localStorage", error);
    }
    // Default DB if nothing is found or parsing fails
    return { users: {}, progress: {} };
};

const saveDB = (db: Database) => {
    try {
        localStorage.setItem(DB_KEY, JSON.stringify(db));
    } catch (error) {
        console.error("Failed to save DB to localStorage", error);
    }
};

const initializeDB = () => {
    const db = getDB();
    if (!db.users.admin) {
        console.log("Initializing DB with default admin user...");
        db.users.admin = 'admin123'; // In a real app, this would be a securely hashed password.
        db.progress.admin = {};
        saveDB(db);
    }
};

// Initialize on load
initializeDB();


export const db = {
    async login(username: string, password_attempt: string): Promise<{ username: string } | null> {
        const { users } = getDB();
        if (users[username] && users[username] === password_attempt) {
            return { username };
        }
        return null;
    },

    async addUser(username: string, password_plaintext: string): Promise<boolean> {
        if (!username || !password_plaintext) return false;
        const db = getDB();
        if (db.users[username]) {
            return false; // User already exists
        }
        db.users[username] = password_plaintext;
        db.progress[username] = {};
        saveDB(db);
        return true;
    },
    
    async getUsers(): Promise<string[]> {
        const { users } = getDB();
        return Object.keys(users);
    },

    async getProgress(username: string): Promise<UserProgress> {
        const { progress } = getDB();
        return progress[username] || {};
    },

    async saveProgress(username: string, userProgress: UserProgress): Promise<void> {
        const db = getDB();
        db.progress[username] = userProgress;
        saveDB(db);
    }
};
