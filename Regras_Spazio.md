# Design System: Spazio Beauty

## Paleta de Cores

### Light Mode (Elegância e Respiro)
- **Off-White (Fundo Principal / Textos Claros):** `#EBE8E1`
- **Verde Escuro (Marca / Fundo de Destaque / Textos Escuros):** `#445D48`

### Dark Mode (Luxo e Profundidade)
- **Fundo Sólido (Profundo):** `#0C0C0C`
- **Superfícies (Elevação Leve):** `#111111`
- **Latão Escovado (Acentos / Botões / Bordas):** `#8E794D`

## Regras de Respiro (Spacing & Padding)

1. **Margens Internas (Paddings Globais):**
   - NUNCA permitir que o texto encoste na borda da tela do celular.
   - Forçar obrigatoriamente `px-6` (padding horizontal de 24px) globalmente em todas as tags `<section>`.
   - Seções devem ter um respiro vertical generoso: `py-24` (desktop) e `py-16` (mobile), ou via inline style `paddingTop: '100px', paddingBottom: '100px'`.

2. **Gaps de Segurança (Anticompressão):**
   - Ao usar flexbox, sempre aplique gaps significativos (ex: `gap-8`, `gap-12` ou `gap-16`) para evitar que elementos "se toquem" ou fiquem amontoados.
   
3. **Comportamento Responsivo (Mobile-First):**
   - **Textos e Containers:** A regra de ouro é empilhar colunas no celular (`flex-col`) e expandir no desktop (`md:flex-row`).
   - **Imagens:** Devem utilizar `w-full h-auto` com `object-cover` para jamais serem distorcidas ("estiradas" ou "espremidas").

## Trava de Overflow
- Todo elemento raiz (`body`, `#root` ou container principal) deve portar as diretrizes de travamento contra rolagem horizontal acidental: `overflow-x-hidden` e `max-w-[100vw]`.

## Princípios de UI/UX
- **Contraste:** Garantir a perfeita legibilidade invertendo inteligentemente as cores (`#EBE8E1` sobre `#445D48` ou vice-versa).
- **Sem Redundância:** Evitar botões e links que façam a mesma coisa na mesma tela (ex: ter um link "Agendar" e um botão "Agendar" colados).
- **Hierarquia Visual:** Usar tipografia Serif (Fraunces/Playfair) para Títulos, e Sans-serif (Onest/Inter) para textos longos e UI elements.
