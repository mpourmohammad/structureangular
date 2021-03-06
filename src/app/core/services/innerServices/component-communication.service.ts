import { Injectable } from '@angular/core';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { Notify } from '../../models/public/Notify';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  private ReSourcePostUserActionGetter = new BehaviorSubject<boolean>(null);
  postUserActionGetter$ = this.ReSourcePostUserActionGetter.asObservable();

  private ReSourcePostRoleActionGetter = new BehaviorSubject<boolean>(null);
  postRoleActionGetter$ = this.ReSourcePostRoleActionGetter.asObservable();

  private ReSourcePostGroupActionGetter = new BehaviorSubject<boolean>(null);
  postGroupActionGetter$ = this.ReSourcePostGroupActionGetter.asObservable();

  private ReSourcePostTerminalActionGetter = new BehaviorSubject<boolean>(null);
  postTerminalActionGetter$ = this.ReSourcePostTerminalActionGetter.asObservable();

  private ReSourceNotifyActionGetter = new BehaviorSubject<Notify>(null);
  notifyActionGetter$ = this.ReSourceNotifyActionGetter.asObservable();

  private ReSourceDialogActionGetter = new BehaviorSubject<ConfirmDialog>(null);
  DialogActionGetter$ = this.ReSourceDialogActionGetter.asObservable();




  postAction(newMsg: any): void {
    this.ReSourcePostUserActionGetter.next(newMsg);
  }

  roleAction(newMsg: any): void {
    this.ReSourcePostRoleActionGetter.next(newMsg);
  }

  groupAction(newMsg: any): void {
    this.ReSourcePostGroupActionGetter.next(newMsg);
  }

  terminalAction(newMsg: any): void {
    this.ReSourcePostTerminalActionGetter.next(newMsg);
  }

  notifyAction(newNotification: Notify): void {
    this.ReSourceNotifyActionGetter.next(newNotification);
  }

  DialogAction(newDialog: ConfirmDialog): void {
    this.ReSourceDialogActionGetter.next(newDialog);
    // return;
  }



  ResulteDialog(paramDialg): Observable<any> {
    return paramDialg;
  }

  private ReSourceDialogActionBoolean = new BehaviorSubject<ConfirmDialog>(null);
  DialogActionBoolean$ = this.ReSourceDialogActionBoolean.asObservable();
}
