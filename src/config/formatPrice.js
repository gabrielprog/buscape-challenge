export default function formatPrice(number) {
    const formatted = Number(number).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    return formatted
}