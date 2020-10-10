import { Component, OnInit } from '@angular/core';
import { OpenNotifyService } from '../services/open-notify.service';
import { UiService } from '../services/ui.service';
import { PeopleInS, PeopleInSpace } from '../dto/people-in-space';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.less'],
})
export class PeopleInSpaceComponent implements OnInit {
  peopleInspace: PeopleInSpace;
  filterefPeopleInSpace: PeopleInS[] = [];
  // Reactive form
  searchForm = new FormGroup({
    query: new FormControl('', [PeopleInSpaceComponent.onlyLettersValidator()]),
  });
  // Template driven form
  query: String = '';

  constructor(
    private openNotifyService: OpenNotifyService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.uiService.isLoading.next(true);
    this.openNotifyService.getPeopleInSpace().subscribe(
      (peopleInspace) => {
        this.peopleInspace = peopleInspace;
        this.filterefPeopleInSpace = peopleInspace.people;
        this.uiService.isLoading.next(false);
      },
      (error) => console.log('error "in" subscribe', error)
    );
  }

  onSubmit() {
    const queryControl = this.searchForm.get('query');
    const searchQuery: String = queryControl.value;
    this.filterPeopleInSpace(searchQuery);
    queryControl.setValue('');
  }

  onSubmitTemaplteDriven() {
    this.filterPeopleInSpace(this.query);
    this.query = '';
  }

  private filterPeopleInSpace(searchQuery: String) {
    this.filterefPeopleInSpace = this.peopleInspace.people.filter(
      (humanInSpace) =>
        humanInSpace.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  private static onlyLettersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const correct =
        /^[a-zA-Z]+$/i.test(control.value) || control.value === '';
      return !correct ? { incorrectQuery: { value: control.value } } : null;
    };
  }
}
