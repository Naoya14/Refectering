function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}¥n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) { 
    volumeCredits += Math.max(pref.audience - 30, 0);
    if ('comedy' == playFor(pref).type) volumeCredits += Math.floor(pref.audience / 5);
    result += `${playFor(pref).name}: ${format(amountFor(perf) / 100)} (${
      pref.audience
    } seats)¥n`;
    totalAmount += amountFor(perf);;
  }
  result += `Amount owed is  ${format(thisAmount / 100)}¥n`;
  result += `You earned ${volumeCredits} credits¥n`;
  return result;
}

function amountFor(aperformance) {
  let result = 0;
  switch(palyFor(aperformance).type) {
    case "tragedy":
      result = 40000;
      if (aperformance.audience > 30)
      {
        result += 1000 * (aperformance.audience - 30);
      }
      break;
    case " comedy":
      result = 30000;
      if (aperformance.audience > 20)
      {
        this += 10000 + 500 * (aperformance.audience - 20);
      }
      result += 300 * aperformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${palyFor(aperformance).type}`);
  }

  return result;
}

function palyFor(aperformance) {
  return plays[aperformance.playID];
}
