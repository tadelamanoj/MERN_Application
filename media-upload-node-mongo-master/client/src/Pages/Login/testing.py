from collections import defaultdict

def calculate_interest(principal, interest_rate, weeks):
    return principal * (1 + interest_rate)**weeks

def settle_expense(expense, balances):
    paid_by, amount, *participants = expense.split('/')
    amount = int(amount)
    split_amount = amount / len(participants)
    
    for person in participants:
        balances[paid_by][person] += split_amount
        balances[person][paid_by] -= split_amount

def settle_loan(transaction, balances, loan_tracker):
    lender, borrower, transaction_type, amount = transaction.split('/')
    
    if transaction_type == 'L':
        # Loan transaction
        amount = int(amount[1:])  # Removing the 'L' prefix
        loan_tracker[lender][borrower] += amount
    else:
        # Loan repayment transaction
        amount = int(amount)
        loan_amount = loan_tracker[borrower][lender]
        total_amount_due = calculate_interest(loan_amount, 0.12, 1) + loan_amount
        
        if amount >= total_amount_due:
            balances[borrower][lender] -= loan_amount
            balances[lender][borrower] += loan_amount
            loan_tracker[borrower][lender] = 0
        else:
            # Update the loan amount for future transactions
            loan_tracker[borrower][lender] -= amount

def reconcile_balances(balances):
    transactions = []
    for payer in sorted(balances.keys()):
        for recipient in sorted(balances[payer].keys()):
            amount = balances[payer][recipient]
            if amount != 0:
                transactions.append(f"{payer}/{recipient}/{amount:.0f}")
    return transactions if transactions else ["NO DUES."]

def main():
    N = int(input())
    expenses_and_transactions = [input().strip() for _ in range(N)]
    
    balances = defaultdict(lambda: defaultdict(float))
    loan_tracker = defaultdict(lambda: defaultdict(int))
    
    for item in expenses_and_transactions:
        if '/' in item:
            # It's an expense or loan transaction
            if 'L' in item:
                settle_loan(item, balances, loan_tracker)
            else:
                settle_expense(item, balances)
    
    result = reconcile_balances(balances)
    for transaction in result:
        print(transaction)

if __name__ == "__main__":
    main()
