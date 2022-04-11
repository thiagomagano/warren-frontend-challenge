export default function formatAmountToReal(amount:number): string{
        return amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}