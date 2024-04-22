import { writable } from 'svelte/store';

// Crea un store writable para almacenar el userId
export const userIdStore = writable(null);