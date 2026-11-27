# Home Architect

Editor arquitetônico pessoal — versão inicial. Abra index.html ou publique via GitHub Pages (Settings → Pages → Deploy from a branch → main / root).

## Funcionalidades
- Ambientes retangulares com dimensões em metros, pavimentos independentes, portas, janelas e mobiliário básico.
- Planta 2D e representação 3D ortográfica derivadas do mesmo modelo; rotação, zoom e corte de paredes próximas.
- Validação dimensional, desfazer/refazer, exportação/importação JSON e salvamento local.
- Comandos locais limitados e reconhecimento de voz quando o navegador oferece suporte.
- Referências fotográficas temporárias locais. PWA com manifest e service worker.

## Limitações
Não é BIM certificado; paredes adjacentes ainda não são consolidadas, interseções de ambientes não são bloqueadas, pavimentos são exibidos separadamente, mobiliário usa blocos simples. Sem análise IA, cloud sync, IFC, escaneamento de câmera, fotorrealismo ou desenho técnico executivo. Dados pessoais não devem ser versionados no repositório público. A instalação depende do navegador e publicação HTTPS.

## Próximas etapas
1. Testes de interação no navegador e Android, topologia de paredes compartilhadas e formas não retangulares.
2. API autenticada de interpretação multimodal com proposta de operações validadas e confirmação do usuário; chaves apenas no servidor.
3. Sincronização com banco privado e RLS, versões de projetos, referências privadas.
4. Exportação IFC, renderização por motor 3D, captura de dimensões por ARCore com confirmação manual.

Projeto conceitual, não destinado à execução de obras sem validação profissional.
