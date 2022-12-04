import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehicle } from '@models/vehicle';
import { MessagesService } from '@services/messages.service';
import { VehiclesService } from '@services/vehicles.service';
import {  Observable, of } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'hnt22-new-request-form',
  templateUrl: './new-request-form.component.html',
  styleUrls: ['./new-request-form.component.scss']
})
export class NewRequestFormComponent {
  vehicles$: Observable<Vehicle[]> = of([
    {
      vehicleId: 1,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "КАМАЗ-44108-RF Седельный тягач",
      vehicleNumber: "О557ВВ148",
      vehicleType: "Автобусы и грузопассажирские автомобили на шасси грузовых автомобилей",
      serviceType: "Обслуживание пассажироперевозящей техникой",
      vehicleTypeExt: "ГПА и автобусы на шасси грузового автомобиля г/п до 5тн.",
      vehicleChars: "до 14 п.м.",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "",
      sma: false
    },
    {
      vehicleId: 2,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "КАМАЗ-4326 НЕФАЗ-42111-10-16",
      vehicleNumber: "О329АМ148",
      vehicleType: "Автомобильный спец.транспорт для перевозки грузов",
      serviceType: "Грузовая техника",
      vehicleTypeExt: "Бортовой без КМУ (включая автопоезда с прицепом, п/прицепом)",
      vehicleChars: "14.1 - 20 т",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "",
      sma: true
    },
    {
      vehicleId: 911,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "СИН 32 на шасси КАМАЗ 43118-46 агрегат для кислотной обработки скважин",
      vehicleNumber: "А931НН148",
      vehicleType: "Автомобильный спец.транспорт, включая автопоезда",
      serviceType: "Обслуживание специализированной техникой",
      vehicleTypeExt: "Автокран",
      vehicleChars: "16.1 - 25 т",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "аренда",
      sma: false
    },
    {
      vehicleId: 931,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "УРАЛ 44202-3511-82",
      vehicleNumber: "А821ЕЕ148",
      vehicleType: "Автомобильный спец.транспорт, включая автопоезда",
      serviceType: "Обслуживание специализированной техникой",
      vehicleTypeExt: "Автомобильный кран-манипулятор (включая автопоезда)",
      vehicleChars: "7.1 - 12 т",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "аренда",
      sma: false
    },
    {
      vehicleId: 942,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "Кавз-4238-71",
      vehicleNumber: "Е653ТО82",
      vehicleType: "Автомобильный спец.транспорт для перевозки грузов",
      serviceType: "Грузовая техника",
      vehicleTypeExt: "Автоцистерны вакуумные для сбора нефтешлама и розливов нефти",
      vehicleChars: "до 10 м3",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "",
      sma: true
    },
    {
      vehicleId: 949,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "КАМАЗ-43118-50 АТЗ (7074А4-50)",
      vehicleNumber: "А560ХА148",
      vehicleType: "Самоходные машины и технологические установки на их базе",
      serviceType: "Обслуживание специализированной техникой",
      vehicleTypeExt: "Трактор колесный",
      vehicleChars: "81 - 150 л.с.",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Нет",
      ownershipType: "",
      sma: false
    },
    {
      vehicleId: 969,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "КАМАЗ-65111-50 АЦН-16 (4679А4-10)",
      vehicleNumber: "Н140ХА48",
      vehicleType: "Автобусы и грузопассажирские автомобили на шасси грузовых автомобилей",
      serviceType: "Обслуживание пассажироперевозящей техникой",
      vehicleTypeExt: "ГПА и автобусы на шасси грузового автомобиля г/п свыше 5тн.",
      vehicleChars: "до 20 п.м.",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "аренда",
      sma: false
    },
    {
      vehicleId: 972,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "LIUGONG CLG836 погрузчик",
      vehicleNumber: "ТР356070",
      vehicleType: "Автомобильный спец.транспорт, включая автопоезда",
      serviceType: "Обслуживание специализированной техникой",
      vehicleTypeExt: "Автомобильный кран-манипулятор (включая автопоезда)",
      vehicleChars: "7.1 - 12 т",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Нет",
      ownershipType: "",
      sma: true
    },
    {
      vehicleId: 975,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "MITSUBISHI L-200",
      vehicleNumber: "Р334АТ148",
      vehicleType: "Автомобильный спец.транспорт для перевозки грузов",
      serviceType: "Грузовая техника",
      vehicleTypeExt: "Тягач с низкорамным прицепом, п/прицепом (трал)",
      vehicleChars: "20.1 - 40 т",
      country: "ИМПОРТ",
      fuelType: "ДТ",
      subOrganization: "Нет",
      ownershipType: "договор купли продажи",
      sma: false
    },
    {
      vehicleId: 996,
      organization: "ООО \"НефтеСпецТранс\"",
      model: "УРАЛ 44202-3511-82",
      vehicleNumber: "Е750СК82",
      vehicleType: "Автомобильный спец.транспорт, включая автопоезда",
      serviceType: "Обслуживание специализированной техникой",
      vehicleTypeExt: "Автогидроподъемник, автовышка",
      vehicleChars: "17.1 - 30 м",
      country: "РОССИЯ",
      fuelType: "ДТ",
      subOrganization: "Да",
      ownershipType: "",
      sma: true
    }
  ]) as any as Observable<Vehicle[]>; // TODO remove mock
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  isLoading = false;
  constructor(
    private messages: MessagesService,
    private vehiclesService: VehiclesService
  ) {

    this.formGroup1 = new FormGroup({
      vehicle: new FormControl(null, { validators: [Validators.required] }),
    });

    this.formGroup2 = new FormGroup({
      organization: new FormControl({ value: null, disabled: true}),
      vehicleNumber: new FormControl({ value: null, disabled: true}),
      model: new FormControl({ value: null, disabled: true}),
      subOrganization: new FormControl({ value: null, disabled: true}),
      serviceType: new FormControl({ value: null, disabled: true}),
      sma: new FormControl({ value: null, disabled: true}),
    });

    this.formGroup3 = new FormGroup({
      vehicleType: new FormControl({ value: null, disabled: true}),
      vehicleTypeExt: new FormControl({ value: null, disabled: true}),
      vehicleChars: new FormControl({ value: null, disabled: true}),
      date: new FormControl({ value: null, disabled: true}),
      country: new FormControl({ value: null, disabled: true}),
      fuelType: new FormControl({ value: null, disabled: true}),
    });
  }

  private checkForm(fg: FormGroup): boolean {
    fg.updateValueAndValidity();
    fg.markAsTouched();

    return fg.valid;
  }

  onSubmit(): void {
    if (!this.checkForm(this.formGroup1)) {
      return;
    }

    this.isLoading = true;

    of(true)
      .pipe(delay(4000),
        tap(() => this.messages.success(`Заявление создано!`)),
        finalize(() => (this.isLoading = false))
      )
      .subscribe();
  }

  setUpForm(vehicle: Vehicle) {
    this.formGroup2.patchValue(vehicle);
    this.formGroup3.patchValue(vehicle);
  }
}
