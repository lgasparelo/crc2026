# crc2026
Site do XI Congresso Rondoniense de Cardiologia (CRC 2026), SOCERON

## Estrutura

- `index.html` — página inicial (hub): faixa "Agora / A seguir", links para as programações, instalação na tela inicial, orientações, mensagens, patrocinadores, links e local. É o destino dos QR Codes.
- `grade/index.html` — grade científica resumida (por dia e sala).
- `card/index.html` — gerador do card "Eu vou ao Congresso Rondoniense de Cardiologia": foto (zoom/girar/mover), nome, fundo de Rondônia (`assets/bg/`), Stories 1080×1920 ou Feed 1080×1350, baixar/compartilhar e legenda para copiar. Aceita `?nome=` na URL.
- `atualizacao/index.html` — página da campanha de atualização cadastral da SBC: link do formulário em destaque e, abaixo, a importância da atualização. O link "Atualização cadastral" da página inicial aponta para ela.
- `assets/grade.js` — **dados da grade**. Edite só aqui; a página inicial e a grade leem este arquivo.
- `manifest.json` + `sw.js` + `assets/icon-*.png` — fazem o site funcionar como aplicativo ("Adicionar à tela inicial").
- `assets/QR_CRC2026_cartazes.pdf` — cartaz A4 e cartões de mesa com o QR Code (`assets/qr-crc2026.png`) apontando para https://lgasparelo.github.io/crc2026/.
