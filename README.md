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