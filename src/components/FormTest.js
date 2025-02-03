"use client";
import React, { useRef, useState } from "react";
import testgif from "@/assets/test-gif.gif"

function FormularioComPreview() {
  const [imagem, setImagem] = useState(null);
  const [texto, setTexto] = useState("");
  const [montagem, setMontagem] = useState(null);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const canvasRef = useRef(null); // Referência ao canvas

  // Lida com o upload da imagem
  const handleImagemChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagem(URL.createObjectURL(file));
    }
  };

  // Gera a montagem no canvas (para preview)
  const gerarPreview = () => {
    if (!imagem || !texto) return;
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
  
    img.src = imagem;
    img.onload = () => {
      const maxWidthImage = 320; // Largura máxima da imagem
      const maxWidthText = 320; // Largura máxima do texto
      const padding = 8; // Padding ao redor do texto
      const textHeight = 'auto'; // Altura do fundo do texto (ou "auto" se o texto ocupar mais linhas)
  
      let width = img.width;
      let height = img.height;
  
      // Calcula as dimensões proporcionais da imagem
      if (width > maxWidthImage) {
        const scalingFactor = maxWidthImage / width;
        width = maxWidthImage;
        height = height * scalingFactor;
      }
  
      canvas.width = width; // Define a largura do canvas
      canvas.height = height; // Define a altura do canvas
  
      // Desenha a imagem no canvas
      ctx.drawImage(img, 0, 0, width, height);
  
      // Configura o fundo do texto
      const textX = (canvas.width - maxWidthText) / 2; // Centraliza horizontalmente
      const textY = canvas.height - textHeight - padding; // Posiciona próximo ao bottom
  
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // Fundo semitransparente para o texto
      ctx.fillRect(textX, textY, maxWidthText, textHeight);
  
      // Configuração do texto
      const fontSize = 16; // Tamanho da fonte
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "white"; // Cor do texto
      ctx.textAlign = "center"; // Centraliza horizontalmente
      ctx.textBaseline = "top"; // Alinha no topo do retângulo
  
      // Quebrar o texto em múltiplas linhas
      const words = texto.split(" ");
      const lineHeight = fontSize + 4; // Altura da linha
      const lines = [];
      let line = "";
  
      words.forEach((word) => {
        const testLine = line + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidthText - 2 * padding) {
          lines.push(line.trim());
          line = word + " ";
        } else {
          line = testLine;
        }
      });
      lines.push(line.trim());
  
      // Ajusta a altura do fundo de texto para suportar várias linhas
      const dynamicHeight = lines.length * lineHeight + 2 * padding;
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)"; // Fundo semitransparente
      ctx.fillRect(textX, canvas.height - dynamicHeight - padding, maxWidthText, dynamicHeight);
  
      // Desenha cada linha no canvas
      ctx.fillStyle = "white";
      lines.forEach((line, index) => {
        ctx.fillText(
          line,
          canvas.width / 2, // Centralizado
          canvas.height - dynamicHeight + padding + index * lineHeight // Posicionamento de cada linha
        );
      });
    };
  };
  
  

  // Lida com a submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPaymentScreen(true);
  };

  // Lida com a confirmação de pagamento
  const handlePaymentConfirmation = () => {
    setPaymentConfirmed(true);
    setShowPaymentScreen(false);

    // Gera a montagem final para download
    const canvas = canvasRef.current;
    setMontagem(canvas.toDataURL());
  };

  const downloadImage = () => {
    if (!montagem) return;

    const a = document.createElement("a");
    a.href = montagem;
    a.download = "imagem_com_texto.png";
    a.click();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {!showPaymentScreen && !paymentConfirmed && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Upload de imagem:
            </label>
            <input type="file" onChange={handleImagemChange} />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Texto:</label>
            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Escreva algo..."
              className="w-full border border-gray-300 rounded-md p-2 text-black"
            />
          </div>

          {imagem && texto && (
            <div className="mb-4">
              <h4 className="text-gray-700 font-bold">Preview:</h4>
              <canvas
                ref={canvasRef}
                className="border border-gray-300 mt-2"
                style={{ maxWidth: "100%" }}
              />
              <button
                type="button"
                onClick={gerarPreview}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Atualizar Preview
              </button>
            </div>
          )}

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Enviar
          </button>
        </form>
      )}

      {showPaymentScreen && !paymentConfirmed && (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Efetue o pagamento</h3>
          <img
            src="/caminho-para-imagem-pagamento.png" // Substitua pelo caminho da imagem real
            alt="Pagamento"
            className="mx-auto"
          />
          <button
            onClick={handlePaymentConfirmation}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Confirmar Pagamento
          </button>
        </div>
      )}

      {paymentConfirmed && (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">
            Pagamento confirmado! Baixe sua imagem:
          </h3>
          {montagem && (
            <img
              src={montagem}
              alt="Montagem final"
              className="mx-auto border border-gray-300 rounded-md"
            />
          )}
          <button
            onClick={downloadImage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Baixar Imagem
          </button>
        </div>
      )}
    </div>
  );
}

export default FormularioComPreview;
