const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('Testes da classe ServicoDePagamento', function() {
    
    it('Deve classificar como "cara" quando o valor for maior que 100.00', function() {
        const servico = new ServicoDePagamento();
        servico.pagar('0987-7656-3475', 'Samar', 156.87);
        
        const ultimoPagamento = servico.consultarUltimoPagamento();
        
        assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.strictEqual(ultimoPagamento.empresa, 'Samar');
        assert.strictEqual(ultimoPagamento.valor, 156.87);
        assert.strictEqual(ultimoPagamento.categoria, 'cara');
    });

    it('Deve classificar como "padrão" quando o valor for menor ou igual a 100.00', function() {
        const servico = new ServicoDePagamento();
        servico.pagar('1111-2222-3333', 'Loja', 50.00);
        
        const ultimoPagamento = servico.consultarUltimoPagamento();
        
        assert.strictEqual(ultimoPagamento.categoria, 'padrão');
    });

    it('Deve retornar apenas o último pagamento da lista', function() {
        const servico = new ServicoDePagamento();
        servico.pagar('1111', 'Empresa 1', 50.00);
        servico.pagar('2222', 'Empresa 2', 150.00); // Este é o último
        
        const ultimoPagamento = servico.consultarUltimoPagamento();
        
        assert.strictEqual(ultimoPagamento.empresa, 'Empresa 2');
    });
});