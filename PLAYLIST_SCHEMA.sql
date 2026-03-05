-- Create playlists table
create table if not exists playlists (
  id uuid primary key default gen_random_uuid(),
  spotify_playlist_id text not null unique,
  playlist_name text not null,
  spotify_url text,
  created_at timestamptz default now()
);

-- Create join table linking playlists to songs
create table if not exists playlist_songs (
  playlist_id uuid not null references playlists(id) on delete cascade,
  song_id uuid not null references songs(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (playlist_id, song_id)
);

create index if not exists playlist_songs_song_id_idx on playlist_songs(song_id);
