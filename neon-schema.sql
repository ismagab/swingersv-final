-- Ejecutar esto en el SQL Editor de Neon (o vía psql) una sola vez,
-- al crear el proyecto.

create extension if not exists pgcrypto;

-- ── Eventos ───────────────────────────────────────────────
create table if not exists events (
  slug text primary key,
  title text not null,
  date_label text not null,
  iso_date date not null,
  time_label text,
  location text,
  spots text,
  tag text,
  highlight boolean default false,
  image text,
  cta_type text not null default 'form',      -- 'form' | 'whatsapp'
  whatsapp_text text,
  active boolean default true,
  sort_order int not null default 0
);

insert into events (slug, title, date_label, iso_date, time_label, location, spots, tag, highlight, image, cta_type, whatsapp_text, active, sort_order)
values
  (
    'xxxtreme-julio-2026',
    'XXXtreme: ¿Te atreves a jugar?',
    'Sábado 18 de julio, 2026',
    '2026-07-18',
    '6:00 PM',
    'San Salvador',
    'Cover $25 — Cupo limitado',
    'Próximo evento',
    true,
    'xxxtreme-julio-2026.jpg',
    'whatsapp',
    'Hola, quiero información sobre la fiesta XXXtreme del 18 de julio 2026 en San Salvador.',
    true,
    1
  ),
  (
    'survivor-juegos-prohibidos-agosto-2026',
    'Survivor: Juegos Prohibidos',
    'Sábado 22 de agosto, 2026',
    '2026-08-22',
    'Pronto más información',
    'San Diego, La Libertad',
    'Validación requerida',
    'Próximamente',
    false,
    'survivor-juegos-prohibidos-agosto-2026.png',
    'form',
    null,
    true,
    2
  ),
  (
    'patrio-septiembre-2026',
    'Pa''Trio — Elección de Rey y Reina SwingerSV 2026',
    'Sábado 19 de septiembre, 2026',
    '2026-09-19',
    'Pronto más información',
    'San Salvador',
    'Validación requerida',
    'Próximamente',
    false,
    'patrio-septiembre-2026.png',
    'form',
    null,
    true,
    3
  )
on conflict (slug) do nothing;

-- ── Reyes ─────────────────────────────────────────────────
create table if not exists kings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  image text,
  elected_date text,
  reign_until text,
  description text,
  sort_order int not null default 0
);

insert into kings (name, image, elected_date, reign_until, description, sort_order)
select * from (values
  ('Esposos Rodríguez', '/images/king1.jpg', 'Septiembre 2025', 'Septiembre 2026', 'Reconocidos por su carisma y respeto, muy queridos en la comunidad.', 4),
  ('Esposos Axel y Gaby', '/images/king2.jpg', 'Mayo 2024', 'Septiembre 2025', 'Embajadores del respeto y la confianza en cada evento.', 3),
  ('Esposos R y K', '/images/king3.jpg', 'Mayo 2023', 'Mayo 2024', 'Pioneros en fortalecer los lazos de la comunidad SwingerSV.', 2),
  ('Esposos SanSan', '/images/king4.jpg', 'Abril 2022', 'Mayo 2023', 'Su energía y entusiasmo marcaron un antes y un después.', 1)
) as v(name, image, elected_date, reign_until, description, sort_order)
where not exists (select 1 from kings);
