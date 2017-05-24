import { Component } from "@angular/core";
import { SearchBar } from "ui/search-bar";

@Component({
    selector: "search-bar",
    moduleId: module.id,
    templateUrl: "./searchbar.html"
})
export class SearchBarComponent {
    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }
}