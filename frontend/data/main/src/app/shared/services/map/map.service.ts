import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private EKVL = 40076 / 360;
  // private readonly PI = 3.14159265359;

  constructor() { }


  public geoDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const theta = lon1 - lon2;
    let dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));
    dist = this.rad2deg(Math.acos(dist));

    return dist * this.EKVL;
  }


  public deg2rad(deg: number): number {
    return deg * Math.PI / 180;
  }


  public rad2deg(rad: number): number {
    return rad * 180 / Math.PI;
  }
}
