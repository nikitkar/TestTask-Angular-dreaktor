import { Component, OnInit } from '@angular/core';

import { OverviewCashService } from '../OverviewCashViewModel/OverviewCashService';

@Component({
    selector: 'HomeSelector',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [OverviewCashService],
})
export class AppComponent implements OnInit {
    data: any;

    countRecordInJson: number = 0;

    countIncomeType: number = 0;
    countoutcomeUserType: number = 0;
    countloanUserType: number = 0;
    countinvestmentUserType: number = 0;

    constructor(private httpService: OverviewCashService) {}

    ngOnInit() {
        this.httpService.getData().subscribe((data: any) => {
            this.countRecordInJson = data['data'].length;

            for (let i = 0; i < data['data'].length; i++) {
                switch (data['data'][i].type) {
                    case 'income':
                        this.countIncomeType++;
                        break;

                    case 'outcome':
                        this.countoutcomeUserType++;
                        break;

                    case 'loan':
                        this.countloanUserType++;
                        break;

                    case 'investment':
                        this.countinvestmentUserType++;
                        break;
                }
            }
        });
    }

    ngDoCheck() {}
}
