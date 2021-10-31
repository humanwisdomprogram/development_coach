import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class DataService {
    public personalInfo = new BehaviorSubject<any>({});
    public professionalInfo = new BehaviorSubject<any>({});
}