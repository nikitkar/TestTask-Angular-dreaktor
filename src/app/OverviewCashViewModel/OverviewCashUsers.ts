export class OverviewCashIsncomeUser {
    constructor(public name: OverviewCashUserName, public amount: number, public type: string) {}
}

export class OverviewCashOutcomeUser {
    constructor(public name: OverviewCashUserName, public amount: number, public type: string) {}
}

export class OverviewCashLoanUser {
    constructor(public name: OverviewCashUserName, public amount: number, public type: string) {}
}

export class OverviewCashInvestmentUser {
    constructor(public name: OverviewCashUserName, public amount: number, public type: string) {}
}

export class OverviewCashUserName {
    constructor(public first: string, public last: string) {}
}
