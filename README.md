# Home Architect · V2

Editor pessoal de arquitetura, em português, para celular e desktop.

## Uso
- Planta 2D: selecione ambientes, altere medidas, arraste ambientes e móveis. Cotas em metros.
- Modelo 3D: motor WebGL Three.js com iluminação, sombras, câmera orbital, zoom por toque, corte de paredes e seleção de ambientes. A primeira carga precisa de internet para baixar o Three.js; há um modo SVG simplificado de compatibilidade.
- Projeto: crie pavimentos, adicione e duplique cômodos, ou carregue a casa demonstrativa. As aberturas compartilhadas são espelhadas visualmente quando coincidem com paredes adjacentes.
- Propriedades: ajuste acabamentos, tamanho do revestimento, portas e janelas, móveis e dimensões.
- Importar com ChatGPT: copie o prompt fornecido e envie suas referências ao ChatGPT, depois importe o JSON validado. Não é uma integração automática com GPT.
- Exporte o JSON como backup ou a imagem da visualização. Dados ficam armazenados localmente.

## Publicação
GitHub Pages: Settings → Pages → Deploy from a branch → main / root. PWA com cache V2; instalação depende do navegador e publicação HTTPS.

## Verificação
JavaScript passou na verificação de sintaxe. Testes de lógica com DOM simulado: inicialização, demonstração, espelhamento de abertura, sobreposição, inclusão de ambientes, undo/redo, duplicação, novo projeto, importação, validação de revestimento e modo 3D de compatibilidade. WebGL e instalação em Android ainda precisam de teste real em navegador.

## Limitações e próximos passos
Ambientes retangulares; paredes compartilhadas ainda não são consolidadas como objetos BIM únicos; móveis são modelos procedurais simplificados; pisos são texturas esquemáticas. Sem análise automática de fotos, backend autenticado, sincronização na nuvem, IFC, escaneamento de câmera ou fotorrealismo. Não é um projeto executivo de obra. Não publique dados pessoais no repositório público.
