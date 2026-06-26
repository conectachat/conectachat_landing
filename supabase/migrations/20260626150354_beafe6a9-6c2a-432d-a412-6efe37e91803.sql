ALTER TABLE public.agent_config
  ADD COLUMN IF NOT EXISTS ativo boolean NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS pausado_em timestamptz NULL,
  ADD COLUMN IF NOT EXISTS pausado_por uuid NULL;