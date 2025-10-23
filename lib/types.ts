export type StatLine = {
  date: string;
  opponent: string;
  pts: number;
  reb: number;
  ast: number;
  stl?: number;
  blk?: number;
  tov?: number;
  min?: string;
  fg_pct?: number;
  fg3_pct?: number;
  ft_pct?: number;
};

export type Game = {
  id: number;
  date: string;
  home_team: string;
  home_team_score?: number;
  visitor_team: string;
  visitor_team_score?: number;
  status: string;
  season?: number;
};

export type RollingAverages = {
  last5: {
    pts: number;
    reb: number;
    ast: number;
  };
  season: {
    pts: number;
    reb: number;
    ast: number;
  };
};

export type Leader = {
  id: string;
  name: string;
  points: number;
  lastSeen: string;
};

export type GoatVote = {
  score: number;
  ts: number;
};

export type HistoricalMoment = {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "Heroic" | "Petty" | "Fatherly" | "Philanthropic";
  imageUrl?: string;
};

export type LeFact = {
  id: string;
  fact: string;
};

export type Quote = {
  id: string;
  text: string;
  author: string;
  context?: string;
};

export type PetitionEntry = {
  id: string;
  name: string;
  reason: string;
  timestamp: number;
};

export type ComparisonStat = {
  category: string;
  lebron: string | number;
  jordan: string | number;
  winner?: "lebron" | "jordan" | "tie";
};
