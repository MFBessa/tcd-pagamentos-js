# TCD - Parte Prática de JavaScript

Repositório desenvolvido para a entrega da parte prática de JavaScript do curso.

## 📝 Enunciado do Projeto
Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar pagamento. Pagamentos serão armazenados como objetos JavaScript dentro de uma lista de pagamentos. 

Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Se o pagamento for realizado e o valor for maior que 100.00, o pagamento também terá a propriedade categoria como 'cara', caso contrário, a propriedade categoria ficará como 'padrão'. O método consultar trará apenas o último pagamento.

## 🚀 Exemplo de Uso

```javascript
const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());

## 🚀 Pipeline de Integração Contínua (CI)

Este projeto agora conta com uma pipeline automatizada utilizando **GitHub Actions**.

### Conceitos Utilizados:
- **Integração Contínua (CI):** Prática de automatizar a execução de testes a cada alteração para garantir a estabilidade do código.
- **Gatilhos (Triggers) implementados:**
  - `push`: Roda automaticamente a cada commit enviado para as ramificações principais.
  - `workflow_dispatch`: Permite a execução manual da pipeline diretamente pelo painel do GitHub.
  - `schedule (cron)`: Execução agendada rotineiramente (configurada para rodar diariamente à meia-noite).
- **Artefatos:** O resultado da execução dos testes é capturado e armazenado na própria pipeline como um artefato para auditoria.
