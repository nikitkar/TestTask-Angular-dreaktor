import { Component, OnInit } from '@angular/core';

import { OverviewCashService } from '../OverviewCashViewModel/OverviewCashService';

import { OverviewCashIsncomeUser } from '../OverviewCashViewModel/OverviewCashUsers';
import { OverviewCashOutcomeUser } from '../OverviewCashViewModel/OverviewCashUsers';
import { OverviewCashLoanUser } from '../OverviewCashViewModel/OverviewCashUsers';
import { OverviewCashInvestmentUser } from '../OverviewCashViewModel/OverviewCashUsers';

@Component({
    selector: 'OverviewCashSelector',
    templateUrl: './OverviewCash.component.html',
    styleUrls: ['./OverviewCash.component.scss'],
    providers: [OverviewCashService],
})
export class OverviewCashComponent implements OnInit {
    data: any;

    urlParams = window.location.search;
    urlParamsDate: any;

    incomeUserType: OverviewCashIsncomeUser[] = [];
    outcomeUserType: OverviewCashOutcomeUser[] = [];
    loanUserType: OverviewCashLoanUser[] = [];
    investmentUserType: OverviewCashInvestmentUser[] = [];


    constructor(private httpService: OverviewCashService) {}

    ngOnInit() {
        this.httpService.getData().subscribe((data: any) => {
            for(let i = 0; i < data['data'].length; i++){
                switch (data['data'][i].type) {
                    case 'income':
                        this.incomeUserType.push(data['data'][i]);
                        break;

                    case 'outcome':
                        this.outcomeUserType.push(data['data'][i]);
                        break;

                    case 'loan':
                        this.loanUserType.push(data['data'][i]);
                        break;

                    case 'investment':
                        this.investmentUserType.push(data['data'][i]);
                        break;
                }
            }
        });
    }

    ngDoCheck() {
        this.urlParams = window.location.search;
        this.urlParamsDate = this.urlParams.split('?');
    }

    // new URL params = (new URL(document.location)).searchParams;
}
