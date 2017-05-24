import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';

@Component({
    moduleId: module.id,
    selector: "my-drawer",
    templateUrl: "./drawer.html",
    styleUrls: ['drawer.css']
})
export class SideDrawerGettingStartedComponent implements AfterViewInit, OnInit {
    isDrawerOpen = false;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
       
    }

    public openDrawer() {

        if(this.isDrawerOpen){
            this.drawer.closeDrawer();
            this.isDrawerOpen = false;
        }
        else{
            this.drawer.showDrawer();
            this.isDrawerOpen = true;
        }

    }
}