import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EMPTY, Observable, catchError, of } from 'rxjs';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError(
        (e) => {
          this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`)
          return of(this.cvService.getFakeCvs());
        }
      )
    );
    /* this.cvService.getCvs().subscribe(
      {
        next: (cvs) => {this.cvs = cvs;},
        error: () => {
          this.cvs = this.cvService.getFakeCvs();
          this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`)
        }
      }
    ); */
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
}
