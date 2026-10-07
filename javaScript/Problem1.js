const transactions = [
    { id: 1, user: "Alice", type: "credit", amount: 500 },
    { id: 2, user: "Bob", type: "debit", amount: 200 },
    { id: 3, user: "Alice", type: "debit", amount: 100 },
    { id: 4, user: "Charlie", type: "credit", amount: 1000 },
    { id: 5, user: "Bob", type: "credit", amount: 700 },
    { id: 6, user: "Alice", type: "credit", amount: 300 },
    { id: 7, user: "Charlie", type: "debit", amount: 400 },
    { id: 8, user: "Bob", type: "debit", amount: 150 },
];

// {
//   Alice: {
//     totalCredit: 800,
//     totalDebit: 100,
//     balance: 700
//   },

//   Bob: {
//     totalCredit: 700,
//     totalDebit: 350,
//     balance: 350
//   },


function analyzeTransactions(transactions) {
    const result = transactions.reduce((acc, curr) => {
        if (!acc[curr.user]) {

            acc[curr.user] = {
                totalCredit: 0,
                totalDebit: 0,
                balance: 0
            }
        }
        if (curr.type === 'credit') {
            console.log(acc[curr.type]);

            acc[curr.user].totalCredit += curr.amount
            acc[curr.user].balance += curr.amount
        } else if (curr.type === 'debit') {
            acc[curr.user].totalDebit += curr.amount
            acc[curr.user].balance -= curr.amount
        }
        return acc

    }, {})
    return result
}
console.log(analyzeTransactions(transactions));
const summary = analyzeTransactions(transactions)
getTopUsers(summary)

function getTopUsers(transactionSummary) {
    const summaryArray = Object.entries(transactionSummary)
    console.log(summaryArray);
    const res = summaryArray.map(([userName, summary]) => {
        return {
            user: userName,
            summary: summary.balance
        }
    }).sort((a, b) => {
        return b.summary - a.summary;
    })
    console.log(res);

}