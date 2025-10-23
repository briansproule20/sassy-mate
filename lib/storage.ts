// Simple file-based storage for petitions
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

const STORAGE_DIR = join(process.cwd(), '.data');
const PETITIONS_FILE = join(STORAGE_DIR, 'petitions.json');
const LEADERBOARD_FILE = join(STORAGE_DIR, 'leaderboard.json');

// Ensure storage directory exists
async function ensureStorageDir() {
  try {
    await mkdir(STORAGE_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

// Read petitions from file
export async function getPetitions() {
  try {
    await ensureStorageDir();
    const data = await readFile(PETITIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Save petitions to file
export async function savePetitions(petitions: any[]) {
  try {
    await ensureStorageDir();
    await writeFile(PETITIONS_FILE, JSON.stringify(petitions, null, 2));
    return true;
  } catch (error) {
    console.error('Failed to save petitions:', error);
    return false;
  }
}

// Add new petition
export async function addPetition(petition: any) {
  try {
    const petitions = await getPetitions();
    const newPetition = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      ...petition
    };
    
    petitions.unshift(newPetition); // Add to beginning
    
    // Keep only last 1000 petitions to prevent file from getting too large
    if (petitions.length > 1000) {
      petitions.splice(1000);
    }
    
    await savePetitions(petitions);
    return newPetition;
  } catch (error) {
    console.error('Failed to add petition:', error);
    return null;
  }
}

// Read leaderboard from file
export async function getLeaderboard() {
  try {
    await ensureStorageDir();
    const data = await readFile(LEADERBOARD_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Save leaderboard to file
export async function saveLeaderboard(leaderboard: any) {
  try {
    await ensureStorageDir();
    await writeFile(LEADERBOARD_FILE, JSON.stringify(leaderboard, null, 2));
    return true;
  } catch (error) {
    console.error('Failed to save leaderboard:', error);
    return false;
  }
}

// Update leaderboard points
export async function updateLeaderboardPoints(name: string, points: number = 10) {
  try {
    const leaderboard = await getLeaderboard();
    leaderboard[name] = (leaderboard[name] || 0) + points;
    await saveLeaderboard(leaderboard);
    return true;
  } catch (error) {
    console.error('Failed to update leaderboard:', error);
    return false;
  }
}

// Get sorted leaderboard
export async function getSortedLeaderboard() {
  try {
    const leaderboard = await getLeaderboard();
    return Object.entries(leaderboard)
      .map(([name, points]) => ({ name, points: points as number }))
      .sort((a, b) => b.points - a.points);
  } catch (error) {
    console.error('Failed to get sorted leaderboard:', error);
    return [];
  }
}
